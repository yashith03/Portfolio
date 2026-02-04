import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaLaptopCode, FaTrophy, FaLightbulb } from 'react-icons/fa';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';

const typeIcons = {
  course: <FaLaptopCode />,
  certification: <FaCertificate />,
  workshop: <FaGraduationCap />,
  competition: <FaTrophy />,
  focus: <FaLightbulb />
};

export function LearningCertifications() {
  const data = usePortfolioData();
  const items = data.learningAndCertifications;

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Learning & Certifications
        </h2>
        <p className="text-white/60 max-w-2xl">
          A focused record of continuous learning in full-stack development, software testing, and test automation, 
          supported by hands-on project and application experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col gap-4 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-4xl text-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:text-cyan-500/10">
                {typeIcons[item.type]}
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-xl bg-white/5 text-cyan-400 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {typeIcons[item.type]}
                </div>
                <div className="space-y-1 pr-10">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                      item.status === 'completed' 
                        ? 'border-green-500/20 text-green-400 bg-green-500/5' 
                        : 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5'
                    }`}>
                      {item.status || 'Ongoing'}
                    </span>
                    <span className="text-xs text-white/40 font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 font-medium">
                    {item.provider}
                  </p>
                </div>
              </div>

              {item.url && item.url !== "#" && (
                <div className="mt-auto pt-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-400/80 hover:text-cyan-400 inline-flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    View Credential
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
