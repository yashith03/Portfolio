import { Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { HeroBento } from './components/sections/HeroBento';

// Lazy load sections below the fold
const TechStack = lazy(() => import('./components/sections/TechStack').then(m => ({ default: m.TechStack })));
const ExperienceEducation = lazy(() => import('./components/sections/ExperienceEducation').then(m => ({ default: m.ExperienceEducation })));
const LearningCertifications = lazy(() => import('./components/sections/LearningCertifications').then(m => ({ default: m.LearningCertifications })));
const QualityAssurance = lazy(() => import('./components/sections/QualityAssurance').then(m => ({ default: m.QualityAssurance })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const GithubContributionGraph = lazy(() => import('./components/ui/GithubContributionGraph'));
const SocialLinks = lazy(() => import('./components/sections/SocialLinks').then(m => ({ default: m.SocialLinks })));
const ContactCTA = lazy(() => import('./components/sections/ContactCTA').then(m => ({ default: m.ContactCTA })));

// Loading Component
const SectionLoading = () => (
  <div className="w-full h-48 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background accent */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        <Suspense fallback={<SectionLoading />}>
          {/* Hero Section */}
          <section id="hero">
            <HeroBento />
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Tech Stack */}
          <section id="tech-stack">
            <TechStack />
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Experience & Education */}
          <section id="experience">
            <ExperienceEducation />
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Learning & Certifications */}
          <section id="learning">
            <LearningCertifications />
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Quality Assurance */}
          <section id="qa">
            <QualityAssurance />
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Projects */}
          <section id="projects">
            <Projects />
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* GitHub Activity */}
          <section id="github">
            <GithubContributionGraph username="yashith03" />
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Social Links */}
          <section id="social">
            <SocialLinks />
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Contact CTA */}
          <section id="contact">
            <ContactCTA />
          </section>
        </Suspense>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/5">
          <p className="text-xs text-white/40 text-center">
            © 2025 Yashith Chandeepa. All rights reserved.
          </p>
        </footer>
      </div>
      </div>
    </>
  );
}

export default App;
