import React, { Fragment } from 'react';

import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { HowSection } from '@/components/HowSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <HowSection />
      <ProjectsSection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </>
  );
}
