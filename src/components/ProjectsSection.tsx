import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudy } from '@/types/project';

type Locale = 'en' | 'sv';

function getTranslatedProject(project: ProjectCaseStudy, locale: Locale): ProjectCaseStudy {
  if (locale === 'sv') {
    return {
      ...project,
      title: project.titleSv || project.title,
      summary: project.summarySv || project.summary,
      content: project.content
        ? {
            ...project.content,
            description: project.content.descriptionSv || project.content.description,
            features: project.content.featuresSv || project.content.features,
            links: project.content.links?.map((link) => ({
              ...link,
              text: link.textSv || link.text,
            })),
          }
        : undefined,
      cta: {
        ...project.cta,
        text: project.cta.textSv || project.cta.text,
      },
    };
  }
  return project;
}

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionTitle = siteConfig.translations[locale as Locale].projectsSection.title;
  const projects = siteConfig.caseStudies.map((project) =>
    getTranslatedProject(project, locale as Locale),
  );
  const description =
    locale === 'sv'
      ? 'Utforska några av mina senaste projekt. Klicka på ett projekt för att lära dig mer.'
      : 'Explore some of my recent projects. Click on a project to learn more.';

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{sectionTitle}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            project={project}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
          />
        ))}
      </div>
    </section>
  );
}
