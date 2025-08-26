import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siteData from '@/content/site.json';

export const SocialRow: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: siteData.social.linkedin,
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: siteData.social.github,
      icon: Github,
    },
    {
      name: 'Twitter',
      url: siteData.social.x,
      icon: Twitter,
    },
  ];

  return (
    <div className="flex items-center justify-center space-x-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-ring"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};