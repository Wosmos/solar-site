'use client'
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image'
import { 
  ExternalLink, 
  MapPin, 
  Zap, 
  Calendar,
  Building2,
  Users,
  Clock,
  Award,
  Target,
  TrendingUp,
  Wrench,
  Leaf,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Globe,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  ShieldCheck,
  Lightbulb,
  Truck,
  Factory,
  X
} from 'lucide-react';
// Images will be added later - using placeholders for now

interface ProjectDetail {
  id: number;
  name: string;
  location: string;
  capacity: string;
  status: 'Completed' | 'Ongoing' | 'Planning' | 'Suspended';
  scope: string;
  description: string;
  image: string;
  features: string[];
  year: string;
  // Expanded project details
  client: string;
  projectValue: string;
  timeline: {
    planning: string;
    construction: string;
    commissioning: string;
    completion: string;
  };
  technicalSpecs: {
    moduleType: string;
    inverterType: string;
    trackingSystem: string;
    moduleCount: string;
    efficiency: string;
    annualGeneration: string;
  };
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
  achievements: string[];
  environmental: {
    co2Reduction: string;
    energyEquivalent: string;
    treesPlanted: string;
  };
  technology: string[];
  certifications: string[];
  awards: string[];
  teamSize: string;
  lessonLearned: string;
  futureImpact: string;
  sector: 'Utility' | 'Commercial' | 'Industrial' | 'Residential';
  projectType: 'INC' | 'Installation' | 'Consulting' | 'Maintenance';
}

// Comprehensive project data with detailed case studies
const projects: ProjectDetail[] = [
  {
    id: 1,
    name: 'Sweihan Solar Project',
    location: 'Abu Dhabi, UAE',
    capacity: '1,177 MW',
    status: 'Completed',
    scope: 'INC Construction - Zones 1&4, Zone 3B',
    description: 'One of the world&apos;s largest single-site solar projects, establishing new benchmarks for utility-scale solar development in the Middle East.',
    image: '/images/placeholder-project1.jpg',
    features: ['Utility-scale installation', 'Desert conditions', 'Grid integration', 'World-class efficiency'],
    year: '2019-2022',
    client: 'Emirates Water and Electricity Company (EWEC)',
    projectValue: '$871 Million USD',
    timeline: {
      planning: 'Q1 2019 - Q2 2019',
      construction: 'Q3 2019 - Q4 2021',
      commissioning: 'Q1 2022 - Q2 2022',
      completion: 'June 2022'
    },
    technicalSpecs: {
      moduleType: 'Monocrystalline Silicon 545W',
      inverterType: 'Central Inverters 4.2MW',
      trackingSystem: 'Single-axis horizontal tracking',
      moduleCount: '2,158,184 modules',
      efficiency: '21.2% module efficiency',
      annualGeneration: '2,580 GWh/year'
    },
    challenges: [
      {
        title: 'Extreme Desert Conditions',
        description: 'Working in temperatures exceeding 50°C with frequent sandstorms and challenging logistics.',
        solution: 'Implemented specialized equipment cooling systems, dust mitigation protocols, and adaptive work schedules during extreme weather.'
      },
      {
        title: 'Massive Scale Coordination',
        description: 'Coordinating installation of over 2.1 million solar modules across multiple zones simultaneously.',
        solution: 'Developed advanced project management systems with real-time tracking and zone-specific teams with specialized workflows.'
      },
      {
        title: 'Grid Integration Complexity',
        description: 'Connecting 1,177 MW capacity to existing grid infrastructure without disruption.',
        solution: 'Phased commissioning approach with comprehensive grid studies and advanced protection systems.'
      }
    ],
    achievements: [
      'Completed 6 months ahead of schedule',
      'Zero lost-time accidents over 8.2 million work hours',
      'Achieved 99.7% module installation accuracy',
      'Established new regional installation speed records',
      'Successfully integrated largest solar capacity in single project'
    ],
    environmental: {
      co2Reduction: '1.6 million tons annually',
      energyEquivalent: 'Powers 290,000 homes annually',
      treesPlanted: 'Equivalent to planting 41 million trees'
    },
    technology: [
      'Advanced robotic installation systems',
      'AI-powered quality control',
      'Drone-based site monitoring',
      'Predictive maintenance systems',
      'Smart inverter technology'
    ],
    certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'OHSAS 18001:2007'],
    awards: ['Best Large-Scale Solar Project - Middle East Solar Awards 2023'],
    teamSize: '1,200+ engineers and technicians',
    lessonLearned: 'Large-scale coordination requires specialized project management tools and extensive local workforce development programs.',
    futureImpact: 'Sets the foundation for Abu Dhabi&apos;s 2030 renewable energy targets and demonstrates feasibility of gigawatt-scale solar projects in desert environments.',
    sector: 'Utility',
    projectType: 'INC'
  },
  {
    id: 2,
    name: 'Al Dafra PV2 Project',
    location: 'Abu Dhabi, UAE',
    capacity: '2,000 MW',
    status: 'Completed',
    scope: 'INC Construction Services',
    description: 'Record-breaking solar installation establishing new global benchmarks for utility-scale solar development and desert engineering excellence.',
    image: '/images/placeholder-project2.jpg',
    features: ['Record capacity', 'Advanced tracking', 'High efficiency', 'Desert innovation'],
    year: '2020-2023',
    client: 'Emirates Water and Electricity Company (EWEC)',
    projectValue: '$1.2 Billion USD',
    timeline: {
      planning: 'Q2 2020 - Q4 2020',
      construction: 'Q1 2021 - Q3 2023',
      commissioning: 'Q4 2023 - Q1 2024',
      completion: 'February 2024'
    },
    technicalSpecs: {
      moduleType: 'Bifacial PERC 605W',
      inverterType: 'String Inverters 125kW',
      trackingSystem: 'Single-axis tracking with backtracking',
      moduleCount: '3,305,785 modules',
      efficiency: '22.1% bifacial module efficiency',
      annualGeneration: '4,900 GWh/year'
    },
    challenges: [
      {
        title: 'World Record Scale',
        description: 'Managing the largest single-site solar project globally with unprecedented logistical complexity.',
        solution: 'Implemented modular construction approach with parallel work streams and advanced supply chain management systems.'
      },
      {
        title: 'Bifacial Technology Implementation',
        description: 'First large-scale implementation of bifacial modules in desert conditions with ground albedo optimization.',
        solution: 'Developed specialized ground preparation techniques and optimized module spacing for maximum bifacial gain.'
      },
      {
        title: 'Extended Construction Timeline',
        description: 'Maintaining quality and safety standards across 3+ year construction period in challenging conditions.',
        solution: 'Established permanent site facilities, rotating crew schedules, and comprehensive quality assurance protocols.'
      }
    ],
    achievements: [
      'Achieved world record for largest single-site solar project',
      'Maintained 99.8% safety record with zero fatalities',
      'Optimized bifacial gain to 18% above expectations',
      'Completed with 15% cost reduction vs. initial estimates',
      'Set new industry standards for desert solar construction'
    ],
    environmental: {
      co2Reduction: '2.8 million tons annually',
      energyEquivalent: 'Powers 480,000 homes annually',
      treesPlanted: 'Equivalent to planting 72 million trees'
    },
    technology: [
      'Bifacial module optimization systems',
      'Advanced ground albedo enhancement',
      'Machine learning-based performance prediction',
      'Automated cable laying robotics',
      'IoT-enabled construction monitoring'
    ],
    certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
    awards: ['Global Solar Project of the Year 2024', 'Engineering Excellence Award - UAE'],
    teamSize: '1,800+ engineers and technicians',
    lessonLearned: 'Bifacial technology requires specialized ground preparation and installation techniques that significantly impact project economics and performance.',
    futureImpact: 'Establishes bifacial solar as the preferred technology for utility-scale desert installations and provides technical foundation for next-generation projects.',
    sector: 'Utility',
    projectType: 'INC'
  },
  {
    id: 3,
    name: 'Saudi Sakkakah Project',
    location: 'Al Jouf, Saudi Arabia',
    capacity: '300 MW',
    status: 'Completed',
    scope: 'Module Installation & Alignment Services',
    description: 'Strategic market entry project demonstrating precision installation capabilities and successful international expansion into Saudi Arabia\'s renewable energy sector.',
    image: '/images/placeholder-project3.jpg',
    features: ['International expansion', 'Precision installation', 'Local partnerships', 'Technology transfer'],
    year: '2021-2022',
    client: 'ACWA Power & Al Jouf Development Company',
    projectValue: '$195 Million USD',
    timeline: {
      planning: 'Q3 2021 - Q4 2021',
      construction: 'Q1 2022 - Q3 2022',
      commissioning: 'Q4 2022 - Q1 2023',
      completion: 'December 2022'
    },
    technicalSpecs: {
      moduleType: 'Monocrystalline PERC 540W',
      inverterType: 'Central Inverters 3.125MW',
      trackingSystem: 'Fixed-tilt optimized design',
      moduleCount: '555,556 modules',
      efficiency: '20.9% module efficiency',
      annualGeneration: '680 GWh/year'
    },
    challenges: [
      {
        title: 'International Market Entry',
        description: 'Establishing operations in new market with different regulations, standards, and workforce requirements.',
        solution: 'Formed strategic local partnerships and implemented comprehensive workforce development and knowledge transfer programs.'
      },
      {
        title: 'Precision Installation Requirements',
        description: 'Client required exceptional installation accuracy with minimal rework tolerance.',
        solution: 'Deployed advanced surveying equipment and implemented real-time quality control systems with instant feedback loops.'
      },
      {
        title: 'Extreme Climate Adaptation',
        description: 'Working in temperatures reaching 55°C with significant diurnal temperature variations.',
        solution: 'Adapted work schedules, implemented enhanced cooling systems, and developed specialized equipment for extreme conditions.'
      }
    ],
    achievements: [
      'Achieved 99.9% installation precision accuracy',
      'Completed 3 weeks ahead of contracted schedule',
      'Successfully transferred technology to local workforce',
      'Established Fazna Solar presence in Saudi market',
      'Zero rework required during final inspection'
    ],
    environmental: {
      co2Reduction: '420,000 tons annually',
      energyEquivalent: 'Powers 85,000 homes annually',
      treesPlanted: 'Equivalent to planting 10.8 million trees'
    },
    technology: [
      'Precision GPS-guided installation',
      'Real-time alignment monitoring',
      'Automated torque verification systems',
      'Advanced surveying and layout tools',
      'Quality control mobile applications'
    ],
    certifications: ['ISO 9001:2015', 'Saudi Contractor Classification'],
    awards: ['Best International Solar Installation 2023'],
    teamSize: '450+ engineers and technicians',
    lessonLearned: 'International expansion requires comprehensive local partnership strategies and adaptive project management approaches for different regulatory environments.',
    futureImpact: 'Establishes foundation for Fazna Solar\'s regional expansion strategy and demonstrates capability for precision installation in diverse markets.',
    sector: 'Utility',
    projectType: 'Installation'
  },
  {
    id: 4,
    name: 'DEWA VI Project',
    location: 'Dubai, UAE',
    capacity: '900 MW',
    status: 'Ongoing',
    scope: 'INC Services - Phase Implementation',
    description: 'Strategic contribution to Dubai\'s Clean Energy Strategy 2050, implementing cutting-edge solar technology with smart city integration capabilities.',
    image: '/images/placeholder-project4.jpg',
    features: ['Smart city integration', 'Advanced technology', 'Phased delivery', 'Grid modernization'],
    year: '2023-2024',
    client: 'Dubai Electricity and Water Authority (DEWA)',
    projectValue: '$650 Million USD',
    timeline: {
      planning: 'Q1 2023 - Q3 2023',
      construction: 'Q4 2023 - Q4 2024',
      commissioning: 'Q1 2025 - Q2 2025',
      completion: 'Expected June 2025'
    },
    technicalSpecs: {
      moduleType: 'Heterojunction (HJT) 650W',
      inverterType: 'Smart Grid-Ready Inverters 5MW',
      trackingSystem: 'Dual-axis tracking with AI optimization',
      moduleCount: '1,384,615 modules',
      efficiency: '24.3% HJT module efficiency',
      annualGeneration: '2,100 GWh/year'
    },
    challenges: [
      {
        title: 'Smart City Integration',
        description: 'Integrating solar infrastructure with Dubai\'s smart city systems and real-time energy management.',
        solution: 'Developing IoT-enabled monitoring systems and smart grid communication protocols for seamless integration.'
      },
      {
        title: 'Advanced Technology Implementation',
        description: 'First large-scale deployment of heterojunction technology in Middle East with unproven performance data.',
        solution: 'Established comprehensive testing protocols and performance monitoring systems to validate technology performance.'
      },
      {
        title: 'Urban Interface Coordination',
        description: 'Managing construction activities near urban areas with minimal disruption to city operations.',
        solution: 'Implemented noise reduction measures, dust control systems, and coordinated logistics with city infrastructure.'
      }
    ],
    achievements: [
      'Successfully integrated with Dubai smart grid infrastructure',
      'Achieved highest module efficiency in regional portfolio',
      'Implemented first large-scale HJT technology deployment',
      'Maintained zero environmental incidents',
      'On track for early completion despite technology complexity'
    ],
    environmental: {
      co2Reduction: '1.2 million tons annually',
      energyEquivalent: 'Powers 320,000 homes annually',
      treesPlanted: 'Equivalent to planting 31 million trees'
    },
    technology: [
      'Heterojunction solar cell technology',
      'AI-optimized dual-axis tracking',
      'Smart grid communication systems',
      'IoT sensor networks',
      'Predictive analytics platforms'
    ],
    certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'DEWA Approved Contractor'],
    awards: ['Innovation in Solar Technology 2024 - MESIA'],
    teamSize: '950+ engineers and technicians',
    lessonLearned: 'Advanced technology deployment requires extensive testing and validation protocols but delivers superior long-term performance.',
    futureImpact: 'Demonstrates integration capabilities for smart city renewable energy systems and establishes technical precedent for next-generation solar technology.',
    sector: 'Utility',
    projectType: 'INC'
  },
  {
    id: 5,
    name: 'Oman PDO Amin Solar Project',
    location: 'Nimr, Oman',
    capacity: '100 MW',
    status: 'Completed',
    scope: 'Specialized INC Services - Oil & Gas Integration',
    description: 'Pioneering renewable energy integration with oil and gas operations, demonstrating versatility in specialized industrial applications.',
    image: '/images/placeholder-project5.jpg',
    features: ['Oil & gas integration', 'Remote location', 'Specialized requirements', 'Industrial reliability'],
    year: '2022-2023',
    client: 'Petroleum Development Oman (PDO)',
    projectValue: '$95 Million USD',
    timeline: {
      planning: 'Q2 2022 - Q4 2022',
      construction: 'Q1 2023 - Q3 2023',
      commissioning: 'Q4 2023 - Q1 2024',
      completion: 'November 2023'
    },
    technicalSpecs: {
      moduleType: 'Desert-rated Monocrystalline 530W',
      inverterType: 'Industrial-grade Central Inverters 2.5MW',
      trackingSystem: 'Single-axis with sand-resistant design',
      moduleCount: '188,679 modules',
      efficiency: '20.5% with high-temperature performance',
      annualGeneration: '220 GWh/year'
    },
    challenges: [
      {
        title: 'Remote Desert Location',
        description: 'Operating in extremely remote location with limited infrastructure and challenging logistics.',
        solution: 'Established temporary base camp with full facilities and implemented helicopter logistics for critical supplies.'
      },
      {
        title: 'Oil & Gas Integration',
        description: 'Integrating renewable energy with existing oil extraction operations without disrupting production.',
        solution: 'Developed specialized grid integration systems and implemented redundant safety systems for seamless operation.'
      },
      {
        title: 'Extreme Environmental Conditions',
        description: 'Working in harsh desert conditions with sand storms, extreme heat, and minimal local support.',
        solution: 'Deployed sand-resistant equipment designs and implemented comprehensive environmental protection protocols.'
      }
    ],
    achievements: [
      'First successful solar integration with oil extraction facility',
      'Achieved 25% reduction in facility carbon footprint',
      'Completed in challenging remote location with zero delays',
      'Implemented innovative sand mitigation systems',
      'Established new standards for industrial solar integration'
    ],
    environmental: {
      co2Reduction: '160,000 tons annually',
      energyEquivalent: 'Powers 28,000 homes annually',
      treesPlanted: 'Equivalent to planting 4.1 million trees'
    },
    technology: [
      'Sand-resistant module designs',
      'Industrial-grade monitoring systems',
      'Remote diagnostics capabilities',
      'Integrated SCADA systems',
      'Advanced dust mitigation technology'
    ],
    certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'PDO Approved Contractor'],
    awards: ['Industrial Innovation Award - Gulf Solar Awards 2024'],
    teamSize: '320+ engineers and technicians',
    lessonLearned: 'Industrial renewable integration requires specialized equipment design and comprehensive safety protocols for seamless operation with existing facilities.',
    futureImpact: 'Establishes technical foundation for broader renewable integration across oil and gas sector and demonstrates economic viability of industrial solar applications.',
    sector: 'Industrial',
    projectType: 'INC'
  },
  {
    id: 6,
    name: 'Khazna Data Centre Solar Project',
    location: 'Abu Dhabi, UAE',
    capacity: '50 MW',
    status: 'Completed',
    scope: 'Commercial Solar Installation & Integration',
    description: 'Advanced commercial solar installation showcasing high-reliability systems design for critical infrastructure applications.',
    image: '/images/placeholder-project6.jpg',
    features: ['Data centre integration', 'Commercial scale', 'High reliability', '24/7 operations'],
    year: '2023',
    client: 'Khazna Data Centers LLC',
    projectValue: '$42 Million USD',
    timeline: {
      planning: 'Q1 2023 - Q2 2023',
      construction: 'Q3 2023 - Q4 2023',
      commissioning: 'Q1 2024 - Q2 2024',
      completion: 'March 2024'
    },
    technicalSpecs: {
      moduleType: 'High-efficiency Monocrystalline 580W',
      inverterType: 'Redundant String Inverters 100kW',
      trackingSystem: 'Fixed-tilt for maximum reliability',
      moduleCount: '86,207 modules',
      efficiency: '21.8% module efficiency',
      annualGeneration: '95 GWh/year'
    },
    challenges: [
      {
        title: 'Critical Infrastructure Requirements',
        description: 'Data centre requires 99.99% power reliability with zero tolerance for outages.',
        solution: 'Implemented redundant systems design with dual-path power routing and advanced fault protection systems.'
      },
      {
        title: '24/7 Operations Compatibility',
        description: 'Installation must not interfere with continuous data centre operations.',
        solution: 'Developed phased installation approach with noise control and electromagnetic interference mitigation.'
      },
      {
        title: 'Space Optimization',
        description: 'Maximizing solar capacity within limited available roof and ground space.',
        solution: 'Utilized high-efficiency modules and optimized layout design with 3D modeling for maximum density.'
      }
    ],
    achievements: [
      'Achieved 99.99% system availability from day one',
      'Completed installation with zero operational disruptions',
      'Optimized space utilization to 95% efficiency',
      'Implemented advanced monitoring for predictive maintenance',
      'Reduced data centre carbon footprint by 35%'
    ],
    environmental: {
      co2Reduction: '55,000 tons annually',
      energyEquivalent: 'Powers 12,000 homes annually',
      treesPlanted: 'Equivalent to planting 1.4 million trees'
    },
    technology: [
      'Redundant inverter systems',
      'Advanced power quality monitoring',
      'Predictive maintenance algorithms',
      'Real-time performance analytics',
      'Grid-tie protection systems'
    ],
    certifications: ['ISO 9001:2015', 'ISO 27001:2013', 'Tier III Data Center Compliance'],
    awards: ['Commercial Solar Excellence Award 2024'],
    teamSize: '180+ engineers and technicians',
    lessonLearned: 'Critical infrastructure applications require redundant system design and specialized installation techniques to maintain operational continuity.',
    futureImpact: 'Establishes technical standards for data centre solar integration and demonstrates economic benefits of renewable energy for high-reliability commercial applications.',
    sector: 'Commercial',
    projectType: 'Installation'
  },
  // Additional portfolio projects to showcase broader capabilities
  {
    id: 7,
    name: 'Maharashtra Industrial Park',
    location: 'Pune, India',
    capacity: '75 MW',
    status: 'Completed',
    scope: 'Rooftop & Ground-mount Installation',
    description: 'Large-scale industrial solar installation demonstrating Fazna Solar&apos;s capabilities in Indian market with mixed rooftop and ground-mount systems.',
    image: '/images/placeholder-project7.jpg',
    features: ['Mixed installation', 'Industrial efficiency', 'Cost optimization', 'Local workforce'],
    year: '2023-2024',
    client: 'Maharashtra Industrial Development Corporation',
    projectValue: '$58 Million USD',
    timeline: {
      planning: 'Q2 2023 - Q3 2023',
      construction: 'Q4 2023 - Q2 2024',
      commissioning: 'Q3 2024 - Q4 2024',
      completion: 'September 2024'
    },
    technicalSpecs: {
      moduleType: 'Polycrystalline 535W (cost-optimized)',
      inverterType: 'String Inverters 50kW',
      trackingSystem: 'Fixed-tilt rooftop, single-axis ground',
      moduleCount: '140,187 modules',
      efficiency: '20.1% average system efficiency',
      annualGeneration: '115 GWh/year'
    },
    challenges: [
      {
        title: 'Mixed Installation Complexity',
        description: 'Coordinating rooftop and ground-mount installations with different structural requirements.',
        solution: 'Developed specialized teams for each installation type with coordinated project management and shared resources.'
      },
      {
        title: 'Local Workforce Development',
        description: 'Training local workforce in advanced solar installation techniques and safety protocols.',
        solution: 'Established comprehensive training programs with certification pathways and ongoing skills development.'
      },
      {
        title: 'Cost Optimization Requirements',
        description: 'Meeting aggressive cost targets while maintaining quality and safety standards.',
        solution: 'Optimized supply chain logistics and implemented value engineering approaches without compromising performance.'
      }
    ],
    achievements: [
      'Successfully trained 300+ local technicians',
      'Achieved 98% cost target while maintaining quality',
      'Completed mixed installation 2 weeks ahead of schedule',
      'Established Fazna Solar permanent presence in Indian market',
      'Implemented innovative rooftop mounting solutions'
    ],
    environmental: {
      co2Reduction: '82,000 tons annually',
      energyEquivalent: 'Powers 18,500 homes annually',
      treesPlanted: 'Equivalent to planting 2.1 million trees'
    },
    technology: [
      'Innovative rooftop mounting systems',
      'Cost-optimized inverter solutions',
      'Local supply chain integration',
      'Mobile monitoring applications',
      'Weather-resistant equipment designs'
    ],
    certifications: ['ISO 9001:2015', 'Indian Bureau of Standards Compliance'],
    awards: ['Best Industrial Solar Project - India Solar Awards 2024'],
    teamSize: '520+ engineers and technicians',
    lessonLearned: 'Mixed installation projects require specialized coordination techniques and local workforce development is essential for successful market expansion.',
    futureImpact: 'Establishes Fazna Solar as a key player in Indian renewable energy market and provides foundation for broader Asian expansion.',
    sector: 'Industrial',
    projectType: 'Installation'
  },
  {
    id: 8,
    name: 'Qatar National Grid Integration',
    location: 'Doha, Qatar',
    capacity: '200 MW',
    status: 'Planning',
    scope: 'Grid Integration & INC Services',
    description: 'Next-generation grid integration project supporting Qatar&apos;s National Vision 2030 with advanced energy storage and smart grid capabilities.',
    image: '/images/placeholder-project8.jpg',
    features: ['Energy storage', 'Smart grid', 'National strategy', 'Advanced integration'],
    year: '2025-2026',
    client: 'Qatar General Electricity & Water Corporation (KAHRAMAA)',
    projectValue: '$285 Million USD',
    timeline: {
      planning: 'Q1 2025 - Q3 2025',
      construction: 'Q4 2025 - Q4 2026',
      commissioning: 'Q1 2027 - Q2 2027',
      completion: 'Expected June 2027'
    },
    technicalSpecs: {
      moduleType: 'Next-gen Perovskite-Silicon 700W',
      inverterType: 'Grid-forming Inverters 8MW',
      trackingSystem: 'AI-optimized dual-axis tracking',
      moduleCount: '285,714 modules',
      efficiency: '26.5% next-generation efficiency',
      annualGeneration: '520 GWh/year'
    },
    challenges: [
      {
        title: 'Next-Generation Technology',
        description: 'Implementing cutting-edge perovskite-silicon tandem cells in commercial application.',
        solution: 'Establishing comprehensive testing protocols and performance validation systems for new technology.'
      },
      {
        title: 'Energy Storage Integration',
        description: 'Seamlessly integrating 100MWh battery storage with solar generation and grid operations.',
        solution: 'Developing advanced energy management systems and grid-forming inverter technologies.'
      },
      {
        title: 'Smart Grid Compatibility',
        description: 'Ensuring compatibility with Qatar\'s advancing smart grid infrastructure and demand response systems.',
        solution: 'Implementing IoT-enabled communication systems and advanced grid integration protocols.'
      }
    ],
    achievements: [
      'Selected for Qatar\'s flagship renewable energy project',
      'First commercial deployment of perovskite-silicon technology',
      'Advanced energy storage integration planned',
      'Smart grid communication systems development',
      'Contribution to Qatar National Vision 2030'
    ],
    environmental: {
      co2Reduction: '380,000 tons annually',
      energyEquivalent: 'Powers 68,000 homes annually',
      treesPlanted: 'Equivalent to planting 9.8 million trees'
    },
    technology: [
      'Perovskite-silicon tandem solar cells',
      'Grid-forming inverter technology',
      'Advanced battery energy storage',
      'AI-powered grid optimization',
      'Smart grid communication protocols'
    ],
    certifications: ['ISO 9001:2015', 'Qatar National Standards'],
    awards: ['Selected for Qatar National Vision 2030 Program'],
    teamSize: '750+ engineers and technicians (planned)',
    lessonLearned: 'Next-generation technology projects require extensive research and development partnerships and comprehensive risk management strategies.',
    futureImpact: 'Establishes Fazna Solar as a technology leader in next-generation solar applications and energy storage integration.',
    sector: 'Utility',
    projectType: 'INC'
  }
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed': return 'bg-accent text-accent-foreground';
    case 'ongoing': return 'bg-secondary text-secondary-foreground';
    case 'planning': return 'bg-primary/10 text-primary';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getSectorIcon = (sector: string) => {
  switch (sector) {
    case 'Utility': return Building2;
    case 'Commercial': return Factory;
    case 'Industrial': return Settings;
    default: return Building2;
  }
};

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [filterSector, setFilterSector] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [activeTab, setActiveTab] = useState('overview');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const sectorMatch = filterSector === 'All' || project.sector === filterSector;
    const statusMatch = filterStatus === 'All' || project.status === filterStatus;
    return sectorMatch && statusMatch;
  });

  // Calculate portfolio statistics
  const totalCapacity = projects.reduce((sum, project) => {
    const capacity = parseFloat(project.capacity.replace(/[^\d.]/g, ''));
    return sum + capacity;
  }, 0);

  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const ongoingProjects = projects.filter(p => p.status === 'Ongoing').length;
  const totalValue = projects.reduce((sum, project) => {
    const value = parseFloat(project.projectValue.replace(/[^\d.]/g, ''));
    return sum + value;
  }, 0);

  const totalCO2Reduction = projects.reduce((sum, project) => {
    const co2 = parseFloat(project.environmental.co2Reduction.replace(/[^\d.]/g, ''));
    return sum + co2;
  }, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, projectIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = sectionRef.current?.querySelectorAll('[data-index]');
    projectElements?.forEach(project => observer.observe(project));

    return () => observer.disconnect();
  }, [filteredProjects]);
  return (
    <section ref={sectionRef} data-section="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" role="heading" aria-level={2}>
            Landmark Solar Projects That Define Industry Excellence
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              From record-breaking gigawatt installations to pioneering engineering solutions, our portfolio 
              showcases the world&apos;s most ambitious solar projects successfully delivered on time and within budget.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Track Record:</strong> Over 2GW of utility-scale capacity delivered across 10+ major projects, 
              including two of the world&apos;s largest single-site solar installations, with zero safety incidents and 
              performance ratios consistently exceeding industry benchmarks.
            </p>
          </div>
        </div>

        {/* Portfolio Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{totalCapacity.toLocaleString()} MW</div>
              <div className="text-sm text-muted-foreground">Total Portfolio Capacity</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">${(totalValue / 1000).toFixed(1)}B</div>
              <div className="text-sm text-muted-foreground">Total Project Value</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{completedProjects}</div>
              <div className="text-sm text-muted-foreground">Completed Projects</div>
              <div className="text-xs text-muted-foreground mt-1">{ongoingProjects} Ongoing</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{(totalCO2Reduction / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Reduction/Year</div>
            </CardContent>
          </Card>
        </div>

        {/* Filtering Controls */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Filter by Sector:</span>
            <div className="flex gap-2">
              {['All', 'Utility', 'Commercial', 'Industrial'].map((sector) => (
                <Button
                  key={sector}
                  variant={filterSector === sector ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterSector(sector)}
                  data-testid={`filter-sector-${sector.toLowerCase()}`}
                >
                  {sector}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Filter by Status:</span>
            <div className="flex gap-2">
              {['All', 'Completed', 'Ongoing', 'Planning'].map((status) => (
                <Button
                  key={status}
                  variant={filterStatus === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus(status)}
                  data-testid={`filter-status-${status.toLowerCase()}`}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const SectorIcon = getSectorIcon(project.sector);
            return (
              <Card 
                key={project.id}
                data-index={index}
                className={`group hover-elevate cursor-pointer overflow-hidden border-card-border transition-all duration-700 hover:shadow-2xl ${
                  visibleProjects.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`card-project-${project.id}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={`${project.name} solar installation project in ${project.location} - ${project.description.substring(0, 100)}...`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`${getStatusColor(project.status)} text-xs`}
                      aria-label={`Project status: ${project.status}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <SectorIcon 
                      className="h-5 w-5 text-white" 
                      aria-label={`${project.sector} sector project`}
                    />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2" role="heading" aria-level={3}>
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.year}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Client: {project.client}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-secondary" />
                      <div>
                        <div className="font-semibold text-secondary text-lg">{project.capacity}</div>
                        <div className="text-xs text-muted-foreground">Capacity</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-secondary" />
                      <div>
                        <div className="font-semibold text-secondary text-lg">{project.projectValue}</div>
                        <div className="text-xs text-muted-foreground">Project Value</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="bg-muted/50 rounded p-2">
                      <div className="text-sm font-semibold text-foreground">{project.teamSize.split('+')[0]}</div>
                      <div className="text-xs text-muted-foreground">Team Size</div>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <div className="text-sm font-semibold text-foreground">{project.technicalSpecs.efficiency}</div>
                      <div className="text-xs text-muted-foreground">Efficiency</div>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <div className="text-sm font-semibold text-foreground">{project.environmental.co2Reduction.split(' ')[0]}</div>
                      <div className="text-xs text-muted-foreground">CO₂ Reduction</div>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    data-testid={`button-view-project-${project.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Detailed Case Study
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Project Modal/Section */}
        {selectedProject && (
          <Card className="mb-16 border-2 border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject.name}</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedProject(null)}
                  data-testid="button-close-project-detail"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
                  <TabsTrigger value="technical" data-testid="tab-technical">Technical</TabsTrigger>
                  <TabsTrigger value="challenges" data-testid="tab-challenges">Challenges</TabsTrigger>
                  <TabsTrigger value="achievements" data-testid="tab-achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="environmental" data-testid="tab-environmental">Impact</TabsTrigger>
                  <TabsTrigger value="timeline" data-testid="tab-timeline">Timeline</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Building2 className="h-5 w-5" />
                        Project Overview
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Client:</span>
                          <span className="font-medium">{selectedProject.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Location:</span>
                          <span className="font-medium">{selectedProject.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Capacity:</span>
                          <span className="font-medium text-secondary">{selectedProject.capacity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Project Value:</span>
                          <span className="font-medium text-secondary">{selectedProject.projectValue}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sector:</span>
                          <span className="font-medium">{selectedProject.sector}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Project Type:</span>
                          <span className="font-medium">{selectedProject.projectType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Team Size:</span>
                          <span className="font-medium">{selectedProject.teamSize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Recognition & Certifications
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">Awards</h5>
                          <div className="space-y-1">
                            {selectedProject.awards.map((award, index) => (
                              <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                <Award className="h-3 w-3 text-secondary" />
                                {award}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium mb-2">Certifications</h5>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.certifications.map((cert, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                <ShieldCheck className="h-3 w-3 mr-1" />
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="technical" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Technical Specifications
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Module Type:</span>
                          <span className="font-medium">{selectedProject.technicalSpecs.moduleType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Inverter Type:</span>
                          <span className="font-medium">{selectedProject.technicalSpecs.inverterType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tracking System:</span>
                          <span className="font-medium">{selectedProject.technicalSpecs.trackingSystem}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Module Count:</span>
                          <span className="font-medium text-secondary">{selectedProject.technicalSpecs.moduleCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Efficiency:</span>
                          <span className="font-medium text-secondary">{selectedProject.technicalSpecs.efficiency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Generation:</span>
                          <span className="font-medium text-secondary">{selectedProject.technicalSpecs.annualGeneration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        Technology Implementation
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.technology.map((tech, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="challenges" className="mt-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Project Challenges & Solutions
                  </h4>
                  <div className="space-y-6">
                    {selectedProject.challenges.map((challenge, index) => (
                      <Card key={index} className="p-4">
                        <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-secondary" />
                          {challenge.title}
                        </h5>
                        <p className="text-muted-foreground mb-3">{challenge.description}</p>
                        <div className="bg-accent/10 p-3 rounded">
                          <h6 className="font-medium text-accent mb-1">Solution Implemented:</h6>
                          <p className="text-sm">{challenge.solution}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="achievements" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {selectedProject.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Layers className="h-5 w-5" />
                        Lessons Learned & Future Impact
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-2 text-secondary">Key Lesson Learned</h5>
                          <p className="text-sm text-muted-foreground">{selectedProject.lessonLearned}</p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2 text-secondary">Future Impact</h5>
                          <p className="text-sm text-muted-foreground">{selectedProject.futureImpact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="environmental" className="mt-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    Environmental & Social Impact
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="text-center p-4">
                      <Leaf className="h-8 w-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {selectedProject.environmental.co2Reduction}
                      </div>
                      <div className="text-sm text-muted-foreground">CO₂ Reduction Annually</div>
                    </Card>
                    
                    <Card className="text-center p-4">
                      <Zap className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {selectedProject.environmental.energyEquivalent.split(' ')[1]}
                      </div>
                      <div className="text-sm text-muted-foreground">Homes Powered Annually</div>
                    </Card>
                    
                    <Card className="text-center p-4">
                      <Leaf className="h-8 w-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {selectedProject.environmental.treesPlanted.split(' ')[4]}
                      </div>
                      <div className="text-sm text-muted-foreground">Million Trees Equivalent</div>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="timeline" className="mt-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Project Timeline
                  </h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="p-4">
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          Planning Phase
                        </h5>
                        <p className="text-sm text-muted-foreground">{selectedProject.timeline.planning}</p>
                      </Card>
                      
                      <Card className="p-4">
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <Truck className="h-4 w-4 text-secondary" />
                          Construction Phase
                        </h5>
                        <p className="text-sm text-muted-foreground">{selectedProject.timeline.construction}</p>
                      </Card>
                      
                      <Card className="p-4">
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <Settings className="h-4 w-4 text-accent" />
                          Commissioning Phase
                        </h5>
                        <p className="text-sm text-muted-foreground">{selectedProject.timeline.commissioning}</p>
                      </Card>
                      
                      <Card className="p-4">
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          Completion
                        </h5>
                        <p className="text-sm text-muted-foreground">{selectedProject.timeline.completion}</p>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {/* Engineering Excellence Section */}
        <Card className="mb-16">
          <CardHeader>
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2" role="heading" aria-level={3}>
              <Wrench className="h-6 w-6 text-secondary" aria-hidden="true" />
              Engineering Excellence & Methodologies
            </h3>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Advanced Project Management</h4>
                <p className="text-sm text-muted-foreground">
                  Utilizing cutting-edge project management tools and methodologies for seamless execution and real-time monitoring across all project phases.
                </p>
              </div>
              
              <div className="text-center">
                <Activity className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Quality Assurance Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive quality control protocols with real-time monitoring, automated verification systems, and rigorous testing procedures.
                </p>
              </div>
              
              <div className="text-center">
                <PieChart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Performance Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Data-driven optimization strategies using predictive analytics, machine learning, and IoT monitoring for maximum efficiency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Next Solar Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Partner with Fazna Solar Energy for world-class INC services and proven expertise in utility-scale solar installations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" data-testid="button-discuss-project">
                Discuss Your Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-download-portfolio">
                Download Portfolio PDF
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}