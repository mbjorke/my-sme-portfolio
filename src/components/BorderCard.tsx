import React from 'react';

interface BorderCardProps {
  label: string;
  gradientClasses: string;
  animated?: boolean;
  description?: string;
  borderPx?: number;
  children?: React.ReactNode;
}

export const BorderCard: React.FC<BorderCardProps> = ({
  label,
  gradientClasses,
  animated = false,
  description,
  borderPx = 1,
  children,
}) => {
  return (
    <div
      className={[
        `p-${borderPx === 1 ? 'px' : borderPx}`,
        'rounded-2xl',
        gradientClasses,
        'w-64 overflow-hidden',
        animated ? 'animate-gradient-border-hue' : '',
      ].join(' ')}
    >
      <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
        <div className="font-bold mb-1 text-base">{label}</div>
        {description && <div className="text-gray-500 text-xs">{description}</div>}
        {children}
      </div>
    </div>
  );
};
