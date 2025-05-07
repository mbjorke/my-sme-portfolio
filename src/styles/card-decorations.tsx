import { cn } from "@/lib/utils";
import React, { HTMLAttributes, ReactNode } from 'react';

// Card glow effect styles
export const cardGlow = [
  "relative",
  "before:absolute before:inset-0 before:rounded-xl before:z-[-1]",
  "before:transition-all before:duration-300",
  "before:shadow-[0_0_20px_rgba(99,102,241,0.3)]",
  "hover:before:shadow-[0_0_30px_rgba(99,102,241,0.7)]"
].join(' ');

// Card gradient background styles
export const cardGradient = [
  "absolute inset-0",
  "bg-gradient-to-br from-card/50 via-card/30 to-card/50"
].join(' ');

// Card blur effect (use sparingly as it can impact performance)
export const cardBlur = [
  "backdrop-blur-sm"
].join(' ');

// Base card styles
export const cardBase = [
  "relative overflow-hidden rounded-xl"
].join(' ');

// Card content padding
export const cardContent = "p-8 md:p-12";

// Quote icon styles
export const cardQuoteIcon = [
  "absolute top-8 left-8 w-16 h-16 text-primary/20"
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
