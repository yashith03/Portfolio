import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, isVisible, onClose, duration = 2000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-12 left-1/2 z-[100] px-6 py-3 bg-slate-900/90 border border-cyan-500/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(6,182,212,0.1)] flex items-center gap-3 backdrop-blur-xl"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <FaCheckCircle className="text-cyan-400 w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
