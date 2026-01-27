import React, { useState, useContext } from 'react';
// import { SidebarContext } from '../contexts/Sidebar';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock, 
  Stethoscope, 
  CalendarCheck,
  IndianRupee,
  ChevronRight,
  ThumbsUp
} from 'lucide-react';

const DoctorMasterPatient = () => {
  const { expanded } = useContext(SidebarContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  // Dummy Data for Doctors (Patient View)
  const doctors = [
    {
      id: 1,
      name: "Dr. Arjun Mehta",
      specialty: "Cardiologist",
      qualification: "MBBS, MD",
      hospital: "City Care General Hospital",
      experience: "12 Years",
      rating: 4.9,
      reviews: 124,
      fee: 800,
      nextAvailable: "Today, 4:00 PM",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200&q=80",
      verified: true
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      qualification: "MBBS, MD (Skin)",
      hospital: "Sunrise Multispeciality",
      experience: "8 Years",
      rating: 4.7,
      reviews: 89,
      fee: 500,
      nextAvailable: "Tomorrow, 10:00 AM",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80",
      verified: true
    },
    {
      id: 3,
      name: "Dr. Rajesh Gupta",
      specialty: "Pediatrician",
      qualification: "MBBS, DCH",
      hospital: "Sterling Hospital",
      experience: "15 Years",
      rating: 4.8,
      reviews: 210,
      fee: 600,
      nextAvailable: "Today, 6:30 PM",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80",
      verified: false
    },
    {
      id: 4,
      name: "Dr. Anita Desai",
      specialty: "Gynecologist",
      qualification: "MBBS, MS (OBG)",
      hospital: "Lotus Eye & Women Care",
      experience: "10 Years",
      rating: 4.6,
      reviews: 95,
      fee: 700,
      nextAvailable: "Fri, 12:00 PM",
      image: "https://images.unsplash.com/photo-1623854764803-33345395885f?auto=format&fit=crop&w=200&h=200&q=80",
      verified: true
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      specialty: "Orthopedic",
      qualification: "MBBS, MS (Ortho)",
      hospital: "Apex Heart Institute",
      experience: "20 Years",
      rating: 4.9,
      reviews: 315,
      fee: 1000,
      nextAvailable: "Mon, 11:00 AM",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&h=200&q=80",
      verified: true
    }
  ];

  // Specialties for Filter Pills
  const specialties = ["All", "Cardiologist", "Dermatologist", "Pediatrician", "Gynecologist", "Orthopedic"];

  // Filter Logic
  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Header Section --- */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Book an Appointment</h1>
        <p className="text-slate-500 mt-2">Find the best doctors across our hospital network and book instantly.</p>
        
        {/* Search & Filter Container */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search doctor, hospital, or specialty..." 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
            </button>
        </div>

        {/* Specialty Quick Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
            {specialties.map((spec) => (
                <button
                    key={spec}
                    onClick={() => setSelectedSpecialty(spec)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        selectedSpecialty === spec 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                        : 'bg-white text-slate-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    {spec}
                </button>
            ))}
        </div>
      </div>

      {/* --- Doctor Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className="group bg-white rounded-2xl border border-blue-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
                {/* Card Header: Profile Info */}
                <div className="p-6 pb-4 flex gap-4">
                    <div className="relative">
                        <img 
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        {doctor.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white" title="Verified Doctor">
                                <ThumbsUp className="w-3 h-3" />
                            </div>
                        )}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                            {doctor.name}
                        </h3>
                        <p className="text-sm font-medium text-blue-600 mt-1">{doctor.specialty}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{doctor.qualification}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-bold text-slate-700">{doctor.rating}</span>
                            </div>
                            <span className="text-xs text-slate-400">({doctor.reviews} Reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mx-6"></div>

                {/* Card Body: Details */}
                <div className="p-6 pt-4 flex-1">
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 text-slate-600">
                            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{doctor.hospital}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <Stethoscope className="w-4 h-4 text-slate-400" />
                            <span>{doctor.experience} Experience</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-900 font-medium">
                            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-green-100">
                                <IndianRupee className="w-2.5 h-2.5 text-green-700" />
                            </div>
                            <span>₹{doctor.fee} <span className="text-slate-400 font-normal text-xs">/ Consultation</span></span>
                        </div>
                    </div>
                </div>

                {/* Card Footer: Actions */}
                <div className="bg-blue-50/50 p-4 border-t border-blue-100 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Next Slot</span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-green-700 mt-0.5">
                            <Clock className="w-3 h-3" />
                            {doctor.nextAvailable}
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => console.log(`Book ${doctor.name}`)}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                        <CalendarCheck className="w-4 h-4" />
                        Book Now
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorMasterPatient;