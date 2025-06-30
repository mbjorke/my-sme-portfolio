'use client';
import React, { useState, useRef, useEffect, useMemo, useCallback, memo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectCaseStudy } from '@/types/project';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  className?: string;
  index?: number;
  onOpenDialog: (project: ProjectCaseStudy) => void;
}

// No need for separate interface, we'll use the same props as ProjectCard

// Inner component for the card content
const ProjectCardContent = ({
  project,
  index = 0,
  onOpenDialog,
}: Pick<ProjectCardProps, 'project' | 'index' | 'onOpenDialog'>) => {
  // Technologies list with proper null checks
  const technologiesList = useMemo(() => {
    const techList = project.technologies || [];
    if (techList.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
        {techList.slice(0, 3).map((tech, i) => (
          <span
            key={`${project.title}-tech-${i}`}
            className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-accent-900/80 text-white"
            aria-label={`Technology: ${tech}`}
          >
            {tech}
          </span>
        ))}
        {techList.length > 3 && (
          <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-accent-800/60 text-white">
            +{techList.length - 3} more
          </span>
        )}
      </div>
    );
  }, [project.technologies, project.title]);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { locale } = useLanguage();

  // Memoize text content to prevent recreation
  const { viewDetailsText, viewProjectText, openDialogText } = useMemo(
    () => ({
      viewDetailsText: locale === 'sv' ? 'Visa detaljer' : 'View details',
      viewProjectText: locale === 'sv' ? 'Visa projekt' : 'View project',
      openDialogText: locale === 'sv' ? 'Öppna projektinformation' : 'Open project details',
    }),
    [locale],
  );

  // Log component renders for debugging
  useEffect(() => {
    console.log('ProjectCard rendering:', project.title);
  }, [project.title]);

  // Handle card interaction
  const handleCardInteraction = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      console.log('Card clicked:', project.title);

      // Only handle keyboard events for Enter/Space
      if (e.type === 'keydown' && !['Enter', ' '].includes((e as React.KeyboardEvent).key)) {
        return;
      }

      // Stop propagation to prevent parent handlers from interfering
      e.stopPropagation();
      e.preventDefault();

      // Get the actual element that was clicked
      let target = e.target as HTMLElement;

      // Check if the click was on an interactive element we want to ignore
      const ignoredSelectors = [
        'a',
        'button',
        'input',
        'textarea',
        'select',
        'label',
        '[role="button"]',
        '[role="link"]',
        '[role="menuitem"]',
        '.btn',
        '.button',
        '.link',
        '.external-link',
        // Add any other selectors for interactive elements in your project cards
      ];

      // Check if the click target or any of its parents match our ignored selectors
      const isClickOnInteractiveElement = ignoredSelectors.some((selector) => {
        const element = target.closest(selector);
        if (element) {
          console.log('Found interactive element:', selector, element);
          return true;
        }
        return false;
      });

      if (isClickOnInteractiveElement) {
        console.log('Click on interactive element, skipping dialog');
        return;
      }

      console.log('Opening dialog for project:', project.title);
      onOpenDialog(project);
    },
    [project, onOpenDialog],
  );

  // Handle focus events
  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  // Keyboard navigation and click handling
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardInteraction(e as unknown as React.KeyboardEvent);
      }
    };

    // Use capture phase to ensure we handle the click before other handlers
    const handleClick = (e: MouseEvent) => {
      handleCardInteraction(e as unknown as React.MouseEvent);
    };

    // Add both click and keydown event listeners
    card.addEventListener('keydown', handleKeyDown);
    card.addEventListener('click', handleClick, { capture: true });

    return () => {
      card.removeEventListener('keydown', handleKeyDown);
      card.removeEventListener('click', handleClick, { capture: true });
    };
  }, [handleCardInteraction]);

  return (
    <button
      type="button"
      ref={cardRef}
      className="w-full h-full text-left p-0 bg-transparent border-0 focus:outline-none group"
      onClick={handleCardInteraction}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardInteraction(e);
        }
      }}
      aria-haspopup="dialog"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      aria-label={`${project.title}. ${project.summary}. ${openDialogText}`}
      aria-expanded={false}
    >
      <Card
        variant="primary"
        className="h-full overflow-hidden transition-all duration-500 group-hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        {/* Card content */}
        <div className="relative overflow-hidden aspect-video">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.title ? `Screenshot of ${project.title}` : 'Project screenshot'}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={index < 3 ? 'eager' : 'lazy'}
              priority={index < 2} // Only preload first 2 images
              placeholder="blur"
              blurDataURL={
                project.blurDataURL ||
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY2Ii8+Cjwvc3ZnPg=='
              }
            />
          </div>
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
          <div className="flex flex-col flex-1 px-6 py-4">
            <h3 className="mb-2 text-xl font-semibold text-foreground line-clamp-2">
              {project.title}
            </h3>
            <p className="mb-4 text-foreground/95 line-clamp-2">{project.summary}</p>
            {technologiesList}
          </div>
          <CardFooter className="flex justify-between px-6 pt-6 pb-6">
            <span className="sr-only">
              {project.openInDialog || project.content ? viewDetailsText : viewProjectText}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-accent-100 hover:text-accent-500"
                aria-label={project.cta?.text || viewProjectText}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Project link clicked, stopping propagation');
                  // Don't prevent default to allow normal link behavior
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.stopPropagation();
                    // Allow default for keyboard navigation
                  }
                }}
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
  );
};

// Main ProjectCard component with proper memoization
const ProjectCard = memo(
  ({ project, className = '', index = 0, onOpenDialog }: ProjectCardProps) => {
    return (
      <div className={`relative ${className}`}>
        <ProjectCardContent project={project} index={index} onOpenDialog={onOpenDialog} />
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.className === nextProps.className &&
    prevProps.index === nextProps.index &&
    prevProps.project.title === nextProps.project.title,
);

// Set display name for debugging
ProjectCard.displayName = 'ProjectCard';

export { ProjectCard };
export type { ProjectCardProps };
