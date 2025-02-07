import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

type IconComponent = LucideIcon | IconType;

interface StatusBadgeProps {
  Icon: IconComponent;
  text: string;
  href?: string;
  target?: string;
}

export function StatusBadge({ Icon, text, href, target }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors w-full justify-center">
      <Icon size={18} />
      {href ? (
        <a href={href} target={target}>{text}</a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}
