import { 
  Workflow, 
  Database, 
  Mail, 
  Phone, 
  Layers, 
} from 'lucide-react';
import { ServiceModule, ProcessStep, PricingTier, CaseStudy } from './types';

export const SERVICE_MODULES: ServiceModule[] = [
  {
    id: 'arch',
    title: 'Funnel Architecture',
    description: 'Engineering the customer journey from first impression to transaction.',
    icon: Layers,
    deliverables: ['High-Conversion VSL Pages', 'Booking Flow Logic', 'Frictionless Payment Gateways'],
    outcome: 'A predictable mechanism for capturing intent.'
  },
  {
    id: 'strategy',
    title: 'Content-to-Sales Strategy',
    description: 'Mapping creative output to revenue outcomes without chasing trends.',
    icon: Workflow,
    deliverables: ['Cross-Platform CTA Mapping', 'Bridge Content Scripts', 'Audience Segmentation Strategy'],
    outcome: 'Every piece of content has a measurable purpose.'
  },
  {
    id: 'capture',
    title: 'Lead Capture & Automation',
    description: 'Automated nurturing systems that operate 24/7.',
    icon: Database,
    deliverables: ['Behavior-Based Email Sequences', 'Tagging & Segmentation Logic', 'Asset Delivery Automation'],
    outcome: 'Leads are nurtured while you sleep.'
  },
  {
    id: 'qual',
    title: 'Call-Booking & CRM Logic',
    description: 'Ensuring only qualified prospects reach your calendar.',
    icon: Phone,
    deliverables: ['Pre-Call Qualification Forms', 'CRM Integration', 'Automated Reminders & Follow-ups'],
    outcome: 'Eliminate tire-kickers and focus on closable deals.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    phase: 'Diagnosis',
    title: 'Application & System Audit',
    description: 'We analyze your current content volume and revenue gaps to determine leverage points.'
  },
  {
    id: 2,
    phase: 'Architecture',
    title: 'Funnel Design & Strategy',
    description: 'We blueprint the entire customer journey, selecting the right tools and logic flows.'
  },
  {
    id: 3,
    phase: 'Engineering',
    title: 'Build & Automation',
    description: 'Implementation of landing pages, email sequences, and CRM connections.'
  },
  {
    id: 4,
    phase: 'Deployment',
    title: 'Launch & Optimization',
    description: 'Go-live followed by rigorous data analysis and conversion rate optimization.'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'System Architecture & Build',
    priceRange: '$1,000 – $3,000 (one-time)',
    description: 'Complete funnel engineering, automation setup, and technical infrastructure build.',
    features: [
      'Full Funnel Strategy & Design',
      'Technical Implementation',
      'CRM & Email Automation Setup',
      '30-Day Launch Support'
    ],
    cta: 'Book 1:1 Strategy Call',
    highlighted: false
  },
  {
    name: 'Performance Partnership',
    priceRange: 'Revenue Share · Application Only',
    description: 'A selective, outcome-aligned partnership where we invest resources in exchange for upside.',
    features: [
      'Zero Upfront Implementation Cost',
      'Full-Service System Management',
      'Strict Qualification Criteria',
      'Direct Access to Engineering Team'
    ],
    cta: 'Book 1:1 Strategy Call',
    highlighted: true
  },
  {
    name: 'Growth Operator Retainer',
    priceRange: '$500 – $1,000 / month',
    description: 'Ongoing optimization, execution, and management of your revenue system.',
    features: [
      'Monthly Funnel Optimization',
      'Weekly Strategy & Reporting',
      'A/B Testing & Iteration',
      'Priority Technical Support'
    ],
    cta: 'Book 1:1 Strategy Call',
    highlighted: false
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    clientType: 'Finance Educator',
    metric: 'Call Bookings',
    value: '+240%',
    description: 'Shifted from manual DMs to an automated VSL funnel. Revenue stabilized despite 30% less posting volume.',
    chartData: [
      { month: 'Jan', value: 12 },
      { month: 'Feb', value: 18 },
      { month: 'Mar', value: 15 },
      { month: 'Apr', value: 35 },
      { month: 'May', value: 42 },
      { month: 'Jun', value: 58 },
    ],
    stats: [
        { label: 'Total Revenue', value: '$16.5k', trend: '+15%', trendUp: true },
        { label: 'Qualified Leads', value: '142', trend: '+40%', trendUp: true },
        { label: 'CPL', value: '$6.00', trend: '-12%', trendUp: true } // Lower CPL is "Up" in performance
    ]
  },
  {
    id: 'cs2',
    clientType: 'Fitness Mentor',
    metric: 'Lead Quality',
    value: '90% Qual.',
    description: 'Implemented strict application logic. Calendar went from full of no-shows to high-ticket closers.',
    chartData: [
      { month: 'Jan', value: 20 },
      { month: 'Feb', value: 25 },
      { month: 'Mar', value: 65 },
      { month: 'Apr', value: 78 },
      { month: 'May', value: 85 },
      { month: 'Jun', value: 92 },
    ],
    stats: [
        { label: 'Show Rate', value: '92%', trend: '+35%', trendUp: true },
        { label: 'High Ticket Sales', value: '18', trend: '+8', trendUp: true },
        { label: 'Admin Hours', value: '4hrs', trend: '-15hrs', trendUp: true }
    ]
  }
];