'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectCaseStudy } from '@/types/project';
import { ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ProjectDialog } from './ProjectDialog';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  className?: string;
  index?: number;
}

export function ProjectCard({ project, className = '', index = 0 }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  // Technologies are now handled in the ProjectDialog component

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
      window.history.pushState(
        {},
        '',
        `${window.location.pathname}?project=${encodeURIComponent(project.title)}`,
      );
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
        key={project.title + index}
        variant={(['primary', 'primary', 'primary', 'primary'] as const)[index % 4]}
        className={`flex overflow-hidden relative flex-col h-full transition-all duration-500 group hover:shadow-lg ${className}`}
        onClick={handleCardClick}
        role="article"
        aria-label={`Project: ${project.title}`}
      >
        <div className="overflow-hidden relative aspect-video">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title} project`}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3} // Only preload first 3 images
              placeholder="blur"
              blurDataURL={
                project.blurDataURL ||
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY2Ii8+Cjwvc3ZnPg=='
              }
            />
          </div>

          {/* Overlay with gradient and hover effect */}
          <div
            className="flex absolute inset-0 items-end p-6 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 from-black/80 via-black/30 group-hover:opacity-100"
            aria-hidden="true"
          >
            <div className="transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="flex gap-2 items-center text-sm text-white duration-300 font-mediumtransition-all group-hover:gap-3">
                {project.openInDialog ? viewDetailsText : viewProjectText}
                <ExternalLink className="inline-block w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>

        <CardContent className="flex flex-col flex-1 p-6 transition-colors duration-300">
          <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 text-foreground">
            {project.title}
          </h3>
          <p className="mb-4 transition-colors duration-300 line-clamp-2 text-muted-foreground">
            {project.summary}
          </p>
          {project.tags?.length ? (
            <div className="flex flex-wrap gap-2 pt-2 mt-auto">
              {project.tags.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </CardContent>

        <CardFooter>
          <span className="flex gap-2 items-center text-sm font-medium transition-colors duration-200 text-muted-foreground group-hover:text-foreground">
            {project.cta?.text || viewProjectCta}
            <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </CardFooter>
      </Card>
      <ProjectDialog project={project} open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
