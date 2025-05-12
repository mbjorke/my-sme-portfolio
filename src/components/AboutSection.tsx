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
import { TeamMemberCard } from './TeamMemberCardBanana';
import { cn } from '@/lib/utils';
import { cardBase, cardGradient, cardHover } from '@/styles/card-decorations';
import { Badge } from './ui/badge';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="px-4 py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">About Section</h2>
      <div className="flex justify-center my-8">
        <TeamMemberCard member={siteConfig.teamMembers[0]} />
      </div>
      <div className="border-[4px_solid_transparent] bg-[linear-gradient(90deg,_#ff00cc_0%,_#333399_51%,_#00ff99_100%)] rounded-2xl">
        Vibrant Gradient
      </div>
      <div className="text-lg text-center">hello</div>
    </section>
  );
}
