import { cn } from "@/lib/utils";
import React, { HTMLAttributes, ReactNode } from 'react';

// Base card styles - should be applied to all cards
export const cardBase = [
  'relative',
  'overflow-hidden',
  'rounded-xl',
  'bg-card/50 dark:bg-card/70',
  'backdrop-blur-sm',
  'border',
  'border-border/50',
  'shadow-lg',
  'transition-all duration-200',
  'cursor-pointer'
].join(' ');

// Card content padding - use for main content areas
export const cardContent = [
  'p-8',
  'md:p-12'
].join(' ');

// Gradient overlay - for decorative backgrounds
export const cardGradient = [
  'absolute inset-0',
  'rounded-xl',
  'bg-gradient-to-br from-card/50 via-card/30 to-card/50',
  'z-0'
].join(' ');

// Blur effect - use sparingly for glass-like effects
export const cardBlur = [
  'backdrop-blur-sm'
].join(' ');


// Card hover effects - for standard cards (border and shadow only)
export const cardHover = [
  'hover:shadow-lg',
  'hover:border-primary/70',
  'transition-all duration-200',
  'hover:z-10',
  'relative'
].join(' ');

// Card wrapper component props
interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

// Reusable card wrapper component with consistent styling
export function CardDecorator({
  className = "",
  children,
  ...props
}: CardWrapperProps) {
  return (
    <div className={cn(cardBase, className)} {...props}>
      {children}
    </div>
  );
}
