'use client';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectCaseStudy } from '@/types/project';
import { ProjectDialog } from './ProjectDialog';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  className?: string;
  index?: number;
}

export function ProjectCard({ project, className = '', index = 0 }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { locale } = useLanguage();

  // Text content based on language
  const viewDetailsText = locale === 'sv' ? 'Visa detaljer' : 'View details';
  const viewProjectText = locale === 'sv' ? 'Visa projekt' : 'View project';
  const openDialogText = locale === 'sv' ? 'Öppna projektinformation' : 'Open project details';
  const externalLinkText = locale === 'sv' ? 'Öppnar i ny flik' : 'Opens in new tab';

  // Handle click and keyboard interactions
  const handleCardInteraction = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      // Only handle keyboard events for Enter/Space
      if (e.type === 'keydown') {
        const keyboardEvent = e as React.KeyboardEvent;
        if (keyboardEvent.key !== 'Enter' && keyboardEvent.key !== ' ') {
          return;
        }
      }

      e.preventDefault();
      e.stopPropagation();

      // Check if the click was on a link or button inside the card
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        return;
      }

      // Check if there's a prototype URL in the links or if it's a Framer URL
      const hasPrototypeLink =
        project.content?.links?.some(
          (link) =>
            link.url.includes('framer.website') ||
            link.url.includes('framer.site') ||
            link.text?.toLowerCase().includes('prototype') ||
            link.text?.toLowerCase().includes('demo'),
        ) ||
        project.url?.includes('framer.website') ||
        project.url?.includes('framer.site');

      // Always open dialog for this project since it has a prototype or is marked for dialog
      if (project.openInDialog || project.content || hasPrototypeLink) {
        window.history.pushState(
          {},
          '',
          `${window.location.pathname}?project=${encodeURIComponent(project.title)}`,
        );
        setIsDialogOpen(true);
        return;
      }

      // Handle regular link behavior
      if (project.openInNewTab && project.url) {
        window.open(project.url, '_blank', 'noopener,noreferrer');
      } else if (project.url) {
        router.push(project.url);
      }
    },
    [project, router],
  );

  // Handle focus events for better keyboard navigation
  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  // Add keyboard event listener for the card
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardInteraction(e as unknown as React.KeyboardEvent);
      }
    };

    card.addEventListener('keydown', handleKeyDown);
    return () => card.removeEventListener('keydown', handleKeyDown);
  }, [handleCardInteraction]);

  // Extract the variant to use for the Card component
  const cardVariant = (['primary', 'primary', 'primary', 'primary'] as const)[index % 4];

  // Extract the dialog ID for ARIA
  const dialogId = `project-dialog-${project.title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        ref={cardRef}
        className="w-full h-full text-left p-0 bg-transparent border-0 focus:outline-none group"
        onClick={handleCardInteraction}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardInteraction(e as unknown as React.MouseEvent);
          }
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleFocus}
        onMouseLeave={handleBlur}
        aria-label={`${project.title}. ${project.summary}. ${openDialogText}`}
        aria-haspopup="dialog"
        aria-expanded={isDialogOpen}
        aria-controls={isDialogOpen ? dialogId : undefined}
      >
        <Card
          variant={cardVariant}
          className="h-full overflow-hidden transition-all duration-500 group-hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <div className="relative overflow-hidden aspect-video">
            <div className="absolute inset-0 z-0">
              <Image
                src={project.image}
                alt=""
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                width={800}
                height={450}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
                placeholder="blur"
                blurDataURL={
                  project.blurDataURL ||
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY2Ii8+Cjwvc3ZnPg=='
                }
                aria-hidden="true"
              />
            </div>

            {/* Overlay with gradient and hover effect */}
            <div
              className={`absolute inset-0 flex items-end p-6 bg-gradient-to-t to-transparent transition-opacity duration-500 from-black/80 via-black/30 ${
                isFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
              aria-hidden="true"
            >
              <div
                className={`transition-transform duration-500 ${isFocused ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}
              >
                <span className="flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 group-hover:gap-3">
                  {project.openInDialog || project.content ? viewDetailsText : viewProjectText}
                  <ExternalLink
                    className="inline-block w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          </div>

          <CardContent className="flex flex-col flex-1 p-0">
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h3 className="mb-2 text-xl font-extrabold transition-colors duration-300 text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-foreground/95 line-clamp-2">{project.summary}</p>
              </div>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={`${project.title}-tech-${i}`}
                      className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-accent-900/80 text-white"
                      aria-label={`Technology: ${tech}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-accent-800/60 text-white">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>

            <CardFooter className="flex justify-between px-6 pt-0 pb-6">
              <span className="sr-only">
                {project.openInDialog || project.content ? viewDetailsText : viewProjectText}
              </span>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-accent-700 dark:text-accent-500 hover:text-accent-900 dark:hover:text-accent-400"
                  aria-label={project.cta?.text || viewProjectText}
                >
                  {project.cta?.text || viewProjectText}
                  <ExternalLink
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
            </CardFooter>
          </CardContent>
        </Card>
      </button>

      <ProjectDialog
        project={project}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        dialogId={dialogId}
      />
    </div>
  );
}
