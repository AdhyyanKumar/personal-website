'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/adhyyankumar',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: 'https://linkedin.com/in/adhyyan-kumar',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:adhyyan@gmail.com',
      icon: Mail,
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-muted/20 border-t border-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Adhyyan Kumar</h3>
            <p className="text-fg/80 text-sm leading-relaxed">
              Computer Science & Mathematics Major at University of Maryland. 
              Building fast, delightful software with clean UX and solid engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-fg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/" className="text-fg/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-fg/80 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="text-fg/80 hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="/skills" className="text-fg/80 hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/contact" className="text-fg/80 hover:text-primary transition-colors">
                Contact
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fg/80 hover:text-primary transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-fg">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-fg/80">
                <MapPin size={16} />
                <span>College Park, MD (currently India)</span>
              </div>
              <div className="flex items-center space-x-2 text-fg/80">
                <Phone size={16} />
                <span>(240) 706-3684</span>
              </div>
              <div className="flex items-center space-x-2 text-fg/80">
                <Mail size={16} />
                <a href="mailto:adhyyan@gmail.com" className="hover:text-primary transition-colors">
                  adhyyan@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/30 hover:bg-primary/20 hover:text-primary transition-all duration-200 group"
                    aria-label={link.label}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-muted/40 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-sm text-fg/60">
            © {currentYear} Adhyyan Kumar. All rights reserved.
          </p>
          <p className="text-sm text-fg/60">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}