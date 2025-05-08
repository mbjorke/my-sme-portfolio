'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { ProjectCaseStudy } from '@/types/project';
import { ProjectDialog } from './ProjectDialog';
import { cardBase, cardHover, cardGradient } from '@/styles/card-decorations';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  // Combine technologies from both root and content for display
  const allTechnologies = [
    ...(project.technologies || []),
    ...(project.content?.technologies || []),
  ];

  const displayTechnologies = allTechnologies.slice(0, 3);
  const hasMoreTechnologies = allTechnologies.length > 3;

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('Project clicked:', project.title);

    // Check if there's a prototype URL in the links or if it's a Framer URL
    const hasPrototypeLink =
      project.content?.links?.some(
        (link) =>
          link.url.includes('framer.website') ||
          link.url.includes('framer.site') ||
          link.text.toLowerCase().includes('prototype') ||
          link.text.toLowerCase().includes('demo'),
      ) ||
      project.url?.includes('framer.website') ||
      project.url?.includes('framer.site');

    console.log('Has prototype link:', hasPrototypeLink);

    // Always open dialog for this project since it has a prototype or is marked for dialog
    if (project.openInDialog || project.content || hasPrototypeLink) {
      console.log('Opening dialog for project:', project.title);
      window.history.pushState({}, '', `${pathname}?project=${encodeURIComponent(project.title)}`);
      setIsDialogOpen(true);
      return;
    }

    // Handle regular link behavior
    if (project.openInNewTab) {
      window.open(project.url, '_blank');
    } else {
      router.push(project.url);
    }
  };

  const viewDetailsText = useLanguage().locale === 'sv' ? 'Visa detaljer' : 'View details';
  const viewProjectText = useLanguage().locale === 'sv' ? 'Visa projekt' : 'View project';
  const viewProjectCta = useLanguage().locale === 'sv' ? 'Visa projekt' : 'View Project';

  return (
    <>
      <Card
        className={cn(
          cardBase,
          'group flex flex-col h-full',
          'hover:shadow-lg hover:border-primary/70 hover:z-10',
          'transition-all duration-300',
          className,
        )}
        onClick={handleCardClick}
      >
        <div className={cardGradient} />
        <div className="overflow-hidden relative z-0 aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 transform-gpu"
            loading="lazy"
          />
          <div className="flex absolute inset-0 z-10 items-end p-4 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/60 group-hover:opacity-100">
            <span className="text-sm font-medium text-white">
              {project.openInDialog ? viewDetailsText : viewProjectText}
              {project.openInNewTab && <ExternalLink className="inline-block ml-1 w-4 h-4" />}
            </span>
          </div>
        </div>
        <CardContent className="flex flex-col flex-1 p-6">
          <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mb-4 text-muted-foreground line-clamp-2">{project.summary}</p>
          <div className="pt-4 mt-auto border-t border-border">
            <div className="flex justify-between items-center">
              <span className="flex items-center text-sm font-medium text-primary">
                {project.cta?.text || viewProjectCta}
                <ExternalLink className="ml-1 w-3 h-3" />
              </span>
              {displayTechnologies.length > 0 && (
                <div className="flex -space-x-1">
                  {displayTechnologies.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="flex justify-center items-center w-6 h-6 text-xs rounded-full border shadow-sm bg-muted border-background"
                      title={tech}
                    >
                      {tech.charAt(0).toUpperCase()}
                    </span>
                  ))}
                  {hasMoreTechnologies && (
                    <span className="flex justify-center items-center w-6 h-6 text-xs rounded-full border shadow-sm bg-muted border-background">
                      +{allTechnologies.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <ProjectDialog project={project} open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
