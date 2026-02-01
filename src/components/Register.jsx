import React, { useState } from 'react';
import { 
  UserPlus, 
  Lock, 
  ArrowRight, 
  HeartPulse,
  Eye,
  EyeOff,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '', // Email or Phone
    password: '',
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering User...", formData);
    // After registration logic, navigate to login or dashboard
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans animate-fade-in">
      
      {/* --- Main Card Container --- */}
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-blue-100 animate-scale-in">
        
        {/* --- Left Side: Branding (Consistent with Login) --- */}
        <div className="md:w-1/2 bg-indigo-600 relative p-10 flex flex-col justify-between text-white overflow-hidden animate-slide-right">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 30 0 70 0 100 100 Z" fill="white" />
             </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    <HeartPulse className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight">OPD Manager</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Join Our Network
            </h2>
            <p className="text-indigo-100 text-lg">
              Create your account to start managing patient consultations, digital prescriptions, and hospital workflows.
            </p>
          </div>

          <div className="relative z-10 mt-12 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
             <div className="flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-indigo-200" />
                <div>
                  <p className="font-bold">Secure Registration</p>
                  <p className="text-xs text-indigo-100">Your data is encrypted and follows global healthcare privacy standards (HIPAA compliant).</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Right Side: Register Form --- */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center animate-slide-left">
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Create Account</h3>
            <p className="text-slate-500 text-sm mt-1">Simple 2-step registration for new users.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            
            {/* Step 1: Identifier (Email/Phone) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Phone Number or Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Smartphone className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type="text"
                  name="identifier"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="e.g. 9876543210 or name@email.com"
                  value={formData.identifier}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Step 2: Set Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Create Strong Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              {/* Password Strength Mockup */}
              {formData.password.length > 0 && (
                <div className="mt-2 flex gap-1 h-1">
                  <div className={`flex-1 rounded-full ${formData.password.length > 4 ? 'bg-orange-400' : 'bg-red-400'}`}></div>
                  <div className={`flex-1 rounded-full ${formData.password.length > 7 ? 'bg-emerald-400' : 'bg-gray-200'}`}></div>
                  <div className={`flex-1 rounded-full ${formData.password.length > 10 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
                </div>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                name="agreeTerms"
                id="terms"
                required
                className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
              />
              <label htmlFor="terms" className="text-xs text-slate-500 leading-normal">
                I agree to the <a href="#" className="text-indigo-600 font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 font-semibold hover:underline">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              <UserPlus className="w-5 h-5" />
              <span>Create My Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Bottom Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/" className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline">
                Sign In
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;