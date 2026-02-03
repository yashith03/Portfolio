import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
  href,
  target,
  rel,
  download,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    px-6 py-2.5 rounded-lg
    font-medium text-sm
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: `
      bg-cyan-500 text-black
      hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30
    `,
    secondary: `
      border border-white/20 text-white
      hover:bg-white/10 hover:border-white/40
    `,
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
