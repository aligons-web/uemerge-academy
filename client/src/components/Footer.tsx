import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiTiktok, SiYoutube } from "react-icons/si";
import logoImage from "@assets/logoonweb_1766601258373.png";

const socialLinks = [
  { icon: SiFacebook, href: "https://www.facebook.com/alexander.ligons", label: "Facebook" },
  { icon: SiInstagram, href: "https://www.instagram.com/alexanderligons/", label: "Instagram" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/alexanderligons/", label: "LinkedIn" },
  { icon: SiX, href: "https://x.com/atligons", label: "X" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@alexanderligons", label: "TikTok" },
  { icon: SiYoutube, href: "https://www.youtube.com/@alexanderligons", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={logoImage} 
              alt="U eMerge Academy" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm text-center md:text-left">
              A Purpose-Driven Learning Academy
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium">Connect With Us</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                  data-testid={`link-footer-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} U eMerge Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
