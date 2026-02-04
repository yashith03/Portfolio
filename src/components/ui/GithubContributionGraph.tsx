import { useEffect, useState, useRef, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchContributions, ContributionCalendar, ContributionDay as DayType } from "../../lib/useGithubContributions";

interface GithubContributionGraphProps {
  username: string;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Helper to get color
const getColor = (count: number) => {
  if (count === 0) return 'rgba(255,255,255,0.05)';
  if (count <= 3) return '#0e4429';
  if (count <= 6) return '#006d32';
  if (count <= 9) return '#26a641';
  return '#39d353';
};

// Memoized Individual Day
const ContributionDay = memo(({ day, onHover, onLeave }: { 
  day: DayType; 
  onHover: (e: React.MouseEvent, day: DayType) => void;
  onLeave: () => void;
}) => (
  <div
    onMouseMove={(e) => onHover(e, day)}
    onMouseLeave={onLeave}
    className="w-[11px] h-[11px] rounded-[2px] transition-all duration-200 hover:scale-150 hover:z-20 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] cursor-crosshair opacity-80 hover:opacity-100 bg-[var(--day-color)]"
    style={{ 
      ['--day-color' as any]: getColor(day.contributionCount),
      border: day.contributionCount === 0 ? '1px solid rgba(255,255,255,0.03)' : 'none'
    }}
  />
));

// Memoized Grid Section
const ContributionGrid = memo(({ weeks, onHover, onLeave }: { 
  weeks: any[]; 
  onHover: (e: React.MouseEvent, day: DayType) => void;
  onLeave: () => void;
}) => (
  <div className="flex gap-[4px] overflow-x-auto pb-6 custom-scrollbar">
    {weeks.map((week, weekIndex) => (
      <div key={weekIndex} className="flex flex-col gap-[4px] shrink-0">
        {week.contributionDays.map((day: DayType) => (
          <ContributionDay 
            key={day.date} 
            day={day} 
            onHover={onHover} 
            onLeave={onLeave} 
          />
        ))}
      </div>
    ))}
  </div>
));

export default function GithubContributionGraph({ username }: GithubContributionGraphProps) {
  const currentYear = new Date().getFullYear();
  const YEARS = useMemo(() => [currentYear - 2, currentYear - 1, currentYear], [currentYear]);
  
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [dataByYear, setDataByYear] = useState<Record<number, ContributionCalendar>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number; x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadAllData() {
      setLoading(true);
      setError(null);
      
      try {
        const results = await Promise.all(
          YEARS.map(year => fetchContributions(username, year))
        );

        const mapped: Record<number, ContributionCalendar> = {};
        YEARS.forEach((year, index) => {
          mapped[year] = results[index];
        });

        setDataByYear(mapped);
      } catch (err) {
        console.error("Failed to fetch GitHub contributions:", err);
        setError("Failed to load GitHub activity");
      } finally {
        setLoading(false);
      }
    }

    loadAllData();
  }, [username, YEARS]);

  const activeCalendar = dataByYear[selectedYear];

  const monthLabels = useMemo(() => {
    if (!activeCalendar) return [];
    const labels: { month: string; offset: number }[] = [];
    let lastMonth = -1;

    activeCalendar.weeks.forEach((week, index) => {
      const firstDay = new Date(week.firstDay);
      const month = firstDay.getMonth();
      if (month !== lastMonth && index > 0) {
        labels.push({ month: MONTHS[month], offset: index });
        lastMonth = month;
      }
    });
    return labels;
  }, [activeCalendar]);

  const handleHover = (e: React.MouseEvent, day: DayType) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setHoveredDay({
      date: day.date,
      count: day.contributionCount,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleLeave = () => setHoveredDay(null);

  if (loading) {
    return (
      <div className="w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="h-6 w-48 bg-white/5 rounded animate-pulse" />
          <div className="h-8 w-64 bg-white/5 rounded animate-pulse" />
        </div>
        <div className="flex gap-[4px] overflow-x-auto">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-[4px]">
              {Array.from({ length: 7 }).map((_, j) => (
                <div key={j} className="w-[11px] h-[11px] rounded-[2px] bg-white/5 animate-pulse" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !activeCalendar) {
    return (
      <div className="w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 text-center">
        <h3 className="text-white/90 mb-2 font-semibold">GitHub Activity</h3>
        <p className="text-red-400/80 text-sm">{error || "No data available"}</p>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-visible group hover:border-white/20 transition-all duration-300"
    >
      {/* Background accent glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-500 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-10 flex-wrap gap-6 relative z-10">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            GitHub Activity
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </h3>
          <AnimatePresence mode="wait">
            <motion.p 
              key={selectedYear}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-white/60 font-medium"
            >
              <span className="text-cyan-400">{activeCalendar.totalContributions.toLocaleString()}</span> contributions in {selectedYear}
            </motion.p>
          </AnimatePresence>
        </div>
        
        <div className="flex items-center gap-1.5 bg-white/5 rounded-xl border border-white/10 p-1.5 shadow-inner">
          {YEARS.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                selectedYear === year
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105"
                  : "text-white/50 hover:text-white/90 hover:bg-white/10"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Graph Area */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Month Labels */}
            <div className="flex mb-4 ml-[34px]">
              <div className="flex gap-[4px] relative" style={{ width: `${activeCalendar.weeks.length * 15}px` }}>
                {monthLabels.map((label, index) => (
                  <span
                    key={index}
                    className="absolute text-[11px] font-bold text-white/30 uppercase tracking-widest"
                    style={{ left: `${label.offset * 15}px` }}
                  >
                    {label.month}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-[14px]">
              {/* Weekday Labels */}
              <div className="flex flex-col gap-[4px] text-[10px] font-bold text-white/20 pt-[22px] uppercase tracking-tighter">
                <div className="h-[11px] flex items-center">Mon</div>
                <div className="h-[11px]" />
                <div className="h-[11px] flex items-center">Wed</div>
                <div className="h-[11px]" />
                <div className="h-[11px] flex items-center">Fri</div>
              </div>

              {/* Grid */}
              <ContributionGrid 
                weeks={activeCalendar.weeks} 
                onHover={handleHover} 
                onLeave={handleLeave} 
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer / Legend */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5 relative z-10">
        <a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link text-xs font-semibold text-white/40 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
        >
          <span>Explore Profile</span>
          <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <div className="flex items-center gap-4 text-[11px] font-bold text-white/20 uppercase tracking-widest">
          <span>Less</span>
          <div className="flex gap-[4px]">
            {['rgba(255,255,255,0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'].map(c => (
              <div key={c} className="w-[11px] h-[11px] rounded-[2px] shadow-sm" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Custom Tooltip */}
      <AnimatePresence>
        {hoveredDay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 25 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            style={{ 
              position: 'absolute',
              left: hoveredDay.x,
              top: hoveredDay.y,
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              zIndex: 100
            }}
            className="px-4 py-2.5 bg-slate-900/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl min-w-[140px]"
          >
            <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">
              {new Date(hoveredDay.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="text-sm text-white font-bold">
              {hoveredDay.count} {hoveredDay.count === 1 ? 'contribution' : 'contributions'}
            </div>
            {/* Side Arrow */}
            <div className="absolute top-1/2 -left-[6px] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-slate-900/95" />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
}

