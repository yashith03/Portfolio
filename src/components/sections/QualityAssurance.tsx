import { motion } from 'framer-motion';
import { FaVial, FaRobot, FaCheckDouble, FaBug, FaSearch } from 'react-icons/fa';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';

const categoryIcons = {
  automation: <FaRobot />,
  methodology: <FaCheckDouble />,
  vial: <FaVial />,
};

export function QualityAssurance() {
  const data = usePortfolioData();
  const highlights = data.qaHighlights;

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest w-fit">
          <FaVial className="animate-pulse" />
          QA & Automation Experience
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Quality Assurance & Testing
        </h2>
        <p className="text-white/60 max-w-2xl">
          Testing and QA skills are applied as part of a broader Software Engineering and Full-Stack Development workflow, 
          supporting reliable backend services, stable frontend behavior, and maintainable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="flex flex-col h-full overflow-hidden group">
              {/* Card Header with Icon */}
              <div className="p-6 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="p-3 rounded-lg bg-slate-900 border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  {categoryIcons[item.icon as keyof typeof categoryIcons] || <FaSearch />}
                </div>
              {/*  <div className="flex flex-col items-end">
                 <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Metric</span>
                  <span className="text-sm font-bold text-green-400 font-mono">PASS [100%]</span> 
                </div>*/}
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.category}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills/Tools Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-tight group-hover:border-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative "Status Bar" */}
              <div className="h-1 bg-gradient-to-r from-cyan-500/50 via-green-500/50 to-cyan-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Experience Summary Bar */}
    {/*  <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 flex flex-wrap items-center justify-around gap-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Workflow</span>
          <span className="text-sm font-bold text-white flex items-center gap-2">
            <FaBug className="text-red-400" /> Full Bug Lifecycle
          </span>
        </div>
        
        <div className="hidden md:block w-px h-8 bg-white/10 z-10" />

        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Methodology</span>
          <span className="text-sm font-bold text-white">CI/CD Integrated Testing</span>
        </div>

        <div className="hidden md:block w-px h-8 bg-white/10 z-10" />

        <div className="flex flex-col items-center gap-1 z-10">
          <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Balance</span>
          <span className="text-sm font-bold text-white">Automation-First Approach</span>
        </div>
      </div>*/}
    </div>
  );
}
