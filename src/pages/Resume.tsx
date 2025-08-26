import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, MapPin, Calendar } from 'lucide-react';
import resumeData from '@/content/resume.json';
import siteData from '@/content/site.json';

const Resume: React.FC = () => {
  return (
    <main className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Resume
              </h1>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </div>
            <Button className="btn-hero-primary mt-6 md:mt-0" asChild>
              <a href={siteData.resumePdf} download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="space-y-16">
            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-8">Experience</h2>
              <div className="space-y-8">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="card-gradient p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {job.title}
                        </h3>
                        <p className="text-lg text-primary font-medium mb-2">
                          {job.company}
                        </p>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground bg-secondary/50 px-3 py-1 rounded-lg">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span className="text-sm font-medium">
                          {job.start} - {job.end}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-3 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-8">Education</h2>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="card-gradient p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-primary font-medium mb-2">
                          {edu.school}
                        </p>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground bg-secondary/50 px-3 py-1 rounded-lg mt-4 md:mt-0">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span className="text-sm font-medium">{edu.dates}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-8">Skills</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category} className="card-gradient p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-white/20 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;