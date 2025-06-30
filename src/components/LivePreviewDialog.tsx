'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface LivePreviewDialogProps {
  previewUrl: string | null;
  projectTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LivePreviewDialog({
  previewUrl,
  projectTitle,
  open,
  onOpenChange,
}: LivePreviewDialogProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: '100%', height: '100%' });

  // Reset loading state when dialog opens/closes
  useEffect(() => {
    if (open) {
      setIsLoading(true);
    }
  }, [open]);

  // Calculate iframe dimensions based on viewport
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window === 'undefined') return;

      const width = Math.min(1280, window.innerWidth - 64);
      const height = Math.min(800, window.innerHeight - 128);

      setDimensions({
        width: `${width}px`,
        height: `${height}px`,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (!previewUrl) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="p-0 bg-transparent border-0 shadow-none max-w-none w-auto"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden bg-background shadow-2xl">
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-10 rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background">
              <div className="animate-pulse text-foreground/60">Loading preview...</div>
            </div>
          )}

          {/* Iframe */}
          <iframe
            src={previewUrl}
            title={`Live preview of ${projectTitle}`}
            className={`w-full h-full border-0 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
