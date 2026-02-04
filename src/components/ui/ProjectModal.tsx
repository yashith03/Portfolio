import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Tag } from './Tag';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  images?: string[];
  linkUrl: string;
  githubUrl?: string;
  label?: string;
  features?: string[];
  highlights?: {
    [key: string]: string;
  };
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto hide-scrollbar bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col shadow-black/50"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all backdrop-blur-md"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="w-full relative shrink-0">
          {project.images && project.images.length > 0 ? (
            <div className="relative group/carousel">
              <div 
                id="modal-carousel"
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar bg-white/5 h-64 md:h-80"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const newIndex = Math.round(scrollLeft / width);
                  const activeDot = document.getElementById(`dot-${newIndex}`);
                  if (activeDot) {
                    const dots = document.querySelectorAll('.carousel-dot');
                    dots.forEach(d => d.classList.remove('bg-cyan-400', 'w-4'));
                    dots.forEach(d => d.classList.add('bg-white/30', 'w-2'));
                    activeDot.classList.remove('bg-white/30', 'w-2');
                    activeDot.classList.add('bg-cyan-400', 'w-4');
                  }
                }}
              >
                {project.images.map((img, idx) => (
                  <div key={idx} className="flex-none w-full h-full snap-center relative">
                    <img
                      src={img}
                      alt={`${project.title} - image ${idx + 1}`}
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Carousel Dots */}
              {project.images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/5">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      id={`dot-${idx}`}
                      onClick={() => {
                        const carousel = document.getElementById('modal-carousel');
                        if (carousel) {
                          carousel.scrollTo({
                            left: idx * carousel.offsetWidth,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className={`carousel-dot h-2 rounded-full transition-all duration-300 ${
                        idx === 0 ? 'w-4 bg-cyan-400' : 'w-2 bg-white/30'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-64 md:h-80 overflow-hidden bg-white/5 relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
          
          {project.label && (
            <div className="absolute top-6 left-6 z-10">
              <span className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-cyan-400 rounded shadow-lg shadow-cyan-400/20 uppercase tracking-widest">
                {project.label}
              </span>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          {/* Title */}
          <div className="p-6 md:p-8 pb-0">
            <h3 className="text-3xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          {/* Tech Stack */}
          <div className="p-6 md:p-8 py-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <Tag key={idx}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 border-t border-white/10">
            <p className="text-base text-white/70 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-white/70 leading-relaxed flex gap-3">
                      <span className="text-cyan-400 shrink-0">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights Section */}
            {project.highlights && Object.keys(project.highlights).length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Technical Highlights</h4>
                <div className="space-y-3">
                  {Object.entries(project.highlights).map(([key, value], idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h5 className="text-sm font-semibold text-cyan-400 mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h5>
                      <p className="text-sm text-white/70">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={`grid grid-cols-1 ${project.linkUrl ? 'sm:grid-cols-2' : ''} gap-4`}>
              {project.linkUrl && (
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 gap-2"
                >
                  Visit Project <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              )}
              
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10 gap-2"
                >
                  <FaGithub className="w-5 h-5" /> GitHub Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
