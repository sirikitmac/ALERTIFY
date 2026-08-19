import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { TheIdea } from './components/TheIdea';
import { HowItWorks } from './components/HowItWorks';
import { ProductDemo } from './components/ProductDemo';
import { CentralizedInformation } from './components/CentralizedInformation';
import { WhyItMatters } from './components/WhyItMatters';
import { WhyNow } from './components/WhyNow';
import { SdgImpact } from './components/SdgImpact';
import { Vision } from './components/Vision';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InteractiveExplorerModal } from './components/InteractiveExplorerModal';

export default function App() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const handleOpenExplorer = () => setIsExplorerOpen(true);
  const handleCloseExplorer = () => setIsExplorerOpen(false);

  return (
    <div className="min-h-screen bg-[#F5F7F8] text-[#12304A] font-sans antialiased selection:bg-[#168AAD]/20 selection:text-[#12304A]">
      {/* 1. Header Navigation */}
      <Navigation onOpenExplorer={handleOpenExplorer} />

      {/* Main Story Flow */}
      <main>
        {/* 2. Hero Section (Two-column layout with product visual) */}
        <Hero onOpenExplorer={handleOpenExplorer} />

        {/* 3. The Problem (Information Chaos & Visual Convergence) */}
        <TheProblem />

        {/* 4. The Idea (Photo + Location + Description = Clarity) */}
        <TheIdea />

        {/* 5. How It Works (01 Report, 02 Understand, 03 Prioritize, 04 Respond) */}
        <HowItWorks />

        {/* 6. Product Demo (From Photo to Prioritized Incident) */}
        <ProductDemo />

        {/* 7. Centralized Information (Unified Responder Overview) */}
        <CentralizedInformation />

        {/* 8. Why It Matters (Less Time Searching, More Time Responding) */}
        <WhyItMatters />

        {/* 9. Why Now (The Disaster is Only the Beginning) */}
        <WhyNow />

        {/* 10. SDG Impact (SDG 11, SDG 13, SDG 16) */}
        <SdgImpact />

        {/* 11. Vision (Information Should Move as Fast as the Situation Does) */}
        <Vision />

        {/* 12. Final Call to Action (Navy Theme) */}
        <FinalCTA onOpenExplorer={handleOpenExplorer} />
      </main>

      {/* 13. Minimal Footer */}
      <Footer />

      {/* Interactive Experience Modal */}
      <InteractiveExplorerModal
        isOpen={isExplorerOpen}
        onClose={handleCloseExplorer}
      />
    </div>
  );
}
