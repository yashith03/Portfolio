import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        group relative rounded-3xl border border-white/10 
        bg-white/5 backdrop-blur-md
        shadow-lg shadow-black/40
        transition-all duration-300 ease-out
        hover:border-white/20 hover:bg-white/8 hover:shadow-xl hover:shadow-cyan-500/10
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}
