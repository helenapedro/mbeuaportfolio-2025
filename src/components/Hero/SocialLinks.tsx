import * as icon from 'react-icons/si';
import { IconType } from 'react-icons';

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: icon.SiGithub, href: 'https://github.com/helenapedro', label: 'GitHub' },
  { icon: icon.SiLinkedin, href: 'https://www.linkedin.com/in/helena-mbeua-pedro/', label: 'LinkedIn' },
  { icon: icon.SiWhatsapp, href: 'https://wa.me/+244936457069', label: 'Whatsapp' },
  { icon: icon.SiFiles, href: 'https://hmpedropublicfiles.s3.us-east-2.amazonaws.com/Resume_HMPedro.pdf', label: 'Resume' },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}
