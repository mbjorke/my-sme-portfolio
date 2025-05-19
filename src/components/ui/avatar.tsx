'use client';
import React from 'react';
import { cn } from '@/lib/utils';

function Avatar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex overflow-hidden relative w-10 h-10 rounded-full shrink-0', className)}
      {...props}
    >
      {children}
    </div>
  );
}

import Image from 'next/image';

import type { ImageProps } from 'next/image';

interface AvatarImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  className?: string;
}

function AvatarImage({ className, src, alt = '', ...props }: AvatarImageProps) {
  return (
    <Image
      className={cn('w-full h-full aspect-square', className)}
      src={src}
      alt={alt}
      fill
      sizes="40px"
      priority={false}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex justify-center items-center w-full h-full rounded-full bg-muted',
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
