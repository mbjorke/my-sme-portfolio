import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiInstagram, SiBluesky } from 'react-icons/si';
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
    <div className="w-full max-w-2xl p-[2px] rounded-3xl bg-transparent transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#7ed6df] hover:via-[#16a085] hover:to-[#1de9b6] h-full">
      <div className="bg-[#023a47] p-8 rounded-3xl w-full flex flex-col items-center gap-6 min-h-[380px] h-full relative overflow-hidden flex-1">
        {/* Avatar & Socials */}
        <div className="flex z-10 flex-col items-center mb-2">
          <Image
            src={member?.avatar || '/default-avatar.png'}
            alt={member?.name || 'Avatar'}
            width={120}
            height={120}
            className="rounded-full aspect-square object-cover border-4 shadow-lg border-primary bg-background"
            unoptimized={!!member?.avatar && member.avatar.includes('github')}
          />
          {/* Social icons themed */}
          <div className="flex justify-center gap-4 mt-4">
            {member?.social?.github && (
              <Link
                href={member.social.github}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors group"
              >
                <span className="text-white hover:text-[#1de9b6] transition-colors">
                  <SiGithub size={24} />
                </span>
              </Link>
            )}
            {member?.social?.linkedin && (
              <Link
                href={member.social.linkedin}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors group"
              >
                <span className="text-white hover:text-[#1de9b6] transition-colors">
                  <SiLinkedin size={24} />
                </span>
              </Link>
            )}
            {member?.social?.instagram && (
              <Link
                href={member.social.instagram}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors group"
              >
                <span className="text-white hover:text-[#1de9b6] transition-colors">
                  <SiInstagram size={24} />
                </span>
              </Link>
            )}
            {member?.social?.bluesky && (
              <Link
                href={member.social.bluesky}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors group"
              >
                <span className="text-white hover:text-[#1de9b6] transition-colors">
                  <SiBluesky size={24} />
                </span>
              </Link>
            )}
          </div>
        </div>
        {/* Info */}
        <div className="flex z-10 flex-col flex-1 gap-2 justify-center items-center mt-2">
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
          {member?.skills && member.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {member.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant={skill === 'Vibe Code Wizard' ? 'outline' : 'secondary'}
                  className="text-white bg-[#023a47] border border-[#062e2e] hover:bg-gradient-to-r hover:from-[#7ed6df] hover:via-[#16a085] hover:to-[#1de9b6] hover:text-[#062e2e] transition-colors duration-300"
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
