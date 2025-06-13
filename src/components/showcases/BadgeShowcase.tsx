'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Settings, Download } from 'lucide-react';

interface BadgeShowcaseProps {
  className?: string;
}

export function BadgeShowcase({ className }: BadgeShowcaseProps) {
  return (
    <div className={className}>
      <div className="space-y-8">
        {/* Variants */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Badge Variants</h3>
            <p className="text-sm text-muted-foreground">
              Different styles of badges for various states and purposes.
            </p>
          </div>
          <Card className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </Card>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Badge Sizes</h3>
            <p className="text-sm text-muted-foreground">
              Badges are available in different sizes to fit various contexts.
            </p>
          </div>
          <Card variant="secondary" className="p-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">Small (sm)</p>
                <Badge variant="primary" size="sm">
                  Small
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Default</p>
                <Badge variant="primary">Default</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Large (lg)</p>
                <Badge variant="primary" size="lg">
                  Large
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Usage with Icons */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Badges with Icons</h3>
            <p className="text-sm text-muted-foreground">
              Enhance badges with icons for better visual communication.
            </p>
          </div>
          <Card variant="tertiary" className="p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="gap-1">
                <Settings className="h-3 w-3" /> Settings
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Download className="h-3 w-3" /> Download
              </Badge>
              <Badge variant="destructive" className="gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-destructive-foreground" />
                Offline
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
