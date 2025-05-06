import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';
import { ProjectCard } from './ProjectCard';

type Locale = 'en' | 'sv';

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionTitle = siteConfig.translations[locale as Locale].projectsSection.title;
  const projects = siteConfig.caseStudies;

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{sectionTitle}</h2>
        <p className="text-lg text-muted-foreground">
          Explore some of my recent projects. Click on a project to learn more.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.title}
            project={project}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
          />
        ))}
      </div>
    </section>
  );
}