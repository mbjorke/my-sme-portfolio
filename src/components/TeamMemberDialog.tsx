import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';

export interface TeamMember {
  name: string;
  title: string;
  avatar: string;
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

export function TeamMemberDialog({ open, onOpenChange, member }: TeamMemberDialogProps) {
  if (!member) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xs p-6 rounded-xl shadow-lg bg-background border-2 border-primary/10">
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
        {member.funFact && (
          <div className="mt-4 text-sm text-center italic text-muted-foreground">
            {member.funFact}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
