import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { IconType } from 'react-icons';

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: SiGithub, href: 'https://github.com/helenapedro', label: 'GitHub' },
  { icon: SiLinkedin, href: 'https://www.linkedin.com/in/helena-mbeua-pedro/', label: 'LinkedIn' },
  { icon: HiOutlineMail, href: 'mailto:mbeua94@gmail.com', label: 'Email' },
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
