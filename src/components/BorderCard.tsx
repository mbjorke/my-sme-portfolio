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
      <div className="p-6 text-center rounded-xl shadow-xl bg-background text-foreground">
        <div className="mb-1 text-base font-bold">{label}</div>
        {description && <div className="text-xs text-gray-500">{description}</div>}
        {children}
      </div>
    </div>
  );
};
