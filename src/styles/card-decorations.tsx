import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/utils';

// Base card styles with smooth transitions
export const cardBase = [
  'flex',
  'flex-col',
  'h-full',
  'transition-all',
  'duration-300',
  'rounded-lg',
  'overflow-hidden'
].join(' ');

// Card content padding and layout
export const cardContent = 'flex flex-col flex-1 p-6';

// Card variants using design system colors
export const cardVariants = {
  default: 'bg-card border border-border hover:border-primary/50 hover:shadow-sm',
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  accent: [
    'bg-accent/10 dark:bg-accent/20',
    'text-foreground',
    'border',
    'border-accent/20 dark:border-accent/30',
    'hover:border-accent/40 dark:hover:border-accent/50',
    'hover:shadow-sm',
    'dark:shadow-[0_4px_24px_rgba(0,0,0,0.15)]',
  ].join(' '),
  outline: 'bg-transparent border border-border hover:border-primary/50',
  elevated: [
    'bg-card',
    'border',
    'border-border/70 dark:border-border/30',
    'shadow-lg dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]',
    'hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]',
    'transition-all',
    'duration-200',
    'relative',
    'z-0',
    'hover:z-10',
  ].join(' '),
  sand: [
    '!bg-[#f0e6d2]',
    'dark:!bg-[#3a3429]',
    '!text-foreground',
    'border',
    '!border-[#e0d6c2]',
    'dark:!border-[#4a4439]',
    'hover:!border-[#d0c6b2]',
    'dark:hover:!border-[#5a5449]',
    'hover:shadow-sm',
  ].join(' '),
};

// Card title styles
export const cardTitle = 'text-lg font-semibold leading-tight tracking-tight';

// Card description styles
export const cardDescription = 'text-sm text-muted-foreground';

// Card footer styles
export const cardFooter = 'flex items-center p-6 pt-0';

// Card hover effects - for standard cards (border and shadow only)
export const cardHover = [
  'hover:shadow-lg',
  'hover:border-primary/70',
  'transition-all duration-200',
  'hover:z-10',
  'relative',
].join(' ');

// Card wrapper component props
interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

// Reusable card wrapper component with consistent styling
export function CardDecorator({ className = '', children, ...props }: CardWrapperProps) {
  return (
    <div className={cn(cardBase, className)} {...props}>
      {children}
    </div>
  );
}
