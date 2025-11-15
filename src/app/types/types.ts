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

export const tokenColors = {
  keyword: "text-purple-400",
  key: "text-green-400",
  string: "text-yellow-300",
  boolean: "text-blue-400",
  symbol: "text-gray-300",
  text: "text-gray-200",
};

type TokenType = keyof typeof tokenColors;

export interface CodeToken {
  t: TokenType;
  v: string;
}
