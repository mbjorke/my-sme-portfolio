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
  summary: string;
  image: string;
  url: string;
  cta: ProjectLink;
  content?: {
    description: string;
    features?: string[];
    technologies?: string[];
    links?: ProjectLink[];
    openInDialog?: boolean;
  };
  openInNewTab?: boolean;
  openInDialog?: boolean;
}

export type ProjectsConfig = Record<Locale, ProjectCaseStudy[]>;
