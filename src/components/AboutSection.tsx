import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { useState } from 'react';
import { TeamMemberDialog } from './TeamMemberDialog';
import { cn } from '@/lib/utils';
import { cardBase, cardGradient, cardHover } from '@/styles/card-decorations';
import { Badge } from './ui/badge';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="px-4 py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">About Section</h2>
      <div className="text-center text-lg">hello</div>
    </section>
  );
}
