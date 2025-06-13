import React, { Fragment } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { HowSection } from '@/components/HowSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

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
