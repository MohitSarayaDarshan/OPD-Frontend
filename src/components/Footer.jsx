import React, { useContext } from 'react';
import { Heart, Activity, Stethoscope, HeartPulse } from 'lucide-react';
import { SidebarContext } from '../contexts/Sidebar';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {expanded}=useContext(SidebarContext)
  return (
    <footer className={`bg-gray-900 text-white py-8 px-4 border-t-2 border-blue-200 transition-all duration-1000 ${expanded?'ml-64':'ml-16'} animate-fade-in`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 animate-slide-up">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 group">
            <div className="bg-blue-600 p-2 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <HeartPulse className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div>
              <h2 className="text-xl font-bold">OPD<span className="text-blue-400">+</span></h2>
              <p className="text-gray-400 text-sm">OPD Management System</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} OPD+. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-105 transform">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-105 transform">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-105 transform">
              Support
            </a>
          </div>

        </div>

        {/* Bottom Message */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center animate-fade-in">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            <Heart className="w-4 h-4 text-red-500 mr-2 animate-pulse-slow" />
            Built with care for better healthcare management
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;