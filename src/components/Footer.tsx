import { LINKS } from "@/config";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Email",
      url: "mailto:ouaretlamia04@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/lamia-ouaret-2178032a9",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Ouaret-Lamia",
      icon: <Github className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-10 pt-12 md:pt-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <img src="/logoWhite.png" alt="Ouaret Lamia" className="h-9" />
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-md">
                A passionate web developer focused on creating innovative web
                solutions and delivering exceptional user experiences through
                modern technologies.
              </p>
            </div>


            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-primary-foreground/50">
              <p>Ready to start a project?</p>
              <p>Let's discuss how I can help bring your ideas to life.</p>
              <a
                href="mailto:ouaretlamia04@gmail.com"
                className="inline-flex items-center text-primary-foreground hover:text-secondary transition-colors duration-300 mt-2"
              >
                <Mail className="w-4 h-4 mr-2" />
                ouaretlamia04@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-2 flex justify-center items-center text-sm text-primary-foreground/50 md:space-y-0">
          © 2025 Lamia Ouaret. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
