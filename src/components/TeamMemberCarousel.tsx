import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiInstagram, SiBluesky } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { cardBase, cardContent, cardVariants } from '@/styles/card-decorations';

export interface TeamMember {
  avatar?: string;
  name?: string;
  title?: string;
  bio?: string;
  skills?: string[];
  favoriteSnack?: string;
  funFact?: string;
  social?: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    bluesky?: string;
  };
}

interface TeamMemberCarouselProps {
  member: TeamMember;
}

export function TeamMemberCarousel({ member }: TeamMemberCarouselProps) {
  return (
    <div className="w-full max-w-2xl p-[2px] rounded-3xl bg-transparent group h-full">
      <Card
        variant="secondary">
        <CardContent className={cn(cardContent, 'relative z-10')}>
          {/* Avatar & Socials */}
          <div className="flex z-10 flex-col items-center mb-2">
            <Image
              src={member?.avatar || '/default-avatar.png'}
              alt={member?.name || 'Avatar'}
              width={120}
              height={120}
              className="object-cover rounded-full border-4 shadow-lg aspect-square border-primary bg-background"
              unoptimized={!!member?.avatar && member.avatar.includes('github')}
            />
            {/* Social icons themed */}
            <div className="flex gap-4 justify-center mt-4">
              {member?.social?.github && (
                <Link
                  href={member.social.github}
                  target="_blank"
                  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                >
                  <span className="text-primary">
                    <SiGithub size={24} />
                  </span>
                </Link>
              )}
              {member?.social?.linkedin && (
                <Link
                  href={member.social.linkedin}
                  target="_blank"
                  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                >
                  <span className="text-primary">
                    <SiLinkedin size={24} />
                  </span>
                </Link>
              )}
              {member?.social?.instagram && (
                <Link
                  href={member.social.instagram}
                  target="_blank"
                  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                >
                  <span className="text-primary">
                    <SiInstagram size={24} />
                  </span>
                </Link>
              )}
              {member?.social?.bluesky && (
                <Link
                  href={member.social.bluesky}
                  target="_blank"
                  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                >
                  <span className="text-primary">
                    <SiBluesky size={24} />
                  </span>
                </Link>
              )}
            </div>
          </div>
          {/* Info */}
          <div className="flex z-10 flex-col flex-1 gap-2 justify-center items-center mt-2">
            <span className="text-3xl font-extrabold drop-shadow-lg">
              {member?.name || 'No Name'}
            </span>
            <span className="text-xl font-semibold">
              {member?.title || 'No Title'}
            </span>
            {member?.bio && (
              <p className="px-2 py-1 mt-2 text-base rounded-lg shadow-inner text-muted-foreground bg-card/80 border border-border">
                {member.bio}
              </p>
            )}
            {member?.skills && member.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {member.skills.map((skill: string) => (
                  <Badge
                    key={skill}
                    variant={skill === 'Vibe Code Wizard' ? 'outline' : 'outline'}
                    className="transition-colors duration-300 hover:bg-primary/90 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
            {member?.favoriteSnack && (
              <div className="mt-1 text-sm rounded-lg shadow-inner text-destructive bg-destructive-container border-destructive px-2 py-1">
                <span className="font-bold">Favorite Snack:</span> {member.favoriteSnack}
              </div>
            )}
            {member?.funFact && (
              <div className="mt-1 text-sm italic rounded-lg shadow-inner text-warning bg-warning-container border-warning px-2 py-1">
                <span className="font-bold">Fun Fact:</span> {member.funFact}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
