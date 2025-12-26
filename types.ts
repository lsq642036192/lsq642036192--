import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: 'Company' | 'Industry' | 'Notice';
  description: string;
  image: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface HonorItem {
  title: string;
  year: string;
  image: string;
  description: string;
}

export interface Department {
  name: string;
  icon: LucideIcon;
  description: string;
  contact: string;
  email: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}