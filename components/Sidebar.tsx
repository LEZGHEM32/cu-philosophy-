import React from 'react';
import { Lecture } from '../types';
import { ChevronRight, PlayCircle } from 'lucide-react';

interface SidebarProps {
  lectures: Lecture[];
  currentLectureId: number;
  currentSlideId: number;
  onSelectSlide: (lectureId: number, slideId: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  lectures, 
  currentLectureId, 
  currentSlideId, 
  onSelectSlide,
  isOpen,
  onClose
}) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar Container */}
      <aside 
        className={`
          fixed lg:static inset-y-0 right-0 z-30 w-72 bg-slate-900 text-slate-100 transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold font-serif text-blue-300">فهرس المحاضرات</h2>
          <p className="text-sm text-slate-400 mt-1">مسار الفلسفة - السنة الثالثة</p>
        </div>

        <nav className="p-4 space-y-2">
          {lectures.map((lecture) => (
            <div key={lecture.id} className="mb-4">
              <div className="flex items-center gap-2 text-slate-300 font-bold mb-2 px-2">
                <span className="bg-blue-900 text-blue-200 text-xs py-1 px-2 rounded">محاضرة {lecture.id}</span>
              </div>
              <div className="space-y-1">
                {lecture.slides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      onSelectSlide(lecture.id, slide.id);
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={`
                      w-full text-right px-3 py-2 rounded-md text-sm transition-all duration-200 flex items-start gap-2
                      ${currentSlideId === slide.id 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                    `}
                  >
                    <PlayCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${currentSlideId === slide.id ? 'text-white' : 'opacity-50'}`} />
                    <span className="leading-snug">{slide.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;