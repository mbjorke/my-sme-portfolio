import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Instagram, X } from 'lucide-react';
import { Badge } from './ui/badge';

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

interface TeamMemberCarouselProps {
  member: TeamMember;
}

export function TeamMemberCarousel({ member }: TeamMemberCarouselProps) {
  return (
    <div className="p-0 w-full max-w-2xl rounded-3xl border-4 shadow-none bg-card border-border">
      <div className="bg-card p-6 rounded-3xl w-full flex flex-row items-center gap-8 min-h-[220px] relative overflow-hidden">
        {/* Avatar */}
        <div className="flex z-10 flex-col flex-shrink-0 items-center">
          <Image
            src={member?.avatar || '/default-avatar.png'}
            alt={member?.name || 'Avatar'}
            width={120}
            height={120}
            className="rounded-full border-4 shadow-lg border-primary bg-background"
            unoptimized={!!member?.avatar && member.avatar.includes('github')}
          />
        </div>
        {/* Info */}
        <div className="flex z-10 flex-col flex-1 gap-2 justify-center items-start">
          <span className="text-3xl font-extrabold drop-shadow-lg text-primary">
            {member?.name || 'No Name'}
          </span>
          <span className="text-xl font-semibold text-muted-foreground">
            {member?.title || 'No Title'}
          </span>
          {member?.bio && (
            <p className="px-2 py-1 mt-2 text-base rounded-lg shadow-inner text-muted-foreground bg-muted">
              {member.bio}
            </p>
          )}
          <div className="flex gap-4 mt-4">
            {member?.social?.github && (
              <Link href={member.social.github} target="_blank" className="hover:text-accent">
                <Github size={28} />
              </Link>
            )}
            {member?.social?.linkedin && (
              <Link href={member.social.linkedin} target="_blank" className="hover:text-accent">
                <Linkedin size={28} />
              </Link>
            )}
            {member?.social?.instagram && (
              <Link href={member.social.instagram} target="_blank" className="hover:text-accent">
                <Instagram size={28} />
              </Link>
            )}
            {member?.social?.bluesky && (
              <Link href={member.social.bluesky} target="_blank" className="hover:text-accent">
                <span className="text-2xl">𝕏</span>
              </Link>
            )}
          </div>
          {member?.skills && member.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {member.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant={skill === 'Vibe Code Wizard' ? 'outline' : 'secondary'}
                  className="text-muted-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}
          {member?.favoriteSnack && (
            <div className="mt-1 text-sm text-muted-foreground">
              <span className="font-bold">Favorite Snack:</span> {member.favoriteSnack}
            </div>
          )}
          {member?.funFact && (
            <div className="mt-1 text-sm italic text-muted-foreground">
              <span className="font-bold">Fun Fact:</span> {member.funFact}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
