import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import {
  FiDownload,
  FiSettings,
  FiHeart,
  FiArrowRight,
  FiZap,
  FiCode,
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiMail,
  FiPhone,
} from 'react-icons/fi';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function IconUsageShowcase() {
  return (
    <div className="space-y-8">
      {/* Icons in Buttons */}
      <div>
        <h3 className="mb-4 text-lg font-medium">Icons in Buttons</h3>
        <Card className="p-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button>
              <FiDownload className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline">
              <FiSettings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" size="icon">
              <FiHeart className="h-4 w-4" />
            </Button>
            <Button variant="secondary">
              <FiCheckCircle className="mr-2 h-4 w-4" />
              Complete
            </Button>
          </div>
        </Card>
      </div>

      {/* Icons in Links */}
      <div>
        <h3 className="mb-4 text-lg font-medium">Icons in Links</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <Link href="/" className="group flex items-center text-primary hover:underline">
              Learn more{' '}
              <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Standalone Icons */}
      <div>
        <h3 className="mb-4 text-lg font-medium">Standalone Icons</h3>
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FiMail className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Email us</p>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <FiPhone className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Call us</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Icons in Cards */}
      <div>
        <h3 className="mb-4 text-lg font-medium">Icons in Cards</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FiZap className="h-6 w-6" />
            </div>
            <h4 className="mb-2 text-lg font-medium">Feature Title</h4>
            <p className="text-muted-foreground">Short description of the feature goes here.</p>
          </Card>

          <Card variant="secondary" className="p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-foreground/10 text-secondary-foreground">
              <FiCode className="h-6 w-6" />
            </div>
            <h4 className="mb-2 text-lg font-medium">Another Feature</h4>
            <p className="text-muted-foreground">Another description goes here.</p>
          </Card>
        </div>
      </div>

      {/* Status Icons */}
      <div>
        <h3 className="mb-4 text-lg font-medium">Status Icons</h3>
        <Card className="p-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2 text-emerald-500">
              <FiCheckCircle className="h-5 w-5" />
              <span>Success</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-500">
              <FiAlertCircle className="h-5 w-5" />
              <span>Warning</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-500">
              <FiInfo className="h-5 w-5" />
              <span>Info</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
