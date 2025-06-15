import React from 'react';

import Link from 'next/link';

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
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/card';


export function IconUsageShowcase() {
  return (
    <div className="space-y-8">
      {/* Icons in Buttons */}
      <div>
        <h3 className="mb-4 text-lg font-medium">Icons in Buttons</h3>
        <Card className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <Button>
              <FiDownload className="mr-2 w-4 h-4" />
              Download
            </Button>
            <Button variant="outline">
              <FiSettings className="mr-2 w-4 h-4" />
              Settings
            </Button>
            <Button variant="ghost" size="icon">
              <FiHeart className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              <FiCheckCircle className="mr-2 w-4 h-4" />
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
            <Link href="/" className="flex items-center group text-accent-100 hover:text-accent-50 hover:underline">
              Learn more{' '}
              <FiArrowRight className="ml-2 w-4 h-4 transition-transform" />
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener"
                className="transition-colors text-accent-100 hover:text-accent-50 hover:underline"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                className="transition-colors text-accent-100 hover:text-accent-50 hover:underline"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
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
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-secondary/10 text-secondary-foreground">
                <FiMail className="w-5 h-5 text-accent-100 hover:text-accent-50" />
              </div>
              <div className="text-sm text-accent-100">
                <p className="font-medium">Email us</p>
                <p className="hover:underline hover:text-accent-50">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-secondary/10 text-secondary-foreground">
                <FiPhone className="w-5 h-5 text-accent-100 hover:text-accent-50" />
              </div>
              <div className="text-sm text-accent-100">
                <p className="font-medium">Call us</p>
                <p className="hover:underline hover:text-accent-50">+1 (555) 123-4567</p>
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
            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <FiZap className="w-6 h-6" />
            </div>
            <h4 className="mb-2 text-lg font-medium">Feature Title</h4>
            <p className="text-muted-foreground">Short description of the feature goes here.</p>
          </Card>

          <Card variant="secondary" className="p-6 transition-all hover:shadow-md">
            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-secondary-foreground/10 text-secondary-foreground">
              <FiCode className="w-6 h-6" />
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
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center space-x-2 text-emerald-500">
              <FiCheckCircle className="w-5 h-5" />
              <span>Success</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-500">
              <FiAlertCircle className="w-5 h-5" />
              <span>Warning</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-500">
              <FiInfo className="w-5 h-5" />
              <span>Info</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
