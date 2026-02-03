import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1
        rounded-full text-xs font-medium
        bg-white/8 border border-white/15
        text-white/80
        transition-colors duration-200
        group-hover:bg-white/10 group-hover:border-white/25 group-hover:text-white
        ${className}
      `}
    >
      {children}
    </span>
  );
}
