import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientBorder?: boolean;
}

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4', className)} {...props}>
      {children}
    </div>
  ),
);

CardContent.displayName = 'CardContent';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </div>
  ),
);

CardDescription.displayName = 'CardDescription';

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('flex justify-between', className)} {...props}>
      {children}
    </div>
  );
};

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
);

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-2xl font-semibold tracking-tight leading-none', className)}
      {...props}
    />
  ),
);

CardTitle.displayName = 'CardTitle';

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradientBorder = false, ...props }, ref) => {
    // Default card: match ProjectCard
    if (!gradientBorder) {
      return (
        <div className="rounded-xl transition-all duration-300 group hover:p-[2px] hover:bg-gradient-to-r hover:from-[#7ed6df] hover:via-[#16a085] hover:to-[#1de9b6]">
          <div
            ref={ref}
            className={cn(
              'rounded-xl bg-card text-card-foreground shadow-sm transition-all duration-300 group-hover:bg-[rgba(20,23,28,0.92)]',
              className,
            )}
            {...props}
          />
        </div>
      );
    }
    // Gradient border card: thicker border, gradient only on hover
    return (
      <div className="p-2 rounded-2xl bg-transparent transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#7ed6df] hover:via-[#16a085] hover:to-[#1de9b6]">
        <div
          ref={ref}
          className={cn(
            'shadow-sm transition-all duration-300 rounded-[calc(1rem-8px)] bg-card text-card-foreground',
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Card.displayName = 'Card';

// Default export for Card component
export default Card;

// Named exports for subcomponents
export { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter };
