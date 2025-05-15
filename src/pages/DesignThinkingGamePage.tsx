import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh, Color } from 'three';
import Layout from '../components/layout/Layout.tsx';
import { useTheme } from '../contexts/ThemeHooks.tsx';

// Enhanced colors for a modern aesthetic
const nodeColors = {
  empathy: new Color('#4facfe'),      // bright blue
  reasoning: new Color('#b465da'),    // rich purple
  materialization: new Color('#43e97b'), // vivid green
  orbit: new Color('#e0c3fc'),        // soft lavender for orbits
  energy: new Color('#f093fb'),       // energetic pink
  correct: new Color('#4CD964'),      // success green
  incorrect: new Color('#FF3B30'),    // error red
  inactive: new Color('#7f8c8d').multiplyScalar(0.5), // muted gray
};

// Game phase types
type GamePhase = 
  | 'introduction'
  | 'playing'
  | 'result'
  | 'complete';

// Design thinking stages with descriptions, tasks, and solutions
interface DesignThinkingStage {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  darkColor: string;
  tasks: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

const DesignThinkingGamePage = () => {
  const { isDarkMode } = useTheme();
  const [gamePhase, setGamePhase] = useState<GamePhase>('introduction');
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Design thinking stages with questions and tasks
  const designThinkingStages: DesignThinkingStage[] = [
    {
      id: 'empathy',
      title: 'Empatia',
      icon: '👂',
      color: '#D2CDE8',
      darkColor: '#9183d0',
      description: 'Zrozumienie potrzeb, pragnień i wyzwań ludzi dla których projektujemy.',
      tasks: [
        {
          question: 'Który z poniższych elementów NIE jest częścią etapu "Empatia" w procesie Design Thinking?',
          options: [
            'Obserwacja zachowań użytkowników',
            'Przeprowadzanie wywiadów z użytkownikami',
            'Tworzenie szybkich prototypów',
            'Tworzenie map empatii'
          ],
          correctIndex: 2,
          explanation: 'Tworzenie szybkich prototypów jest częścią etapu "Materializacja", a nie "Empatia". Etap empatii skupia się na zrozumieniu problemów i potrzeb użytkowników poprzez obserwacje, wywiady i analizę ich zachowań.'
        },
        {
          question: 'Która technika najlepiej pomoże Ci zrozumieć emocjonalną podróż użytkownika?',
          options: [
            'Mapa podróży użytkownika (User Journey Map)',
            'Diagram przepływu danych',
            'Plan sprintu projektowego',
            'Matryca priorytetów'
          ],
          correctIndex: 0,
          explanation: 'Mapa podróży użytkownika (User Journey Map) to wizualne przedstawienie doświadczeń użytkownika podczas korzystania z produktu lub usługi, które pomaga zrozumieć jego emocje, problemy i potrzeby na każdym etapie interakcji.'
        }
      ]
    },
    {
      id: 'reasoning',
      title: 'Rozumowanie',
      icon: '🧠',
      color: '#B5A9DC',
      darkColor: '#7c68c8',
      description: 'Analiza informacji, definiowanie problemów i identyfikacja możliwości innowacji.',
      tasks: [
        {
          question: 'Co jest głównym celem etapu "Rozumowanie" w procesie Design Thinking?',
          options: [
            'Testowanie gotowych rozwiązań z użytkownikami',
            'Synteza zebranych informacji i zdefiniowanie problemu',
            'Szybka implementacja pierwszego pomysłu',
            'Wypracowanie szczegółowej dokumentacji technicznej'
          ],
          correctIndex: 1,
          explanation: 'Głównym celem etapu "Rozumowanie" jest analiza i synteza informacji zebranych w etapie "Empatia", aby zdefiniować konkretny problem projektowy, który będzie podstawą do generowania pomysłów.'
        },
        {
          question: 'Która technika jest szczególnie przydatna w definiowaniu problemu projektowego?',
          options: [
            'A/B testing',
            'Sprint design',
            'Point of View (POV)',
            'User story mapping'
          ],
          correctIndex: 2,
          explanation: 'Point of View (POV) to technika pomagająca sformułować problem projektowy w formie konkretnego stwierdzenia z perspektywy użytkownika, które łączy informacje o użytkowniku, jego potrzebach i spostrzeżeniach.'
        }
      ]
    },
    {
      id: 'materialization',
      title: 'Materializacja',
      icon: '✨',
      color: '#8371C7',
      darkColor: '#6854b2',
      description: 'Przekształcanie pomysłów w namacalne prototypy, testowanie koncepcji i udoskonalanie rozwiązań.',
      tasks: [
        {
          question: 'Jaki jest główny cel tworzenia prototypów w etapie "Materializacja"?',
          options: [
            'Przygotowanie ostatecznej wersji produktu',
            'Wizualizacja pomysłu w celu przetestowania go z użytkownikami',
            'Imponowanie klientowi zaawansowaną technologią',
            'Tworzenie dokładnej dokumentacji technicznej'
          ],
          correctIndex: 1,
          explanation: 'Głównym celem prototypowania jest szybka wizualizacja pomysłów, aby można je było przetestować z użytkownikami, zebrać feedback i iteracyjnie ulepszać rozwiązanie, zanim zainwestuje się w pełną implementację.'
        },
        {
          question: 'Która z zasad NIE jest kluczowa dla etapu "Materializacja"?',
          options: [
            'Szybkie testowanie i iteracja',
            'Rozpoczynanie od prostych prototypów',
            'Koncentracja na idealnym pierwszym prototypie',
            'Uczenie się z niepowodzeń'
          ],
          correctIndex: 2,
          explanation: 'Koncentracja na idealnym pierwszym prototypie jest przeciwna do zasad etapu materializacji. W tym etapie kluczowe jest szybkie tworzenie prototypów, uczenie się z błędów i ciągłe iterowanie, zamiast dążenia do perfekcji od razu.'
        }
      ]
    }
  ];

  // Calculate total number of questions on component mount
  useEffect(() => {
    let total = 0;
    designThinkingStages.forEach((stage) => {
      total += stage.tasks.length;
    });
    setTotalQuestions(total);
  }, [designThinkingStages]);

  // Handle option selection
  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const currentStage = designThinkingStages[currentStageIndex];
    const currentTask = currentStage.tasks[currentTaskIndex];
    
    const correct = optionIndex === currentTask.correctIndex;
    setIsCorrect(correct);
    
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
    
    setShowExplanation(true);
  };

  // Move to the next task or stage
  const handleNextTask = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setShowExplanation(false);
    
    const currentStage = designThinkingStages[currentStageIndex];
    
    // If there are more tasks in current stage
    if (currentTaskIndex < currentStage.tasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      // Move to next stage
      if (currentStageIndex < designThinkingStages.length - 1) {
        setCurrentStageIndex(currentStageIndex + 1);
        setCurrentTaskIndex(0);
      } else {
        // Game completed
        setGamePhase('result');
      }
    }
  };

  // Reset the game
  const resetGame = () => {
    setCurrentStageIndex(0);
    setCurrentTaskIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowExplanation(false);
    setGamePhase('introduction');
  };

  // Start the game
  const startGame = () => {
    setGamePhase('playing');
  };

  // Get current stage and task
  const currentStage = designThinkingStages[currentStageIndex];
  const currentTask = currentStage?.tasks[currentTaskIndex];

  // Get progress percentage
  const getProgressPercentage = () => {
    let completedTasks = 0;
    
    // Count completed tasks in previous stages
    for (let i = 0; i < currentStageIndex; i++) {
      completedTasks += designThinkingStages[i].tasks.length;
    }
    
    // Add tasks completed in current stage
    completedTasks += currentTaskIndex;
    
    return (completedTasks / totalQuestions) * 100;
  };

  return (
    <Layout>
      {/* Hero Section with animated background */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e]' : 'bg-gradient-to-b from-[#f0f0ff] to-[#e6e6ff]'}`}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute w-full h-full">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full opacity-30 ${isDarkMode ? 'bg-flid-accent' : 'bg-flid-accent'}`}
                style={{
                  width: Math.random() * 300 + 80,
                  height: Math.random() * 300 + 80,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Overlay to improve text readability */}
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-flid-dark/50' : 'bg-white/30'} backdrop-blur-sm`}></div>
        </div>

        <div className="container max-w-6xl relative z-10 text-center px-4">
          <motion.h1 
            className={`text-5xl md:text-7xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-flid-accent">Design Thinking</span> Game
          </motion.h1>
          
          <motion.p 
            className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Wyzwanie dla wszystkich, którzy chcą sprawdzić swoją wiedzę na temat procesu Design Thinking i jego kluczowych etapów.
          </motion.p>
        </div>
      </section>

      {/* Game Content */}
      <section className={`py-0 px-0 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="w-full mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Game Visualization - Now taking full height on the left side */}
            <div className={`lg:w-1/2 h-[650px] lg:h-[calc(100vh-80px)] ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
                <color attach="background" args={[isDarkMode ? '#121212' : '#f8f9fa']} />
                <fog attach="fog" args={[isDarkMode ? '#121212' : '#f8f9fa', 15, 35]} />
                
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
                <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
                
                <Stars radius={100} depth={50} count={2000} factor={5} fade speed={1} />
                
                <DesignThinkingGameVisualization 
                  currentStage={currentStage?.id || 'empathy'} 
                  isCorrect={isCorrect}
                  gamePhase={gamePhase}
                  progress={getProgressPercentage()}
                />
                
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false} 
                  rotateSpeed={0.3}
                  autoRotate={gamePhase !== 'playing'} 
                  autoRotateSpeed={0.5}
                />
              </Canvas>
            </div>
              {/* Game Interface - Now on the right side */}
            <div className={`lg:w-1/2 lg:h-[calc(100vh-80px)] overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 lg:p-12`}>
              <AnimatePresence mode="wait">
                {/* Introduction Screen */}
                {gamePhase === 'introduction' && (                <motion.div 
                  key="introduction"
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                    Jak dobrze znasz proces Design Thinking?
                  </h2>
                  
                  <p className={`mb-10 text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    W tej grze sprawdzisz swoją wiedzę o trzech kluczowych etapach procesu projektowego: 
                    Empatii, Rozumowaniu i Materializacji. Odpowiedz na pytania i odkryj, jak dobrze znasz 
                    metodologię Design Thinking.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                    {designThinkingStages.map((stage) => (
                      <motion.div 
                        key={stage.id}
                        className={`p-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: stage.id === 'empathy' ? 0.2 : stage.id === 'reasoning' ? 0.4 : 0.6 }}
                      >
                        <div className="text-5xl mb-6">{stage.icon}</div>
                        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                          {stage.title}
                        </h3>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {stage.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="bg-flid-accent hover:bg-flid-accent/90 text-white text-lg font-medium py-4 px-10 rounded-xl shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startGame}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Rozpocznij grę
                  </motion.button>
                </motion.div>
                )}
                
                {/* Game Screen */}
                {gamePhase === 'playing' && currentTask && (
                  <motion.div 
                    key="playing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >                  {/* Progress bar */}
                  <div className="mb-10">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <span className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                          Etap: 
                        </span>
                        <span className={`ml-2 px-3 py-1 rounded-md text-lg font-medium ${
                          currentStage.id === 'empathy'
                            ? 'bg-blue-500/20 text-blue-500'
                            : currentStage.id === 'reasoning'
                              ? 'bg-purple-500/20 text-purple-500'
                              : 'bg-green-500/20 text-green-500'
                        }`}>
                          {currentStage.title}
                        </span>
                      </div>
                      <span className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {Math.round(getProgressPercentage())}% ukończone
                      </span>
                    </div>
                    <div className={`h-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <motion.div 
                        className={`h-3 rounded-full ${
                          currentStage.id === 'empathy'
                            ? 'bg-blue-500'
                            : currentStage.id === 'reasoning'
                              ? 'bg-purple-500'
                              : 'bg-green-500'
                        }`}
                        initial={{ width: `${getProgressPercentage()}%` }}
                        animate={{ width: `${getProgressPercentage()}%` }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                        {/* Question */}
                  <div className="mb-10">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                      {currentTask.question}
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-5">
                      {currentTask.options.map((option, index) => (
                        <motion.button
                          key={index}
                          className={`p-5 rounded-xl text-left transition-all duration-300 border-2 ${
                            selectedOption === null
                              ? isDarkMode 
                                ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' 
                                : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                              : selectedOption === index
                                ? isCorrect
                                  ? 'bg-green-500/20 border-green-500'
                                  : 'bg-red-500/20 border-red-500'
                                : index === currentTask.correctIndex && showExplanation
                                  ? 'bg-green-500/20 border-green-500'
                                  : isDarkMode 
                                    ? 'bg-gray-700 border-gray-600' 
                                    : 'bg-gray-50 border-gray-200'
                          }`}
                          disabled={selectedOption !== null}
                          whileHover={selectedOption === null ? { scale: 1.02, y: -5 } : {}}
                          whileTap={selectedOption === null ? { scale: 0.98 } : {}}
                          onClick={() => handleOptionSelect(index)}
                        >
                          <div className="flex items-start">
                            <span className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 mt-0.5 flex-shrink-0 ${
                              selectedOption === null
                                ? isDarkMode 
                                  ? 'bg-gray-600 text-white' 
                                  : 'bg-white text-gray-700 border border-gray-300'
                                : selectedOption === index
                                  ? isCorrect
                                    ? 'bg-green-500 text-white'
                                    : 'bg-red-500 text-white'
                                  : index === currentTask.correctIndex && showExplanation
                                    ? 'bg-green-500 text-white'
                                    : isDarkMode 
                                      ? 'bg-gray-600 text-white' 
                                      : 'bg-white text-gray-700 border border-gray-300'
                            }`}>
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span className={`text-lg ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                              {option}
                            </span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                        {/* Explanation */}
                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className={`mb-10 p-6 rounded-xl shadow-lg border-2 ${
                          isCorrect 
                            ? isDarkMode ? 'bg-green-900/30 border-green-500/50' : 'bg-green-50 border-green-500/50'
                            : isDarkMode ? 'bg-red-900/30 border-red-500/50' : 'bg-red-50 border-red-500/50'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-5 ${
                            isCorrect
                              ? isDarkMode ? 'bg-green-500/30 text-green-400' : 'bg-green-200 text-green-600'
                              : isDarkMode ? 'bg-red-500/30 text-red-400' : 'bg-red-200 text-red-600'
                          }`}>
                            {isCorrect ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h4 className={`text-xl font-bold mb-3 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                              {isCorrect ? 'Poprawna odpowiedź!' : 'Niepoprawna odpowiedź'}
                            </h4>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {currentTask.explanation}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                        {/* Continue Button */}
                  <div className="flex justify-end">
                    <motion.button
                      className={`${
                        showExplanation
                          ? 'bg-flid-accent hover:bg-flid-accent/90'
                          : isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-200'
                      } text-white text-lg font-medium py-4 px-10 rounded-xl shadow-lg transition-all duration-300 flex items-center`}
                      whileHover={showExplanation ? { scale: 1.05, x: 5 } : {}}
                      whileTap={showExplanation ? { scale: 0.95 } : {}}
                      onClick={handleNextTask}
                      disabled={!showExplanation}
                    >
                      Dalej
                      {showExplanation && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </motion.button>
                  </div>
                  </motion.div>
                )}
                
                {/* Results Screen */}
                {gamePhase === 'result' && (                <motion.div 
                  key="result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <motion.h2 
                    className={`text-4xl md:text-5xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Gratulacje!
                  </motion.h2>
                  
                  <motion.div 
                    className={`p-10 mb-10 rounded-2xl shadow-lg border-2 ${isDarkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.div 
                      className="text-7xl mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 1, delay: 0.8 }}
                    >
                      {score > totalQuestions * 0.7 ? '🏆' : score > totalQuestions * 0.4 ? '🎯' : '📚'}
                    </motion.div>
                    
                    <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                      Twój wynik: {score} / {totalQuestions}
                    </h3>
                    
                    <p className={`mb-8 text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {score > totalQuestions * 0.7 
                        ? 'Świetna robota! Jesteś ekspertem Design Thinking!'
                        : score > totalQuestions * 0.4
                          ? 'Dobry wynik! Rozumiesz podstawy procesu Design Thinking.'
                          : 'Dobry początek! Kontynuuj naukę o procesie Design Thinking.'}
                    </p>
                    
                    <div className="w-full max-w-lg mx-auto bg-gray-200 rounded-full h-6 mb-8">
                      <motion.div 
                        className="bg-flid-accent h-6 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(score / totalQuestions) * 100}%` }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                      ></motion.div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-4">                      {designThinkingStages.map((stage) => (
                        <div key={stage.id} className="text-center">
                          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2 ${
                            isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                          }`}>
                            <span className="text-3xl">{stage.icon}</span>
                          </div>
                          <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {stage.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <div className="flex flex-wrap justify-center gap-6">
                    <motion.button
                      className="bg-flid-accent hover:bg-flid-accent/90 text-white text-lg font-medium py-4 px-10 rounded-xl shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetGame}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      Zagraj ponownie
                    </motion.button>
                    
                    <motion.a
                      href="/process"
                      className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${isDarkMode ? 'text-white' : 'text-gray-800'} text-lg font-medium py-4 px-10 rounded-xl shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Więcej o procesie Design Thinking
                    </motion.a>
                  </div>
                </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// 3D visualization for the game
const DesignThinkingGameVisualization = ({ 
  currentStage,
  isCorrect,
  gamePhase,
  progress
}: { 
  currentStage: string;
  isCorrect: boolean | null;
  gamePhase: GamePhase;
  progress: number;
}) => {
  // Triangle layout positions calculation
  const radius = 7; // Distance from center
  const empathyPos = [0, radius * Math.sqrt(3) / 2, 0]; // Top
  const reasoningPos = [-radius / 2, -radius * Math.sqrt(3) / 4, 0]; // Bottom left
  const materializationPos = [radius / 2, -radius * Math.sqrt(3) / 4, 0]; // Bottom right
  
  // Reference for the scene group
  const sceneRef = useRef<THREE.Group>(null);
  
  // Animation for the scene
  useFrame((state) => {
    if (sceneRef.current) {
      const time = state.clock.getElapsedTime();
      sceneRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
      sceneRef.current.rotation.x = Math.sin(time * 0.08) * 0.03;
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Triangle outline */}
      <TriangleConnection 
        points={[empathyPos, reasoningPos, materializationPos]} 
        progress={progress}
        gamePhase={gamePhase}
      />
      
      {/* Process nodes */}
      <ProcessNode 
        position={empathyPos} 
        active={currentStage === 'empathy'}
        correct={currentStage === 'empathy' ? isCorrect : null}
        color={nodeColors.empathy}
        label="Empatia"
        gamePhase={gamePhase}
      />
      
      <ProcessNode 
        position={reasoningPos} 
        active={currentStage === 'reasoning'}
        correct={currentStage === 'reasoning' ? isCorrect : null}
        color={nodeColors.reasoning}
        label="Rozumowanie"
        gamePhase={gamePhase}
      />
      
      <ProcessNode 
        position={materializationPos} 
        active={currentStage === 'materialization'}
        correct={currentStage === 'materialization' ? isCorrect : null}
        color={nodeColors.materialization}
        label="Materializacja"
        gamePhase={gamePhase}
      />
      
      {/* Energy flow between nodes based on game progress */}
      {gamePhase === 'playing' && progress > 33 && (
        <EnergyFlow 
          from={empathyPos} 
          to={reasoningPos} 
          color={nodeColors.energy}
        />
      )}
      
      {gamePhase === 'playing' && progress > 66 && (
        <EnergyFlow 
          from={reasoningPos} 
          to={materializationPos} 
          color={nodeColors.energy}
        />
      )}
      
      {gamePhase === 'result' && (
        <>
          <EnergyFlow 
            from={empathyPos} 
            to={reasoningPos} 
            color={nodeColors.energy}
          />
          <EnergyFlow 
            from={reasoningPos} 
            to={materializationPos} 
            color={nodeColors.energy}
          />
          <EnergyFlow 
            from={materializationPos} 
            to={empathyPos} 
            color={nodeColors.energy}
          />
        </>
      )}
    </group>
  );
};

// Triangle connection between process nodes
const TriangleConnection = ({ 
  points,
  progress = 0,
  gamePhase
}: { 
  points: number[][];
  progress?: number;
  gamePhase: GamePhase;
}) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.z = Math.sin(time * 0.2) * 0.01;
    }
  });

  // Calculate progress to show only parts of the triangle
  const showFullTriangle = gamePhase === 'result' || gamePhase === 'introduction';
  const showSecondEdge = progress > 33 || showFullTriangle;
  const showThirdEdge = progress > 66 || showFullTriangle;

  return (
    <group ref={ref}>
      {/* Draw lines connecting the points */}
      <mesh>
        <lineSegments>
          <bufferGeometry>            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  // First edge (always visible)
                  points[0][0], points[0][1], points[0][2],
                  points[1][0], points[1][1], points[1][2],
                  
                  // Second edge
                  ...(showSecondEdge ? [
                    points[1][0], points[1][1], points[1][2],
                    points[2][0], points[2][1], points[2][2]
                  ] : [0, 0, 0, 0, 0, 0]),
                  
                  // Third edge
                  ...(showThirdEdge ? [
                    points[2][0], points[2][1], points[2][2],
                    points[0][0], points[0][1], points[0][2]
                  ] : [0, 0, 0, 0, 0, 0])
                ]),
                3,
                false
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
        </lineSegments>
      </mesh>
    </group>
  );
};

// Process node component
const ProcessNode = ({ 
  position,
  active,
  correct,
  color,
  label,
  gamePhase
}: { 
  position: number[];
  active: boolean;
  correct: boolean | null;
  color: Color;
  label: string;
  gamePhase: GamePhase;
}) => {
  // References for animation
  const groupRef = useRef<THREE.Group>(null);
  const nodeRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);
  
  // Get the actual color based on state
  const getNodeColor = () => {
    if (active) {
      if (correct === null) return color;
      return correct ? nodeColors.correct : nodeColors.incorrect;
    }
    return nodeColors.inactive;
  };
  
  // Node animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (nodeRef.current) {
      // Pulsate if active
      if (active) {
        nodeRef.current.scale.setScalar(1.0 + Math.sin(time * 2) * 0.1);
      } else {
        nodeRef.current.scale.setScalar(0.8);
      }
    }
    
    if (glowRef.current && glowRef.current.material) {
      // Glow animation
      const material = glowRef.current.material as THREE.Material & { opacity: number };
      if (active) {
        material.opacity = 0.3 + Math.sin(time * 1.5) * 0.1;
      } else {
        material.opacity = 0.1;
      }
    }
    
    if (groupRef.current) {
      // Slight hovering movement
      groupRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.2;
    }
  });

  return (
    <group position={[position[0], position[1], position[2]]} ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Main Node */}
        <mesh ref={nodeRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshPhysicalMaterial
            color={getNodeColor()}
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.2}
            transmission={0.1}
            transparent
            opacity={0.9}
            emissive={getNodeColor()}
            emissiveIntensity={active ? 0.5 : 0.1}
          />
        </mesh>
      </Float>
      
      {/* Glow effect */}
      <mesh ref={glowRef} scale={[1.6, 1.6, 1.6]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color={getNodeColor()}
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Label */}
      <Text
        position={[0, -2.2, 0]}
        fontSize={0.6}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      
      {/* Orbiting particles */}
      {(active || gamePhase === 'result') && (
        <>
          {Array(8).fill(0).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const radius = 1.8;
            const x = Math.sin(angle) * radius;
            const y = Math.cos(angle) * radius;
            
            return (
              <Float
                key={`particle-${i}`}
                speed={1 + Math.random()}
                rotationIntensity={0.5}
                floatIntensity={0.5}
              >
                <mesh position={[x, y, 0]} scale={[0.15, 0.15, 0.15]}>
                  <sphereGeometry args={[1, 16, 16]} />
                  <meshStandardMaterial
                    color={getNodeColor()}
                    emissive={getNodeColor()}
                    emissiveIntensity={0.8}
                    toneMapped={false}
                  />
                </mesh>
              </Float>
            );
          })}
        </>
      )}
    </group>
  );
};

// Energy flow between nodes
interface EnergyFlowProps {
  from: number[];
  to: number[];
  color: Color;
}

const EnergyFlow = ({ from, to, color }: EnergyFlowProps) => {
  const particlesCount = 10;
  const particles = useRef<Mesh[]>([]);
  const lineRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    particles.current.forEach((particle, i) => {
      if (particle) {
        // Position along the path
        const t = ((time * 0.5 + i * 0.05) % 1);
        
        // Linear interpolation between points
        particle.position.x = from[0] + (to[0] - from[0]) * t;
        particle.position.y = from[1] + (to[1] - from[1]) * t;
        particle.position.z = from[2] + (to[2] - from[2]) * t;
        
        // Particle animation
        particle.scale.setScalar(0.1 + Math.sin(time * 3 + i) * 0.05);
      }
    });
  });

  return (
    <group>
      {/* Base line */}
      <mesh ref={lineRef}>
        <tubeGeometry
          args={[
            new THREE.CatmullRomCurve3([
              new THREE.Vector3(from[0], from[1], from[2]),
              new THREE.Vector3(to[0], to[1], to[2])
            ]),
            20, // tube segments
            0.05, // tube radius
            8, // radial segments
            false // closed
          ]}
        />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      
      {/* Flowing particles */}
      {Array(particlesCount).fill(0).map((_, i) => (
        <mesh
          key={`energy-particle-${i}`}
          ref={el => {
            if (el) particles.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

// Export the component both as default and named export
export { DesignThinkingGamePage };
export default DesignThinkingGamePage;
