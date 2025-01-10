import { Github, Linkedin, Mail } from 'lucide-react';


interface SocialLink {
  icon: typeof Github;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Github, href: 'https://github.com/helenapedro', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/helena-mbeua-pedro/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mbeua94@gmail.com', label: 'Email' },
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