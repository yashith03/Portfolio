import { motion } from 'framer-motion';
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaJs,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiExpo,
  SiJest,
  SiSelenium,
  SiAppium,
} from 'react-icons/si';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';

const iconMap: { [key: string]: React.ReactNode } = {
  react: <FaReact className="w-8 h-8" />,
  nextjs: <SiNextdotjs className="w-8 h-8" />,
  typescript: <SiTypescript className="w-8 h-8" />,
  html5: <FaHtml5 className="w-8 h-8" />,
  css3: <FaCss3Alt className="w-8 h-8" />,
  tailwind: <SiTailwindcss className="w-8 h-8" />,
  node: <FaNode className="w-8 h-8" />,
  javascript: <FaJs className="w-8 h-8" />,
  supabase: <SiSupabase className="w-8 h-8" />,
  postgresql: <SiPostgresql className="w-8 h-8" />,
  expo: <SiExpo className="w-8 h-8" />,
  jest: <SiJest className="w-8 h-8" />,
  appium: <SiAppium className="w-8 h-8" />,
  selenium: <SiSelenium className="w-8 h-8" />,
  docker: <FaDocker className="w-8 h-8" />,
  figma: <FaFigma className="w-8 h-8" />,
};

export function TechStack() {
  const data = usePortfolioData();
  
  // Double the items for seamless infinite scroll
  const scrollingItems = [...data.techStack, ...data.techStack];

  return (
    <Card className="p-8 md:p-12 overflow-hidden">
      <h3 className="text-lg font-semibold text-white mb-8">Tech Stack</h3>
      
      <div className="relative flex overflow-hidden">
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900/50 to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-4 md:gap-8"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: 'paused' }}
          style={{ width: "fit-content" }}
        >
          {scrollingItems.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 group cursor-pointer shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-4 rounded-2xl bg-white/8 border border-white/10 group-hover:bg-white/12 group-hover:border-cyan-500/30 transition-all duration-300 text-white/70 group-hover:text-cyan-300">
                  {iconMap[tech.icon] || <span className="w-8 h-8" />}
                </div>
              </div>
              <span className="text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Card>
  );
}
