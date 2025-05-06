import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

type Locale = 'en' | 'sv'; // Add all supported locales here

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionTitle = siteConfig.translations[locale as Locale].projectsSection.title;
  const projects = siteConfig.projects;

  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">{sectionTitle}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl shadow-lg p-6 bg-background border border-border"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.summary}</p>
            <a
              href={project.cta.url}
              className="inline-block rounded-xl px-6 py-2 bg-primary text-primary-foreground font-medium shadow transition-transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.cta.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}