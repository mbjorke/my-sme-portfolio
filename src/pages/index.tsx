import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { HowSection } from '@/components/HowSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <HowSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
