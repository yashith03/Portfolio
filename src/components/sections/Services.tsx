import React from 'react';
import {
  FaGlobeAmericas,
  FaPalette,
  FaBriefcase,
} from 'react-icons/fa';
import { MdSmartphone } from 'react-icons/md';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';

const serviceIcons: { [key: string]: React.ReactNode } = {
  globe: <FaGlobeAmericas className="w-8 h-8" />,
  palette: <FaPalette className="w-8 h-8" />,
  smartphone: <MdSmartphone className="w-8 h-8" />,
  briefcase: <FaBriefcase className="w-8 h-8" />,
};

export function Services() {
  const data = usePortfolioData();

  return (
    <div className="space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.services.map((service, idx) => (
          <Card key={idx} className="p-8 flex flex-col items-center justify-center text-center">
            {service.icon && (
              <div className="text-4xl text-cyan-400 mb-4">
                {serviceIcons[service.icon] || <span />}
              </div>
            )}
            <h3 className="text-base font-semibold text-white">
              {service.title}
            </h3>
          </Card>
        ))}
      </div>
    </div>
  );
}
