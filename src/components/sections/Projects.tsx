import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { ProjectModal } from '../ui/ProjectModal';

export function Projects() {
  const data = usePortfolioData();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const allProjects = [data.featuredProject, ...data.projects];

  return (
    <div className="space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProjects.map((proj, idx) => (
          <Card 
            key={idx} 
            className="p-0 overflow-hidden flex flex-col h-full group cursor-pointer"
            onClick={() => setSelectedProject(proj)}
          >
            {/* Image Area */}
            <div className="relative h-56 overflow-hidden bg-white/5">
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Optional Label (e.g. Featured) */}
              {(proj as any).label && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2 py-1 text-[10px] font-bold text-slate-950 bg-cyan-400 rounded shadow-lg shadow-cyan-400/20 uppercase tracking-widest">
                    {(proj as any).label}
                  </span>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-1 border-t border-white/5">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, tIdx) => (
                    <Tag key={tIdx}>{t}</Tag>
                  ))}
                </div>
              </div>

              <div
                className="inline-flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-cyan-400 transition-colors pt-4 border-t border-white/5"
              >
                View Project <FaExternalLinkAlt className="w-3 h-3" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
