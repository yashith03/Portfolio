import React from 'react';

interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-xs font-medium text-white/60 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
