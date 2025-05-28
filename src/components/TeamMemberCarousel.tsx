import React from 'react';
// Image is not used in this file
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiInstagram, SiBluesky } from 'react-icons/si';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from './ui/avatar';

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
    <div
      className="w-full max-w-2xl p-[2px] rounded-3xl bg-transparent group h-full"
      role="article"
      aria-label={`Team member: ${member?.name || 'Unnamed member'}`}
    >
      <Card>
        <CardContent className={cn('relative z-10 p-6')}>
          {/* Avatar & Socials */}
          <div className="flex z-10 flex-col items-center mb-2">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={member?.avatar || '/default-avatar.png'}
                alt={member?.name || 'Avatar'}
                className="object-cover rounded-full border-4 shadow-lg aspect-square border-primary bg-background"
                unoptimized={!!member?.avatar && member.avatar.includes('github')}
              />
            </Avatar>
            {/* Social icons */}
            <div className="flex gap-4 justify-center mt-4">
              {member?.social?.github && (
                <Link
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                  aria-label="GitHub profile"
                >
                  <span className="text-white">
                    <SiGithub size={24} />
                  </span>
                </Link>
              )}
              {member?.social?.linkedin && (
                <Link
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                  aria-label="LinkedIn profile"
                >
                  <span className="text-white">
                    <SiLinkedin size={24} />
                  </span>
                </Link>
              )}
              {member?.social?.instagram && (
                <Link
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                  aria-label="Instagram profile"
                >
                  <span className="text-white">
                    <SiInstagram size={24} />
                  </span>
                </Link>
              )}
              {member?.social?.bluesky && (
                <Link
                  href={member.social.bluesky}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110"
                  aria-label="Bluesky profile"
                >
                  <span className="text-white">
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
            <span className="text-xl font-semibold">{member?.title || 'No Title'}</span>
            {member?.bio && (
              <p className="px-2 py-1 mt-2 text-base rounded-lg border shadow-inner border-primary-500/50 text-muted-foreground bg-primary-600">
                {member.bio}
              </p>
            )}
            {member?.skills && member.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {member.skills.map((skill: string) => (
                  <Badge variant="primary" key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
            {member?.favoriteSnack && (
              <div className="px-2 py-1 mt-1 w-full text-sm text-red-100 rounded-lg border border-red-300 shadow-inner bg-destructive">
                <span className="font-bold">Favorite Snack:</span> {member.favoriteSnack}
              </div>
            )}
            {member?.funFact && (
              <div className="px-2 py-1 mt-1 text-sm italic text-orange-900 bg-orange-200 rounded-lg border border-orange-300 shadow-inne0r">
                <span className="font-bold">Fun Fact:</span> {member.funFact}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TeamMemberCarousel;
