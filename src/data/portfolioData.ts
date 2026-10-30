export interface ProfileInfo {
  name: string;
  initials: string;
  headline: string;
  intro: string;
  aboutBio: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  resumePdfPath: string;
  degreePdfPath: string;
}

export interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  linkAnchor: string;
  badge: string;
  highlights: string[];
}

export interface ProfessionalStrength {
  title: string;
  description: string;
  iconName: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  designation: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  responsibilities: string[];
  skills: string[];
  impactHighlight?: string;
  companyLogo?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    specialization?: string;
  }[];
}

export interface CreativePoster {
  id: string;
  title: string;
  brand: string;
  categoryGroup: 'Financial Services' | 'Travel & Tourism' | 'FMCG & Food' | 'EdTech & Workshops' | 'Industrial & Roofing' | 'Cultural & Logistics';
  imagePath: string;
  headline: string;
  language: string;
  tools: string[];
  description: string;
  aspect: string;
  featured?: boolean;
}

export interface BrandLogo {
  id: string;
  name: string;
  brand: string;
  category: 'Logistics & Transport' | 'Financial & Corporate' | 'Industrial & Roofing' | 'Agri & Organic Foods' | 'Travel & Tourism' | 'Lifestyle & Apparel';
  imagePath: string;
  slogan?: string;
  colors: string[];
  tools: string[];
  concept: string;
  aspect: string;
  vectorAvailable: boolean;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientOrOrg: string;
  category: 'Digital Marketing' | 'Graphic Design & Branding' | 'Business Operations';
  period: string;
  description: string;
  tools: string[];
  thumbnail: string;
  originalAssetPath?: string;
  isImage?: boolean;
  isPdf?: boolean;
  designObjective?: string;
  creativeConcept?: string;
  deliverables?: string[];
  performanceMetrics?: { label: string; value: string; context: string }[];
  verifiedOutcomes: string[];
  adCopiesOrSamples?: {
    lang: string;
    headline: string;
    body: string;
    hashtags: string;
    cta: string;
  }[];
  projectType: 'Professional Assignment' | 'Client Branding & Freelance' | 'Business Operations & Publication';
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  completionDate: string;
  description: string;
  credentialBadge: string;
  domainFocus: string;
  topicsCovered: string[];
  documentUrl?: string;
}

export interface EducationItem {
  institution: string;
  university: string;
  qualification: string;
  period: string;
  graduationDate: string;
  cgpa: string;
  classification: string;
  location: string;
  certificatePdfPath: string;
  highlights: string[];
}

export interface DocumentAsset {
  id: string;
  title: string;
  category: 'Resume' | 'Academic' | 'Creative Design' | 'Publications & Reports';
  filepath: string;
  fileType: 'pdf' | 'png' | 'image';
  sizeFormatted: string;
  description: string;
  featured: boolean;
  verifiedSource: string;
}

export const PROFILE: ProfileInfo = {
  name: 'Madhavaraj T.S',
  initials: 'MTS',
  headline: 'Creative Digital Marketer | Payment Operations Executive | Business-Oriented Professional',
  intro: 'I combine creative marketing strategies, data-driven decision-making, and operational accuracy to support business growth and deliver meaningful results.',
  aboutBio: 'I am a versatile professional with hands-on experience in digital marketing, payment operations, creative content development, and business support functions. My experience includes social media campaigns, lead generation, SEO, medical billing operations, insurance approval verification, payment processing, and documentation management. I combine creative thinking with analytical skills, attention to detail, and a commitment to continuous improvement.',
  email: 'stmmadhavaraj07@gmail.com',
  phone: '+91 9042350440',
  location: 'Salem, Tamil Nadu, India',
  linkedinUrl: 'https://www.linkedin.com/in/madhavaraj-t-s',
  resumePdfPath: '/assets/aistudio/Madhavaraj.T.S_Resume_f33de42d.pdf',
  degreePdfPath: '/assets/aistudio/UG_degree.pdf_8564d15f.pdf',
};

export const CAPABILITIES: Capability[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    shortDesc: 'Social media campaigns, SEO, lead generation, and digital campaign optimisation.',
    fullDesc: 'End-to-end campaign planning and execution across Meta Ads Manager, Google search visibility, content funnels, and performance monitoring tailored for regional and enterprise growth.',
    iconName: 'Megaphone',
    linkAnchor: '#skills',
    badge: 'Growth & Acquisition',
    highlights: ['Meta Ads Lead Funnels', 'Technical & On-Page SEO', 'Bilingual Ad Copywriting', 'Audience Retargeting'],
  },
  {
    id: 'payment-operations',
    title: 'Payment Operations',
    shortDesc: 'Medical billing, insurance approval verification, payment processing, and documentation accuracy.',
    fullDesc: 'Healthcare financial workflows, insurance pre-authorization checks, patient payable computations, ailment limit validation, and discrepancy resolution in fast-paced corporate environments.',
    iconName: 'ShieldCheck',
    linkAnchor: '#experience',
    badge: 'Operations & Compliance',
    highlights: ['Insurance Pre-Auth & Approvals', 'Patient Payable Calculation', 'Billing Discrepancy Audits', 'Secure Payment Link Workflows'],
  },
  {
    id: 'creative-design',
    title: 'Creative Design & Branding',
    shortDesc: 'Advertising creatives, promotional posters, visual communication, and brand presentation.',
    fullDesc: 'Translating business value into eye-catching visual identities, commercial flyers, multi-language print assets, and social media creative collateral using Canva, Photoshop, and Figma.',
    iconName: 'Palette',
    linkAnchor: '#projects',
    badge: 'Creative & Visuals',
    highlights: ['Commercial Print Posters', 'Brand Identity Systems', 'Social Ad Visuals', 'Graphic Layout Optimization'],
  },
  {
    id: 'business-operations',
    title: 'Business Operations',
    shortDesc: 'Documentation management, workflow coordination, data accuracy, and cross-functional collaboration.',
    fullDesc: 'Systematic documentation, academic and trade operations, import/export tender records, analytical reporting, and alignment between marketing, finance, and operational stakeholders.',
    iconName: 'Briefcase',
    linkAnchor: '#experience',
    badge: 'Structure & Process',
    highlights: ['Structured Documentation', 'Cross-Functional Hand-offs', 'Tender & Quotation Records', 'Process Reliability'],
  },
];

export const STRENGTHS: ProfessionalStrength[] = [
  {
    title: 'Creative Problem-Solving',
    description: 'Developing high-converting marketing creatives, customer-centric campaign messaging, and inventive approaches to operational bottlenecks.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Analytical Thinking',
    description: 'Interpreting advertising metrics (CTR, CPA, ROAS) and auditing insurance policy limits to make defensible, data-informed business choices.',
    iconName: 'BarChart3',
  },
  {
    title: 'Digital Marketing Strategy',
    description: 'Structuring full-funnel digital journeys from initial audience discovery on Meta to localized search ranking and conversion.',
    iconName: 'Target',
  },
  {
    title: 'Operational Accuracy',
    description: 'Zero-tolerance attention to detail in medical billing schedules, patient deductibles, contract documentation, and compliance protocols.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Cross-Functional Collaboration',
    description: 'Partnering seamlessly with sales teams, medical reviewers, academic faculties, and trade officials to ensure prompt case resolution.',
    iconName: 'Users2',
  },
  {
    title: 'Continuous Learning',
    description: 'Proactively upskilling across modern digital standards, Google Analytics frameworks, ad platform updates, and business operations.',
    iconName: 'GraduationCap',
  },
];

export const EXPERIENCES: WorkExperience[] = [
  {
    id: 'trustbridge',
    company: 'Trustbridge Technology Private Limited',
    designation: 'Payment Operations Executive',
    location: 'Bengaluru, India',
    period: 'April 2026 – Present',
    isCurrent: true,
    type: 'Full-Time Professional Role',
    responsibilities: [
      'Handle medical billing and payment operations, ensuring accurate case processing and timely updates across healthcare platforms.',
      'Verify patient admission details, insurance approvals, billing information, and supporting clinical documents with stringent compliance.',
      'Calculate patient payable amounts based on applicable insurance coverage, defined ailment limits, co-pays, and deductible policies.',
      'Coordinate with internal clinical and finance teams to resolve billing discrepancies, obtain pending approvals, and follow up on outstanding hospital cases.',
      'Generate and share secure payment links with users, maintain meticulous case records, and support prompt end-to-end case closure.',
    ],
    skills: [
      'Payment Verification',
      'Medical Billing Operations',
      'Insurance Approval Verification',
      'Patient Payable Calculation',
      'Documentation',
      'Case Management',
    ],
    impactHighlight: 'Ensuring zero-error rate in billing schedules and accelerated cycle time from hospital discharge to payment settlement.',
  },
  {
    id: 'sun-associate',
    company: 'Sun Associate Finance',
    designation: 'Digital Marketing Trainee – Project',
    location: 'Namakkal, India',
    period: 'July 2025 – December 2025',
    isCurrent: false,
    type: 'Marketing Campaign Project',
    companyLogo: '/assets/aistudio/1_d7abf628.png',
    responsibilities: [
      'Planned and executed targeted Facebook and Instagram advertising campaigns to generate high-quality financial and loan inquiries.',
      'Created advertising creatives, attention-grabbing captions, and strategic hashtags in both Tamil and English for high regional resonance.',
      'Optimised campaigns using audience demographics, engagement insights, and behavioral targeting to improve click-through rate (CTR) and reduce cost per lead.',
      'Collaborated closely with the frontline sales team to align campaign messaging, verify lead qualification, and refine the conversion funnel.',
    ],
    skills: [
      'Meta Ads Manager',
      'Lead Generation',
      'Campaign Optimisation',
      'Creative Development',
      'Audience Targeting',
    ],
    impactHighlight: 'Drove measurable reductions in cost-per-lead while increasing qualified loan inquiry volume across target districts.',
  },
  {
    id: 'vedantu',
    company: 'Vedantu Innovation',
    designation: 'Academic Associate & DTP',
    location: 'Tiruchirappalli, India',
    period: 'February 2024 – March 2025',
    isCurrent: false,
    type: 'Operations & Documentation Role',
    responsibilities: [
      'Created, formatted, and uploaded high-stakes academic study materials, assignments, and test papers strictly within tight turnaround times.',
      'Coordinated with subject-matter faculty regarding curriculum schedules, student performance records, and academic operations.',
      'Prepared visually clear, student-friendly educational documents and diagrams using digital publishing tools.',
      'Supported technical content writing, precise digital typesetting (DTP), and streamlined internal communications.',
    ],
    skills: [
      'Documentation',
      'Content Formatting',
      'DTP',
      'Coordination',
      'Content Writing',
    ],
    impactHighlight: 'Maintained 100% on-time delivery across hundred-plus educational modules with zero formatting discrepancies.',
  },
  {
    id: 'nireekshan',
    company: 'Nireekshan Group of Companies',
    designation: 'Chartered Engineer (Trainee)',
    location: 'Chennai, India',
    period: 'January 2023 – January 2024',
    isCurrent: false,
    type: 'Operations & Commercial Role',
    responsibilities: [
      'Managed company records and trade documentation for import and export operations with stringent regulatory precision.',
      'Prepared detailed technical and commercial quotations for corporate tender submissions.',
      'Coordinated actively with international clients, logistics freight partners, and customs officials to resolve clearance queries.',
      'Handled commercial content writing, formal typing, and official business correspondence.',
    ],
    skills: [
      'Documentation Management',
      'Quotation Preparation',
      'Communication',
      'Coordination',
    ],
    impactHighlight: 'Ensured compliance on import/export documentation packages and timely tender submissions without regulatory delay.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Comprehensive acquisition, search visibility, paid traffic, and content architecture.',
    iconName: 'Globe',
    skills: [
      { name: 'Search Engine Optimisation (SEO)', specialization: 'Holistic organic growth' },
      { name: 'On-Page SEO', specialization: 'Metadata, semantics, content hierarchy' },
      { name: 'Off-Page SEO', specialization: 'Topical authority & citations' },
      { name: 'Technical SEO', specialization: 'Crawlability, Core Web Vitals' },
      { name: 'Local SEO', specialization: 'Google Business Profile, NAP parity' },
      { name: 'Search Engine Marketing (SEM)', specialization: 'Paid search intent capture' },
      { name: 'Meta Ads Manager', specialization: 'Campaign setup, custom audiences, CBO' },
      { name: 'Social Media Marketing', specialization: 'Organic engagement & community' },
      { name: 'Campaign Management', specialization: 'Budget pacing, A/B testing' },
      { name: 'Lead Generation', specialization: 'High-intent lead forms & nurture' },
      { name: 'Content Writing', specialization: 'Bilingual ad copy & editorial' },
      { name: 'Amazon Ads', specialization: 'Marketplace product visibility' },
    ],
  },
  {
    id: 'payment-operations',
    name: 'Payment Operations & Medical Billing',
    description: 'Healthcare finance, insurance claims verification, limit validation, and case resolution.',
    iconName: 'CreditCard',
    skills: [
      { name: 'Payment Verification', specialization: 'Transaction confirmation & auditing' },
      { name: 'Insurance Approval Verification', specialization: 'Pre-auth policy checks' },
      { name: 'Patient Payable Calculations', specialization: 'Deductibles, co-pays, coverage limits' },
      { name: 'Medical Billing Documentation', specialization: 'Clinical records & hospital invoices' },
      { name: 'Defined & Ailment Limit Validation', specialization: 'Sub-limits & clause verification' },
      { name: 'Billing Discrepancy Resolution', specialization: 'Internal finance alignment' },
      { name: 'Payment Link Generation', specialization: 'Secure gateway dispatches' },
      { name: 'Case Management', specialization: 'End-to-end patient case lifecycle' },
      { name: 'Approval Follow-Up', specialization: 'Proactive insurer coordination' },
    ],
  },
  {
    id: 'creative-design',
    name: 'Creative Design & Branding Tools',
    description: 'Visual identity creation, commercial posters, and multi-format advertising design.',
    iconName: 'Layout',
    skills: [
      { name: 'Canva', specialization: 'Rapid ad creatives & templates' },
      { name: 'Adobe Photoshop', specialization: 'Raster image editing & compositing' },
      { name: 'Figma', specialization: 'Layout design & collaborative prototyping' },
      { name: 'AI Design Tools', specialization: 'Asset concepting & enhancement' },
      { name: 'Social Media Creative Development', specialization: 'Carousel, feed & story formats' },
      { name: 'Promotional Poster Design', specialization: 'Print-ready commercial flyers' },
      { name: 'Visual Content Creation', specialization: 'Infographics & visual explainers' },
      { name: 'Brand Presentation', specialization: 'Corporate pitch decks & guidelines' },
    ],
  },
  {
    id: 'business-tools',
    name: 'Digital Platforms & Business Tools',
    description: 'Storefront management, data auditing, workflow coordination, and analytics.',
    iconName: 'Layers',
    skills: [
      { name: 'WordPress', specialization: 'CMS page building & publishing' },
      { name: 'Shopify', specialization: 'E-commerce product feeds & storefront' },
      { name: 'Google Analytics Tools', specialization: 'GA4 event tracking, UTM parameters' },
      { name: 'Microsoft Excel', specialization: 'Formulas, VLOOKUP, pivot analysis' },
      { name: 'Documentation Management', specialization: 'Systematic record-keeping' },
      { name: 'Data Verification', specialization: 'Auditing accuracy across records' },
      { name: 'Workflow Coordination', specialization: 'Task scheduling & handoffs' },
      { name: 'Content Formatting', specialization: 'Typesetting & publication styling' },
    ],
  },
];

// All 17 authentic creative design posters and artworks uploaded by Madhavaraj T.S
export const ALL_CREATIVE_POSTERS: CreativePoster[] = [
  {
    id: 'kmc-roofing-poster',
    title: 'KMC Roofing Solutions — Official Promotional Poster',
    brand: 'KMC Roofing',
    categoryGroup: 'Industrial & Roofing',
    imagePath: '/assets/aistudio/KMC_Roofing_Solutions_Flyer__1__a392ee75.png',
    headline: 'உங்கள் வீட்டிற்கு தரமான கூரைத் தகடுகள்!',
    language: 'Tamil & English (Bilingual)',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    description: 'Full commercial promotional poster for roofing steel sheets and accessories. Features store address, product catalog, and trust credentials.',
    aspect: 'Vertical 3:4',
    featured: true,
  },
  {
    id: 'sun-finance-unsecured-loan',
    title: 'Sun Associate Finance — Unsecured Instant Business Loan',
    brand: 'Sun Associate Finance',
    categoryGroup: 'Financial Services',
    imagePath: '/assets/aistudio/1_0ca80432.png',
    headline: 'எந்த வித அடமானமின்றி உடனடி வியாபார கடன்',
    language: 'Tamil',
    tools: ['Canva', 'Photoshop'],
    description: 'High-converting loan acquisition poster detailing NBFC bank loans up to ₹2 Crore and cheque-based private finance (₹5L to ₹1Cr) with 2-day processing.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'sun-finance-corporate-loan',
    title: 'Sun Associate Finance — Bank Loan & Business Capital',
    brand: 'Sun Associate Finance',
    categoryGroup: 'Financial Services',
    imagePath: '/assets/aistudio/2_ee9b54bf.png',
    headline: 'வழங்கும் வங்கி கடன்கள் — அடமானம் இன்றி 2 நாட்களில் வியாபார நிதி',
    language: 'Tamil',
    tools: ['Canva', 'Photoshop'],
    description: 'Professional executive marketing poster targeting commercial business owners with fast-track loan approvals up to ₹5 Crore.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'sun-finance-cheque-finance',
    title: 'Sun Associates — Cheque Based Private Finance',
    brand: 'Sun Associates',
    categoryGroup: 'Financial Services',
    imagePath: '/assets/aistudio/3_1f7a4114.png',
    headline: 'காசோலை அடிப்படையிலான கடன் (தனியார் பைனான்ஸ்)',
    language: 'Tamil',
    tools: ['Canva', 'Photoshop'],
    description: 'Targeted ad creative for private business loans up to ₹1 Crore with reasonable CIBIL acceptance and zero advance payment.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'sun-finance-growth-plant',
    title: 'Sun Associates — Business Capital & Wealth Growth',
    brand: 'Sun Associates',
    categoryGroup: 'Financial Services',
    imagePath: '/assets/aistudio/4_3298b53f.png',
    headline: 'எந்த வித அடமானமின்றி உடனடி வியாபார கடன் — உங்கள் வளர்ச்சி எங்கள் செல்வம்',
    language: 'Tamil',
    tools: ['Canva', 'Photoshop'],
    description: 'Corporate campaign creative combining stock chart analysis, wealth sprout imagery, and NBFC loan documentation checklists.',
    aspect: 'Vertical 4:5',
    featured: false,
  },
  {
    id: 'sun-finance-gold-coins',
    title: 'Sun Associate — Low-Interest Secured & Unsecured Loans',
    brand: 'Sun Associate',
    categoryGroup: 'Financial Services',
    imagePath: '/assets/aistudio/11_eec5508e.png',
    headline: 'எந்த வித அடமானமின்றி உடனடி வியாபார கடன் — எங்கள் சேவைகள்',
    language: 'Tamil',
    tools: ['Canva', 'Photoshop'],
    description: 'Gold currency-themed loan marketing poster for property/land collateral and unsecured fast business financing.',
    aspect: 'Vertical 4:5',
    featured: false,
  },
  {
    id: 'ipcs-schneider-plc',
    title: 'IPCS Global — Schneider PLC Live Practical Workshop',
    brand: 'IPCS Global Salem',
    categoryGroup: 'EdTech & Workshops',
    imagePath: '/assets/aistudio/5_bf5259be.png',
    headline: 'Level Up Your Skills in Schneider PLC — Live Practical Workshop',
    language: 'English',
    tools: ['Photoshop', 'Canva'],
    description: 'Technical event flyer for an industrial automation workshop covering hardware configuration, logic gates, DOL, timers, and programming workouts.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'ipcs-year-end-offer',
    title: 'IPCS Global — Year-End Career Launch Special 2026',
    brand: 'IPCS Global Salem',
    categoryGroup: 'EdTech & Workshops',
    imagePath: '/assets/aistudio/6_8dfe3cfd.png',
    headline: 'Future at a Right Place — "Year End Special" Offer 2026',
    language: 'English',
    tools: ['Photoshop', 'Canva'],
    description: 'Placement promotion poster highlighting 100% placement assurance in Industrial Automation, Digital Marketing, and BMS & CCTV.',
    aspect: 'Vertical 4:5',
    featured: false,
  },
  {
    id: 'ipcs-meta-ads-camp',
    title: 'IPCS Global — 5-Day Meta Ads Specialist Bootcamp',
    brand: 'IPCS Global',
    categoryGroup: 'EdTech & Workshops',
    imagePath: '/assets/aistudio/7_be4e7bce.png',
    headline: '5 Days: Get Well Trained and Became a Meta Ads Specialist',
    language: 'English',
    tools: ['Photoshop', 'Canva'],
    description: 'High-energy digital marketing course promotional flyer for a 5-day short camp with certified masters at Rs. 2999.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'speedy-way-maharashtra',
    title: 'Speedy Way / SAM — Explore Maharashtra Tour Poster',
    brand: 'SAM Transportation',
    categoryGroup: 'Travel & Tourism',
    imagePath: '/assets/aistudio/8_2a1e4835.png',
    headline: "Don't Miss It to Explore Maharastra — Join Us on for an Adventures",
    language: 'English',
    tools: ['Photoshop', 'Canva'],
    description: 'Hexagonal photo collage travel poster showcasing Gateway of India, Shirdi Sai Baba, hill fort monuments, and tourist bus transport.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'speedy-way-seven-wonders',
    title: 'Speedy Way / SAM — Explore the Seven Wonders World Tour',
    brand: 'SAM Transportation',
    categoryGroup: 'Travel & Tourism',
    imagePath: '/assets/aistudio/12_2694da5c.png',
    headline: 'Explore The Wonders — Explore the Seven Wonders with Us Full Mode of Fun!',
    language: 'English',
    tools: ['Photoshop', 'Canva'],
    description: 'Global holiday campaign poster combining world landmarks (Eiffel Tower, Statue of Liberty, Leaning Tower of Pisa, Big Ben) and air travel.',
    aspect: 'Vertical 4:5',
    featured: false,
  },
  {
    id: 'speedy-way-andaman',
    title: 'Speedy Way / SAM — Andaman Island Exploration Package',
    brand: 'SAM Transportation',
    categoryGroup: 'Travel & Tourism',
    imagePath: '/assets/aistudio/14_1bf6f2ea.png',
    headline: 'Andaman — Explore the Beauty — Come and Join Us Lets Explore All Together',
    language: 'English',
    tools: ['Photoshop', 'Canva'],
    description: 'Island vacation promotional poster with Polaroid pins of Beach Way, Cellular Jail, Rose Island, hotel stay, and boat ride inclusions.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'stm-logistic-services',
    title: 'STM Transportation — Global Logistic & Freight Services',
    brand: 'STM Transportation',
    categoryGroup: 'Cultural & Logistics',
    imagePath: '/assets/aistudio/10_12f4fc8a.png',
    headline: 'STM Transportation — Logistic Services (Safe & Speed Delivery)',
    language: 'English',
    tools: ['Photoshop', 'Canva'],
    description: 'Corporate commercial logistics poster featuring multimodal transport: air freight cargo plane, container shipping vessel, and freight trucks.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'stm-ganesh-chaturthi',
    title: 'STM Transportation — Lord Ganesha Festive Brand Poster',
    brand: 'STM Transportation',
    categoryGroup: 'Cultural & Logistics',
    imagePath: '/assets/aistudio/9_120f43e2.png',
    headline: 'Lord Ganesha — Happy Ganesh Chaturthi',
    language: 'English & Traditional',
    tools: ['Photoshop', 'Canva'],
    description: 'Festive branding poster celebrating Ganesh Chaturthi with peacock feather motifs, golden lamps, and brand good wishes.',
    aspect: 'Vertical 4:5',
    featured: false,
  },
  {
    id: 'chola-desam-tour',
    title: 'Chola Dynasty Heritage Tour — Thanjavur Temple Poster',
    brand: 'Cultural Heritage Tours',
    categoryGroup: 'Travel & Tourism',
    imagePath: '/assets/aistudio/13_3c09c5b9.png',
    headline: 'வணக்கம்! சோழ தேசம் — சோழ வம்ச சுற்றுப்பயணம் — அழகை ஆராயுங்கள்!',
    language: 'Tamil',
    tools: ['Photoshop', 'Canva'],
    description: 'Historic cultural tour poster featuring Thanjavur Brihadisvara Temple, Emperor Raja Raja Chola & Rajendra Chola artwork on ancient parchment.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'yakai-karuppu-kavuni',
    title: 'Yakai Yazhisai — Karuppu Kavuni Laddu Immunity Food Campaign',
    brand: 'Yakai Yazhisai',
    categoryGroup: 'FMCG & Food',
    imagePath: '/assets/aistudio/15_b72c396b.png',
    headline: 'Karuppu Kavuni Laddu — Boost Immunity Naturaly! Order Now',
    language: 'English & Tamil',
    tools: ['Photoshop', 'Canva'],
    description: 'Appetizing commercial food marketing poster for organic black rice laddus with gold leaf, pistachio garnish, and family eating experience.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
  {
    id: 'yakai-traditional-ghee',
    title: 'Yakai Yazhisai — Pure Traditional Ghee (பாரம்பரிய நெய்) Commercial',
    brand: 'Yakai Yazhisai',
    categoryGroup: 'FMCG & Food',
    imagePath: '/assets/aistudio/16_5184906c.png',
    headline: 'யாக்கை யாழிசையின் சுத்தமான பாரம்பரிய நெய் — ஒவ்வொரு உணவிற்கும் மணம் சேர்க்கிறது',
    language: 'Tamil',
    tools: ['Photoshop', 'Canva'],
    description: 'Golden culinary commercial poster showcasing pure aromatic ghee poured over hot curries, crispy dosas, and traditional sweets.',
    aspect: 'Vertical 4:5',
    featured: true,
  },
];

export const ALL_BRAND_LOGOS: BrandLogo[] = [
  {
    id: 'logo-speedy-way',
    name: 'Speedy Way / SAM Transportation',
    brand: 'Speedy Way Transportation',
    category: 'Logistics & Transport',
    imagePath: '/assets/aistudio/logos/logo_speedy_way_sam.svg',
    slogan: 'Speedy Way Transportation',
    colors: ['#E11D2A (Vibrant Crimson)', '#0B1220 (Midnight Navy)', '#FFFFFF (Pure White)'],
    tools: ['Adobe Illustrator', 'Vector Graphics'],
    concept: 'A dynamic red soaring eagle with outstretched wings signifying swift delivery speed and reliability, flanked by bold SAM typography and arched brand title.',
    aspect: 'Square 1:1',
    vectorAvailable: true,
    featured: true,
  },
  {
    id: 'logo-sun-associate',
    name: 'Sun Associate Finance Corporate Badge',
    brand: 'Sun Associate Finance',
    category: 'Financial & Corporate',
    imagePath: '/assets/aistudio/logos/logo_sun_associate.png',
    slogan: 'Your Growth is Our Wealth',
    colors: ['#F97316 (Sunburst Orange)', '#EAB308 (Golden Yellow)', '#1E3A8A (Deep Blue)', '#0B1220 (Black)'],
    tools: ['Adobe Photoshop', 'Canva', '3D Modeling'],
    concept: 'A 3D embossed circular emblem featuring two business figures helping each other climb up steps towards a rising sun over a home, surrounded by the brand promise "Your Growth is Our Wealth".',
    aspect: 'Circular 1:1',
    vectorAvailable: true,
    featured: true,
  },
  {
    id: 'logo-growth-feathers',
    name: 'Growth Feathers Brand Identity',
    brand: 'Growth Feathers',
    category: 'Lifestyle & Apparel',
    imagePath: '/assets/aistudio/logos/logo_growth_feathers.svg',
    slogan: 'Grow With Us',
    colors: ['#111827 (Dark Charcoal)', '#9CA3AF (Silver Feather)', '#FFFFFF (Pure White)'],
    tools: ['Adobe Illustrator', 'Photoshop'],
    concept: 'A sleek monochrome natural quill feather with detailed plumage shading, featuring "GROWTH FEATHERS" on the vane and industrial chain links suspending the slogan "GROW WITH US".',
    aspect: 'Landscape 7:5',
    vectorAvailable: true,
    featured: true,
  },
  {
    id: 'logo-young-greens',
    name: 'Young Greens Organic Emblem',
    brand: 'Young Greens',
    category: 'Agri & Organic Foods',
    imagePath: '/assets/aistudio/logos/logo_young_greens.svg',
    slogan: 'Natural Agricultural Vitality',
    colors: ['#69D73A (Vibrant Lime Green)', '#111827 (Solid Black)', '#FFFFFF (Alpine White)'],
    tools: ['Adobe Illustrator', 'Vector Graphics'],
    concept: 'A bold lime-green disc framing a charging muscular black bull silhouette alongside clean mountain silhouettes, symbolizing organic health, agricultural power, and freshness.',
    aspect: 'Circular 1:1',
    vectorAvailable: true,
    featured: true,
  },
  {
    id: 'logo-stm-transportation',
    name: 'STM Transportation Industrial Mark',
    brand: 'STM Transportation',
    category: 'Logistics & Transport',
    imagePath: '/assets/aistudio/logos/logo_stm_transportation.svg',
    slogan: 'Think It! Belive It!',
    colors: ['#00A8C6 (Cyan Blue)', '#111827 (Gear Black)', '#9CA3AF (Stencil Grey)'],
    tools: ['Adobe Illustrator', 'Technical CAD'],
    concept: 'Precision interlocking black mechanical gears turning together above a cyan flatbed cargo truck, topped by the motivational arched motto "THINK IT! BELIVE IT!".',
    aspect: 'Square 1:1',
    vectorAvailable: true,
    featured: true,
  },
  {
    id: 'logo-tamilnadu-holiday',
    name: 'Tamilnadu Holiday Global Tour Logo',
    brand: 'Tamilnadu Holiday',
    category: 'Travel & Tourism',
    imagePath: '/assets/aistudio/logos/logo_tamilnadu_holiday.svg',
    slogan: 'Travel Around The World',
    colors: ['#4C1D95 (Cosmic Violet)', '#F59E0B (Golden Amber)', '#DC2626 (Sunset Red)', '#0D9488 (Teal)'],
    tools: ['Adobe Photoshop', 'Illustrator'],
    concept: 'A cosmic globe encircled by iconic world heritage wonders (Brihadisvara temple, Eiffel Tower, Statue of Liberty, Leaning Tower of Pisa) with multi-directional wooden guidepost arrows.',
    aspect: 'Square 1:1',
    vectorAvailable: true,
    featured: true,
  },
  {
    id: 'logo-kmc-roofings',
    name: "KMC Roofing 'Build with Trust' Emblem",
    brand: 'KMC Roofing',
    category: 'Industrial & Roofing',
    imagePath: '/assets/aistudio/logos/logo_kmc_roofings.png',
    slogan: 'Build With Trust',
    colors: ['#DC2626 (Roofing Red)', '#0B1220 (Charcoal Black)', '#E2E8F0 (Silver Grey)'],
    tools: ['Adobe Photoshop', '3D Graphics'],
    concept: 'A professional 3D builder with toolbelt fixing durable residential and commercial roofing ridge sheets, anchored by the bold declaration "BUILD WITH TRUST".',
    aspect: 'Circular 1:1',
    vectorAvailable: true,
    featured: true,
  },
  {
    id: 'logo-yakai-yazhisai',
    name: 'Yakai Yazhisai Traditional Culinary Brand',
    brand: 'Yakai Yazhisai',
    category: 'Agri & Organic Foods',
    imagePath: '/assets/aistudio/logos/logo_yakai_yazhisai.svg',
    slogan: 'Traditional Organic Foods',
    colors: ['#111827 (Charcoal Black)', '#F59E0B (Warm Golden Honey)'],
    tools: ['Adobe Illustrator', 'Typography'],
    concept: 'Crossed culinary fork and knife silhouette set above bold tribal geometric typography, representing traditional recipes and pure heritage nutrition.',
    aspect: 'Square 1:1',
    vectorAvailable: true,
    featured: true,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'creative-design-full-portfolio',
    title: 'Commercial Graphic Design & Multi-Brand Identity Portfolio (8 Logos & 17 Posters)',
    clientOrOrg: 'Speedy Way, Sun Associate, KMC Roofing, Growth Feathers, Young Greens, STM, Tamilnadu Holiday, Yakai Yazhisai, IPCS',
    category: 'Graphic Design & Branding',
    period: '2024 – 2026',
    projectType: 'Client Branding & Freelance',
    thumbnail: '/assets/aistudio/KMC_Roofing_Solutions_Flyer__1__a392ee75.png',
    originalAssetPath: '/assets/aistudio/KMC_Roofing_Solutions_Flyer__1__a392ee75.png',
    isImage: true,
    description: 'A comprehensive commercial collection of 8 authentic vector brand logos & corporate emblems alongside 17 print-ready and digital advertising posters created across Logistics & Transport, Banking & Finance, Industrial Roofing, Travel & Tourism, EdTech Bootcamps, and FMCG Organic Foods.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'Figma', 'Visual Typography', 'Vector Graphics'],
    designObjective: 'Craft distinctive brand marks, vector corporate emblems, high-impact commercial posters, promotional flyers, and social media advertising creatives that drive customer inquiries, establish brand credibility, and convert across regional Tamil and English audiences.',
    creativeConcept: 'Multi-industry versatility: 8 distinct brand marks capturing company core values (eagles for speed, gears for freight reliability, bulls for organic vitality, quills for growth, climbing partners for financial growth); complemented by 17 high-conversion commercial advertising flyers.',
    deliverables: [
      '8 authentic brand logos & vector emblems (Speedy Way, Sun Associate, Growth Feathers, Young Greens, STM Transportation, Tamilnadu Holiday, KMC Roofing, Yakai Yazhisai)',
      '17 verified commercial advertising posters & flyers',
      'Bilingual copywriting in Tamil and English with high regional resonance',
      'High-resolution 300 DPI print-ready layouts and scalable vector SVG assets',
    ],
    performanceMetrics: [
      { label: 'Brand Logos', value: '8 Emblems', context: 'Vector marks across 6 distinct industries' },
      { label: 'Published Posters', value: '17 Assets', context: 'Print-ready & optimized for social media' },
      { label: 'Linguistic Reach', value: 'Bilingual', context: 'High conversion across Tamil & English audiences' },
    ],
    verifiedOutcomes: [
      'Designed 8 original brand logos & corporate marks with tailored color palettes, mottos, and vector precision.',
      'Engineered 5 loan campaign posters for Sun Associate Finance driving qualified local borrowing inquiries.',
      'Designed full-page retail flyers and vector emblems for KMC Roofing Solutions.',
      'Created technical workshop posters for IPCS Global Schneider PLC and Meta Ads Bootcamps.',
      'Produced holiday tour and logistics posters for SAM / STM Transportation (Andaman, Maharashtra, Seven Wonders).',
      'Crafted appetizing commercial food posters for Yakai Yazhisai organic laddus and traditional ghee.',
    ],
  },
  {
    id: 'sun-associate-project',
    title: 'Digital Marketing Campaign — Financial Lead Acquisition',
    clientOrOrg: 'Sun Associate Finance',
    category: 'Digital Marketing',
    period: 'July 2025 – December 2025',
    projectType: 'Professional Assignment',
    thumbnail: '/assets/aistudio/1_0ca80432.png',
    originalAssetPath: '/assets/aistudio/1_0ca80432.png',
    isImage: true,
    description: 'Executed targeted Facebook and Instagram paid marketing campaigns to promote financial services, create audience-specific bilingual creatives, and generate qualified consumer loan leads across Tamil Nadu.',
    tools: ['Meta Ads Manager', 'Canva', 'Facebook Pages', 'Instagram Ads', 'Meta Business Suite'],
    designObjective: 'Drive high-intent local loan inquiries by developing hyper-targeted regional campaigns with bilingual creative assets tailored for Namakkal and surrounding industrial and agricultural districts.',
    creativeConcept: '"Your Growth is Our Wealth" — Positioning Sun Associate Finance as an accessible, trusted financial partner with transparent loan terms, fast processing, and friendly local service.',
    deliverables: [
      'Multi-format Meta Ad Creative variations (Feed image, Story, Carousel)',
      'Dual-language ad copywriting (Tamil & English) addressing common financing needs',
      'Targeted lead form setup with pre-qualification questions',
      'Weekly performance reporting and lead quality reconciliation with sales',
    ],
    performanceMetrics: [
      { label: 'CTR Improvement', value: '+34%', context: 'Over initial generic ad baseline' },
      { label: 'Cost Per Lead (CPL)', value: '-22%', context: 'Reduced through audience refinement' },
      { label: 'Lead Conversion', value: 'High Intent', context: 'Pre-screened inquiries passed to sales team' },
    ],
    verifiedOutcomes: [
      'Planned and executed full Meta Ads campaign structure with cold prospecting and warm re-engagement.',
      'Created localized ad copy in Tamil and English that significantly resonated with small business owners and individuals.',
      'Analyzed campaign data weekly to eliminate fatigue and reallocate budget to top-performing audience segments.',
      'Aligned daily lead handoffs with the sales reps to ensure under-2-hour inquiry turnaround.',
    ],
    adCopiesOrSamples: [
      {
        lang: 'Tamil (Regional Hook)',
        headline: 'உங்கள் வணிக வளர்ச்சிக்கு உடனடி நிதி உதவி!',
        body: 'எளிய ஆவணங்கள், விரைவான ஒப்புதல், மற்றும் குறைந்த வட்டி விகிதத்தில் தொழில் மற்றும் தனிநபர் கடன்கள். இன்றே தொடர்பு கொள்ளுங்கள்!',
        hashtags: '#SunAssociateFinance #BusinessLoanTamilNadu #NamakkalFinance',
        cta: 'இப்போதே விண்ணப்பிக்கவும் (Apply Now)',
      },
      {
        lang: 'English (Commercial Ad)',
        headline: 'Fast, Dependable Business & Personal Financing When You Need It Most',
        body: 'Simple documentation, transparent interest rates, and dedicated local support. Empower your next big step with Sun Associate Finance.',
        hashtags: '#FinancialSolutions #Namakkal #YourGrowthOurWealth',
        cta: 'Get Free Loan Consultation',
      },
    ],
  },
  {
    id: 'business-documentation-project',
    title: 'Business Communication, Framework Guides & Publication Documentation',
    clientOrOrg: 'Strategic Content & Academic Operations',
    category: 'Business Operations',
    period: '2025 – 2026',
    projectType: 'Business Operations & Publication',
    thumbnail: '/assets/aistudio/Digital-Marketing-Complete-Guide__1__42e2b962.pdf',
    originalAssetPath: '/assets/aistudio/Digital-Marketing-Complete-Guide__1__42e2b962.pdf',
    isPdf: true,
    description: 'Authored and formatted comprehensive business documentation, strategic reference publications, and structured operational frameworks. Highlights include the 86-page Digital Marketing Complete Guide 2026, 38-page IT Domains Blueprint, and detailed industrial case analyses.',
    tools: ['Microsoft Office / Excel', 'DTP Software', 'Canva', 'Google Docs', 'Technical Typography'],
    designObjective: 'Transform complex technical, digital marketing, and operations processes into clean, structured, and recruiter-friendly documentation adhering to editorial rigor and professional readability.',
    creativeConcept: 'Clean editorial structure using numbered hierarchies (Chapters > H2 > H3), standardized table comparison matrices, verified case studies, and actionable workflow checklists.',
    deliverables: [
      'The Complete Guide to Digital Marketing 2026 (86 Pages, 28 structured chapters)',
      'IT Department & Its Domains: Comprehensive Career Blueprint (38 Pages)',
      'Acmegrade Engineering Analysis & Platform Evaluation (29 Pages)',
      'Academic and corporate workflow templates (Content calendars, A/B test plans, UTM taxonomy)',
    ],
    performanceMetrics: [
      { label: 'Authored Scope', value: '150+ Pages', context: 'Across 3 major published reference guides' },
      { label: 'Structure', value: '28 Chapters', context: 'Complete end-to-end digital marketing methodology' },
      { label: 'Compliance Focus', value: 'GDPR / DPDP', context: 'Thorough coverage of Indian and global privacy rules' },
    ],
    verifiedOutcomes: [
      'Demonstrated high-tier editorial and documentation ability with zero confidential data leaks.',
      'Organized multi-channel marketing matrices (SEO, PPC, GA4, Consent Management, AARRR Funnel).',
      'Formulated practical frameworks: KPI dashboards, email lifecycle automation maps, and campaign launch checklists.',
      'Provided verified evidence of academic DTP, syllabus preparation, and structured content formatting.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-dm-ipcs',
    title: 'Professional Diploma in Digital Marketing',
    institution: 'IPCS Global, Salem',
    period: 'July 2025 – October 2025',
    completionDate: 'October 2025',
    description: 'Comprehensive professional training covering Search Engine Optimisation (Technical, On-Page, Off-Page, Local), Search Engine Marketing, Meta Ads Manager, Social Media Marketing, Analytics, and Campaign Management.',
    credentialBadge: 'Professional Diploma',
    domainFocus: 'Digital Marketing & Growth',
    topicsCovered: [
      'SEO (On-Page, Off-Page, Technical, Local SEO)',
      'Meta Ads Manager & Audience Segmentation',
      'Search Engine Marketing (SEM & Google Ads)',
      'Campaign Performance Metrics & Optimization',
      'Lead Generation Funnels & Content Writing',
    ],
  },
  {
    id: 'cert-iot-iitkgp',
    title: 'Internet of Things',
    institution: 'IIT Kharagpur (NPTEL)',
    period: 'July 2021 – October 2021',
    completionDate: 'October 2021',
    description: 'Rigorous national academic certification covering connected sensors, wireless protocols, IoT system architecture, and hardware-software data integration conducted by premier IIT faculty.',
    credentialBadge: 'National IIT Certification',
    domainFocus: 'Systems & Connected Technologies',
    topicsCovered: [
      'IoT Architecture & Sensor Layers',
      'Wireless Connectivity Protocols (MQTT, Zigbee, Wi-Fi)',
      'Edge Data Collection & Cloud Synchronization',
      'Industrial IoT Use Cases in Smart Infrastructure',
    ],
  },
  {
    id: 'cert-ai-cit',
    title: 'Introduction to AI & Machine Learning',
    institution: 'Coimbatore Institute of Technology (CIT), Coimbatore',
    period: 'August 2019',
    completionDate: 'August 2019',
    description: 'Foundational training covering machine learning algorithms, model building concepts, statistical data modeling, and practical problem-solving methodologies.',
    credentialBadge: 'Institutional Certification',
    domainFocus: 'Artificial Intelligence & Data Fundamentals',
    topicsCovered: [
      'Supervised & Unsupervised Machine Learning Fundamentals',
      'Data Preprocessing & Evaluation Metrics',
      'Feature Engineering & Algorithmic Problem Solving',
    ],
  },
  {
    id: 'cert-cloud-sona',
    title: 'Introduction to Cloud Computing',
    institution: 'Sona College of Technology, Salem',
    period: 'September 2020',
    completionDate: 'September 2020',
    description: 'Academic program focusing on cloud infrastructure models (IaaS, PaaS, SaaS), cloud virtualization, distributed computing, and enterprise service scalability.',
    credentialBadge: 'Institutional Certification',
    domainFocus: 'Cloud Infrastructure & Scalability',
    topicsCovered: [
      'Cloud Service Architectures (IaaS, PaaS, SaaS)',
      'Virtualization & Cloud Storage Protocols',
      'Enterprise Scalability & Data Security',
    ],
  },
];

export const EDUCATION: EducationItem = {
  institution: 'Sona College of Technology, Salem',
  university: 'Anna University, Chennai (Autonomous Institution)',
  qualification: 'Bachelor of Technology (B.Tech) — Information Technology',
  period: 'September 2018 – May 2022',
  graduationDate: 'August 2024 (Examination Conferred Nov 2022)',
  cgpa: '7.6 / 10',
  classification: 'First Class',
  location: 'Salem, Tamil Nadu, India',
  certificatePdfPath: '/assets/aistudio/UG_degree.pdf_8564d15f.pdf',
  highlights: [
    'Conferred First Class by Anna University with a cumulative CGPA of 7.6/10.',
    'Rigorous coursework across Information Technology, Database Management Systems, Computer Networks, and Business Information Systems.',
    'Final-year project: Developed an AI-Powered Voice Assistant with voice recognition and automated task processing.',
    'Official UG Degree Certificate available in the Document Centre for verified recruiter inspection.',
  ],
};

// All uploaded documents including every single creative design poster
export const DOCUMENTS: DocumentAsset[] = [
  {
    id: 'resume',
    title: 'Madhavaraj T.S — Official Resume (2026)',
    category: 'Resume',
    filepath: '/assets/aistudio/Madhavaraj.T.S_Resume_f33de42d.pdf',
    fileType: 'pdf',
    sizeFormatted: '124 KB · PDF',
    description: 'Comprehensive, verified 2026 professional resume highlighting Payment Operations, Digital Marketing, and Business Experience.',
    featured: true,
    verifiedSource: 'Original Uploaded Document',
  },
  {
    id: 'ug-degree',
    title: 'Anna University B.Tech IT Degree Certificate',
    category: 'Academic',
    filepath: '/assets/aistudio/UG_degree.pdf_8564d15f.pdf',
    fileType: 'pdf',
    sizeFormatted: '380 KB · Official Certificate',
    description: 'Conferred First Class Degree Certificate in Information Technology from Anna University / Sona College of Technology.',
    featured: true,
    verifiedSource: 'Anna University Graduation Record',
  },
  {
    id: 'digital-marketing-guide',
    title: 'The Complete Guide to Digital Marketing 2026',
    category: 'Publications & Reports',
    filepath: '/assets/aistudio/Digital-Marketing-Complete-Guide__1__42e2b962.pdf',
    fileType: 'pdf',
    sizeFormatted: '86 Pages · Strategy Document',
    description: '28-chapter operational reference spanning SEO, PPC, Analytics, Attribution, Consent, and AI in Marketing.',
    featured: true,
    verifiedSource: 'Authored Research & Guide',
  },
  {
    id: 'kmc-flyer',
    title: 'KMC Roofing Solutions Commercial Flyer',
    category: 'Creative Design',
    filepath: '/assets/aistudio/KMC_Roofing_Solutions_Flyer__1__a392ee75.png',
    fileType: 'png',
    sizeFormatted: 'High-Res Print Asset',
    description: 'Original marketing poster artwork designed for KMC Roofing featuring full product catalog and retail store identity.',
    featured: true,
    verifiedSource: 'Client Advertising Creative',
  },
  {
    id: 'poster-sun-1',
    title: 'Sun Associate — Unsecured Business Loan Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/1_0ca80432.png',
    fileType: 'png',
    sizeFormatted: 'Campaign Ad Poster',
    description: 'Instant unsecured business loan and cheque finance promotion in Tamil.',
    featured: false,
    verifiedSource: 'Client Marketing Creative',
  },
  {
    id: 'poster-sun-2',
    title: 'Sun Associate — Bank Loan & Business Capital Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/2_ee9b54bf.png',
    fileType: 'png',
    sizeFormatted: 'Commercial Print Poster',
    description: 'Bank loans offered up to ₹5 Crore with 2-day fast track approval.',
    featured: false,
    verifiedSource: 'Client Marketing Creative',
  },
  {
    id: 'poster-sun-3',
    title: 'Sun Associates — Cheque Finance Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/3_1f7a4114.png',
    fileType: 'png',
    sizeFormatted: 'Commercial Print Poster',
    description: 'Cheque-based private finance and real estate loan promotion.',
    featured: false,
    verifiedSource: 'Client Marketing Creative',
  },
  {
    id: 'poster-sun-4',
    title: 'Sun Associates — Growth Sprout & Stock Chart Loan Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/4_3298b53f.png',
    fileType: 'png',
    sizeFormatted: 'Social Media Ad Creative',
    description: 'NBFC banking loan campaign: "Your Growth is Our Wealth".',
    featured: false,
    verifiedSource: 'Client Marketing Creative',
  },
  {
    id: 'poster-sun-5',
    title: 'Sun Associate — Gold Currency Edition Loan Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/11_eec5508e.png',
    fileType: 'png',
    sizeFormatted: 'Social Media Ad Creative',
    description: 'Instant business loan services with gold coins visual background.',
    featured: false,
    verifiedSource: 'Client Marketing Creative',
  },
  {
    id: 'poster-ipcs-plc',
    title: 'IPCS Global — Schneider PLC Workshop Flyer',
    category: 'Creative Design',
    filepath: '/assets/aistudio/5_bf5259be.png',
    fileType: 'png',
    sizeFormatted: 'Workshop Event Flyer',
    description: 'Industrial automation live practical workshop event creative.',
    featured: false,
    verifiedSource: 'EdTech Campaign Asset',
  },
  {
    id: 'poster-ipcs-placement',
    title: 'IPCS Global — Year-End Placement Special 2026',
    category: 'Creative Design',
    filepath: '/assets/aistudio/6_8dfe3cfd.png',
    fileType: 'png',
    sizeFormatted: 'Promotional Poster',
    description: '100% placement assured career launch campaign poster.',
    featured: false,
    verifiedSource: 'EdTech Campaign Asset',
  },
  {
    id: 'poster-ipcs-meta-ads',
    title: 'IPCS Global — Meta Ads Specialist 5-Day Bootcamp',
    category: 'Creative Design',
    filepath: '/assets/aistudio/7_be4e7bce.png',
    fileType: 'png',
    sizeFormatted: 'Course Promotion Poster',
    description: 'Digital marketing bootcamp short camp ad poster at Rs. 2999.',
    featured: false,
    verifiedSource: 'EdTech Campaign Asset',
  },
  {
    id: 'poster-sam-maharashtra',
    title: 'Speedy Way / SAM — Maharashtra Tour Adventure Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/8_2a1e4835.png',
    fileType: 'png',
    sizeFormatted: 'Travel & Tourism Flyer',
    description: 'Hexagonal photo collage travel poster for Maharashtra destinations.',
    featured: false,
    verifiedSource: 'Tourism & Transport Asset',
  },
  {
    id: 'poster-sam-seven-wonders',
    title: 'Speedy Way / SAM — Seven Wonders World Tour Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/12_2694da5c.png',
    fileType: 'png',
    sizeFormatted: 'Global Tourism Poster',
    description: 'Seven Wonders global travel package promotion poster.',
    featured: false,
    verifiedSource: 'Tourism & Transport Asset',
  },
  {
    id: 'poster-sam-andaman',
    title: 'Speedy Way / SAM — Andaman Island Exploration Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/14_1bf6f2ea.png',
    fileType: 'png',
    sizeFormatted: 'Island Holiday Flyer',
    description: 'Andaman beauty tour with Polaroid-pinned beach highlights.',
    featured: false,
    verifiedSource: 'Tourism & Transport Asset',
  },
  {
    id: 'poster-stm-logistics',
    title: 'STM Transportation — Logistic Services Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/10_12f4fc8a.png',
    fileType: 'png',
    sizeFormatted: 'Commercial Logistics Flyer',
    description: 'Global freight, container shipping, and truck delivery poster.',
    featured: false,
    verifiedSource: 'Corporate Commercial Asset',
  },
  {
    id: 'poster-stm-ganesh',
    title: 'STM Transportation — Ganesh Chaturthi Greeting Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/9_120f43e2.png',
    fileType: 'png',
    sizeFormatted: 'Festive Branding Poster',
    description: 'Traditional cultural greeting and social media branding poster.',
    featured: false,
    verifiedSource: 'Brand Social Asset',
  },
  {
    id: 'poster-chola-heritage',
    title: 'Chola Dynasty Heritage Tour — Thanjavur Temple Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/13_3c09c5b9.png',
    fileType: 'png',
    sizeFormatted: 'Cultural Heritage Poster',
    description: 'Historic Thanjavur Brihadisvara Temple Chola dynasty tour poster.',
    featured: false,
    verifiedSource: 'Heritage Tourism Creative',
  },
  {
    id: 'poster-yakai-laddu',
    title: 'Yakai Yazhisai — Karuppu Kavuni Laddu Food Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/15_b72c396b.png',
    fileType: 'png',
    sizeFormatted: 'Commercial Food Poster',
    description: 'Organic immunity booster black rice laddu product advertising poster.',
    featured: false,
    verifiedSource: 'FMCG Brand Creative',
  },
  {
    id: 'poster-yakai-ghee',
    title: 'Yakai Yazhisai — Traditional Ghee Commercial Food Poster',
    category: 'Creative Design',
    filepath: '/assets/aistudio/16_5184906c.png',
    fileType: 'png',
    sizeFormatted: 'Commercial Food Poster',
    description: 'Pure traditional aromatic ghee culinary advertisement poster.',
    featured: false,
    verifiedSource: 'FMCG Brand Creative',
  },
  {
    id: 'it-career-guide',
    title: 'IT Department & Its Domains Career Guide',
    category: 'Publications & Reports',
    filepath: '/assets/aistudio/IT_Career_Guide_2026_d1228e16.pdf',
    fileType: 'pdf',
    sizeFormatted: '38 Pages · Reference Guide',
    description: 'Detailed analysis of IT operations, engineering roles, emerging AI automation impact, and career pathways.',
    featured: false,
    verifiedSource: 'Industry Reference Publication',
  },
  {
    id: 'engineering-analysis',
    title: 'Acmegrade Engineering Platform Blueprint',
    category: 'Publications & Reports',
    filepath: '/assets/aistudio/Acmegrade_Mechanical_Engineering_Blog_a935ca46.pdf',
    fileType: 'pdf',
    sizeFormatted: '29 Pages · Technical Review',
    description: 'Analytical review evaluating industrial curriculum, CAD modeling, EV adoption, and workforce readiness.',
    featured: false,
    verifiedSource: 'Technical Content & Research',
  },
  {
    id: 'logo-speedy-way',
    title: 'Speedy Way / SAM Transportation — Eagle Brand Logo',
    category: 'Creative Design',
    filepath: '/assets/aistudio/logos/logo_speedy_way_sam.svg',
    fileType: 'image',
    sizeFormatted: 'Vector SVG · Scalable',
    description: 'Red soaring eagle emblem signifying rapid logistics and highway speed for SAM Transportation.',
    featured: true,
    verifiedSource: 'Vector Brand Identity',
  },
  {
    id: 'logo-sun-associate',
    title: 'Sun Associate Finance — 3D Corporate Badge',
    category: 'Creative Design',
    filepath: '/assets/aistudio/logos/logo_sun_associate.png',
    fileType: 'png',
    sizeFormatted: 'High-Res PNG · Emblem',
    description: '3D embossed circular emblem featuring two partners climbing steps toward sunrise ("Your Growth is Our Wealth").',
    featured: true,
    verifiedSource: 'Client Brand Identity',
  },
  {
    id: 'logo-growth-feathers',
    title: 'Growth Feathers — "Grow With Us" Quill Logo',
    category: 'Creative Design',
    filepath: '/assets/aistudio/logos/logo_growth_feathers.svg',
    fileType: 'image',
    sizeFormatted: 'Vector SVG · Scalable',
    description: 'Monochrome feather with detailed vane plumage and industrial chain links suspending the brand motto.',
    featured: true,
    verifiedSource: 'Vector Brand Identity',
  },
  {
    id: 'logo-young-greens',
    title: 'Young Greens — Organic Bull & Mountain Emblem',
    category: 'Creative Design',
    filepath: '/assets/aistudio/logos/logo_young_greens.svg',
    fileType: 'image',
    sizeFormatted: 'Vector SVG · Scalable',
    description: 'Lime-green circular badge with charging muscular bull and mountain silhouettes representing organic vigor.',
    featured: true,
    verifiedSource: 'Vector Brand Identity',
  },
  {
    id: 'logo-stm-transportation',
    title: 'STM Transportation — Interlocking Gears & Freight Logo',
    category: 'Creative Design',
    filepath: '/assets/aistudio/logos/logo_stm_transportation.svg',
    fileType: 'image',
    sizeFormatted: 'Vector SVG · Scalable',
    description: 'Mechanical gears and cyan freight truck emblem with arched motto "THINK IT! BELIVE IT!".',
    featured: true,
    verifiedSource: 'Vector Brand Identity',
  },
  {
    id: 'logo-tamilnadu-holiday',
    title: 'Tamilnadu Holiday — "Travel Around The World" Logo',
    category: 'Creative Design',
    filepath: '/assets/aistudio/logos/logo_tamilnadu_holiday.svg',
    fileType: 'image',
    sizeFormatted: 'Vector SVG · Scalable',
    description: 'Cosmic globe surrounded by world heritage wonders and directional tour guidepost signs.',
    featured: true,
    verifiedSource: 'Vector Brand Identity',
  },
  {
    id: 'logo-kmc-roofings',
    title: 'KMC Roofing Solutions — "Build with Trust" Logo Badge',
    category: 'Creative Design',
    filepath: '/assets/aistudio/logos/logo_kmc_roofings.png',
    fileType: 'png',
    sizeFormatted: 'Brand Emblem · PNG',
    description: 'Craftsman builder badge and red ridge roof emblem designed for KMC Roofing Solutions.',
    featured: true,
    verifiedSource: 'Original Branding Artwork',
  },
  {
    id: 'logo-yakai-yazhisai',
    title: 'Yakai Yazhisai — Traditional Culinary Brand Logo',
    category: 'Creative Design',
    filepath: '/assets/aistudio/logos/logo_yakai_yazhisai.svg',
    fileType: 'image',
    sizeFormatted: 'Vector SVG · Scalable',
    description: 'Crossed culinary fork and knife with tribal geometric typography for traditional organic food products.',
    featured: true,
    verifiedSource: 'Vector Brand Identity',
  },
];
