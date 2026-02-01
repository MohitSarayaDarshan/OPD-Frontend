import React from 'react';
import { 
  HeartPulse, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Clock, 
  ClipboardList, 
  ArrowRight,
  MousePointerClick,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className=" min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-20 bg-white flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <HeartPulse className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">OPD Manager</span>
        </div>
        <div className={` hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600`}>
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <Link to="/login" className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
            Sign In
          </Link>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative px-8 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8 animate-slide-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Next-Gen Healthcare Management
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Smart Care for <span className="text-blue-600">Modern Hospitals.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
            Streamline your Outpatient Department with real-time queue management, instant digital prescriptions, and automated billing.
          </p>
          
        </div>

        {/* Hero Visual Block */}
        <div className="lg:w-1/2 relative animate-fade-in">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="relative bg-white border border-blue-100 rounded-3xl shadow-2xl p-4 overflow-hidden transform">
            <img 
              src="LandingPageImage.png" 
              alt="Hospital Dashboard Preview" 
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* --- Stats/Trust Section --- */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Doctors", value: "250+" },
            { label: "Daily Appointments", value: "1.2k" },
            { label: "Patient Satisfaction", value: "98%" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">Comprehensive Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Everything you need to manage a high-traffic OPD without the paperwork headache.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Calendar className="w-6 h-6 text-blue-600" />}
            title="Instant Booking"
            desc="Patients can schedule appointments via the portal or mobile, reducing front-desk congestion."
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6 text-purple-600" />}
            title="Queue Management"
            desc="Real-time tracking of patient flow from registration to doctor consultation."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-6 h-6 text-emerald-600" />}
            title="Secure Records"
            desc="HIPAA-compliant storage for patient history, diagnostic reports, and imaging."
          />
          <FeatureCard 
            icon={<Clock className="w-6 h-6 text-orange-600" />}
            title="Wait Time Analytics"
            desc="Deep insights into average waiting times to help optimize staff scheduling."
          />
          <FeatureCard 
            icon={<ClipboardList className="w-6 h-6 text-pink-600" />}
            title="Digital Billing"
            desc="One-click receipt generation and integrated insurance claim processing."
          />
          <FeatureCard 
            icon={<MousePointerClick className="w-6 h-6 text-blue-500" />}
            title="Telehealth Ready"
            desc="Integrated video consultation tools for remote patient follow-ups."
          />
        </div>
      </section>

      {/* --- Call to Action Footer --- */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-8 space-y-8">
          <h2 className="text-4xl font-bold text-white leading-tight">
            Ready to digitize your Outpatient Department?
          </h2>
          <p className="text-blue-100 text-lg">
            Join hundreds of hospitals improving patient outcomes with OPD Manager.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
              Get Started Now
            </Link>
            
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-gray-100 text-center text-slate-500 text-sm">
        <p>© 2026 OPD Manager System. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
   
  </div>
);

export default LandingPage;