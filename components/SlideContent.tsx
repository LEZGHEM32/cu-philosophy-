
import React, { useState } from 'react';
import { SlideData, SlideType, DiagramType, DiagramNode } from '../types';
import { 
  AlertCircle, CheckCircle2, XCircle, Scale, Brain, Lightbulb,
  MessageCircle, Globe, Users, Share2, GitFork, MoveDown, RefreshCcw,
  Award, Calculator, RefreshCw, ImageOff
} from 'lucide-react';

interface SlideContentProps {
  data: SlideData;
}

const SlideContent: React.FC<SlideContentProps> = ({ data }) => {
  const [quizSelected, setQuizSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // Assessment State
  const [userAnswers, setUserAnswers] = useState<{[key: number]: number}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    setQuizSelected(null);
    setShowAnswer(false);
    setActiveCard(null);
    setUserAnswers({});
    setIsSubmitted(false);
  }, [data.id]);

  // Helper to get icon component
  const getIcon = (name?: string, className?: string) => {
    const props = { className: className || "w-6 h-6" };
    switch (name) {
      case 'Brain': return <Brain {...props} />;
      case 'MessageCircle': return <MessageCircle {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Scale': return <Scale {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Book': return <div className={className}><Scale size={18} /></div>;
      case 'AlertCircle': return <AlertCircle {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'XCircle': return <XCircle {...props} />;
      case 'Star': return <Award {...props} />;
      default: return <Share2 {...props} />;
    }
  };

  // Helper for Mind Map Node Tooltip
  const [activeNodeDesc, setActiveNodeDesc] = useState<{label: string, desc: string} | null>(null);

  // Helper for Image Error Handling
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none'; // Hide the broken image
    e.currentTarget.parentElement?.classList.add('bg-slate-200', 'flex', 'items-center', 'justify-center');
    // Insert an icon instead
    const iconContainer = document.createElement('div');
    iconContainer.className = 'flex flex-col items-center text-slate-400 p-4';
    iconContainer.innerHTML = `<svg class="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-xs">الصورة غير متوفرة</span>`;
    e.currentTarget.parentElement?.appendChild(iconContainer);
  };

  const renderTitle = () => (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-fade-in">
      <div className="w-24 h-24 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4 shadow-inner">
        <Brain className="w-12 h-12" />
      </div>
      <h2 className="text-4xl font-bold text-slate-800 font-serif leading-relaxed max-w-3xl">
        {data.title}
      </h2>
      {data.subtitle && (
        <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed border-t border-slate-200 pt-6 mt-4">
          {data.subtitle}
        </p>
      )}
    </div>
  );

  const renderContent = () => (
    <div className="h-full flex flex-col">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 font-serif border-b pb-4 border-blue-100">
        {data.title}
      </h2>
      <div className="flex-1 overflow-y-auto pr-2">
        <div className={`flex flex-col lg:flex-row gap-6 ${data.imageUrl ? 'h-full' : ''}`}>
            {/* Image Section (Displayed on Left in RTL means last in DOM) */}
            {data.imageUrl && (
                <div className="lg:w-1/3 order-1 lg:order-2 flex flex-col gap-2">
                    <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white group bg-white min-h-[200px]">
                        <img 
                            src={data.imageUrl} 
                            alt={data.imageCaption || "صورة توضيحية"} 
                            onError={handleImageError}
                            className="w-full h-auto object-cover object-top max-h-72 lg:max-h-96 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    {data.imageCaption && (
                        <p className="text-center text-sm text-slate-500 font-medium italic bg-white py-1 px-3 rounded-full shadow-sm self-center border border-slate-100">
                            {data.imageCaption}
                        </p>
                    )}
                </div>
            )}

            {/* Text Content (Displayed on Right in RTL means first in DOM) */}
            <div className="flex-1 order-2 lg:order-1">
                <ul className="space-y-6">
                {Array.isArray(data.content) ? data.content.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100 transition hover:shadow-md hover:border-blue-100">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm border border-blue-100 shadow-inner">
                        {idx + 1}
                    </span>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">{point}</p>
                    </li>
                )) : (
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">{data.content}</p>
                )}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );

  const renderComparison = () => {
    if (!data.comparisonData) return null;
    return (
      <div className="h-full flex flex-col">
         <div className="flex items-center gap-3 mb-6 border-b pb-4 border-slate-200">
            <Scale className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800 font-serif">{data.title}</h2>
         </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6 h-full pb-2">
            {/* Right Side Data (Displayed on Right/Start) */}
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              {data.comparisonData.rightImage && (
                  <div className="mb-4 flex justify-center">
                      <img 
                        src={data.comparisonData.rightImage} 
                        alt={data.comparisonData.rightTitle} 
                        onError={handleImageError}
                        className="w-32 h-32 rounded-full object-cover object-top border-4 border-indigo-200 shadow-md bg-white"
                      />
                  </div>
              )}
              <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center bg-indigo-100 py-2 rounded-md shadow-sm">
                {data.comparisonData.rightTitle}
              </h3>
              <ul className="space-y-3 flex-1">
                {data.comparisonData.rightPoints.map((p, i) => (
                  <li key={i} className="flex gap-2 text-indigo-900">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Left Side Data (Displayed on Left/End) */}
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              {data.comparisonData.leftImage && (
                  <div className="mb-4 flex justify-center">
                      <img 
                        src={data.comparisonData.leftImage} 
                        alt={data.comparisonData.leftTitle} 
                        onError={handleImageError}
                        className="w-32 h-32 rounded-full object-cover object-top border-4 border-emerald-200 shadow-md bg-white"
                      />
                  </div>
              )}
              <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center bg-emerald-100 py-2 rounded-md shadow-sm">
                {data.comparisonData.leftTitle}
              </h3>
              <ul className="space-y-3 flex-1">
                {data.comparisonData.leftPoints.map((p, i) => (
                  <li key={i} className="flex gap-2 text-emerald-900">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderConceptCard = () => {
     if (!data.conceptData) return null;
     return (
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 font-serif border-b pb-4 border-slate-200">
            {data.title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3 flex-1 content-start overflow-y-auto pb-4">
            {data.conceptData.map((card, idx) => (
                <div 
                    key={idx}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveCard(activeCard === idx ? null : idx);
                      }
                    }}
                    className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 relative overflow-hidden ${
                        activeCard === idx 
                        ? 'bg-blue-600 border-blue-600 text-white transform scale-105 z-10 shadow-2xl ring-4 ring-blue-100' 
                        : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1'
                    }`}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className={`w-6 h-6 ${activeCard === idx ? 'text-yellow-300' : 'text-blue-600'}`} />
                        <h3 className="text-xl font-bold leading-tight">{card.term}</h3>
                    </div>
                    <p className={`text-sm mb-4 leading-relaxed ${activeCard === idx ? 'text-blue-100' : 'text-slate-600'}`}>
                        {card.definition}
                    </p>
                    {activeCard === idx && (
                         <ul className="text-sm space-y-2 list-none bg-blue-700 bg-opacity-50 p-3 rounded-lg animate-fade-in">
                            {card.details.map((d, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-blue-200 mt-1">•</span>
                                    <span>{d}</span>
                                </li>
                            ))}
                         </ul>
                    )}
                     {activeCard !== idx && (
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                             <span className="text-xs text-blue-500 font-bold bg-blue-50 px-3 py-1 rounded-full">اضغط للتفاصيل</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
     )
  };

  const renderDiagram = () => {
    if (!data.diagramData) return null;
    const { type, root, labels } = data.diagramData;

    // 1. MIND MAP RENDERER (REFACTORED: Tree/Cluster Layout)
    if (type === DiagramType.MIND_MAP && root) {
      return (
        <div className="h-full flex flex-col relative">
           {/* Modal for Node Description */}
           {activeNodeDesc && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in" onClick={() => setActiveNodeDesc(null)}>
                <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full m-4 border border-slate-200" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center gap-3 mb-4 text-blue-800 border-b pb-2">
                        <Lightbulb className="w-6 h-6" />
                        <h3 className="text-xl font-bold">{activeNodeDesc.label}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg">{activeNodeDesc.desc}</p>
                    <button 
                        onClick={() => setActiveNodeDesc(null)}
                        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold transition-colors shadow-md"
                    >
                        إغلاق
                    </button>
                </div>
            </div>
           )}

          <h2 className="text-3xl font-bold text-slate-800 mb-6 font-serif text-center border-b pb-4 border-slate-200">
            {data.title}
          </h2>
          
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col items-center justify-center min-h-full py-6 px-4">
                
                {/* Root Node */}
                <div className="relative z-10 mb-8 animate-fade-in">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-blue-100 transition-transform hover:scale-105">
                        {getIcon(root.icon, "w-12 h-12 mb-2 text-blue-200")}
                        <span className="font-bold text-xl text-center px-2 leading-tight">{root.label}</span>
                        {root.subLabel && <span className="text-xs text-blue-200 mt-1">{root.subLabel}</span>}
                    </div>
                    {/* Connector Line Down */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-slate-300"></div>
                </div>

                {/* Children Container */}
                <div className="w-full max-w-6xl">
                     {/* Visual Connector - Horizontal bar for desktop */}
                     <div className="hidden md:block w-3/4 mx-auto h-1 bg-slate-300 mb-8 rounded-full relative"></div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {root.children?.map((child, idx) => (
                             <button
                                key={child.id}
                                onClick={() => child.description && setActiveNodeDesc({label: child.label, desc: child.description})}
                                className={`
                                    relative flex flex-col items-center p-6 bg-white rounded-2xl border-2 shadow-md transition-all duration-300
                                    hover:-translate-y-2 hover:shadow-xl w-full sm:w-64 md:w-72 cursor-pointer text-center group
                                    border-${child.color || 'slate'}-100 hover:border-${child.color || 'blue'}-400
                                    animate-fade-in
                                `}
                                style={{ animationDelay: `${idx * 100}ms` }}
                             >
                                {/* Top connector point (visual) */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-slate-300 z-0 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                                    <div className={`w-2 h-2 rounded-full bg-${child.color || 'slate'}-400`}></div>
                                </div>

                                <div className={`p-4 rounded-full bg-${child.color || 'slate'}-50 text-${child.color || 'slate'}-600 mb-3 group-hover:scale-110 transition-transform`}>
                                    {getIcon(child.icon)}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{child.label}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{child.subLabel}</p>
                                
                                {child.description && (
                                    <div className="mt-4 py-1 px-3 bg-blue-50 text-blue-600 text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        اضغط للتفاصيل
                                    </div>
                                )}
                             </button>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
    }

    // 2. SEMANTIC TRIANGLE RENDERER
    if (type === DiagramType.TRIANGLE && labels) {
      return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-8 border-b pb-4 border-slate-200">
                 <h2 className="text-3xl font-bold text-slate-800 font-serif">{data.title}</h2>
                 {data.imageUrl && (
                     <div className="flex items-center gap-3 bg-white p-2 rounded-full shadow-sm border border-slate-100">
                        <span className="text-sm font-bold text-slate-600 hidden sm:block">{data.imageCaption}</span>
                        <img 
                            src={data.imageUrl} 
                            alt="Author" 
                            onError={handleImageError}
                            className="w-12 h-12 rounded-full object-cover object-top border-2 border-blue-200 bg-white" 
                        />
                     </div>
                 )}
            </div>
          
          <div className="flex-1 flex items-center justify-center relative">
             <div className="relative w-[600px] h-[400px]">
                {/* Triangle SVG Lines */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                   {/* Left Line (Solid) */}
                   <line x1="300" y1="50" x2="100" y2="350" stroke="#3b82f6" strokeWidth="4" />
                   {/* Right Line (Solid) */}
                   <line x1="300" y1="50" x2="500" y2="350" stroke="#3b82f6" strokeWidth="4" />
                   {/* Bottom Line (Dotted) */}
                   <line x1="120" y1="350" x2="480" y2="350" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 8" />
                   
                   <text x="300" y="370" textAnchor="middle" fill="#64748b" className="text-sm font-bold bg-white px-2">
                     {labels.bottomLabel}
                   </text>
                </svg>

                {/* Top Node: Thought */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 border-2 border-blue-500 p-4 rounded-xl shadow-lg w-48 text-center z-10">
                   <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                   <div className="font-bold text-blue-900">{labels.top}</div>
                </div>

                {/* Bottom Left: Symbol */}
                <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-indigo-100 border-2 border-indigo-500 p-4 rounded-xl shadow-lg w-40 text-center z-10">
                   <MessageCircle className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                   <div className="font-bold text-indigo-900">{labels.left}</div>
                </div>

                {/* Bottom Right: Referent */}
                <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-emerald-100 border-2 border-emerald-500 p-4 rounded-xl shadow-lg w-40 text-center z-10">
                   <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                   <div className="font-bold text-emerald-900">{labels.right}</div>
                </div>
             </div>
          </div>
        </div>
      );
    }

    // 3. BINARY SIGN (SAUSSURE)
    if (type === DiagramType.BINARY_SIGN && labels) {
        return (
            <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-8 border-b pb-4 border-slate-200">
                    <h2 className="text-3xl font-bold text-slate-800 font-serif">{data.title}</h2>
                    {data.imageUrl && (
                        <div className="flex items-center gap-3 bg-white p-2 rounded-full shadow-sm border border-slate-100">
                            <span className="text-sm font-bold text-slate-600 hidden sm:block">{data.imageCaption}</span>
                            <img 
                                src={data.imageUrl} 
                                alt="Saussure" 
                                onError={handleImageError}
                                className="w-12 h-12 rounded-full object-cover object-top border-2 border-blue-200 bg-white" 
                            />
                        </div>
                    )}
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-80 h-80 rounded-full bg-white border-8 border-slate-800 shadow-2xl flex flex-col overflow-hidden transform hover:scale-105 transition-transform">
                        {/* Top Half */}
                        <div className="flex-1 bg-blue-50 flex flex-col items-center justify-center p-4 border-b-2 border-slate-800 relative group">
                            <Brain className="w-8 h-8 text-blue-400 mb-1 opacity-50 absolute top-4 group-hover:opacity-100 transition-opacity" />
                            <span className="font-bold text-xl text-slate-800 z-10 relative">{labels.top}</span>
                        </div>
                        
                        {/* Bottom Half */}
                        <div className="flex-1 bg-amber-50 flex flex-col items-center justify-center p-4 relative group">
                            <span className="font-bold text-xl text-slate-800 z-10 relative">{labels.bottom}</span>
                            <MessageCircle className="w-8 h-8 text-amber-400 mt-1 opacity-50 absolute bottom-4 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Side Arrows */}
                        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                            <RefreshCcw className="w-10 h-10 text-slate-400 animate-spin-slow" />
                        </div>
                        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                            <RefreshCcw className="w-10 h-10 text-slate-400 animate-spin-slow" />
                        </div>
                    </div>
                    <div className="absolute bottom-10 text-slate-500 font-medium bg-white px-4 py-1 rounded-full shadow-sm">
                        وجهان لعملة واحدة (لا ينفصلان)
                    </div>
                </div>
            </div>
        );
    }
    
    // 4. FLOWCHART (Generic)
    if (type === DiagramType.FLOWCHART && root) {
        return (
            <div className="h-full flex flex-col">
                <h2 className="text-3xl font-bold text-slate-800 mb-4 font-serif">{data.title}</h2>
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    {/* Start Node */}
                    <div className={`p-4 rounded-lg bg-${root.color}-100 border-2 border-${root.color}-500 shadow-md text-center min-w-[200px]`}>
                        <div className="flex justify-center mb-2">{getIcon(root.icon, `w-6 h-6 text-${root.color}-600`)}</div>
                        <span className="font-bold text-slate-800">{root.label}</span>
                    </div>

                    <MoveDown className="w-6 h-6 text-slate-400" />
                    
                    {/* Children as Steps */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {root.children?.map((child, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`p-4 rounded-lg bg-${child.color}-50 border border-${child.color}-200 shadow-sm text-center w-48 hover:scale-105 transition-transform`}>
                                    <div className="flex justify-center mb-2">{getIcon(child.icon, `w-5 h-5 text-${child.color}-600`)}</div>
                                    <span className="font-bold text-slate-800 block mb-1">{child.label}</span>
                                    <span className="text-xs text-slate-500">{child.subLabel}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return <div className="text-red-500">Diagram type not supported</div>;
  };

  const renderQuiz = () => {
    if (!data.quizData) return null;
    
    const handleOptionClick = (id: string) => {
      if (showAnswer) return;
      setQuizSelected(id);
      setShowAnswer(true);
    };

    const currentSelection = data.quizData.options.find(o => o.id === quizSelected);
    const isCorrect = currentSelection?.isCorrect;

    return (
      <div className="h-full flex flex-col justify-center max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-yellow-400" />
              {data.title}
            </h2>
          </div>
          
          <div className="p-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 leading-relaxed">
              {data.quizData.question}
            </h3>

            <div className="space-y-4">
              {data.quizData.options.map((option) => {
                let btnClass = "w-full p-4 rounded-lg border-2 text-right transition-all flex items-center justify-between group ";
                if (showAnswer) {
                  if (option.isCorrect) btnClass += "bg-green-50 border-green-500 text-green-800";
                  else if (quizSelected === option.id) btnClass += "bg-red-50 border-red-500 text-red-800";
                  else btnClass += "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
                } else {
                  btnClass += "bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700";
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    disabled={showAnswer}
                    className={btnClass}
                  >
                    <span>{option.text}</span>
                    {showAnswer && option.isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    {showAnswer && !option.isCorrect && quizSelected === option.id && <XCircle className="w-5 h-5 text-red-600" />}
                  </button>
                );
              })}
            </div>

            {showAnswer && (
              <div className={`mt-6 p-4 rounded-lg text-sm leading-relaxed animate-fade-in ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-900'}`}>
                <strong>{isCorrect ? 'أحسنت!' : 'إجابة خاطئة.'}</strong> {data.quizData.explanation}
              </div>
            )}
          </div>
          
          <div className="bg-slate-50 p-4 text-center text-slate-500 text-sm border-t">
            اختر الإجابة الصحيحة للتحقق
          </div>
        </div>
      </div>
    );
  };

  const renderFinalAssessment = () => {
    if (!data.assessmentData) return null;
    const { questions, passingScore } = data.assessmentData;
    const totalQuestions = questions.length;
    
    // Calculate Score
    const score = Object.keys(userAnswers).reduce((acc, qId) => {
        const question = questions.find(q => q.id === parseInt(qId));
        if (question && userAnswers[parseInt(qId)] === question.correctAnswerIndex) {
            return acc + 1;
        }
        return acc;
    }, 0);
    
    // Normalized Score out of 20
    const finalGrade = Math.round((score / totalQuestions) * 20);

    const handleSelect = (qId: number, optionIdx: number) => {
        if (isSubmitted) return;
        setUserAnswers(prev => ({...prev, [qId]: optionIdx}));
    }

    if (isSubmitted) {
        return (
            <div className="h-full flex flex-col items-center justify-center animate-fade-in p-8">
                <div className="bg-white rounded-3xl shadow-2xl border-4 border-blue-100 p-10 text-center max-w-2xl w-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                    
                    <div className="mb-6 flex justify-center">
                         {finalGrade >= passingScore ? (
                             <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                 <Award size={60} />
                             </div>
                         ) : (
                             <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                                 <AlertCircle size={60} />
                             </div>
                         )}
                    </div>

                    <h2 className="text-3xl font-bold text-slate-800 mb-2 font-serif">نتيجة الامتحان النهائي</h2>
                    <p className="text-slate-500 mb-6">مقياس {data.title.split(':')[1]}</p>

                    <div className="text-6xl font-bold mb-2 text-blue-900 tracking-tight">
                        {finalGrade}<span className="text-2xl text-slate-400">/20</span>
                    </div>
                    
                    <div className={`inline-block px-6 py-2 rounded-full font-bold text-lg mb-8 ${
                        finalGrade >= 16 ? 'bg-emerald-100 text-emerald-800' :
                        finalGrade >= passingScore ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                    }`}>
                        {finalGrade >= 16 ? 'تقدير ممتاز' :
                         finalGrade >= 13 ? 'تقدير جيد جداً' :
                         finalGrade >= passingScore ? 'ناجح' : 'راسب - حاول مرة أخرى'}
                    </div>

                    <div className="flex justify-center">
                        <button 
                            onClick={() => {
                                setIsSubmitted(false);
                                setUserAnswers({});
                            }}
                            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors shadow-lg"
                        >
                            <RefreshCw size={20} />
                            <span>إعادة الاختبار</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col">
            <div className="bg-slate-900 text-white p-6 rounded-t-xl flex justify-between items-center shadow-md sticky top-0 z-20">
                <div className="flex items-center gap-3">
                   <Calculator className="text-emerald-400" />
                   <div>
                       <h2 className="text-2xl font-bold font-serif">{data.title}</h2>
                       <p className="text-sm text-slate-400">أجب عن جميع الأسئلة ({totalQuestions} أسئلة)</p>
                   </div>
                </div>
                <div className="text-xl font-mono bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                    {Object.keys(userAnswers).length} / {totalQuestions}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50">
                {questions.map((q, idx) => (
                    <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <div className="flex gap-4 mb-4">
                            <span className="w-8 h-8 flex-shrink-0 bg-blue-100 text-blue-700 font-bold rounded-lg flex items-center justify-center">
                                {idx + 1}
                            </span>
                            <h3 className="text-lg font-bold text-slate-800 leading-relaxed mt-1">{q.question}</h3>
                        </div>
                        <div className="space-y-2 mr-12">
                            {q.options.map((opt, optIdx) => (
                                <label 
                                    key={optIdx} 
                                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                        userAnswers[q.id] === optIdx 
                                        ? 'border-blue-500 bg-blue-50' 
                                        : 'border-slate-100 hover:bg-slate-50 hover:border-slate-300'
                                    }`}
                                >
                                    <input 
                                        type="radio" 
                                        name={`q-${q.id}`} 
                                        checked={userAnswers[q.id] === optIdx}
                                        onChange={() => handleSelect(q.id, optIdx)}
                                        className="w-5 h-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                    />
                                    <span className="text-slate-700 font-medium">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-white border-t border-slate-200 sticky bottom-0 z-20 flex justify-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <button
                    onClick={() => setIsSubmitted(true)}
                    disabled={Object.keys(userAnswers).length < totalQuestions}
                    className={`
                        px-12 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95
                        ${Object.keys(userAnswers).length === totalQuestions 
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl' 
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
                    `}
                >
                    إرسال الإجابات والحصول على النتيجة
                </button>
            </div>
        </div>
    );
  };

  return (
    <div className="h-full w-full p-6 lg:p-12 overflow-hidden">
      {data.type === SlideType.TITLE && renderTitle()}
      {data.type === SlideType.CONTENT && renderContent()}
      {data.type === SlideType.COMPARISON && renderComparison()}
      {data.type === SlideType.CONCEPT_CARD && renderConceptCard()}
      {data.type === SlideType.DIAGRAM && renderDiagram()}
      {data.type === SlideType.QUIZ && renderQuiz()}
      {data.type === SlideType.FINAL_ASSESSMENT && renderFinalAssessment()}
    </div>
  );
};

export default SlideContent;
