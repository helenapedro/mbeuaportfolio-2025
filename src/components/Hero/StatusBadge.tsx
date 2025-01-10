import { LucideIcon } from 'lucide-react';

interface StatusBadgeProps {
  Icon: LucideIcon;
  text: string;
}

export function StatusBadge({ Icon, text }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors w-full justify-center">
      <Icon size={18} />
      <span>{text}</span>
    </div>
  );
}