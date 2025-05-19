'use client';
import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import { TeamMemberCarousel } from './TeamMemberCarousel';
import { Carousel } from './Carousel';
import type { TeamMember } from './TeamMemberCarousel';

export function AboutSection() {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <div className="flex flex-col gap-12 items-center lg:flex-row">
        {/* Left: About Text */}
        <div className="space-y-8 basis-1/2">
          <h2 className="text-3xl font-bold">Laser focused on results</h2>
          <p className="text-lg">I help build trust, drive engagement and support your growth.</p>
          <p>
            <strong>My strength is Product and Design Strategy.</strong> I use AI, not the other way
            around. AI is transforming design processes. It&apos;s enabling smarter personalization
            and providing better insights. But it&apos;s still people who create the best
            experiences.
          </p>
          <blockquote className="py-2 pl-6 italic rounded-md border-l-4 border-primary/60 text-muted-foreground bg-muted/30">
            User Centered Design is at the heart of everything I do. My mission is to help your Team
            or Business achieve its next success.
          </blockquote>
          <p>
            For 25 years I have been creating online banking experiences with clients like Crosskey,
            Ålandsbanken, S-Banken, Marginalen Bank and POP-Bank.
          </p>
          <p className="text-base text-muted-foreground">
            <em>
              The name <strong>Blueberry Maybe</strong> comes from a cherished childhood memory. One
              day my uncle wasn’t sure which berries to use in a cake, so he just picked randomly
              from the freezer. We asked what flavour it was, he humorously coined the phrase:
              &quot;Blueberry Maybe&quot;.
            </em>
          </p>
          <div className="pt-4">
            <div className="font-bold">Marcus Björke</div>
            <div className="text-muted-foreground">CEO and Founder of Blueberry Maybe</div>
            <div className="text-muted-foreground">
              I&apos;m from THE Åland Islands 🇦🇽 the business mecka in Finland 🇫🇮
            </div>
          </div>
        </div>
        {/* Right: Carousel */}
        <div className="flex justify-center w-full basis-1/2">
          <Carousel
            autoPlay={3000}
            items={siteConfig.teamMembers}
            renderItem={(member: TeamMember) => <TeamMemberCarousel member={member} />}
          />
        </div>
      </div>
    </section>
  );
}
