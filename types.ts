
export enum SlideType {
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  COMPARISON = 'COMPARISON',
  TIMELINE = 'TIMELINE',
  QUIZ = 'QUIZ',
  CONCEPT_CARD = 'CONCEPT_CARD',
  DIAGRAM = 'DIAGRAM',
  FINAL_ASSESSMENT = 'FINAL_ASSESSMENT' // New type for final exams
}

export enum DiagramType {
  MIND_MAP = 'MIND_MAP',     // Central idea with radiating branches
  TRIANGLE = 'TRIANGLE',     // Specifically for Semantic Triangle (Word-Thought-Thing)
  BINARY_SIGN = 'BINARY_SIGN', // Saussure's Sign (Signifier/Signified)
  FLOWCHART = 'FLOWCHART',    // Linear or branching process
  PYRAMID = 'PYRAMID'        // Hierarchical structure
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizData {
  question: string;
  options: QuizOption[];
  explanation: string;
}

// New Interface for Final Assessment
export interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0-based index
}

export interface AssessmentData {
  questions: AssessmentQuestion[];
  passingScore: number; // e.g., 10 out of 20
}

export interface DiagramNode {
  id: string;
  label: string;
  subLabel?: string;
  icon?: string; // Lucide icon name
  color?: string; // Tailwind color class (e.g., 'blue')
  description?: string; // Detailed description for tooltip/modal
  children?: DiagramNode[];
}

export interface DiagramData {
  type: DiagramType;
  root?: DiagramNode; // For Mind Map / Flowchart
  labels?: { [key: string]: string }; // For fixed structures like Triangle
}

export interface SlideData {
  id: number;
  lectureId: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string | string[];
  imageUrl?: string; // URL for the philosopher's image
  imageCaption?: string; // Caption for the image
  comparisonData?: {
    leftTitle: string;
    leftPoints: string[];
    leftImage?: string; // Image for left side comparison
    rightTitle: string;
    rightPoints: string[];
    rightImage?: string; // Image for right side comparison
  };
  conceptData?: {
    term: string;
    definition: string;
    details: string[];
  }[];
  diagramData?: DiagramData;
  quizData?: QuizData;
  assessmentData?: AssessmentData; // Data for the final exam
}

export interface Lecture {
  id: number;
  title: string;
  slides: SlideData[];
}

export interface CourseInfo {
  university: string;
  institute: string;
  course: string;
  target: string;
  professor: string;
  year: string;
  description?: string;
}

export interface Course {
  id: string;
  info: CourseInfo;
  lectures: Lecture[];
  iconName: string; // 'BookA' | 'Scale' etc.
  colorTheme: string; // 'blue' | 'emerald' etc.
}
