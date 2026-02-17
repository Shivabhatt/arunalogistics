'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 shadow-sm p-6 ${
        hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
