'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary button - Teal Blue
        primary: [
          'bg-teal-100 text-teal-950 shadow-sm',
          'hover:shadow-md hover:bg-teal-50',
          'active:bg-teal-50/90',
        ].join(' '),
        // Secondary button - Surf Teal
        secondary: [
          'bg-accent/10 text-accent-50 shadow-sm',
          'hover:shadow-md hover:bg-accent/20 hover:text-accent-foreground',
          'active:bg-accent/20',
        ].join(' '),
        // Outline button - For less prominent actions
        outline: [
          'border border-accent/20 bg-background shadow-sm',
          'hover:border-accent/50',
          'active:bg-accent-600/20',
        ].join(' '),
        // Ghost button - For subtle actions
        ghost: [
          'hover:bg-secondary/10 hover:text-primary-foreground',
          'active:bg-secondary/20',
        ].join(' '),
        // Link button - For navigation
        link: [
          'text-primary-foreground underline-offset-4 hover:underline active:underline',
          'relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary-foreground',
          'after:transition-all after:duration-200 after:-translate-x-1/2',
          'hover:after:w-3/4 hover:no-underline',
          'active:bg-primary-600/20',
        ].join(' '),
        // Tab button - For tab navigation
        tab: [
          'relative rounded-none border-b-2 h-auto py-2 px-3',
          'border-transparent text-accent-50',
          'hover:bg-transparent hover:text-accent-50',
          'focus-visible:ring-0 focus-visible:ring-offset-0',
          'data-[state=active]:border-accent data-[state=active]:text-accent-50 data-[state=active]:bg-accent/10',
        ].join(' '),
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-14 px-8 py-3.5 text-base',
        xl: 'h-16 px-10 py-4 text-lg',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  active?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, active, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          active && 'ring-2 ring-offset-2 ring-ring',
          className,
        )}
        ref={ref}
        data-state={active ? 'active' : undefined}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };

export default Button;
