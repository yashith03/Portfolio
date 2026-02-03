import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Stat } from '../ui/Stat';

export function HeroBento() {
  const data = usePortfolioData();
  const { personal, stats, currentRole, currentFocus } = data;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Hero Card */}
      <Card className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-between min-h-80">
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
              {personal.availabilityBadge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            <span className="block">{personal.firstName}</span>
            <span className="block text-cyan-400">{personal.lastName}</span>
          </h1>

          <p className="text-base md:text-lg font-medium text-white/80 mb-2">
            {personal.role}
          </p>

          <p className="text-sm md:text-base text-white/60 max-w-md mb-8 leading-relaxed">
            {personal.bio}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="primary" href={personal.cvUrl} download="Yashith_Chandeepa_CV.pdf">
            <FaDownload className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button variant="secondary" onClick={handleCopyEmail}>
            <FaEnvelope className="w-4 h-4 mr-2" />
            Copy Email
          </Button>
        </div>
      </Card>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Profile Image */}
        <Card className="p-0 overflow-hidden aspect-square">
          <img
            src={personal.profileImageUrl}
            alt={`${personal.firstName} ${personal.lastName}`}
            className="w-full h-full object-cover"
          />
        </Card>

        {/* Location */}
        <Card className="p-6 flex flex-col justify-center">
          <p className="text-xs text-white/60 uppercase tracking-widest mb-2">
            Based in
          </p>
          <p className="text-lg font-semibold text-white">
            {personal.location}
          </p>
        </Card>
      </div>

      {/* Stats Card */}
      <Card className="lg:col-span-2 p-8 md:p-12">
        <div className="grid grid-cols-3 gap-8">
          <Stat
            value={stats.yearsExperience}
            label="Years Experience"
          />
          <Stat value={stats.projectsCount} label="Projects" />
          <Stat value={stats.clientsCount} label="Clients" />
        </div>
      </Card>

      {/* Current Focus */}
      <Card className="p-8 flex flex-col justify-center">
        <p className="text-xs text-white/60 uppercase tracking-widest mb-3">
          Current Focus
        </p>
        <h3 className="text-sm font-semibold text-white mb-2">
          {currentFocus.title}
        </h3>
        <p className="text-xs text-white/60 leading-relaxed">
          {currentFocus.description}
        </p>
      </Card>
    </div>
  );
}
