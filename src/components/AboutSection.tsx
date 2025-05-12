import { siteConfig } from '@/config/siteConfig';
import { TeamMemberCarousel } from './TeamMemberCarousel';
import { Carousel } from './Carousel';
import type { TeamMember } from './TeamMemberCarousel';

export function AboutSection() {
  return (
    <section className="px-4 py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">Meet the Team</h2>
      <div className="flex justify-center my-8">
        <Carousel
          autoPlay={3000}
          items={siteConfig.teamMembers}
          renderItem={(member: TeamMember) => <TeamMemberCarousel member={member} />}
        />
      </div>
    </section>
  );
}
