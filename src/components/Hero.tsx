import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DotBackdrop } from './DotBackdrop';
import siteData from '@/content/site.json';

// Simple typing effect implementation since react-typed wasn't available
const TypingEffect: React.FC<{ strings: string[]; className?: string }> = ({ strings, className }) => {
  const [currentStringIndex, setCurrentStringIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = strings[currentStringIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentStringIndex, isDeleting, strings]);

  return (
    <span className={className}>
      {currentText}
      <span className="typed-cursor">|</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotBackdrop />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <Badge 
              variant="secondary" 
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border-white/20 text-foreground hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <span className="text-sm font-medium tracking-wide">
                {siteData.tagline}
              </span>
            </Badge>

            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {siteData.name}
                </span>
              </h1>
            </div>

            {/* Typing Effect */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground">
                Aspiring{' '}
                <TypingEffect 
                  strings={siteData.typedRoles}
                  className="text-primary font-semibold"
                />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={siteData.cta.primary.href}>
                <Button className="btn-hero-primary">
                  {siteData.cta.primary.label}
                </Button>
              </Link>
              <Link to={siteData.cta.secondary.href}>
                <Button className="btn-hero-secondary">
                  {siteData.cta.secondary.label}
                </Button>
              </Link>
              {siteData.cta.tertiary.external ? (
                <a href={siteData.cta.tertiary.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                    {siteData.cta.tertiary.label}
                  </Button>
                </a>
              ) : (
                <Link to={siteData.cta.tertiary.href}>
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                    {siteData.cta.tertiary.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="hidden lg:flex justify-center items-center relative">
            {siteData.profileImage ? (
              <div className="relative">
                <img
                  src={siteData.profileImage}
                  alt={siteData.profileImageAlt}
                  className="w-80 h-80 object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl animate-float"
                  onError={(e) => {
                    // Fallback to dot backdrop if image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-2xl"></div>
              </div>
            ) : (
              <div className="h-96 flex items-center justify-center">
                {/* Fallback space for dot backdrop */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};