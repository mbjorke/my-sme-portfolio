export interface TeamMember {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  longBio?: string;
  email?: string;
  skills: string[];
  funFact: string;
  favoriteSnack: string;
  social?: {
    github?: string;
    bluesky?: string;
    linkedin?: string;
    instagram?: string;
  };
  showLogo?: boolean;
}

export interface WorkProcessStep {
  title: string;
  description: string;
  images: string[]; // Two emoji or image paths per step
}

export type WorkProcessImage = string; // emoji or image path

export interface Testimonial {
  type: string;
  name: string;
  badge: string;
  badgeUrl: string;
  url: string;
  quote: string;
  show: boolean;
}
