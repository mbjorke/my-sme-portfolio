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
    <section id="how" className="py-20 text-center">
      <h2 className="mb-12 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
        {how.title}
      </h2>
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {how.steps.map((step, idx) => (
            <Card
              key={step.title + idx}
              className="card-hover group relative overflow-hidden bg-background/50 backdrop-blur-sm"
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <div className="flex flex-col items-center">
                  <CardTitle className="mb-4 text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </CardTitle>

                  {hasImages(step) && step.images.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 py-4 mb-4">
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
                            className="p-2 rounded-full bg-background/80 shadow-sm icon-hover hover:bg-primary/10"
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

                <CardDescription className="text-foreground/80 text-left leading-relaxed">
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
