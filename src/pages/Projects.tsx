import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import projectsData from '@/content/projects.json';

const Projects: React.FC = () => {
  return (
    <main className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Projects
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills in AI/ML, software development, and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="card-gradient p-6 md:p-8 group hover:scale-[1.02] transition-transform duration-300">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                  <div className="text-4xl text-primary/40">
                    {project.title === 'Chest Cancer Classification' ? '🧬' : '🔍'}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 hover:border-primary/50" asChild>
                      <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 hover:bg-primary/10 hover:text-primary" asChild>
                      <a href={project.links.readMore}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <Button className="btn-hero-primary" asChild>
              <a href="https://github.com/tejdeeppathipati" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Visit GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;