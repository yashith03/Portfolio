import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { Tag } from './Tag';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  linkUrl: string;
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

        {/* Image Section (Carousel Placeholder) */}
        <div className="w-full h-64 md:h-80 overflow-hidden bg-white/5 relative shrink-0">
            <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            
            {project.label && (
            <div className="absolute top-6 left-6">
                <span className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-cyan-400 rounded shadow-lg shadow-cyan-400/20 uppercase tracking-widest">
                {project.label}
                </span>
            </div>
            )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          {/* Title */}
          <div className="p-6 md:p-8">
            <h3 className="text-3xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          {/* Tech Stack */}
          <div className="p-6 md:p-8">
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
                    <li key={idx} className="text-sm text-white/70 leading-relaxed">
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

            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 gap-2"
            >
              Visit Project <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
