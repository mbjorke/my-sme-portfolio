import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { siteConfig } from '@/config/siteConfig';
import {
  SiFramer,
  SiNotion,
  SiMiro,
  SiSlack,
  SiGithub,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiVercel,
  SiSupabase,
} from 'react-icons/si';
import { IconType } from 'react-icons';

type Locale = 'en' | 'sv'; // Add all supported locales here

type Step = { title: string; description: string; images?: string[] };

function hasImages(step: Step): step is { title: string; description: string; images: string[] } {
  return Array.isArray(step.images);
}

export function HowSection() {
  const { locale } = useLanguage();
  const how = siteConfig.translations[locale as Locale].how;

  return (
    <section id="how" className="relative z-10 py-20 text-center bg-background/60">
      <h2 className="mb-12 text-4xl font-bold">{how.title}</h2>
      <div className="px-4 mx-auto w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {how.steps.map((step, idx) => (
            <Card
              key={step.title + idx}
              variant={(['primary', 'secondary', 'tertiary', 'quaternary'] as const)[idx]}
            >
              <CardHeader className="relative z-10">
                <div className="flex flex-col items-center">
                  <CardTitle className="mb-4 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
                    {step.title}
                  </CardTitle>

                  {hasImages(step) && step.images.length > 0 && (
                    <div className="flex flex-wrap gap-3 justify-center py-4 mb-4">
                      {step.images.map((iconName: string, i: number) => {
                        const icons: Record<string, IconType> = {
                          SiNotion,
                          SiMiro,
                          SiSlack,
                          SiGithub,
                          SiReact,
                          SiNextdotjs,
                          SiFramer,
                          SiGit,
                          SiVercel,
                          SiSupabase,
                        };
                        const Icon = icons[iconName];
                        return Icon ? (
                          <div
                            key={iconName + i}
                            className="p-2 rounded-full shadow-sm bg-background/80 icon-hover hover:bg-primary/10"
                          >
                            <Icon
                              className="text-foreground/70 hover:text-primary"
                              title={iconName.replace('Si', '')}
                              aria-label={iconName.replace('Si', '')}
                              size={24}
                            />
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>

                <CardDescription className="leading-relaxed text-left text-white/90">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
