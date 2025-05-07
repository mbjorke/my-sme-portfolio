import { siteConfig } from '@/config/siteConfig';

type Locale = (typeof siteConfig.locales)[number];

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top' | (string & {});

export interface ProjectLink {
  text: string;
  url: string;
  target?: LinkTarget;
}

export interface ProjectCaseStudy {
  title: string;
  titleSv?: string;
  summary: string;
  summarySv?: string;
  image: string;
  url: string;
  technologies?: string[];
  cta: ProjectLink & {
    textSv?: string;
  };
  content?: {
    description: string;
    descriptionSv?: string;
    features?: string[];
    featuresSv?: string[];
    technologies?: string[];
    links?: Array<ProjectLink & {
      textSv?: string;
    }>;
    openInDialog?: boolean;
  };
  openInNewTab?: boolean;
  openInDialog?: boolean;
}

export type ProjectsConfig = Record<Locale, ProjectCaseStudy[]>;
