
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { COURSES } from './constants';
import { Course } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SlideContent from './components/SlideContent';
import { ChevronLeft, ChevronRight, Maximize, Minimize, Book, Scale, ArrowRight, MessageCircle, BookOpen, GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [currentLectureId, setCurrentLectureId] = useState(1);
  const [currentSlideId, setCurrentSlideId] = useState(101);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Derived Objects
  const activeCourse = useMemo(() => 
    COURSES.find(c => c.id === selectedCourseId), 
  [selectedCourseId]);

  const currentSlide = useMemo(() => {
    if (!activeCourse) return null;
    const lecture = activeCourse.lectures.find(l => l.id === currentLectureId);
    return lecture?.slides.find(s => s.id === currentSlideId);
  }, [activeCourse, currentLectureId, currentSlideId]);

  const allSlides = useMemo(() => {
    if (!activeCourse) return [];
    return activeCourse.lectures.flatMap(l => l.slides);
  }, [activeCourse]);

  // Reset state when course selection changes
  const handleCourseSelect = (courseId: string) => {
    const course = COURSES.find(c => c.id === courseId);
    if (course) {
      setSelectedCourseId(courseId);
      // Set to first slide of first lecture
      if (course.lectures.length > 0 && course.lectures[0].slides.length > 0) {
        setCurrentLectureId(course.lectures[0].id);
        setCurrentSlideId(course.lectures[0].slides[0].id);
      }
    }
  };

  const handleBackToHome = () => {
    setSelectedCourseId(null);
    setIsFullScreen(false);
  };

  // Navigation Logic
  const currentSlideIndex = allSlides.findIndex(s => s.id === currentSlideId);
  const hasNext = currentSlideIndex < allSlides.length - 1;
  const hasPrev = currentSlideIndex > 0;

  const handleNext = useCallback(() => {
    if (hasNext) {
      const nextSlide = allSlides[currentSlideIndex + 1];
      setCurrentLectureId(nextSlide.lectureId);
      setCurrentSlideId(nextSlide.id);
    }
  }, [hasNext, allSlides, currentSlideIndex]);

  const handlePrev = useCallback(() => {
    if (hasPrev) {
      const prevSlide = allSlides[currentSlideIndex - 1];
      setCurrentLectureId(prevSlide.lectureId);
      setCurrentSlideId(prevSlide.id);
    }
  }, [hasPrev, allSlides, currentSlideIndex]);

  const handleJumpToSlide = (lectureId: number, slideId: number) => {
    setCurrentLectureId(lectureId);
    setCurrentSlideId(slideId);
  };

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
        setIsFullScreen(true);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error("Error attempting to exit full-screen mode:", err);
      });
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard Nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCourseId) return;
      if (e.key === 'ArrowLeft') handleNext();
      if (e.key === 'ArrowRight') handlePrev();
      if (e.key === 'Escape') {
         if (isFullScreen && !document.fullscreenElement) {
           setIsFullScreen(false);
         }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isFullScreen, selectedCourseId]);

  // Mouse Wheel
  const wheelTimeout = useRef<number | null>(null);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!selectedCourseId || isSidebarOpen) return;
      if (wheelTimeout.current !== null) return;

      const target = e.target as HTMLElement;
      let isScrollingContent = false;
      let el: HTMLElement | null = target;

      while (el && el !== document.body) {
        if (el.scrollHeight > el.clientHeight) {
          const style = window.getComputedStyle(el);
          const overflowY = style.overflowY;
          if (overflowY === 'auto' || overflowY === 'scroll') {
             if (e.deltaY > 0) {
               if (Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) > 1) {
                 isScrollingContent = true;
                 break;
               }
             } else if (e.deltaY < 0) {
                if (el.scrollTop > 0) {
                  isScrollingContent = true;
                  break;
                }
             }
          }
        }
        el = el.parentElement;
      }

      if (isScrollingContent) return;

      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0 && hasNext) {
          handleNext();
          wheelTimeout.current = window.setTimeout(() => {
            wheelTimeout.current = null;
          }, 500);
        } else if (e.deltaY < 0 && hasPrev) {
          handlePrev();
          wheelTimeout.current = window.setTimeout(() => {
            wheelTimeout.current = null;
          }, 500);
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeout.current !== null) clearTimeout(wheelTimeout.current);
    };
  }, [isSidebarOpen, hasNext, hasPrev, handleNext, handlePrev, selectedCourseId]);


  // =================================================================
  // RENDER: HOME SCREEN (COURSE SELECTION)
  // =================================================================
  if (!selectedCourseId) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        {/* Simple Header */}
        <header className="bg-white shadow-sm py-6 px-8 flex items-center justify-center border-b border-slate-200">
           <div className="flex items-center gap-3 text-blue-900">
              <GraduationCap className="w-10 h-10" />
              <div className="text-center">
                <h1 className="text-2xl font-bold font-serif">المركز الجامعي نور البشير - البيض</h1>
                <p className="text-sm text-slate-500">أرضية التعليم عن بعد</p>
              </div>
           </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
             <h2 className="text-4xl font-bold text-slate-800 mb-4 font-serif">اختر المقياس الدراسي</h2>
             <p className="text-lg text-slate-600">يرجى اختيار المادة التعليمية للمتابعة</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full px-4">
            {COURSES.map(course => (
              <button
                key={course.id}
                onClick={() => handleCourseSelect(course.id)}
                className={`
                  group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 
                  text-right p-8 flex flex-col items-start h-64
                  ${course.colorTheme === 'blue' ? 'border-blue-100 hover:border-blue-500' : 'border-emerald-100 hover:border-emerald-500'}
                `}
              >
                {/* Icon Background */}
                <div className={`absolute -left-4 -bottom-4 opacity-5 transform group-hover:scale-110 transition-transform duration-500 ${course.colorTheme === 'blue' ? 'text-blue-900' : 'text-emerald-900'}`}>
                   {course.iconName === 'MessageCircle' ? <MessageCircle size={200} /> : <Scale size={200} />}
                </div>

                <div className="z-10 w-full">
                   <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white shadow-md
                      ${course.colorTheme === 'blue' ? 'bg-blue-600' : 'bg-emerald-600'}
                   `}>
                      {course.iconName === 'MessageCircle' ? <MessageCircle size={28} /> : <Scale size={28} />}
                   </div>
                   
                   <h3 className="text-2xl font-bold text-slate-800 mb-2 font-serif group-hover:text-blue-800 transition-colors">
                     {course.info.course}
                   </h3>
                   <p className="text-slate-500 mb-2 text-sm">{course.info.professor}</p>
                   <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
                     {course.info.description}
                   </p>
                </div>
                
                <div className={`mt-auto flex items-center gap-2 font-bold text-sm transition-all group-hover:translate-x-[-5px]
                   ${course.colorTheme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}
                `}>
                   <span>الدخول للدرس</span>
                   <ArrowRight size={16} className="rotate-180" />
                </div>
              </button>
            ))}
          </div>
        </main>

        <footer className="py-6 text-center text-slate-400 text-sm">
          © 2025 - 2026 معهد العلوم الإنسانية والاجتماعية
        </footer>
      </div>
    );
  }

  // =================================================================
  // RENDER: ACTIVE COURSE CONTENT
  // =================================================================
  if (!activeCourse || !currentSlide) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      {!isFullScreen && (
        <div className="relative">
            <Header 
            title={activeCourse.info.course}
            subtitle={activeCourse.info.professor}
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            {/* Back Button */}
            <button 
                onClick={handleBackToHome}
                className="absolute top-4 left-4 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors bg-white/80 px-3 py-1 rounded-full border border-slate-200 z-20"
            >
                <ArrowRight size={14} className="rotate-180" />
                <span>الرئيسية</span>
            </button>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        {!isFullScreen && (
          <Sidebar 
            lectures={activeCourse.lectures}
            currentLectureId={currentLectureId}
            currentSlideId={currentSlideId}
            onSelectSlide={handleJumpToSlide}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main 
          className={`
            flex-1 flex flex-col relative overflow-hidden bg-white transition-all duration-300
            ${isFullScreen 
              ? 'w-full h-full m-0 rounded-none border-0' 
              : 'm-4 rounded-2xl shadow-xl border border-slate-200'}
          `}
        >
          
          {/* Progress Bar */}
          <div className="h-1 bg-slate-100 w-full absolute top-0 left-0 z-10">
             <div 
               className={`h-full transition-all duration-300 ${activeCourse.colorTheme === 'blue' ? 'bg-blue-600' : 'bg-emerald-600'}`}
               style={{ width: `${((currentSlideIndex + 1) / allSlides.length) * 100}%` }}
             />
          </div>

          {/* Slide Container */}
          <div className="flex-1 overflow-hidden">
            <div key={currentSlideId} className="h-full animate-fade-in">
              <SlideContent data={currentSlide} />
            </div>
          </div>

          {/* Floating Exit Button for Full Screen */}
          {isFullScreen && (
            <button
              onClick={toggleFullScreen}
              className="fixed bottom-6 right-6 z-50 p-3 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-lg backdrop-blur-sm transition-all transform hover:scale-110"
              title="خروج من وضع العرض"
            >
              <Minimize className="w-6 h-6" />
            </button>
          )}

          {/* Footer / Controls - Hidden in Full Screen */}
          {!isFullScreen && (
            <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-3">
                 <button
                   onClick={handlePrev}
                   disabled={!hasPrev}
                   className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                     ${hasPrev 
                        ? `bg-white border border-slate-300 hover:bg-slate-50 shadow-sm ${activeCourse.colorTheme === 'blue' ? 'text-blue-800' : 'text-emerald-800'}` 
                        : 'text-slate-300 cursor-not-allowed'}
                   `}
                 >
                   <ChevronRight className="w-5 h-5" />
                   <span className="hidden sm:inline">السابق</span>
                 </button>
               </div>

               <div className="flex items-center gap-4">
                 <span className="text-slate-400 text-sm font-mono hidden sm:block">
                   {currentSlideIndex + 1} / {allSlides.length}
                 </span>
                 <button
                    onClick={toggleFullScreen}
                    className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-md transition-colors"
                    title="ملء الشاشة"
                 >
                    <Maximize className="w-5 h-5" />
                 </button>
               </div>

               <div className="flex items-center gap-3">
                 <button
                   onClick={handleNext}
                   disabled={!hasNext}
                   className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                     ${hasNext 
                        ? `text-white shadow-md hover:opacity-90 ${activeCourse.colorTheme === 'blue' ? 'bg-blue-600' : 'bg-emerald-600'}` 
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
                   `}
                 >
                   <span className="hidden sm:inline">التالي</span>
                   <ChevronLeft className="w-5 h-5" />
                 </button>
               </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
