import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, onToggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <button 
              onClick={onToggleSidebar}
              className="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 lg:hidden focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2 text-blue-800">
              <GraduationCap className="w-8 h-8" />
              <div>
                <h1 className="text-lg font-bold leading-tight">{title}</h1>
                {subtitle && <p className="text-xs text-slate-500 hidden sm:block">{subtitle}</p>}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <BookOpen className="w-5 h-5 text-slate-400 ms-2" />
            <span className="text-sm text-slate-500 font-medium">2025-2026</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;