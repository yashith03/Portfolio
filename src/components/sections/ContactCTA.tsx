import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function ContactCTA() {
  const data = usePortfolioData();

  return (
    <Card className="p-8 md:p-12 lg:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {data.contact.heading}
          </h2>
          <p className="text-base text-white/70 mb-8 leading-relaxed">
            {data.contact.description}
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/60">Email:</span>
              <a
                href={`mailto:${data.contact.email}`}
                className="text-white font-medium hover:text-cyan-400 transition-colors"
              >
                {data.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/60">Timezone:</span>
              <span className="text-white font-medium">
                {data.personal.timezone}
              </span>
            </div>
          </div>

          <p className="text-xs text-white/50">
            {data.contact.responseTime}
          </p>
        </div>

        <div className="flex justify-end">
          <Button
            variant="primary"
            href={`mailto:${data.contact.email}`}
            className="text-lg px-8 py-4"
          >
            {data.contact.ctaText}
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
