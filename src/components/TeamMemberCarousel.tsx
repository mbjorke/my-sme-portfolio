import React from 'react';

// Image is not used in this file
import Link from 'next/link';

import { SiGithub, SiLinkedin, SiInstagram, SiBluesky } from 'react-icons/si';

import { SkillBadge } from './SkillBadge';
import { Avatar, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';

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
      className="p-1 w-full h-full bg-transparent rounded-3xl group"
      role="article"
      aria-label={`Team member: ${member?.name || 'Unnamed member'}`}
    >
      <Card className="h-full">
        <div className="flex flex-col p-4 h-full md:p-6">
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
          <div className="flex overflow-y-auto flex-col flex-1 items-center space-y-3 text-center">
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold md:text-3xl text-foreground">
                {member?.name || 'No Name'}
              </h3>
              {member?.title && (
                <p className="text-lg md:text-xl text-muted-foreground">{member.title}</p>
              )}
            </div>

            {member?.bio && (
              <p className="px-3 py-2 text-sm rounded-lg md:text-base bg-secondary-100 text-primary">
                {member.bio}
              </p>
            )}

            {member?.skills && member.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mt-1 w-full">
                {member.skills.map((skill: string) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            )}

            <div className="mt-auto space-y-2 w-full">
              {member?.favoriteSnack && (
                <div className="px-3 py-1.5 text-xs md:text-sm border-2 border-destructive-300 bg-destructive-200 text-destructive-900 rounded-md">
                  <span className="font-semibold">Favorite Snack:</span> {member.favoriteSnack}
                </div>
              )}

              {member?.funFact && (
                <div className="px-3 py-1.5 text-xs md:text-sm border-2 border-success-300 bg-success-200 text-success-900 rounded-md italic">
                  <span className="font-semibold">Fun Fact:</span> {member.funFact}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TeamMemberCarousel;
