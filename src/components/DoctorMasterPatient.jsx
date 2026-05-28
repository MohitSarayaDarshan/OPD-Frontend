import React, { useState, useEffect, useContext } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { useAuth } from '../contexts/UseAuth';
import { CheckCircle, User, Stethoscope, Calendar } from 'lucide-react';

const DoctorMasterPatient = () => {
    const { expanded } = useContext(SidebarContext);
    const { user } = useAuth();

    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [patientData, setPatientData] = useState(null);
    const [liveDoctorTokens, setLiveDoctorTokens] = useState({});
    const [activeTab, setActiveTab] = useState('book');
    const [selectedDates, setSelectedDates] = useState({});

    const getMinDateTimeLocal = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 15);
        const tzOffset = now.getTimezoneOffset() * 60000;
        return new Date(now - tzOffset).toISOString().slice(0, 16);
    };

    const handleDateChange = (doctorId, value) => {
        setSelectedDates((prev) => ({ ...prev, [doctorId]: value }));
    };

    // 1. Fetch baseline doctors list
    useEffect(() => {
        fetch("/api/doctors", { credentials: 'include' })
            .then((r) => r.json())
            .then(setDoctors)
            .catch(() => setDoctors([]));
    }, []);

    // 2. Fetch Patient Core Data & Appointments (No Socket Initializations!)
    useEffect(() => {
        if (!user?.Email) return;

        let isMounted = true;

        fetch("/api/patients/email", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
        .then((r) => r.json())
        .then((json) => {
            if (!isMounted) return;
            const data = Array.isArray(json) ? json[0] : json;
            setPatientData(data);

            if (!data?.PatientID) return;

            return fetch(`/api/appointments/patient/${data.PatientID}`, { credentials: "include" })
                .then((r) => r.json())
                .then((appointmentsData) => {
                    if (!isMounted) return;
                    setAppointments(Array.isArray(appointmentsData) ? appointmentsData : []);
                });
        })
        .catch((err) => console.error("Patient details fetch failure:", err));

        return () => {
            isMounted = false;
        };
    }, [user]);

    

    // 3. ✅ THE ACTIVE STREAMS SSE INITIALIZATION
    useEffect(() => {
        if (!appointments.length) return;

        const activeStreams = [];
        const uniqueDoctorIDs = [...new Set(appointments.map(ap => ap.DoctorID))];

        uniqueDoctorIDs.forEach(docId => {
            // Establishes a native, persistent HTTP stream to your backend controller route
            const source = new EventSource(`http://localhost:3000/api/appointments/stream/doctor/${docId}`, {
                withCredentials: true
            });

            source.onmessage = (event) => {
                const payload = JSON.parse(event.data);
                
                // Keep-alive pings won't contain a DoctorID field, ignore them safely
                if (!payload.DoctorID) return; 

                // Dynamic point-lookup map storage updates
                setLiveDoctorTokens(prev => ({
                    ...prev,
                    [payload.DoctorID]: payload.CurrentLiveToken
                }));

                // Update phase variables across the master appointments array layout context
                setAppointments(prev => prev.map(ap => {
        if (ap.DoctorID !== payload.DoctorID) return ap;

        // If explicitly flagged completed by the backend payload, clear immediately
        if (payload.LastCompletedToken && ap.TokenNumber === payload.LastCompletedToken) {
            return { ...ap, ConsultationPhase: "Completed" };
        }

        // If matching current active token, flag active
        if (ap.TokenNumber === payload.CurrentLiveToken) {
            return { ...ap, ConsultationPhase: "InConsultation" };
        }

        return ap;
    }));
            };

            source.onerror = (err) => {
                console.error(`SSE Stream Error for Doctor ${docId}:`, err);
            };

            activeStreams.push(source);
        });

        // Cleanup: Automatically disconnects and teardowns open connections on route exit
        return () => {
            activeStreams.forEach(source => source.close());
        };
    }, [appointments]);

    const bookAppointment = async (doctor) => {
        if (!patientData) return alert("No patient information found.");
        const selectedDate = selectedDates[doctor.DoctorID];
        if (!selectedDate) {
            return alert("Please select an appointment date and time before booking.");
        }

        const appointmentDate = new Date(selectedDate);
        if (Number.isNaN(appointmentDate.getTime())) {
            return alert("Selected appointment date is invalid.");
        }

        try {
            const payload = {
                PatientID: patientData.PatientID,
                DoctorID: doctor.DoctorID,
                AppointmentDate: appointmentDate.toISOString(),
                Status: "Pending",
            };
            const res = await fetch("/api/appointments/book", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                alert("Appointment Request Submitted Successfully!");
                const p = await fetch(`/api/appointments/patient/${patientData.PatientID}`, { credentials: "include" });
                const json = await p.json();
                setAppointments(Array.isArray(json) ? json : []);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const formatDate = (iso) => {
        if (!iso) return "N/A";
        try {
            return new Date(iso).toLocaleString("en-IN", {
                day: "numeric", month: "short", year: "numeric",
                hour: "2-digit", minute: "2-digit",
            });
        } catch (e) {
            return iso;
        }
    };

    const renderLiveQueueTracker = (ap) => {
        const liveTokenForThisDoctor = liveDoctorTokens[ap.DoctorID];
        if (!liveTokenForThisDoctor) {
            return (
                <div className="mt-4 p-3 rounded-2xl border border-dashed border-slate-200 text-xs text-slate-400 text-center">
                    Doctor's live session hasn't started yet today.
                </div>
            );
        }

        return (
            <div className="mt-4 p-4 rounded-2xl border border-green-100 bg-green-50 text-slate-800 shadow-sm">
                <div className="text-sm text-slate-500 font-medium">Live Doctor Status</div>
                <div className="mt-1 text-base font-semibold">
                    Token #{liveTokenForThisDoctor} is currently inside consultation room.
                </div>

                {ap.TokenNumber > liveTokenForThisDoctor && ap.ConsultationPhase !== "Completed" && (
                    <div className="text-xs text-green-700 font-medium mt-2 bg-green-100/50 w-fit px-2 py-0.5 rounded-md">
                        {ap.TokenNumber - liveTokenForThisDoctor} patient(s) ahead of you.
                    </div>
                )}

                {ap.TokenNumber === liveTokenForThisDoctor && ap.ConsultationPhase !== "Completed" && (
                    <div className="text-xs text-blue-700 font-bold mt-2 bg-blue-100 w-fit px-2 py-0.5 rounded-md animate-bounce">
                        It's your turn! Please enter the clinic room.
                    </div>
                )}
            </div>
        );
    };

    // Fetch baseline running sessions from DB on initial load or reload
useEffect(() => {
    const fetchLiveQueuesBaseline = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/appointments/live-queues', { 
                credentials: 'include' 
            });
            if (res.ok) {
                const initialActiveQueues = await res.json();
                const processedTokens = {};
                Object.keys(initialActiveQueues).forEach(docId => {
                    // Extract just the number (e.g., 5) instead of the whole payload object
                    processedTokens[docId] = initialActiveQueues[docId].CurrentLiveToken;
                });

                // Now state stores clean key-value numbers: { "2": 5, "11": 1 }
                setLiveDoctorTokens(processedTokens);
            }
        } catch (err) {
            console.error("Error fetching baseline active sessions on reload:", err);
        }
    };

    if (user) {
        fetchLiveQueuesBaseline();
    }
}, [user]); // Fires on page boot as soon as user profile data resolves

    return (
        <div className={`min-h-screen bg-slate-50/50 p-8 text-slate-800 transition-all duration-300 ${expanded ? "ml-64" : "ml-16"}`}>
            <h1 className="text-2xl font-bold text-slate-900">My Appointments</h1>

            {/* Tabs Panel */}
            <div className="mt-4 flex gap-2 border-b border-slate-200 pb-3">
                <button onClick={() => setActiveTab("book")} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "book" ? "bg-blue-600 text-white shadow-sm" : "bg-white border text-slate-600 hover:bg-slate-50"}`}>Book Appointment</button>
                <button onClick={() => setActiveTab("pending")} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "pending" ? "bg-amber-500 text-white shadow-sm" : "bg-white border text-slate-600 hover:bg-slate-50"}`}>Pending ({appointments.filter((a) => a.Status === "Pending").length})</button>
                <button onClick={() => setActiveTab("confirmed")} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "confirmed" ? "bg-green-600 text-white shadow-sm" : "bg-white border text-slate-600 hover:bg-slate-50"}`}>Confirmed ({appointments.filter((a) => a.Status === "Confirmed").length})</button>
            </div>

            {/* TAB 1: Booking Marketplace */}
            {activeTab === "book" && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {doctors.length === 0 && <div className="col-span-full text-center text-slate-500 py-8">No doctors available.</div>}
                    {doctors.map((doctor) => {
                        const appt = appointments.find((a) => a.DoctorID === doctor.DoctorID) || {};
                        const isPending = appt.Status === "Pending";
                        const isConfirmed = appt.Status === "Confirmed";
                        const isRejected = appt.Status === "Rejected";

                        return (
                            <div key={doctor.DoctorID} className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-all">
                                <div className="p-6 flex gap-4 items-center">
                                    <img src={doctor.Image || "https://via.placeholder.com/150"} alt={doctor.DoctorName} className="w-16 h-16 rounded-full object-cover border" />
                                    <div>
                                        <h3 className="text-base font-bold text-slate-800">{doctor.DoctorName}</h3>
                                        <p className="text-sm text-blue-600">{doctor.Specialty}</p>
                                        <p className="text-xs text-slate-400 mt-1">{doctor.HospitalName}</p>
                                    </div>
                                </div>
                                <div className="px-6 pb-2 text-sm text-slate-500">
                                    {isRejected && appt.RejectMessage && (
                                        <div className="rounded-xl bg-red-50 border border-red-100 px-3 py-2 text-xs text-red-700">Rejection reason: {appt.RejectMessage}</div>
                                    )}
                                </div>
                                <div className="px-6 pb-4 space-y-2 text-sm text-slate-500">
                                    <label className="block text-xs font-semibold text-slate-600">Select Date & Time</label>
                                    <input type="datetime-local" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-blue-500" min={getMinDateTimeLocal()} value={selectedDates[doctor.DoctorID] || ""} onChange={(e) => handleDateChange(doctor.DoctorID, e.target.value)} disabled={isPending || isConfirmed} />
                                </div>
                                <div className={`p-4 border-t flex justify-between items-center mt-auto ${isConfirmed ? "bg-green-50/50" : isPending ? "bg-amber-50/50" : isRejected ? "bg-red-50/50" : "bg-slate-50"}`}>
                                    <span className={`text-xs font-bold uppercase ${isConfirmed ? "text-green-700" : isPending ? "text-amber-700" : isRejected ? "text-red-700" : "text-slate-500"}`}>{isConfirmed ? "✓ Confirmed" : isPending ? "⏳ Pending" : isRejected ? "✗ Rejected" : "Available"}</span>
                                    <button onClick={() => bookAppointment(doctor)} disabled={isPending || isConfirmed} className={`text-xs font-bold py-2 px-4 rounded-lg transition-all ${isConfirmed ? "bg-green-600 text-white cursor-default" : isPending ? "bg-amber-400 text-white cursor-default" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>{isConfirmed ? "Confirmed" : isPending ? "Awaiting" : isRejected ? "Re-Book" : "Book Now"}</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* TAB 2: Pending Applications */}
            {activeTab === "pending" && (
                <div className="mt-6 grid gap-4">
                    {appointments.filter((a) => a.Status === "Pending").length === 0 && <div className="text-center text-slate-500 py-8 bg-white rounded-2xl border border-dashed">No pending appointment allocations.</div>}
                    {appointments.filter((a) => a.Status === "Pending").map((a) => {
                        const doc = doctors.find((d) => d.DoctorID === a.DoctorID) || {};
                        return (
                            <div key={a.AppointmentID} className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                                <img src={doc.Image || "https://via.placeholder.com/150"} alt={doc.DoctorName} className="w-14 h-14 rounded-full object-cover border" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800">{doc.DoctorName || "Doctor"}</h3>
                                    <p className="text-sm text-blue-600">{doc.Specialty}</p>
                                    <p className="text-xs text-slate-500 mt-1">Requested slot: {formatDate(a.AppointmentDate)}</p>
                                </div>
                                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase">⏳ Awaiting Confirmation</span>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* TAB 3: Confirmed & Live Queue Dashboard */}
            {activeTab === "confirmed" && (
                <div className="mt-6 grid gap-4">
                    {appointments.filter((a) => a.Status === "Confirmed").length === 0 && <div className="text-center text-slate-500 py-8 bg-white rounded-2xl border border-dashed">No confirmed consultations listed for today.</div>}
                    {appointments.filter((a) => a.Status === "Confirmed").map((a) => {
    const doc = doctors.find((d) => d.DoctorID === a.DoctorID) || {};
    const liveTokenForThisDoctor = liveDoctorTokens[a.DoctorID];
    
    // ⏳ CRITICAL CHANGE: An appointment can ONLY be active if it isn't already marked completed!
    const isThisAppointmentActive = 
        a.ConsultationPhase === "InConsultation" || 
        (a.TokenNumber === liveTokenForThisDoctor && a.ConsultationPhase !== "Completed");

    return (
        <div key={a.AppointmentID} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <img src={doc.Image || "https://via.placeholder.com/150"} alt={doc.DoctorName} className="w-14 h-14 rounded-full object-cover border" />
                <div className="flex-1">
                    <h3 className="font-bold text-slate-800">{doc.DoctorName || "Doctor"}</h3>
                    <p className="text-sm text-blue-600">{doc.Specialty}</p>
                    <p className="text-xs text-slate-400">Scheduled Time: {formatDate(a.AppointmentDate)}</p>
                    {a.TokenNumber != null && <p className="text-sm text-slate-800 font-bold mt-1">Your Token Number: #{a.TokenNumber}</p>}
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className="px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase flex items-center gap-1"><CheckCircle size={12} /> Confirmed</span>
                    
                    {/* Render handling order matters intensely here */}
                    {a.ConsultationPhase === "Completed" ? (
                        <span className="text-xs font-medium px-2.5 py-0.5 bg-slate-100 text-slate-500 rounded-md">Consultation Finished</span>
                    ) : isThisAppointmentActive ? (
                        <span className="text-xs font-medium px-2.5 py-0.5 bg-blue-100 text-blue-600 rounded-md animate-pulse">Now In Consultation Room</span>
                    ) : (
                        <span className="text-xs font-medium px-2.5 py-0.5 bg-yellow-50 text-yellow-600 rounded-md">Waiting in Queue</span>
                    )}
                </div>
            </div>
            {renderLiveQueueTracker(a)}
        </div>
    );
})}
                </div>
            )}
        </div>
    );
};

export default DoctorMasterPatient;