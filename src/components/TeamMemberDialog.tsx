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
  showLogo: boolean;
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
      <DialogContent className="p-0 bg-transparent shadow-none">
        <div className="p-4 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-yellow-300 rounded-3xl">
          <div className="p-8 max-w-sm rounded-xl bg-background text-foreground sm:max-w-md">
            {member ? (
              <>
                {/* Blueberry logo for first two members (index 0 or 1) */}
                {member?.showLogo && (
                  <div className="flex justify-center mb-2">
                    <Image src={BLUEBERRY_LOGO} alt="Blueberry Logo" width={40} height={40} />
                  </div>
                )}
                <DialogHeader>
                  <DialogTitle className="flex flex-col gap-2 items-center">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full border-2 shadow border-primary/30"
                      unoptimized={member.avatar.includes('github')}
                    />
                    <span className="mt-2 text-xl font-semibold">{member.name}</span>
                    <span className="text-sm text-primary/80">{member.title}</span>
                  </DialogTitle>
                  <DialogDescription>
                    {member.bio || 'Team member details dialog'}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-3 justify-center mt-2">
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
                  <div className="mt-4 text-sm italic text-center text-muted-foreground">
                    <span className="font-semibold">Fun Fact:</span> {member.funFact}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center text-muted-foreground">No team member data.</div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
