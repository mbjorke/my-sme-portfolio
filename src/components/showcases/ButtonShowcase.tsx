'use client';

import React from 'react';

import { Download, Heart, ArrowRight, ExternalLink, Settings } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/card';

interface ButtonShowcaseProps {
  className?: string;
}

export function ButtonShowcase({ className }: ButtonShowcaseProps) {
  return (
    <div className={className}>
      <div className="space-y-8">
        {/* Button Variants */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Button Variants</h3>
            <p className="text-sm text-muted-foreground">
              Standard button styles for different use cases.
            </p>
          </div>
          <Card className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="tab" active>
                Tab
              </Button>
              <Button variant="tab">Tab</Button>
            </div>
          </Card>
        </div>

        {/* Buttons with Icons */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Buttons with Icons</h3>
            <p className="text-sm text-muted-foreground">
              Consistent icon usage in buttons for better UX.
            </p>
          </div>
          <Card variant="secondary" className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <Button>
                  <Download className="mr-2 w-4 h-4" />
                  Download
                </Button>
                <Button variant="outline">
                  <Heart className="mr-2 w-4 h-4" />
                  Save
                </Button>
                <Button variant="ghost">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform" />
                </Button>
                <Button variant="link">
                  View All
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Button Sizes */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Button Sizes</h3>
            <p className="text-sm text-muted-foreground">
              Use appropriate sizes for different contexts.
            </p>
          </div>
          <Card variant="primary" className="p-6">
            <div className="flex flex-wrap gap-6 items-center">
              <div className="space-y-3">
                <p className="text-sm font-medium">Small (sm)</p>
                <Button size="sm">Small Button</Button>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium">Default</p>
                <Button>Default Button</Button>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium">Large (lg)</p>
                <Button size="lg">Large Button</Button>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium">Icon Only</p>
                <Button size="icon" aria-label="Settings">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Button States */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Button States</h3>
            <p className="text-sm text-muted-foreground">
              Different states for user interaction feedback.
            </p>
          </div>
          <Card variant="primary" className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <Button disabled>Disabled</Button>
              <Button disabled aria-busy="true">
                <span className="inline-flex items-center">
                  <svg
                    className="mr-2 -ml-1 w-4 h-4 text-current animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading disabled...
                </span>
              </Button>
              <Button aria-busy="false">
                <span className="inline-flex items-center">
                  <svg
                    className="mr-2 -ml-1 w-4 h-4 text-current animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
