'use client';

import React from 'react';

import Link from 'next/link';

import { Button } from './ui/Button';

const sections = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'cards', label: 'Cards' },
  { id: 'badges', label: 'Badges' },
  { id: 'icons', label: 'Icons' },
  { id: 'forms', label: 'Form Elements' },
];

export const DesignSystemNav = () => {
  return (
    <nav className="sticky top-4 p-4 space-y-1">
      <h3 className="mb-2 text-sm font-medium text-muted-foreground">Components</h3>
      <div className="flex flex-col gap-1">
        {sections.map((section) => (
          <Button key={section.id} asChild variant="ghost" className="justify-start">
            <Link href={`#${section.id}`} className="w-full text-left">
              {section.label}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default DesignSystemNav;
