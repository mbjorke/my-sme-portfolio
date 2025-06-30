'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { ExternalLink, Monitor, FileText } from 'lucide-react';

import Button from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useLanguage } from '@/context/LanguageContext';
// cn is not used in this file
import { ProjectCaseStudy } from '@/types/project';

interface ProjectDialogProps {
  project: ProjectCaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dialogId?: string;
}

type TabType = 'details' | 'prototype';

export function ProjectDialog({ project, open, onOpenChange, dialogId }: ProjectDialogProps) {
  console.log('ProjectDialog rendering', { open, project: project?.title });
  const pathname = usePathname();
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('details');
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Log whenever the component receives new props
  useEffect(() => {
    console.log('ProjectDialog received new props:', { open, project: project?.title });
  }, [open, project]);

  // Debug effect for open prop changes
  useEffect(() => {
    console.log('ProjectDialog open prop changed:', open);
  }, [open]);

  // Debug effect for project prop changes
  useEffect(() => {
    if (project) {
      console.log('Project data:', {
        title: project.title,
        hasContent: !!project.content,
        hasPrototype:
          project.url?.includes('framer.') ||
          project.content?.links?.some(
            (link: { url?: string; text?: string }) =>
              link.url?.includes('framer.') ||
              false ||
              link.text?.toLowerCase().includes('prototype') ||
              false ||
              link.text?.toLowerCase().includes('demo') ||
              false,
          ),
      });
    }
  }, [project]);

  // Debug effect for dialog ref
  useEffect(() => {
    if (dialogRef.current) {
      console.log('Dialog DOM node:', dialogRef.current);
    }
  }, [open]);

  // Get translations from siteConfig based on current locale
  const translations = {
    details: locale === 'sv' ? 'Detaljer' : 'Details',
    livePrototype: locale === 'sv' ? 'Live Prototyp' : 'Live Prototype',
    aboutProject: locale === 'sv' ? 'Om projektet' : 'About this project',
    keyFeatures: locale === 'sv' ? 'Nyckelfunktioner' : 'Key Features',
    technologiesUsed: locale === 'sv' ? 'Använda tekniker' : 'Technologies Used',
    loadingPrototype: locale === 'sv' ? 'Laddar prototyp...' : 'Loading prototype...',
    noPrototype: locale === 'sv' ? 'Ingen prototyp tillgänglig' : 'No prototype URL available',
    embeddedPrototype: locale === 'sv' ? 'Inbäddad prototyp' : 'Embedded Prototype',
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      setActiveTab('details');
      setIsIframeLoaded(false);
    }
  }, [open]);

  // Only check for mounted state in the effect
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Define all hooks at the top of the component
  const handleOpenChange = useCallback(
    (newOpenState: boolean) => {
      console.log('handleOpenChange called with:', newOpenState, 'current open state:', open);
      console.log('Dialog open state changing to:', newOpenState, {
        currentPath: typeof window !== 'undefined' ? window.location.pathname : '',
        hasProject: !!project,
        projectTitle: project?.title || 'No project',
      });

      if (!newOpenState) {
        console.log('Updating URL for dialog close');
        try {
          if (typeof window !== 'undefined') {
            window.history.pushState({}, '', pathname);
            console.log('URL updated to:', pathname);
          }
        } catch (error) {
          console.error('Error updating URL:', error);
        }
      }

      console.log('Calling onOpenChange with:', newOpenState);
      onOpenChange(newOpenState);
    },
    [open, project, pathname, onOpenChange],
  );

  // Define all callbacks at the top of the component
  const handleExternalLink = useCallback((url: string | undefined, target = '_blank') => {
    if (url && typeof window !== 'undefined') {
      window.open(url, target, 'noopener,noreferrer');
    }
  }, []);

  // Get the prototype URL from the project
  const getPrototypeUrl = useCallback((proj: ProjectCaseStudy | null): string | null => {
    if (!proj) return null;

    // First check for a 'Live Prototype' link
    const prototypeLink = proj.content?.links?.find((link) => {
      const linkText = link.text?.toLowerCase() || '';
      return linkText.includes('prototype') || linkText.includes('demo');
    });

    // If no prototype link found, check if main URL is a Framer site
    const isFramerUrl = proj.url
      ? proj.url.includes('framer.website') || proj.url.includes('framer.site')
      : false;

    return prototypeLink?.url || (isFramerUrl && proj.url ? proj.url : null);
  }, []);

  // Early return only if not mounted yet or no project
  if (!mounted || !project) {
    if (open && !project) {
      console.log('ProjectDialog: No project provided but dialog is open');
    }
    return null;
  }

  const prototypeUrl = getPrototypeUrl(project);
  const hasPrototypeLink = !!prototypeUrl;

  console.log('ProjectDialog rendering with project:', project?.title || 'none');

  if (!project) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        ref={dialogRef}
        className="max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-background"
      >
        {/* Add dialog ID for aria-controls */}
        {dialogId && <span id={dialogId} className="sr-only" aria-hidden="true" />}
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="p-6 pb-0 bg-card/50 border-b border-border/30">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-foreground/90">
                {project.summary}
              </DialogDescription>
            </div>
          </DialogHeader>

          {/* Tabs */}
          <div
            className="px-6 mt-4 border-b border-border/30"
            role="tablist"
            aria-label="Project details"
          >
            <div className="flex space-x-4">
              <Button
                variant="tab"
                size="sm"
                role="tab"
                aria-selected={activeTab === 'details'}
                aria-controls={`${dialogId}-details`}
                id={`${dialogId}-details-tab`}
                tabIndex={activeTab === 'details' ? 0 : -1}
                active={activeTab === 'details'}
                onClick={() => setActiveTab('details')}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveTab('details');
                  }
                }}
              >
                <FileText className="mr-2 w-4 h-4" aria-hidden="true" />
                {translations.details}
              </Button>

              {hasPrototypeLink && (
                <Button
                  variant="tab"
                  size="sm"
                  role="tab"
                  aria-selected={activeTab === 'prototype'}
                  aria-controls={`${dialogId}-prototype`}
                  id={`${dialogId}-prototype-tab`}
                  tabIndex={activeTab === 'prototype' ? 0 : -1}
                  active={activeTab === 'prototype'}
                  onClick={() => setActiveTab('prototype')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveTab('prototype');
                    }
                  }}
                >
                  <Monitor className="mr-2 w-4 h-4" aria-hidden="true" />
                  {translations.livePrototype}
                </Button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="overflow-auto flex-1">
            {/* Details Tab Panel */}
            <div
              id={`${dialogId}-details`}
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`${dialogId}-details-tab`}
              hidden={activeTab !== 'details'}
              className="h-full"
            >
              <div className="p-6 space-y-6">
                {project.image && (
                  <div className="overflow-hidden relative w-full h-64 rounded-lg md:h-80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      fill
                      sizes="(max-width: 768px) 100vw, 100vw"
                      priority={false}
                    />
                  </div>
                )}

                <div className="max-w-none prose dark:prose-invert prose-p:text-foreground/90 prose-strong:text-foreground prose-headings:text-foreground">
                  {project.content?.description && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        {translations.aboutProject}
                      </h3>
                      <p className="leading-relaxed text-foreground/90">
                        {project.content.description}
                      </p>
                    </div>
                  )}

                  {project.content?.features && project.content.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        {translations.keyFeatures}
                      </h3>
                      <ul className="pl-5 space-y-2 list-disc">
                        {project.content.features.map((feature, index) => (
                          <li key={index} className="text-foreground/90">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.content?.technologies && project.content.technologies.length > 0 && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        {translations.technologiesUsed}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.content.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary-foreground/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 pt-6 mt-4 border-t border-border/30">
                  {project.cta && (
                    <Button
                      onClick={() =>
                        handleExternalLink(
                          project.cta.url,
                          project.openInNewTab ? '_blank' : '_self',
                        )
                      }
                      className="flex gap-2 items-center"
                    >
                      {project.cta.text}
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  )}

                  {project.content?.links
                    ?.filter(
                      (link) =>
                        !link.text.toLowerCase().includes('prototype') &&
                        !link.text.toLowerCase().includes('demo'),
                    )
                    .map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        onClick={() => handleExternalLink(link.url, link.target || '_blank')}
                        className="flex gap-2 items-center"
                      >
                        {link.text}
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </Button>
                    ))}
                </div>
              </div>
            </div>

            {/* Prototype Tab Panel */}
            {hasPrototypeLink && (
              <div
                id={`${dialogId}-prototype`}
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`${dialogId}-prototype-tab`}
                hidden={activeTab !== 'prototype'}
                className="h-full"
              >
                <div className="h-[70vh] min-h-[500px] relative border rounded-lg overflow-hidden bg-muted/20">
                  <div className="flex absolute inset-0 flex-col">
                    <div className="p-2 text-xs bg-muted/30 text-muted-foreground">
                      {translations.embeddedPrototype}: {prototypeUrl}
                    </div>
                    <div className="relative flex-1">
                      {prototypeUrl ? (
                        <>
                          <iframe
                            key={prototypeUrl}
                            src={prototypeUrl}
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="eager"
                            title={`${project.title} Prototype`}
                            onLoad={() => {
                              setIsIframeLoaded(true);
                            }}
                          />
                          {!isIframeLoaded && (
                            <div className="flex absolute inset-0 justify-center items-center bg-background/80">
                              <div className="animate-pulse">{translations.loadingPrototype}</div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="flex justify-center items-center h-full text-muted-foreground">
                          {translations.noPrototype}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
