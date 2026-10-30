/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterSnapshot } from './components/RecruiterSnapshot';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { DocumentCentre } from './components/DocumentCentre';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { ResumeModal } from './components/ResumeModal';
import { PROFILE, EDUCATION } from './data/portfolioData';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeViewerDoc, setActiveViewerDoc] = useState<{
    title: string;
    filepath: string;
    fileType: string;
    category?: string;
    description?: string;
  } | null>(null);

  const openDocumentViewer = (doc: {
    title: string;
    filepath: string;
    fileType: string;
    category?: string;
    description?: string;
  }) => {
    setActiveViewerDoc(doc);
  };

  const closeDocumentViewer = () => {
    setActiveViewerDoc(null);
  };

  const openResumeViewer = () => {
    setIsResumeModalOpen(true);
  };

  const openDegreeViewer = () => {
    setActiveViewerDoc({
      title: 'Anna University B.Tech IT Degree Certificate',
      filepath: EDUCATION.certificatePdfPath,
      fileType: 'pdf',
      category: 'Academic & Degree',
      description: 'Official degree certificate awarded to Madhavaraj T.S (First Class, Sona College of Technology).',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Top Navigation Bar with MTS Logo and Resume Actions */}
      <Navbar onOpenResumeViewer={openResumeViewer} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1 & 3: Hero Page & Capability Cards */}
        <Hero onOpenResumeViewer={openResumeViewer} />

        {/* Section 14: Recruiter 15-Second Executive Snapshot Strip */}
        <RecruiterSnapshot onOpenResumeViewer={openResumeViewer} />

        {/* Section 4: About Me & 6 Strengths & Career Progression */}
        <AboutSection />

        {/* Section 5: Work Experience — Interactive Timeline & Expandable Cards */}
        <ExperienceSection />

        {/* Section 6: Skills — Professional Capability Dashboard (4 Main Categories) */}
        <SkillsSection />

        {/* Section 7: Projects — Visual Portfolio Showcase with KMC & Sun Finance Assets */}
        <ProjectsSection onOpenDocumentViewer={openDocumentViewer} />

        {/* Section 8: Certifications & Professional Development */}
        <CertificationsSection />

        {/* Section 9: Education — Academic Background & Degree Verification */}
        <EducationSection onOpenDegreeViewer={openDegreeViewer} />

        {/* Section 10: Resume & Document Centre Vault */}
        <DocumentCentre onOpenViewer={openDocumentViewer} />

        {/* Section 11: Contact & Professional Connections */}
        <ContactSection />
      </main>

      {/* Section 12: Minimal Sophisticated Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {activeViewerDoc && (
        <DocumentViewerModal
          isOpen={true}
          onClose={closeDocumentViewer}
          title={activeViewerDoc.title}
          filepath={activeViewerDoc.filepath}
          fileType={activeViewerDoc.fileType}
          category={activeViewerDoc.category}
          description={activeViewerDoc.description}
        />
      )}
    </div>
  );
}
