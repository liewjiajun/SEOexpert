export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  author: Author;
  publishedAt: string;
  readTime: number;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Value {
  title: string;
  description: string;
}
