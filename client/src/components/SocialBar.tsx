import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiTiktok, SiYoutube } from "react-icons/si";

const socialLinks = [
  { icon: SiFacebook, href: "https://www.facebook.com/alexander.ligons", label: "Facebook" },
  { icon: SiInstagram, href: "https://www.instagram.com/alexanderligons/", label: "Instagram" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/alexanderligons/", label: "LinkedIn" },
  { icon: SiX, href: "https://x.com/atligons", label: "X" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@alexanderligons", label: "TikTok" },
  { icon: SiYoutube, href: "https://www.youtube.com/@alexanderligons", label: "YouTube" },
];

export function SocialBar() {
  return (
    <div className="bg-primary py-2 px-4" data-testid="social-bar">
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground opacity-80 hover:opacity-100 transition-opacity"
            aria-label={social.label}
            data-testid={`link-social-${social.label.toLowerCase()}`}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
