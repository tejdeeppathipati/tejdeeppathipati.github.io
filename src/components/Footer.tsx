import React from 'react';
import { Link } from 'react-router-dom';
import { SocialRow } from './SocialRow';
import siteData from '@/content/site.json';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-card border-t border-white/10 mt-24">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {siteData.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {siteData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-medium text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus-ring rounded px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Copyright */}
          <div className="text-center md:text-right space-y-4">
            <SocialRow />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};