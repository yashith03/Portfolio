import React from 'react';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';

export function ExperienceEducation() {
  const data = usePortfolioData();

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Experience & Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work History */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white/80 mb-6">
              Work History
            </h3>
            {data.experience.map((exp, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-cyan-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-white/50 whitespace-nowrap ml-4">
                    {exp.start} - {exp.end}
                  </span>
                </div>
                {exp.location && (
                  <p className="text-xs text-white/50 mb-4">
                    📍 {exp.location}
                  </p>
                )}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-sm text-white/70 flex gap-3"
                    >
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white/80 mb-6">
              Education
            </h3>
            {data.education.map((edu, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-cyan-400">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-white/50 whitespace-nowrap ml-4">
                    {edu.start} {edu.end ? `- ${edu.end}` : ''}
                  </span>
                </div>
                <p className="text-xs text-white/60">
                  {edu.note}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
