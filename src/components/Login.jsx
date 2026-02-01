// import React, { useContext, useState } from 'react'
// import MainHeader from './AdminMainHeader'
// import { MoveRight } from 'lucide-react'
// import { SidebarContext } from '../contexts/Sidebar';
// import { Link } from 'react-router-dom';


// function Login() {
//   const [role,setRole]=useState('admin')
//   return (
    
//     <>
//     <div className={` flex-1 flex justify-center items-center flex-col transition-all duration-1000 h-screen`}>
//       <form>
//         <div className=" font-sans bg-blue-200 p-12 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
//             <p className={`font-bold text-4xl`}>Welcome,</p>
//             <p className={`font-semibold text-gray-600 my-2`}>sign up to continue</p>
//             <div className='flex justify-around'>
//               <div >
//               <input type="radio"  name='role' id='staff' onClick={()=>{setRole('staff')}}/>
//               <label className='text-gray-800 font-semibold mx-1 ' for="staff">Staff</label>
//             </div>
//             <div>
//               <input type="radio" name='role' id='admin' onClick={()=>{setRole('admin')}}/>
//               <label className='text-gray-800 font-semibold mx-1' for="admin">Admin</label>
//             </div>
//             </div>
//             <div className="flex justify-center">
//             <input className={`mt-7 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md mx-auto p-2`} type='email' placeholder='Email'/>
//             </div>
//             <div className={`flex justify-center`}>
//               <input className={`my-7 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md mx-auto p-2`} type='password' placeholder='Password'/>
//             </div>
//             <div className={`flex justify-center`}>
//               <Link to={"/"+role+"/dashboard"}>
//             <button  className={`text-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md
//                                   transition ease-in-out duration-30 
//                                   active:translate-x-[4px]
//                                   active:translate-y-[4px]
//                                   active:shadow-none
//                                   py-2 px-3 flex gap-2`}>Let's Go <MoveRight/></button>
//               </Link>
//             </div>
//         </div>
//       </form>
//     </div>
    
//     </>
//   )
// }

// export default Login




import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  ChevronRight, 
  Building2, 
  Stethoscope, 
  HeartPulse,
  Eye,
  EyeOff
} from 'lucide-react';
import { Link } from 'react-router-dom';


const Login = () => {
  // --- State Management ---
  const [role, setRole] = useState('patient'); // Default role
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '', // Email or Mobile
    password: ''
  });

  // --- Handlers ---
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData({ identifier: '', password: '' }); // Reset form on role switch
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}...`, formData);
    // Add your authentication logic here
    // e.g., navigate('/dashboard');
  };

  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans animate-fade-in">
      
      
      {/* --- Main Card Container --- */}
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-blue-100 animate-scale-in">
        
        {/* --- Left Side: Visual/Branding --- */}
        <div className="md:w-1/2 bg-blue-600 relative p-10 flex flex-col justify-between text-white overflow-hidden animate-slide-right">
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
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
              OPD Management
            </h2>
            <p className="text-blue-100 text-lg">
              Manage appointments, patients, and hospital billing efficiently in one unified platform.
            </p>
          </div>

          {/* Role Description dynamic text */}
          <div className="relative z-10 mt-12 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
             {role === 'admin' && (
                <p className="text-sm">👨‍💼 <span className="font-bold">Admin Access:</span> Full control over hospital master data, users, and financial reports.</p>
             )}
             {role === 'staff' && (
                <p className="text-sm">👩‍⚕️ <span className="font-bold">Staff Access:</span> Manage receipts, patient queues, and daily OPD registrations.</p>
             )}
             {role === 'patient' && (
                <p className="text-sm">🏥 <span className="font-bold">Patient Portal:</span> Book appointments, view history, and download prescriptions.</p>
             )}
          </div>
        </div>

        {/* --- Right Side: Login Form --- */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center animate-slide-left">
          
          <div className="text-center mb-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-slate-900">Welcome Back</h3>
            <p className="text-slate-500 text-sm mt-1">Please enter your details to sign in.</p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-8 animate-slide-up">
            <button 
              onClick={() => handleRoleChange('admin')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                role === 'admin' ? 'bg-white text-blue-600 shadow-sm scale-105' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Building2 className="w-4 h-4" /> Admin
            </button>
            <button 
              onClick={() => handleRoleChange('staff')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                role === 'staff' ? 'bg-white text-blue-600 shadow-sm scale-105' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Stethoscope className="w-4 h-4" /> Staff
            </button>
            <button 
              onClick={() => handleRoleChange('patient')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                role === 'patient' ? 'bg-white text-blue-600 shadow-sm scale-105' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <User className="w-4 h-4" /> Patient
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Identifier Input (Email/Mobile) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                {role === 'patient' ? 'Mobile Number or Email' : 'Email Address'}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  name="identifier"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white focus:scale-[1.02]"
                  placeholder={role === 'patient' ? "e.g. 9876543210" : "name@hospital.com"}
                  value={formData.identifier}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">Forgot Password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white focus:scale-[1.02]"
                  placeholder="••••••••"
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
            </div>

            {/* Submit Button */}
            <Link to={"/"+role+"/dashboard"}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              <span>Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            </Link>

          </form>

          {/* Footer for Patient */}
          {role === 'patient' && (
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                New to our hospital?{' '}
                <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-700">Register Now</Link>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Login;