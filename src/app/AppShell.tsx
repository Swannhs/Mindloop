import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import { Footer } from '../layout/Footer';
import { Navbar } from '../layout/Navbar';
import { HomePage } from '../pages/HomePage';
import { HowItWorksPage } from '../pages/HowItWorksPage';
import { PhilosophyPage } from '../pages/PhilosophyPage';
import { UseCasesPage } from '../pages/UseCasesPage';

export function AppShell() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/philosophy" element={<PhilosophyPage />} />
              <Route path="/use-cases" element={<UseCasesPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
