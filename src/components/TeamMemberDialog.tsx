'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';

const BLUEBERRY_LOGO = '/blueberry-logo.svg';

export interface TeamMember {
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

interface TeamMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  member: TeamMember | null;
}

interface TeamMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  member: TeamMember | null;
}

export function TeamMemberDialog({ open, onOpenChange, member }: TeamMemberDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="p-px rounded-2xl bg-gradient-to-r from-accent via-accent-dark to-yellow-400 overflow-hidden">
        <DialogContent className="bg-white text-foreground p-8 rounded-xl max-w-sm w-full sm:max-w-md shadow-2xl backdrop-blur-lg">
          {member ? (
            <>
              {/* Blueberry logo for first two members (index 0 or 1) */}
              {member?.showLogo && (
                <div className="flex justify-center mb-2">
                  <Image src={BLUEBERRY_LOGO} alt="Blueberry Logo" width={40} height={40} />
                </div>
              )}
              <DialogHeader>
                <DialogTitle className="flex flex-col items-center gap-2">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-primary/30 shadow"
                    unoptimized={member.avatar.includes('github')}
                  />
                  <span className="text-xl font-semibold mt-2">{member.name}</span>
                  <span className="text-sm text-primary/80">{member.title}</span>
                </DialogTitle>
                <DialogDescription>{member.bio || 'Team member details dialog'}</DialogDescription>
              </DialogHeader>
              <div className="flex justify-center gap-3 mt-2">
                {member.social?.github && (
                  <Link
                    href={member.social.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github size={20} />
                  </Link>
                )}
                {member.social?.linkedin && (
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin size={20} />
                  </Link>
                )}
                {member.social?.instagram && (
                  <Link
                    href={member.social.instagram}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Instagram size={20} />
                  </Link>
                )}
                {member.social?.bluesky && (
                  <Link
                    href={member.social.bluesky}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <span className="text-sm">𝕏</span>
                  </Link>
                )}
              </div>
              {member.bio && (
                <div className="mt-4 text-sm text-center text-muted-foreground">
                  <span className="font-semibold">Bio:</span> {member.bio}
                </div>
              )}
              {member.skills && member.skills.length > 0 && (
                <div className="mt-4 text-sm text-center">
                  <span className="font-semibold">Skills:</span> {member.skills.join(', ')}
                </div>
              )}
              {member.favoriteSnack && (
                <div className="mt-4 text-sm text-center">
                  <span className="font-semibold">Favorite Snack:</span> {member.favoriteSnack}
                </div>
              )}
              {member.funFact && (
                <div className="mt-4 text-sm text-center italic text-muted-foreground">
                  <span className="font-semibold">Fun Fact:</span> {member.funFact}
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-muted-foreground">No team member data.</div>
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
}
