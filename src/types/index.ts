export interface CTAButton {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  capabilities: readonly string[];
  role: string;
}

export interface ExperienceItem {
  company: string;
  summary: string;
}

export interface WritingTopic {
  title: string;
  summary: string;
  href: string;
}
