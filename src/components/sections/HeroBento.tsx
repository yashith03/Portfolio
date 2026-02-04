import { useState } from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';

export function HeroBento() {
  const data = usePortfolioData();
  const { personal, currentFocus } = data;
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setShowToast(true);
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

      {/* Current Focus - Spanning full width for balance */}
      <Card className="lg:col-span-3 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-xs text-white/60 uppercase tracking-widest mb-3">
            Current Focus
          </p>
          <h3 className="text-xl font-bold text-white mb-2">
            {currentFocus.title}
          </h3>
          <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
            {currentFocus.description}
          </p>
        </div>
        <div className="shrink-0">
          <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Active Roadmap</span>
          </div>
        </div>
      </Card>

      <Toast 
        message="Email copied to clipboard!" 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
}
