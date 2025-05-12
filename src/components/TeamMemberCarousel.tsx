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
    <div
      className="w-full max-w-2xl rounded-3xl shadow-none bg-card bg-clip-padding border-[6px] border-solid border-transparent"
      style={{
        background:
          'linear-gradient(white,white) padding-box,linear-gradient(90deg,#7ed6df,#16a085,#1de9b6) border-box',
      }}
    >
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
          <span className="text-xl font-semibold text-transparent bg-gradient-to-r from-[#7ed6df] via-[#16a085] to-[#1de9b6] bg-clip-text">
            {member?.title || 'No Title'}
          </span>
          {member?.bio && (
            <p className="px-2 py-1 mt-2 text-base rounded-lg shadow-inner text-[#037b81] bg-[#e0f7fa]/90 border border-[#7ed6df]">
              {member.bio}
            </p>
          )}
          <div className="flex gap-4 mt-4">
            {/* Social icons themed */}
            {member?.social?.github && (
              <Link
                href={member.social.github}
                target="_blank"
                className="text-[#16a085] hover:text-[#1de9b6] transition-colors"
              >
                <Github size={28} />
              </Link>
            )}
            {member?.social?.linkedin && (
              <Link
                href={member.social.linkedin}
                target="_blank"
                className="text-[#16a085] hover:text-[#1de9b6] transition-colors"
              >
                <Linkedin size={28} />
              </Link>
            )}
            {member?.social?.instagram && (
              <Link
                href={member.social.instagram}
                target="_blank"
                className="text-[#16a085] hover:text-[#1de9b6] transition-colors"
              >
                <Instagram size={28} />
              </Link>
            )}
            {member?.social?.bluesky && (
              <Link
                href={member.social.bluesky}
                target="_blank"
                className="text-[#16a085] hover:text-[#1de9b6] transition-colors"
              >
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
                  className="text-white bg-[#062e2e] border border-[#062e2e] hover:bg-gradient-to-r hover:from-[#7ed6df] hover:via-[#16a085] hover:to-[#1de9b6] hover:text-[#062e2e] transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}
          {member?.favoriteSnack && (
            <div className="mt-1 text-sm rounded-lg shadow-inner text-[#b91c1c] bg-[#fee2e2]/90 border border-[#f87171] px-2 py-1">
              <span className="font-bold">Favorite Snack:</span> {member.favoriteSnack}
            </div>
          )}
          {member?.funFact && (
            <div className="mt-1 text-sm italic rounded-lg shadow-inner text-[#b45309] bg-[#fef9c3]/90 border border-[#fbbf24] px-2 py-1">
              <span className="font-bold">Fun Fact:</span> {member.funFact}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
