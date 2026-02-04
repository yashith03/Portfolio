export interface PersonalInfo {
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  availabilityBadge: string;
  location: string;
  timezone: string;
  email: string;
  cvUrl: string;
  profileImageUrl: string;
  responseTimeNote: string;
}

export interface Stats {
  yearsExperience: string;
  projectsCount: string;
  clientsCount: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  start: string;
  end: string;
  note: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  images?: string[];
  linkUrl: string;
  githubUrl?: string;
  features?: string[];
  highlights?: {
    [key: string]: string;
  };
}

export interface FeaturedProject extends ProjectItem {
  label: string;
}

export interface ServiceItem {
  title: string;
  icon?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export interface Social {
  github: SocialLink;
  linkedin: SocialLink;
  facebook?: SocialLink;
  instagram?: SocialLink;
}

export interface Contact {
  heading: string;
  description: string;
  email: string;
  phone?: string;
  ctaText: string;
  responseTime: string;
}

export interface LearningItem {
  title: string;
  provider: string;
  date: string;
  type: 'course' | 'certification' | 'workshop' | 'competition' | 'focus';
  url?: string;
  status?: 'completed' | 'in-progress';
}

export interface QAHighlight {
  category: string;
  skills: string[];
  description: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stats;
  currentRole: {
    companyName: string;
    label: string;
  };
  currentFocus: {
    title: string;
    description: string;
  };
  techStack: TechStackItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  learningAndCertifications: LearningItem[];
  qaHighlights: QAHighlight[];
  featuredProject: FeaturedProject;
  projects: ProjectItem[];
  services: ServiceItem[];
  social: Social;
  contact: Contact;
}
