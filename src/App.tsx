
import { Navigation } from './components/Navigation';
import { HeroBento } from './components/sections/HeroBento';
import { TechStack } from './components/sections/TechStack';
import { ExperienceEducation } from './components/sections/ExperienceEducation';
import { LearningCertifications } from './components/sections/LearningCertifications';
import { QualityAssurance } from './components/sections/QualityAssurance';
import { Projects } from './components/sections/Projects';
import GithubContributionGraph from './components/ui/GithubContributionGraph';
import { SocialLinks } from './components/sections/SocialLinks';
import { ContactCTA } from './components/sections/ContactCTA';

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
