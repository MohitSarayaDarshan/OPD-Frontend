import React, { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { io } from 'socket.io-client';
import {
    Search, Filter, CheckCircle, XCircle, Clock, User,
    Stethoscope, Calendar, Phone
} from 'lucide-react';
import { useAuth } from '../contexts/UseAuth'; // ✅ capital U — matches your file UseAuth.jsx

const AppointmentMasterStaff = () => {
    const { expanded } = useContext(SidebarContext);
    const { user } = useAuth();

    const [appointments, setAppointments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [loading, setLoading] = useState(true);
    const [updatingID, setUpdatingID] = useState(null);
    const [staffInfo, setStaffInfo] = useState(null);
    const [currentConsultation, setCurrentConsultation] = useState(null);
    const [selectedDoctorID, setSelectedDoctorID] = useState(null);

    // Fetch all appointments for this staff's hospital
    const fetchAppointments = async () => {
        if (!user) return;
        try {
            const res = await fetch('http://localhost:3000/api/appointments/bystaff', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            const json = await res.json();
            setAppointments(Array.isArray(json) ? json : []);
        } catch (err) {
            console.error("Error fetching appointments:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, [user]);

    useEffect(() => {
        if (!user?.Email) return;

        const fetchStaff = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/staffs/email', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Email: user.Email })
                });
                const json = await res.json();
                const staff = Array.isArray(json) ? json[0] : json;
                setStaffInfo(staff);
            } catch (err) {
                console.error('Error fetching staff info:', err);
            }
        };

        fetchStaff();
    }, [user]);

    useEffect(() => {
        if (!staffInfo?.StaffID) return;

        const socket = io('http://localhost:3000', { withCredentials: true });
        socket.emit('register', { role: 'staff', id: staffInfo.StaffID });

        socket.on('consultationStarted', (payload) => {
            setCurrentConsultation(payload);
            setAppointments(prev =>
                prev.map(a =>
                    a.AppointmentID === payload.AppointmentID
                        ? { ...a, ConsultationPhase: 'InConsultation' }
                        : a
                )
            );
        });

        return () => {
            socket.disconnect();
        };
    }, [staffInfo]);

    // Keep a selected doctor id in sync with available appointments
    useEffect(() => {
        const uniqueDoctors = Array.from(new Map(appointments.map(a => [a.DoctorID, { DoctorID: a.DoctorID, DoctorName: a.DoctorName }])).values());
        if (uniqueDoctors.length > 0 && !uniqueDoctors.find(d => d.DoctorID === selectedDoctorID)) {
            setSelectedDoctorID(uniqueDoctors[0].DoctorID);
        }
        if (uniqueDoctors.length === 0) setSelectedDoctorID(null);
    }, [appointments]);

    const handleStatusUpdate = async (appointmentID, newStatus) => {
        setUpdatingID(appointmentID);
        try {
            let bodyPayload = { Status: newStatus };

            if (newStatus === 'Confirmed') {
                // Token is assigned automatically by the server based on appointment date and existing confirmed appointments.
            }

            if (newStatus === 'Rejected') {
                const rejectMessage = window.prompt('Enter a rejection message for the patient:');
                if (rejectMessage === null) {
                    setUpdatingID(null);
                    return;
                }
                bodyPayload.RejectMessage = rejectMessage;
            }

            const res = await fetch(`http://localhost:3000/api/appointments/status/${appointmentID}`, {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyPayload)
            });

            const updatedAppointment = await res.json();
            if (res.ok) {
                setAppointments(prev =>
                    prev.map(a =>
                        a.AppointmentID === appointmentID
                            ? { ...a, ...updatedAppointment }
                            : a
                    )
                );
            } else {
                alert(updatedAppointment.message || 'Failed to update status. Please try again.');
            }
        } catch (err) {
            console.error('Status update error:', err);
            alert('An error occurred.');
        } finally {
            setUpdatingID(null);
        }
    };

    const handleNextPatient = async () => {
        if (!user?.Email) return;
        setUpdatingID('next');
        try {
            const body = { Email: user.Email };
            if (selectedDoctorID) body.DoctorID = selectedDoctorID;
            const res = await fetch('http://localhost:3000/api/appointments/next', {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const json = await res.json();
            if (res.ok) {
                fetchAppointments();
                if (json.nextAppointment) {
                    setCurrentConsultation(json.nextAppointment);
                }
                else {
                    alert(json.message || 'No waiting confirmed appointments.');
                }
            } else {
                alert(json.message || 'Failed to move to the next patient.');
            }
        } catch (err) {
            console.error('Next patient error:', err);
            alert('An error occurred while advancing to the next patient.');
        } finally {
            setUpdatingID(null);
        }
    };

    const formatDate = (iso) => {
        if (!iso) return 'N/A';
        return new Date(iso).toLocaleString('en-IN', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    // Filter by search + status tab
    const filtered = appointments.filter(a => {
        const matchSearch =
            a.PatientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            a.DoctorName?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchStatus = filterStatus === 'All' || a.Status === filterStatus;
        return matchSearch && matchStatus;
    });

    const counts = {
        All:       appointments.length,
        Pending:   appointments.filter(a => a.Status === 'Pending').length,
        Confirmed: appointments.filter(a => a.Status === 'Confirmed').length,
        Rejected:  appointments.filter(a => a.Status === 'Rejected').length,
    };

    const statusBadgeClass = (status) => {
        if (status === 'Confirmed') return 'bg-green-100 text-green-700 border-green-200';
        if (status === 'Rejected')  return 'bg-red-100 text-red-700 border-red-200';
        return 'bg-amber-100 text-amber-700 border-amber-200';
    };

    const activeConsultation = (() => {
        if (selectedDoctorID) {
            // Prefer a currently 'InConsultation' appointment for the selected doctor
            const byDoctor = appointments.find(a => a.ConsultationPhase === 'InConsultation' && a.DoctorID === selectedDoctorID);
            if (byDoctor) return byDoctor;
            // Fallback to last socket payload only if it belongs to the selected doctor
            if (currentConsultation && currentConsultation.DoctorID === selectedDoctorID) return currentConsultation;
            return null;
        }
        return `No active consultation for this doctor`
    })();

    return (
        <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>

            {/* Header */}
            <div className="mb-8 animate-slide-down">
                <h1 className="text-2xl font-bold text-slate-900">Appointment Requests</h1>
                <p className="text-sm text-slate-500 mt-1">Review and confirm patient appointment requests for your hospital.</p>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-[1fr_auto]">
                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5 text-sm text-slate-700">
                    {activeConsultation ? (
                        <div className="space-y-1">
                            <p className="font-semibold text-slate-900">Now consulting</p>
                            <p className="text-base text-slate-800">Token #{activeConsultation.TokenNumber || '-'} {activeConsultation.PatientName ? `· ${activeConsultation.PatientName}` : ''}</p>
                            {activeConsultation.DoctorName && <p className="text-xs text-slate-500">Doctor: {activeConsultation.DoctorName}</p>}
                        </div>
                    ) : (
                        <span>No patient currently in consultation.</span>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={selectedDoctorID ?? ''}
                        onChange={(e) => setSelectedDoctorID(Number(e.target.value) || null)}
                        className="text-sm rounded-lg border border-gray-200 bg-white px-3 py-2"
                    >
                        <option value="">All doctors</option>
                        {Array.from(new Map(appointments.map(a => [a.DoctorID, a]))).map(([, d]) => (
                            <option key={d.DoctorID} value={d.DoctorID}>{d.DoctorName || `Doctor ${d.DoctorID}`}</option>
                        ))}
                    </select>

                    <button
                        onClick={handleNextPatient}
                        disabled={updatingID === 'next'}
                        className="h-fit rounded-3xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {updatingID === 'next' ? 'Moving...' : 'Next Patient'}
                    </button>
                </div>
            </div>

            <div className="mb-4 text-xs text-slate-500">
                Tokens are assigned automatically when confirming and follow the appointment time order for that doctor on the selected date.
            </div>
            {/* Summary Cards — click to filter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['All', 'Pending', 'Confirmed', 'Rejected'].map(status => (
                    <button
                        key={status}
                        onClick={() => setFilterStatus(status)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                            filterStatus === status
                                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                : 'bg-white text-slate-700 border-gray-100 hover:border-blue-200 hover:shadow-sm'
                        }`}
                    >
                        <p className={`text-xs font-semibold uppercase tracking-wide ${filterStatus === status ? 'text-blue-100' : 'text-slate-400'}`}>
                            {status}
                        </p>
                        <p className="text-2xl font-bold mt-1">{counts[status]}</p>
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden animate-scale-in">

                {/* Toolbar */}
                <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search patient or doctor..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Filter className="w-4 h-4 text-slate-400" />
                        Showing: <strong className="text-slate-700 ml-1">{filterStatus}</strong>
                    </div>
                </div>

                {loading ? (
                    <div className="p-12 text-center text-slate-400">Loading appointments...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-blue-50/50 text-slate-900 font-semibold border-b border-blue-100">
                                <tr>
                                    <th className="px-6 py-4">Patient</th>
                                    <th className="px-6 py-4">Doctor</th>
                                    <th className="px-6 py-4">Requested On</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filtered.length > 0 ? (
                                    filtered.map((appt) => (
                                        <tr key={appt.AppointmentID} className="hover:bg-blue-50/20 transition-colors">

                                            {/* Patient */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                                                        <User className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-slate-800">{appt.PatientName || 'N/A'}</div>
                                                        {appt.TokenNumber != null && (
                                                            <div className="text-xs text-slate-500 mt-1">Token #{appt.TokenNumber}</div>
                                                        )}
                                                        <div className="text-xs text-slate-400">
                                                            {appt.PatientAge ? `${appt.PatientAge} yrs` : ''}{appt.PatientGender ? ` · ${appt.PatientGender}` : ''}
                                                        </div>
                                                        {appt.PatientMobile && (
                                                            <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                                                <Phone size={10} /> {appt.PatientMobile}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Doctor */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Stethoscope className="w-4 h-4 text-slate-400" />
                                                    <div>
                                                        <div className="font-medium text-slate-700">{appt.DoctorName}</div>
                                                        <div className="text-xs text-slate-400">{appt.DoctorSpecialty}</div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Date */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                                    <span className="text-xs">{formatDate(appt.AppointmentDate)}</span>
                                                </div>
                                            </td>

                                            {/* Status */}
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${statusBadgeClass(appt.Status)}`}>
                                                    {appt.Status === 'Confirmed' && <CheckCircle size={11} />}
                                                    {appt.Status === 'Rejected'  && <XCircle size={11} />}
                                                    {appt.Status === 'Pending'   && <Clock size={11} />}
                                                    {appt.Status}
                                                </span>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    {appt.Status === 'Pending' ? (
                                                        <>
                                                            <button
                                                                onClick={() => handleStatusUpdate(appt.AppointmentID, 'Confirmed')}
                                                                disabled={updatingID === appt.AppointmentID}
                                                                className="flex items-center gap-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold transition-all disabled:opacity-50"
                                                            >
                                                                <CheckCircle size={13} /> Confirm
                                                            </button>
                                                            <button
                                                                onClick={() => handleStatusUpdate(appt.AppointmentID, 'Rejected')}
                                                                disabled={updatingID === appt.AppointmentID}
                                                                className="flex items-center gap-1 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-lg text-xs font-semibold transition-all disabled:opacity-50"
                                                            >
                                                                <XCircle size={13} /> Reject
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <span className="text-xs text-slate-400 italic">
                                                            {appt.Status === 'Confirmed' ? 'Confirmed ✓' : 'Rejected ✗'}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-12 text-center text-slate-400">
                                            <Clock className="w-8 h-8 mx-auto mb-2 opacity-30" />
                                            No appointments found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="p-4 border-t border-gray-100 text-sm text-slate-500">
                    Showing {filtered.length} of {appointments.length} appointments
                </div>
            </div>
        </div>
    );
};

export default AppointmentMasterStaff;
