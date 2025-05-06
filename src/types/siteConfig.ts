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
  }
  
  export interface WorkProcessStep {
    title: string;
    description: string;
    images: string[]; // Two emoji or image paths per step
  }
  
  export type WorkProcessImage = string; // emoji or image path