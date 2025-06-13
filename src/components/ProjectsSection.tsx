import React from 'react';
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
    <section id="projects" className="relative z-10 p-40 text-center bg-background/70">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold">{sectionTitle}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="overflow-x-auto relative pb-12 w-full">
        <div className="flex gap-6 w-full snap-x snap-mandatory">
          {projects.map((project, index) => (
            <div
              key={index}
              className="snap-center shrink-0 flex-1 min-w-[400px] max-w-[600px] cursor-pointer"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
