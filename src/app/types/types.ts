export interface Project {
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  role: string;
  challenges: string;
  results: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
