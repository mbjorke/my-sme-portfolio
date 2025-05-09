'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

function Avatar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
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
      className={cn('aspect-square h-full w-full', className)}
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
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
