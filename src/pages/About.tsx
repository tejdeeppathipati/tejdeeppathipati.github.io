import React from 'react';
import { SocialRow } from '@/components/SocialRow';

const About: React.FC = () => {
  return (
    <main className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="card-gradient p-8 md:p-12 mb-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Hello! I'm <strong className="text-primary">Tejdeep Pathipati</strong>, a junior majoring in Computer Science at George Mason University. I started coding in 2022 and love figuring out how things work and building from scratch. I'm especially interested in AI and how it can solve real problems—my goal is to become an AI Engineer.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">I'm currently focused on:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>AI/ML Model Development</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Cloud Computing & Deployment (AWS, Azure)</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Problem Solving & Data Structures</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span><strong>Full-Stack Web Development (React, Node.js)</strong></span>
                    </li>
                  </ul>
                </div>

                <p>
                  When I'm not on my laptop, you'll find me at the gym, playing cricket, or swimming.
                </p>
              </div>
            </div>

            {/* Social CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Let's connect and explore opportunities together
              </p>
              <SocialRow />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;