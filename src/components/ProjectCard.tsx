'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { ProjectCaseStudy } from '@/types/project';
import { ProjectDialog } from './ProjectDialog';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Project clicked:', project.title);
    
    // Check if there's a prototype URL in the links or if it's a Framer URL
    const hasPrototypeLink = project.content?.links?.some(link => 
      link.url.includes('framer.website') || 
      link.url.includes('framer.site') ||
      link.text.toLowerCase().includes('prototype') ||
      link.text.toLowerCase().includes('demo')
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
      <div
        className={`group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${className}`}
        onClick={handleClick}
      >
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-sm font-medium">
              {project.openInDialog ? viewDetailsText : viewProjectText}
              {project.openInNewTab && <ExternalLink className="inline-block ml-1 h-4 w-4" />}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mb-4 text-muted-foreground line-clamp-2">{project.summary}</p>
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-sm font-medium text-primary flex items-center">
              {project.cta?.text || viewProjectCta}
              <ExternalLink className="ml-1 h-3 w-3" />
            </span>
            {project.content?.technologies && project.content.technologies.length > 0 && (
              <div className="flex -space-x-1">
                {project.content.technologies.slice(0, 3).map((tech, i) => (
                  <span 
                    key={i}
                    className="h-6 w-6 rounded-full bg-muted text-xs flex items-center justify-center border border-background shadow-sm"
                    title={tech}
                  >
                    {tech.charAt(0).toUpperCase()}
                  </span>
                ))}
                {project.content.technologies.length > 3 && (
                  <span className="h-6 w-6 rounded-full bg-muted text-xs flex items-center justify-center border border-background shadow-sm">
                    +{project.content.technologies.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <ProjectDialog
        project={project}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
