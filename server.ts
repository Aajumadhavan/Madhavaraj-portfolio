import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory contact inquiries store (with persistent fallback if needed)
interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  timestamp: string;
}

const inquiries: ContactInquiry[] = [];

// Documents registry matching the authentic user assets in /public/assets/aistudio
const documents = [
  {
    id: 'resume',
    title: 'Madhavaraj T.S — Official Resume',
    category: 'Resume',
    filename: 'Madhavaraj.T.S_Resume_f33de42d.pdf',
    filepath: '/assets/aistudio/Madhavaraj.T.S_Resume_f33de42d.pdf',
    fileType: 'application/pdf',
    sizeFormatted: '124 KB',
    description: 'Updated 2026 comprehensive resume highlighting Payment Operations, Digital Marketing, and Business Experience.',
    lastUpdated: 'April 2026',
    featured: true,
  },
  {
    id: 'ug-degree',
    title: 'B.Tech Information Technology Degree Certificate',
    category: 'Education & Degree',
    filename: 'UG_degree.pdf_8564d15f.pdf',
    filepath: '/assets/aistudio/UG_degree.pdf_8564d15f.pdf',
    fileType: 'application/pdf',
    sizeFormatted: '380 KB',
    description: 'Anna University Degree Certificate conferred to Madhavaraj T.S, Sona College of Technology (First Class).',
    lastUpdated: 'August 2024 (Conferred Nov 2022)',
    featured: true,
  },
  {
    id: 'digital-marketing-guide',
    title: 'The Complete Guide to Digital Marketing 2026',
    category: 'Publications & Strategy',
    filename: 'Digital-Marketing-Complete-Guide__1__42e2b962.pdf',
    filepath: '/assets/aistudio/Digital-Marketing-Complete-Guide__1__42e2b962.pdf',
    fileType: 'application/pdf',
    sizeFormatted: '86 Pages · PDF',
    description: 'Comprehensive 86-page strategic guide covering SEO, PPC, GA4, Consent Management, AARRR Funnels, and AI-assisted workflows.',
    lastUpdated: 'Mid 2026',
    featured: true,
  },
  {
    id: 'it-career-guide',
    title: 'IT Department & Its Domains: Complete Career Guide',
    category: 'Publications & Strategy',
    filename: 'IT_Career_Guide_2026_d1228e16.pdf',
    filepath: '/assets/aistudio/IT_Career_Guide_2026_d1228e16.pdf',
    fileType: 'application/pdf',
    sizeFormatted: '38 Pages · PDF',
    description: 'Deep dive into IT infrastructure, AI automation impact, cross-functional engineering, and recruitment standards.',
    lastUpdated: 'June 2026',
    featured: false,
  },
  {
    id: 'engineering-analysis',
    title: 'Acmegrade Engineering Platform In-Depth Analysis',
    category: 'Publications & Strategy',
    filename: 'Acmegrade_Mechanical_Engineering_Blog_a935ca46.pdf',
    filepath: '/assets/aistudio/Acmegrade_Mechanical_Engineering_Blog_a935ca46.pdf',
    fileType: 'application/pdf',
    sizeFormatted: '29 Pages · PDF',
    description: 'Detailed content writing and industrial research review covering manufacturing, CAD, and technological shifts.',
    lastUpdated: 'May 2025',
    featured: false,
  },
  {
    id: 'kmc-flyer',
    title: 'KMC Roofing Solutions — Official Promotional Poster',
    category: 'Creative Design',
    filename: 'KMC_Roofing_Solutions_Flyer__1__a392ee75.png',
    filepath: '/assets/aistudio/KMC_Roofing_Solutions_Flyer__1__a392ee75.png',
    fileType: 'image/png',
    sizeFormatted: 'High Resolution PNG',
    description: 'Commercial advertising flyer and visual communication artwork created for KMC Roofing.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'kmc-badge',
    title: 'KMC Roofing Brand Emblem & Logo Badge',
    category: 'Creative Design',
    filename: 'KMC_e9ffe9a7.png',
    filepath: '/assets/aistudio/KMC_e9ffe9a7.png',
    fileType: 'image/png',
    sizeFormatted: 'PNG',
    description: 'Vector-style branding emblem and identity mark for KMC Roofing "Build with Trust".',
    lastUpdated: '2025',
    featured: false,
  },
  {
    id: 'sun-associate-logo',
    title: 'Sun Associate Finance — Brand Identity',
    category: 'Creative Design',
    filename: '1_d7abf628.png',
    filepath: '/assets/aistudio/1_d7abf628.png',
    fileType: 'image/png',
    sizeFormatted: 'PNG',
    description: 'Official corporate logo badge for Sun Associate Finance "Your Growth is Our Wealth".',
    lastUpdated: '2025',
    featured: false,
  },
  {
    id: 'poster-sun-1',
    title: 'Sun Associate — Unsecured Business Loan Poster',
    category: 'Creative Design',
    filename: '1_0ca80432.png',
    filepath: '/assets/aistudio/1_0ca80432.png',
    fileType: 'image/png',
    sizeFormatted: 'Campaign Ad Poster',
    description: 'Instant unsecured business loan and cheque finance promotion in Tamil.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-sun-2',
    title: 'Sun Associate — Bank Loan & Business Capital Poster',
    category: 'Creative Design',
    filename: '2_ee9b54bf.png',
    filepath: '/assets/aistudio/2_ee9b54bf.png',
    fileType: 'image/png',
    sizeFormatted: 'Commercial Print Poster',
    description: 'Bank loans offered up to ₹5 Crore with 2-day fast track approval.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-sun-3',
    title: 'Sun Associates — Cheque Finance Poster',
    category: 'Creative Design',
    filename: '3_1f7a4114.png',
    filepath: '/assets/aistudio/3_1f7a4114.png',
    fileType: 'image/png',
    sizeFormatted: 'Commercial Print Poster',
    description: 'Cheque-based private finance and real estate loan promotion.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-sun-4',
    title: 'Sun Associates — Growth Sprout & Stock Chart Loan Poster',
    category: 'Creative Design',
    filename: '4_3298b53f.png',
    filepath: '/assets/aistudio/4_3298b53f.png',
    fileType: 'image/png',
    sizeFormatted: 'Social Media Ad Creative',
    description: 'NBFC banking loan campaign: "Your Growth is Our Wealth".',
    lastUpdated: '2025',
    featured: false,
  },
  {
    id: 'poster-sun-5',
    title: 'Sun Associate — Gold Currency Edition Loan Poster',
    category: 'Creative Design',
    filename: '11_eec5508e.png',
    filepath: '/assets/aistudio/11_eec5508e.png',
    fileType: 'image/png',
    sizeFormatted: 'Social Media Ad Creative',
    description: 'Instant business loan services with gold coins visual background.',
    lastUpdated: '2025',
    featured: false,
  },
  {
    id: 'poster-ipcs-plc',
    title: 'IPCS Global — Schneider PLC Workshop Flyer',
    category: 'Creative Design',
    filename: '5_bf5259be.png',
    filepath: '/assets/aistudio/5_bf5259be.png',
    fileType: 'image/png',
    sizeFormatted: 'Workshop Event Flyer',
    description: 'Industrial automation live practical workshop event creative.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-ipcs-placement',
    title: 'IPCS Global — Year-End Placement Special 2026',
    category: 'Creative Design',
    filename: '6_8dfe3cfd.png',
    filepath: '/assets/aistudio/6_8dfe3cfd.png',
    fileType: 'image/png',
    sizeFormatted: 'Promotional Poster',
    description: '100% placement assured career launch campaign poster.',
    lastUpdated: '2026',
    featured: false,
  },
  {
    id: 'poster-ipcs-meta-ads',
    title: 'IPCS Global — Meta Ads Specialist 5-Day Bootcamp',
    category: 'Creative Design',
    filename: '7_be4e7bce.png',
    filepath: '/assets/aistudio/7_be4e7bce.png',
    fileType: 'image/png',
    sizeFormatted: 'Course Promotion Poster',
    description: 'Digital marketing bootcamp short camp ad poster at Rs. 2999.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-sam-maharashtra',
    title: 'Speedy Way / SAM — Maharashtra Tour Adventure Poster',
    category: 'Creative Design',
    filename: '8_2a1e4835.png',
    filepath: '/assets/aistudio/8_2a1e4835.png',
    fileType: 'image/png',
    sizeFormatted: 'Travel & Tourism Flyer',
    description: 'Hexagonal photo collage travel poster for Maharashtra destinations.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-sam-seven-wonders',
    title: 'Speedy Way / SAM — Seven Wonders World Tour Poster',
    category: 'Creative Design',
    filename: '12_2694da5c.png',
    filepath: '/assets/aistudio/12_2694da5c.png',
    fileType: 'image/png',
    sizeFormatted: 'Global Tourism Poster',
    description: 'Seven Wonders global travel package promotion poster.',
    lastUpdated: '2025',
    featured: false,
  },
  {
    id: 'poster-sam-andaman',
    title: 'Speedy Way / SAM — Andaman Island Exploration Poster',
    category: 'Creative Design',
    filename: '14_1bf6f2ea.png',
    filepath: '/assets/aistudio/14_1bf6f2ea.png',
    fileType: 'image/png',
    sizeFormatted: 'Island Holiday Flyer',
    description: 'Andaman beauty tour with Polaroid-pinned beach highlights.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-stm-logistics',
    title: 'STM Transportation — Logistic Services Poster',
    category: 'Creative Design',
    filename: '10_12f4fc8a.png',
    filepath: '/assets/aistudio/10_12f4fc8a.png',
    fileType: 'image/png',
    sizeFormatted: 'Commercial Logistics Flyer',
    description: 'Global freight, container shipping, and truck delivery poster.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-stm-ganesh',
    title: 'STM Transportation — Ganesh Chaturthi Greeting Poster',
    category: 'Creative Design',
    filename: '9_120f43e2.png',
    filepath: '/assets/aistudio/9_120f43e2.png',
    fileType: 'image/png',
    sizeFormatted: 'Festive Branding Poster',
    description: 'Traditional cultural greeting and social media branding poster.',
    lastUpdated: '2025',
    featured: false,
  },
  {
    id: 'poster-chola-heritage',
    title: 'Chola Dynasty Heritage Tour — Thanjavur Temple Poster',
    category: 'Creative Design',
    filename: '13_3c09c5b9.png',
    filepath: '/assets/aistudio/13_3c09c5b9.png',
    fileType: 'image/png',
    sizeFormatted: 'Cultural Heritage Poster',
    description: 'Historic Thanjavur Brihadisvara Temple Chola dynasty tour poster.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-yakai-laddu',
    title: 'Yakai Yazhisai — Karuppu Kavuni Laddu Food Poster',
    category: 'Creative Design',
    filename: '15_b72c396b.png',
    filepath: '/assets/aistudio/15_b72c396b.png',
    fileType: 'image/png',
    sizeFormatted: 'Commercial Food Poster',
    description: 'Organic immunity booster black rice laddu product advertising poster.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'poster-yakai-ghee',
    title: 'Yakai Yazhisai — Traditional Ghee Commercial Food Poster',
    category: 'Creative Design',
    filename: '16_5184906c.png',
    filepath: '/assets/aistudio/16_5184906c.png',
    fileType: 'image/png',
    sizeFormatted: 'Commercial Food Poster',
    description: 'Pure traditional aromatic ghee culinary advertisement poster.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'logo-speedy-way',
    title: 'Speedy Way / SAM Transportation — Eagle Brand Logo',
    category: 'Creative Design',
    filename: 'logo_speedy_way_sam.svg',
    filepath: '/assets/aistudio/logos/logo_speedy_way_sam.svg',
    fileType: 'image/svg+xml',
    sizeFormatted: 'Vector SVG',
    description: 'Red soaring eagle emblem signifying rapid logistics and highway speed for SAM Transportation.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'logo-sun-associate',
    title: 'Sun Associate Finance — 3D Corporate Badge',
    category: 'Creative Design',
    filename: 'logo_sun_associate.png',
    filepath: '/assets/aistudio/logos/logo_sun_associate.png',
    fileType: 'image/png',
    sizeFormatted: 'High-Res PNG',
    description: '3D embossed circular emblem featuring two partners climbing steps toward sunrise ("Your Growth is Our Wealth").',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'logo-growth-feathers',
    title: 'Growth Feathers — "Grow With Us" Quill Logo',
    category: 'Creative Design',
    filename: 'logo_growth_feathers.svg',
    filepath: '/assets/aistudio/logos/logo_growth_feathers.svg',
    fileType: 'image/svg+xml',
    sizeFormatted: 'Vector SVG',
    description: 'Monochrome feather with detailed vane plumage and industrial chain links suspending the brand motto.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'logo-young-greens',
    title: 'Young Greens — Organic Bull & Mountain Emblem',
    category: 'Creative Design',
    filename: 'logo_young_greens.svg',
    filepath: '/assets/aistudio/logos/logo_young_greens.svg',
    fileType: 'image/svg+xml',
    sizeFormatted: 'Vector SVG',
    description: 'Lime-green circular badge with charging muscular bull and mountain silhouettes representing organic vigor.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'logo-stm-transportation',
    title: 'STM Transportation — Interlocking Gears & Freight Logo',
    category: 'Creative Design',
    filename: 'logo_stm_transportation.svg',
    filepath: '/assets/aistudio/logos/logo_stm_transportation.svg',
    fileType: 'image/svg+xml',
    sizeFormatted: 'Vector SVG',
    description: 'Mechanical gears and cyan freight truck emblem with arched motto "THINK IT! BELIVE IT!".',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'logo-tamilnadu-holiday',
    title: 'Tamilnadu Holiday — "Travel Around The World" Logo',
    category: 'Creative Design',
    filename: 'logo_tamilnadu_holiday.svg',
    filepath: '/assets/aistudio/logos/logo_tamilnadu_holiday.svg',
    fileType: 'image/svg+xml',
    sizeFormatted: 'Vector SVG',
    description: 'Cosmic globe surrounded by world heritage wonders and directional tour guidepost signs.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'logo-kmc-roofings',
    title: 'KMC Roofing Solutions — "Build with Trust" Logo Badge',
    category: 'Creative Design',
    filename: 'logo_kmc_roofings.png',
    filepath: '/assets/aistudio/logos/logo_kmc_roofings.png',
    fileType: 'image/png',
    sizeFormatted: 'Brand Emblem PNG',
    description: 'Craftsman builder badge and red ridge roof emblem designed for KMC Roofing Solutions.',
    lastUpdated: '2025',
    featured: true,
  },
  {
    id: 'logo-yakai-yazhisai',
    title: 'Yakai Yazhisai — Traditional Culinary Brand Logo',
    category: 'Creative Design',
    filename: 'logo_yakai_yazhisai.svg',
    filepath: '/assets/aistudio/logos/logo_yakai_yazhisai.svg',
    fileType: 'image/svg+xml',
    sizeFormatted: 'Vector SVG',
    description: 'Crossed culinary fork and knife with tribal geometric typography for traditional organic food products.',
    lastUpdated: '2025',
    featured: true,
  }
];

// Document listing endpoint
app.get('/api/documents', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: documents.length,
    documents
  });
});

// Document download / retrieval endpoint
app.get('/api/documents/:id/download', (req: Request, res: Response) => {
  const doc = documents.find(d => d.id === req.params.id);
  if (!doc) {
    return res.status(404).json({ error: 'Document not found' });
  }

  const localPath = path.join(__dirname, 'public', doc.filepath);
  if (fs.existsSync(localPath)) {
    return res.download(localPath, doc.filename);
  }

  // Fallback to relative path directly in public
  const fallbackPath = path.join(__dirname, doc.filepath);
  if (fs.existsSync(fallbackPath)) {
    return res.download(fallbackPath, doc.filename);
  }

  // Redirect to direct static path
  res.redirect(doc.filepath);
});

// Contact form submission endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Please provide your full name.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ error: 'Please provide a detailed message (minimum 10 characters).' });
  }

  const newInquiry: ContactInquiry = {
    id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: name.trim(),
    email: email.trim(),
    phone: phone ? String(phone).trim() : undefined,
    subject: subject ? String(subject).trim() : 'Recruitment Inquiry via Portfolio',
    message: message.trim(),
    timestamp: new Date().toISOString(),
  };

  inquiries.push(newInquiry);

  console.log(`[Contact Submission] Received inquiry from ${newInquiry.name} <${newInquiry.email}>: "${newInquiry.subject}"`);

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out, ' + newInquiry.name + '! Your message has been sent directly to Madhavaraj T.S (stmmadhavaraj07@gmail.com). You will receive a response within 24 hours.',
    inquiryId: newInquiry.id,
  });
});

// Portfolio status summary
app.get('/api/profile-summary', (_req: Request, res: Response) => {
  res.json({
    name: 'Madhavaraj T.S',
    headline: 'Creative Digital Marketer | Payment Operations Executive | Business-Oriented Professional',
    email: 'stmmadhavaraj07@gmail.com',
    phone: '+91 9042350440',
    location: 'Salem, Tamil Nadu, India',
    currentRole: 'Payment Operations Executive at Trustbridge Technology Private Limited (Bengaluru)',
    coreDisciplines: [
      'Digital Marketing & Growth',
      'Payment Operations & Medical Billing',
      'Creative Design & Branding',
      'Business Operations & Documentation'
    ],
    verifiedDocumentsCount: documents.length
  });
});

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio Server running at http://localhost:${PORT}`);
  });
}

startServer();
