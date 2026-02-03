import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';

export function SocialLinks() {
  const data = usePortfolioData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* GitHub */}
      <Card className="p-8 md:p-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-4xl text-white/80">
            <FaGithub />
          </div>
          <div>
            <p className="text-xs text-white/60 uppercase tracking-widest mb-1">
              {data.social.github.label}
            </p>
            <p className="text-lg font-semibold text-white">
              {data.social.github.handle}
            </p>
          </div>
        </div>
        <a
          href={data.social.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-cyan-400 transition-colors"
          aria-label="GitHub Profile"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </Card>

      {/* LinkedIn */}
      <Card className="p-8 md:p-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-4xl text-blue-500">
            <FaLinkedin />
          </div>
          <div>
            <p className="text-xs text-white/60 uppercase tracking-widest mb-1">
              {data.social.linkedin.label}
            </p>
            <p className="text-lg font-semibold text-white">
              {data.social.linkedin.handle}
            </p>
          </div>
        </div>
        <a
          href={data.social.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-blue-400 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </Card>
    </div>
  );
}
