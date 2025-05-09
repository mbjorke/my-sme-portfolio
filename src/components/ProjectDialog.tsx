'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Monitor, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectCaseStudy } from '@/types/project';

interface ProjectDialogProps {
  project: ProjectCaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type TabType = 'details' | 'prototype';

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('details');
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

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

  if (!mounted || !project) return null;

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      window.history.pushState({}, '', pathname);
    }
    onOpenChange(isOpen);
  };

  const handleExternalLink = (url: string, target = '_blank') => {
    window.open(url, target);
  };

  // Get the prototype URL from the project
  const getPrototypeUrl = () => {
    console.log('Getting prototype URL...');

    // First check for a 'Live Prototype' link
    const prototypeLink = project.content?.links?.find(
      (link) =>
        link.text.toLowerCase().includes('prototype') || link.text.toLowerCase().includes('demo'),
    );

    // If no prototype link found, check if main URL is a Framer site
    const isFramerUrl =
      project.url?.includes('framer.website') || project.url?.includes('framer.site');

    const url = prototypeLink?.url || (isFramerUrl ? project.url : '');
    console.log('Prototype URL:', url);
    return url;
  };

  const prototypeUrl = getPrototypeUrl();
  const hasPrototypeLink = !!prototypeUrl;

  console.log('hasPrototypeLink:', hasPrototypeLink, 'prototypeUrl:', prototypeUrl);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="p-6 pb-0">
            <div>
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
              <DialogDescription>{project.summary}</DialogDescription>
            </div>
          </DialogHeader>

          {/* Tabs */}
          <div className="border-b px-6 mt-4">
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveTab('details')}
                className={cn(
                  'rounded-none border-b-2 h-auto py-2 px-3',
                  activeTab === 'details'
                    ? 'border-primary text-primary bg-secondary/50'
                    : 'border-transparent text-muted-foreground hover:bg-transparent hover:text-foreground',
                )}
              >
                <FileText className="h-4 w-4 mr-2" />
                {translations.details}
              </Button>

              {hasPrototypeLink && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTab('prototype')}
                  className={cn(
                    'rounded-none border-b-2 h-auto py-2 px-3',
                    activeTab === 'prototype'
                      ? 'border-primary text-primary bg-secondary/50'
                      : 'border-transparent text-muted-foreground hover:bg-transparent hover:text-foreground',
                  )}
                >
                  <Monitor className="h-4 w-4 mr-2" />
                  {translations.livePrototype}
                </Button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto">
            {activeTab === 'details' ? (
              <div className="p-6 space-y-6">
                {project.image && (
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 100vw"
                      priority={false}
                    />
                  </div>
                )}

                <div className="prose dark:prose-invert max-w-none">
                  {project.content?.description && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">{translations.aboutProject}</h3>
                      <p>{project.content.description}</p>
                    </div>
                  )}

                  {project.content?.features && project.content.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">{translations.keyFeatures}</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.content.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.content?.technologies && project.content.technologies.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {translations.technologiesUsed}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.content.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.cta && (
                    <Button
                      onClick={() =>
                        handleExternalLink(
                          project.cta.url,
                          project.openInNewTab ? '_blank' : '_self',
                        )
                      }
                      className="flex items-center gap-2"
                    >
                      {project.cta.text}
                      <ExternalLink className="h-4 w-4" />
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
                        className="flex items-center gap-2"
                      >
                        {link.text}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    ))}
                </div>
              </div>
            ) : (
              <div className="h-[70vh] min-h-[500px] relative border rounded-lg overflow-hidden bg-muted/20">
                <div className="absolute inset-0 flex flex-col">
                  <div className="bg-muted/30 p-2 text-xs text-muted-foreground">
                    {translations.embeddedPrototype}: {prototypeUrl}
                  </div>
                  <div className="flex-1 relative">
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
                            console.log('Iframe loaded');
                            setIsIframeLoaded(true);
                          }}
                        />
                        {!isIframeLoaded && (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                            <div className="animate-pulse">{translations.loadingPrototype}</div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="h-full flex items-center justify-center text-muted-foreground">
                        {translations.noPrototype}
                      </div>
                    )}
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
