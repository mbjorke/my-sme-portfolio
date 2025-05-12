// A new, experimental version of the TeamMemberDialog component for creative exploration.
'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Instagram, X } from 'lucide-react';

const BLUEBERRY_LOGO = '/blueberry-logo.svg';

export interface TeamMember {
  showLogo?: boolean;
  name: string;
  title: string;
  avatar: string;
  bio?: string;
  skills?: string[];
  favoriteSnack?: string;
  social?: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    bluesky?: string;
  };
  funFact?: string;
}

interface TeamMemberDialogBananaProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  member: TeamMember | null;
  showLogo?: boolean;
}

export function TeamMemberDialogBanana({
  open,
  onOpenChange,
  member,
  showLogo,
}: TeamMemberDialogBananaProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 bg-transparent shadow-none rounded-3xl max-w-2xl w-full border-4 border-yellow-400 animate-pulse">
        <DialogTitle className="sr-only">{member?.name || 'Team Member'}</DialogTitle>
        {member?.bio && <DialogDescription className="sr-only">{member.bio}</DialogDescription>}
        <div className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 p-2 rounded-3xl w-full flex flex-row items-center gap-8 min-h-[220px] relative overflow-hidden">
          {/* Banana SVG or image for extra fun */}
          <div className="absolute left-0 top-0 opacity-20 pointer-events-none select-none">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <ellipse cx="60" cy="60" rx="50" ry="18" fill="#FFE066" />
              <ellipse cx="60" cy="80" rx="40" ry="10" fill="#FFD60A" />
            </svg>
          </div>
          {/* Avatar & Logo */}
          <div className="flex flex-col items-center flex-shrink-0 z-10">
            <Image
              src={member?.avatar || '/default-avatar.png'}
              alt={member?.name || 'Avatar'}
              width={120}
              height={120}
              className="rounded-full border-4 border-yellow-400 bg-white shadow-lg"
              unoptimized={!!member?.avatar && member.avatar.includes('github')}
            />
            {member?.showLogo && (
              <Image
                src={BLUEBERRY_LOGO}
                alt="Blueberry Logo"
                width={40}
                height={40}
                className="mt-2"
              />
            )}
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col justify-center items-start gap-2 z-10">
            <span className="text-3xl font-extrabold text-yellow-900 drop-shadow-lg">
              {member?.name || 'No Name'}
            </span>
            <span className="text-xl text-yellow-800 font-semibold">
              {member?.title || 'No Title'}
            </span>
            {member?.bio && (
              <p className="mt-2 text-base text-yellow-700 bg-yellow-100 rounded-lg px-2 py-1 shadow-inner">
                {member.bio}
              </p>
            )}
            <div className="flex gap-4 mt-4">
              {member?.social?.github && (
                <Link href={member.social.github} target="_blank" className="hover:text-yellow-900">
                  <Github size={28} />
                </Link>
              )}
              {member?.social?.linkedin && (
                <Link
                  href={member.social.linkedin}
                  target="_blank"
                  className="hover:text-yellow-900"
                >
                  <Linkedin size={28} />
                </Link>
              )}
              {member?.social?.instagram && (
                <Link
                  href={member.social.instagram}
                  target="_blank"
                  className="hover:text-yellow-900"
                >
                  <Instagram size={28} />
                </Link>
              )}
              {member?.social?.bluesky && (
                <Link
                  href={member.social.bluesky}
                  target="_blank"
                  className="hover:text-yellow-900"
                >
                  <span className="text-2xl">𝕏</span>
                </Link>
              )}
            </div>
            {member?.skills && member.skills.length > 0 && (
              <div className="mt-2 text-sm text-yellow-900">
                <span className="font-bold">Skills:</span> {member.skills.join(', ')}
              </div>
            )}
            {member?.favoriteSnack && (
              <div className="mt-1 text-sm text-yellow-900">
                <span className="font-bold">Favorite Snack:</span> {member.favoriteSnack}
              </div>
            )}
            {member?.funFact && (
              <div className="mt-1 text-sm italic text-yellow-900">
                <span className="font-bold">Fun Fact:</span> {member.funFact}
              </div>
            )}
          </div>
          {/* Close button */}
          <DialogPrimitive.Close className="absolute right-6 top-6 rounded-full bg-yellow-400 p-2 opacity-80 hover:opacity-100 transition-opacity z-20">
            <X className="h-6 w-6 text-yellow-900" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </div>
      </DialogContent>
    </Dialog>
  );
}
