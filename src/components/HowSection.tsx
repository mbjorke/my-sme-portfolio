import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
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
      <h2 className="mb-8 text-3xl font-bold">{how.title}</h2>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex flex-col gap-6 items-center w-full">
          {how.steps.map((step, idx) => (
            <Card key={step.title + idx} gradientBorder className="w-full">
              <CardHeader>
                <CardTitle className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                  {step.title}
                </CardTitle>
                <div className="flex flex-row gap-4 justify-center items-center pt-4 pb-8">
                  {hasImages(step) && step.images.length > 0
                    ? step.images.map((iconName: string, i: number) => {
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
                          <Icon
                            key={iconName + i}
                            className="inline-block mx-1 transition-colors text-primary group-hover:text-accent-foreground"
                            title={iconName.replace('Si', '')}
                            aria-label={iconName.replace('Si', '')}
                            size={36}
                          />
                        ) : null;
                      })
                    : null}
                </div>
                <CardDescription className="text-base text-left">
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
