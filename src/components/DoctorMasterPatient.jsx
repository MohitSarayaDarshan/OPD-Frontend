import React, { useState, useEffect, useContext } from 'react';
import { io } from 'socket.io-client';
import { SidebarContext } from '../contexts/Sidebar';
import { useAuth } from '../contexts/UseAuth';
import { LayoutGrid, Hourglass, CheckCircle } from 'lucide-react';

const DoctorMasterPatient = () => {
    const { expanded } = useContext(SidebarContext);
    const { user } = useAuth();

    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [patientData, setPatientData] = useState(null);
    const [nowConsulting, setNowConsulting] = useState(null);
    const [activeTab, setActiveTab] = useState('book');
    const [selectedDates, setSelectedDates] = useState({});

    const getMinDateTimeLocal = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 15);
        const tzOffset = now.getTimezoneOffset() * 60000;
        return new Date(now - tzOffset).toISOString().slice(0, 16);
    };

    const handleDateChange = (doctorId, value) => {
        setSelectedDates(prev => ({ ...prev, [doctorId]: value }));
    };

    useEffect(() => {
        // fetch doctors (minimal)
        fetch('/api/doctors', { credentials: 'include' })
            .then(r => r.json()).then(setDoctors).catch(() => setDoctors([]));
    }, []);

    useEffect(() => {
        if (!user?.Email) return;
        // fetch patient by email
        fetch('/api/patients/email', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
            .then(r => r.json())
            .then(json => {
                const data = Array.isArray(json) ? json[0] : json;
                setPatientData(data);
                if (data?.PatientID) fetch(`/api/appointments/patient/${data.PatientID}`, { credentials: 'include' })
                    .then(r => r.json()).then(a => setAppointments(Array.isArray(a) ? a : []));

                // socket: register patient room
                const socket = io('http://localhost:3000', { withCredentials: true });
                socket.emit('register', { role: 'patient', id: data?.PatientID });
                socket.on('consultationStarted', (payload) => {
                    setNowConsulting(payload);
                    setAppointments(prev => prev.map(ap => ap.AppointmentID === payload.AppointmentID ? { ...ap, ConsultationPhase: 'InConsultation' } : ap));
                });

                return () => socket.disconnect();
            }).catch(() => {});
    }, [user]);

    const bookAppointment = async (doctor) => {
        if (!patientData) return alert('No patient');
        const selectedDate = selectedDates[doctor.DoctorID];
        if (!selectedDate) {
            return alert('Please select an appointment date and time before booking.');
        }

        const appointmentDate = new Date(selectedDate);
        if (Number.isNaN(appointmentDate.getTime())) {
            return alert('Selected appointment date is invalid. Please choose a valid date and time.');
        }

        try {
            const payload = { PatientID: patientData.PatientID, DoctorID: doctor.DoctorID, AppointmentDate: appointmentDate.toISOString(), Status: 'Pending' };
            const res = await fetch('/api/appointments/book', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (res.ok) {
                alert('Requested');
                // refresh list
                const p = await fetch(`/api/appointments/patient/${patientData.PatientID}`, { credentials: 'include' });
                const json = await p.json(); setAppointments(Array.isArray(json) ? json : []);
            }
        } catch (e) { console.error(e); }
    };

    const formatDate = (iso) => {
        if (!iso) return 'N/A';
        try { return new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); } catch(e){ return iso; }
    };

    const currentConsultation = appointments.find(a => a.ConsultationPhase === 'InConsultation') || nowConsulting;

    return (
        <div className={`min-h-screen p-8 ${expanded ? 'ml-64' : 'ml-16'}`}>
            <h1 className="text-2xl font-bold">My Appointments</h1>
            <div className="mt-4 flex gap-2">
                <button onClick={() => setActiveTab('book')} className="px-3 py-2 bg-blue-600 text-white rounded">Book</button>
                <button onClick={() => setActiveTab('pending')} className="px-3 py-2 bg-amber-400 text-white rounded">Pending</button>
                <button onClick={() => setActiveTab('confirmed')} className="px-3 py-2 bg-green-600 text-white rounded">Confirmed</button>
            </div>

            {currentConsultation && (
                <div className="mt-4 p-4 rounded-2xl border border-green-100 bg-green-50 text-slate-800 shadow-sm">
                    <div className="text-sm text-slate-500">Current consultation</div>
                    <div className="mt-1 text-lg font-semibold">Token #{currentConsultation.TokenNumber} is now being consulted</div>
                    {currentConsultation.DoctorName && (
                        <div className="text-xs text-slate-500 mt-1">Doctor: {currentConsultation.DoctorName}</div>
                    )}
                </div>
            )}

            {activeTab === 'book' && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {doctors.length === 0 && (
                        <div className="col-span-full text-center text-slate-500 py-8">No doctors available.</div>
                    )}

                    {doctors.map((doctor) => {
                        const appt = appointments.find(a => a.DoctorID === doctor.DoctorID) || {};
                        const isPending = appt.Status === 'Pending';
                        const isConfirmed = appt.Status === 'Confirmed';
                        const isRejected = appt.Status === 'Rejected';

                        return (
                            <div key={doctor.DoctorID} className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-all">
                                <div className="p-6 flex gap-4 items-center">
                                    <img src={doctor.Image || 'https://via.placeholder.com/150'} alt={doctor.DoctorName} className="w-16 h-16 rounded-full object-cover border" />
                                    <div>
                                        <h3 className="text-base font-bold text-slate-800">{doctor.DoctorName}</h3>
                                        <p className="text-sm text-blue-600">{doctor.Specialty}</p>
                                        <p className="text-xs text-slate-400 mt-1">{doctor.HospitalName}</p>
                                    </div>
                                </div>

                                <div className="px-6 pb-4 space-y-1.5 text-sm text-slate-500">
                                    {isRejected && appt.RejectMessage && (
                                        <div className="mt-2 rounded-2xl bg-red-50 border border-red-100 px-3 py-2 text-xs text-red-700">
                                            Rejection reason: {appt.RejectMessage}
                                        </div>
                                    )}
                                </div>

                                <div className="px-6 pb-4 space-y-3 text-sm text-slate-500">
                                    <label className="block text-xs font-semibold text-slate-600">Appointment date</label>
                                    <input
                                        type="datetime-local"
                                        className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:ring-blue-200 focus:ring-2"
                                        min={getMinDateTimeLocal()}
                                        value={selectedDates[doctor.DoctorID] || ''}
                                        onChange={(e) => handleDateChange(doctor.DoctorID, e.target.value)}
                                        disabled={isPending || isConfirmed}
                                    />
                                </div>

                                <div className={`p-4 border-t flex justify-between items-center mt-auto ${isConfirmed ? 'bg-green-50' : isPending ? 'bg-amber-50' : isRejected ? 'bg-red-50' : 'bg-slate-50'}`}>
                                    <span className={`text-xs font-bold uppercase ${isConfirmed ? 'text-green-700' : isPending ? 'text-amber-700' : isRejected ? 'text-red-700' : 'text-slate-500'}`}>
                                        {isConfirmed ? '✓ Confirmed' : isPending ? '⏳ Pending' : isRejected ? '✗ Rejected' : 'Available'}
                                    </span>

                                    <button onClick={() => bookAppointment(doctor)} disabled={isPending || isConfirmed} className={`text-xs font-bold py-2 px-4 rounded-lg transition-all ${isConfirmed ? 'bg-green-600 text-white cursor-default' : isPending ? 'bg-amber-400 text-white cursor-default' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                                        {isConfirmed ? 'Confirmed' : isPending ? 'Awaiting' : isRejected ? 'Re-Book' : 'Book Now'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {activeTab === 'pending' && (
                <div className="mt-6 grid gap-4">
                    {appointments.filter(a => a.Status === 'Pending').length === 0 && (
                        <div className="text-center text-slate-500 py-8">No pending appointments</div>
                    )}

                    {appointments.filter(a => a.Status === 'Pending').map((a) => {
                        const doc = doctors.find(d => d.DoctorID === a.DoctorID) || {};
                        return (
                            <div key={a.AppointmentID} className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                                <img src={doc.Image || 'https://via.placeholder.com/150'} alt={doc.DoctorName} className="w-14 h-14 rounded-full object-cover border" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800">{doc.DoctorName || 'Doctor'}</h3>
                                    <p className="text-sm text-blue-600">{doc.Specialty}</p>
                                    <p className="text-xs text-slate-400">{doc.HospitalName}</p>
                                    <p className="text-xs text-slate-500 mt-1">Requested on {formatDate(a.AppointmentDate)}</p>
                                </div>
                                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase">⏳ Awaiting Confirmation</span>
                            </div>
                        );
                    })}
                </div>
            )}

            {activeTab === 'confirmed' && (
                <div className="mt-6 grid gap-4">
                    {appointments.filter(a => a.Status === 'Confirmed').length === 0 && (
                        <div className="text-center text-slate-500 py-8">No confirmed appointments</div>
                    )}

                    {appointments.filter(a => a.Status === 'Confirmed').map((a) => {
                        const doc = doctors.find(d => d.DoctorID === a.DoctorID) || {};
                        const isNow = a.ConsultationPhase === 'InConsultation' || (nowConsulting && nowConsulting.AppointmentID === a.AppointmentID);
                        return (
                            <div key={a.AppointmentID} className="bg-white rounded-2xl border border-green-100 shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                                <img src={doc.Image || 'https://via.placeholder.com/150'} alt={doc.DoctorName} className="w-14 h-14 rounded-full object-cover border" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800">{doc.DoctorName || 'Doctor'}</h3>
                                    <p className="text-sm text-blue-600">{doc.Specialty}</p>
                                    <p className="text-xs text-slate-400">Requested for {formatDate(a.AppointmentDate)}</p>
                                    {a.TokenNumber != null && (
                                        <p className="text-xs text-green-700 font-semibold mt-2">Your token number: {a.TokenNumber}</p>
                                    )}
                                    {isNow && (
                                        <p className="mt-2 inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Now consulting</p>
                                    )}
                                </div>
                                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                                    <CheckCircle size={12} /> Confirmed
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default DoctorMasterPatient;
