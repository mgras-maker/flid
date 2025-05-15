import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-flid-dark/10 dark:border-gray-700 py-5">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-flid-dark dark:text-white">{question}</h3>
        <span className={`text-flid-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-2 text-flid-dark/70 dark:text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQSectionProps {
  title?: string;
  faqs: FAQItemProps[];
  className?: string;
}

const FAQSection = ({ 
  title = "Frequently Asked Questions", 
  faqs, 
  className = "" 
}: FAQSectionProps) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg ${className}`}>
      <h2 className="text-2xl font-bold text-flid-dark dark:text-white mb-6">{title}</h2>
      <div className="divide-y divide-flid-dark/10 dark:divide-gray-700">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
