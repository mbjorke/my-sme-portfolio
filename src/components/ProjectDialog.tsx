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
import Button from '@/components/ui/Button';
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
    // First check for a 'Live Prototype' link
    const prototypeLink = project.content?.links?.find(
      (link) =>
        link.text.toLowerCase().includes('prototype') || link.text.toLowerCase().includes('demo'),
    );

    // If no prototype link found, check if main URL is a Framer site
    const isFramerUrl =
      project.url?.includes('framer.website') || project.url?.includes('framer.site');

    const url = prototypeLink?.url || (isFramerUrl ? project.url : '');
    return url;
  };

  const prototypeUrl = getPrototypeUrl();
  const hasPrototypeLink = !!prototypeUrl;

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
          <div className="px-6 mt-4 border-b">
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
                <FileText className="mr-2 w-4 h-4" />
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
                  <Monitor className="mr-2 w-4 h-4" />
                  {translations.livePrototype}
                </Button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="overflow-auto flex-1">
            {activeTab === 'details' ? (
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

                <div className="max-w-none prose dark:prose-invert">
                  {project.content?.description && (
                    <div className="mb-6">
                      <h3 className="mb-2 text-xl font-semibold">{translations.aboutProject}</h3>
                      <p>{project.content.description}</p>
                    </div>
                  )}

                  {project.content?.features && project.content.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="mb-2 text-xl font-semibold">{translations.keyFeatures}</h3>
                      <ul className="pl-5 space-y-1 list-disc">
                        {project.content.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.content?.technologies && project.content.technologies.length > 0 && (
                    <div className="mb-6">
                      <h3 className="mb-2 text-xl font-semibold">
                        {translations.technologiesUsed}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.content.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
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
                      className="flex gap-2 items-center"
                    >
                      {project.cta.text}
                      <ExternalLink className="w-4 h-4" />
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
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    ))}
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
