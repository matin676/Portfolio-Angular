export interface TechStackItem {
  name: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
  description: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  style: {
    iconBg: string; // e.g., 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    badgeBg: string; // e.g., 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
  };
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  links: {
    github?: string;
    demo?: string;
  };
  style: {
    iconBg: string; // e.g. "bg-gradient-to-br from-blue-600 to-blue-400 shadow-blue-500/25"
    buttonBg: string; // e.g. "bg-primary hover:bg-primary-dark shadow-primary/25"
    titleHover: string; // e.g. "group-hover:text-blue-600 dark:group-hover:text-blue-400"
    text: string; // e.g. "text-blue-600 dark:text-blue-400"
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  isCurrent: boolean;
  description: string[];
  tags: string[];
  icon: string;
  alignment: 'left' | 'right'; // For timeline visualization
}
