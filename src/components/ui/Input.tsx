'use client';
import React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string; // Optional custom class name for styling
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'p-2 px-3 py-2 w-full rounded-md border border-primary/90 text-foreground bg-primary-800 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
        className,
      )} // Combine default styles with custom class
      {...props} // Spread the rest of the props to the input
    />
  );
});

Input.displayName = 'Input';

// Default export for Input component
export default Input;
