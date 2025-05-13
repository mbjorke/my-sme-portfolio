import { useLanguage } from '@/context/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { siteConfig } from '@/config/siteConfig';
import {
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

function hasImages(step: any): step is { images: string[] } {
  return Array.isArray(step.images);
}

export function HowSection() {
  const { locale } = useLanguage();
  const how = siteConfig.translations[locale as Locale].how;

  return (
    <section id="how" className="py-20 text-center">
      <h2 className="mb-8 text-3xl font-bold">{how.title}</h2>
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex flex-col gap-6 items-center w-full">
          {how.steps.map((step, idx) => (
            <Card key={step.title} gradientBorder>
              <CardHeader className="flex flex-row gap-4 items-center">
                <div className="flex flex-col items-center justify-center min-w-[56px]">
                  {hasImages(step) && step.images.length > 0
                    ? step.images.map((iconName: string, i: number) => {
                        const icons: Record<string, IconType> = {
                          SiNotion,
                          SiMiro,
                          SiSlack,
                          SiGithub,
                          SiReact,
                          SiNextdotjs,
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
                <div className="flex flex-col flex-1 justify-center items-start">
                  <CardTitle className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
