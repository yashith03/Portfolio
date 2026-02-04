import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'learning', label: 'Learning' },
  { id: 'qa', label: 'QA' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="flex items-center gap-2 group"
            >
              <img 
                src="/assets/favicon.png" 
                alt="Logo" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-cyan-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to account for fixed nav */}
      <div className="h-16" />
    </>
  );
}
