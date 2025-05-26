'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectCaseStudy } from '@/types/project';
import Button from '@/components/ui/Button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { CardHeader, CardTitle } from './ui/card';
import { cardBase } from '@/styles/card-decorations';
import { ProjectDialog } from './ProjectDialog';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

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
      window.history.pushState({}, '', `${window.location.pathname}?project=${encodeURIComponent(project.title)}`);
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
        className={`group relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
        onClick={handleCardClick}
      >
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>

          {/* Overlay with gradient and hover effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-white text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                {project.openInDialog ? viewDetailsText : viewProjectText}
                <ExternalLink className="inline-block h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>

        <CardContent className="flex flex-col flex-1 p-6 transition-colors duration-300 group-hover:bg-accent/5">
          <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mb-4 text-muted-foreground line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
            {project.summary}
          </p>
        </CardContent>

        <CardFooter>
          <span className="text-sm font-medium text-primary flex items-center gap-1">
            {project.cta?.text || viewProjectCta}
            <ExternalLink className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
      <ProjectDialog project={project} open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
