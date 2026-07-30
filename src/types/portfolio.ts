export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];

  featured?: boolean;

  github?: string;
  demo?: string;

  highlights?: {
  value: string;
  label: string;
}[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  // TODO: replace with real credential URL
  url?: string;
}

export interface TimelineEvent {
  stage: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface BlogPost {
  category: string;
  title: string;
  readTime: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
