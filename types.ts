import { LucideIcon } from 'lucide-react';

export interface ServiceModule {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  deliverables: string[];
  outcome: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  phase: string;
}

export interface PricingTier {
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface CaseStudy {
  id: string;
  clientType: string;
  metric: string;
  value: string;
  description: string;
  chartData: { month: string; value: number }[];
  stats: { label: string; value: string; trend: string; trendUp: boolean }[];
}