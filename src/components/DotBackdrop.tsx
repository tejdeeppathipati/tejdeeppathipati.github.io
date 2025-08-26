import React from 'react';

interface DotColumnProps {
  delay?: number;
  className?: string;
}

const DotColumn: React.FC<DotColumnProps> = ({ delay = 0, className = '' }) => {
  const dots = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {dots.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${
            Math.random() > 0.5 ? 'bg-primary/40' : 'bg-white/30'
          } ${delay > 0 ? 'dot-float-delayed' : 'dot-float'}`}
          style={{
            animationDelay: `${delay + index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export const DotBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-full h-full flex justify-end items-center space-x-8 pr-8">
        <DotColumn delay={0} className="opacity-60" />
        <DotColumn delay={1} className="opacity-40" />
        <DotColumn delay={2} className="opacity-30" />
        <DotColumn delay={3} className="opacity-20" />
      </div>
    </div>
  );
};