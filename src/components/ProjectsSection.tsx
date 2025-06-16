import React, { useMemo } from 'react';
import Image from 'next/image';

import { siteConfig } from '@/config/siteConfig';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectCaseStudy } from '@/types/project';
type Locale = 'en' | 'sv';
import { Card } from '@/components/ui/card';
import { Link } from '@/components/ui/link';

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

// Memoize the translation function to prevent recreation on every render
const getProjects = (locale: Locale) => {
  return siteConfig.caseStudies.map((project) => getTranslatedProject(project, locale));
};

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionTitle = siteConfig.translations[locale as Locale].projectsSection.title;

  // Memoize the translated projects to prevent recreation on every render
  const projects = useMemo(() => getProjects(locale as Locale), [locale]);

  // Default image dimensions
  const defaultImageDimensions = { width: 1200, height: 630 };

  const description = useMemo(() => {
    return locale === 'sv'
      ? 'Utforska några av mina senaste projekt.'
      : 'Explore some of my recent work.';
  }, [locale]);

  return (
    <section id="projects" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-background/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{sectionTitle}</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative"
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground mt-2">{project.summary}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech, i) => (
                          <span
                            key={`${project.title}-tech-${i}`}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        {project.content?.links?.map((link, i) => (
                          <Link
                            key={`${project.title}-link-${i}`}
                            href={link.url}
                            className="text-sm"
                            variant="primary"
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      {...defaultImageDimensions}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index < 3} // Load first 3 images with priority
                    />
                  </div>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
