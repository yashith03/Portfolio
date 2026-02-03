import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { usePortfolioData } from '../../lib/usePortfolioData';
import { Card } from '../ui/Card';

interface SocialItem {
  data: any;
  Icon: IconType;
  color: string;
  hoverColor: string;
  aria: string;
}

export function SocialLinks() {
  const data = usePortfolioData();

  const socialItems: SocialItem[] = [
    {
      data: data.social.github,
      Icon: FaGithub,
      color: 'text-white/80',
      hoverColor: 'hover:text-cyan-400',
      aria: 'GitHub Profile'
    },
    {
      data: data.social.linkedin,
      Icon: FaLinkedin,
      color: 'text-blue-500',
      hoverColor: 'hover:text-blue-400',
      aria: 'LinkedIn Profile'
    },
    {
      data: data.social.facebook,
      Icon: FaFacebook,
      color: 'text-blue-600',
      hoverColor: 'hover:text-blue-500',
      aria: 'Facebook Profile'
    },
    {
      data: data.social.instagram,
      Icon: FaInstagram,
      color: 'text-pink-500',
      hoverColor: 'hover:text-pink-400',
      aria: 'Instagram Profile'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {socialItems.map((item, idx) => {
        if (!item.data) return null;
        
        const { Icon } = item;
        
        return (
          <a
            key={idx}
            href={item.data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="p-5 flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4 min-w-0">
                <div className={`text-3xl ${item.color} shrink-0`}>
                  <Icon />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">
                    {item.data.label}
                  </p>
                  <p className="text-sm font-bold text-white whitespace-nowrap overflow-visible">
                    {item.data.handle}
                  </p>
                </div>
              </div>
              <div
                className={`ml-2 text-white/20 group-hover:text-white transition-colors shrink-0`}
                aria-label={item.aria}
              >
                <Icon className="w-4 h-4" />
              </div>
            </Card>
          </a>
        );
      })}
    </div>
  );
}
