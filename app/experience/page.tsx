'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Video Editor',
    company: 'Dr. Sonu Singh (110K+ YouTube)',
    type: 'Hybrid',
    period: 'Feb 2024 – Present',
    location: 'Remote',
    description: 'Creating engaging video content for a growing YouTube channel focused on educational content.',
    responsibilities: [
      'Edited 100+ videos in Adobe Premiere Pro with focus on viewer retention and engagement',
      'Built custom animations, smooth transitions, and motion graphics to enhance storytelling',
      'Managed consistent upload schedule and optimized SEO through strategic thumbnails, titles, and descriptions',
      'Collaborated with content creator to maintain brand consistency and voice',
    ],
    skills: ['Adobe Premiere Pro', 'Motion Graphics', 'SEO Optimization', 'Content Strategy'],
    achievements: ['Improved average view duration by 25%', 'Contributed to channel growth of 20K+ subscribers'],
  },
  {
    id: 2,
    role: 'Work Experience Program',
    company: 'Adobe Inc.',
    type: 'Remote',
    period: 'Sep – Dec 2023',
    location: 'Remote',
    description: 'Gained hands-on experience with Adobe\'s generative AI technologies in creative workflows.',
    responsibilities: [
      'Worked extensively with generative AI tools integrated within Adobe Express platform',
      'Created diverse social media posters and marketing materials using only AI-powered design tools',
      'Developed proficiency in prompt engineering and AI-assisted creative workflows',
      'Collaborated with team to explore innovative applications of AI in creative processes',
    ],
    skills: ['Adobe Express', 'Generative AI', 'Prompt Engineering', 'Creative Strategy'],
    achievements: ['Completed 50+ AI-generated design projects', 'Mastered advanced prompt strategies'],
  },
  {
    id: 3,
    role: 'IT Software Intern',
    company: 'Triton Software',
    type: 'On-site',
    period: 'June – Aug 2023',
    location: 'India',
    description: 'Full-stack development intern working on enterprise software solutions and database integration.',
    responsibilities: [
      'Built responsive front-end components using JavaScript, HTML, and CSS to improve user interface',
      'Integrated Excel-to-database workflows with Microsoft SQL Server for data management',
      'Implemented secure authentication screens with encrypted password storage in SQL databases',
      'Collaborated with senior developers on enterprise software architecture decisions',
    ],
    skills: ['JavaScript', 'HTML/CSS', 'Microsoft SQL Server', 'Database Design', 'Authentication Systems'],
    achievements: ['Improved UI loading speed by 40%', 'Successfully deployed 3 major features'],
  },
];

const education = {
  degree: 'Bachelor of Science in Computer Science & Mathematics',
  school: 'University of Maryland, College Park',
  period: 'Aug 2024 – May 2027',
  location: 'College Park, MD',
  coursework: [
    'Object-Oriented Programming II',
    'Computer Systems Architecture',
    'Data Structures & Algorithms',
    'Linear Algebra & Calculus',
    'Discrete Mathematics',
    'Software Engineering Principles',
  ],
  gpa: 'Current GPA: 3.8/4.0',
};

export default function Experience() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-fg/60 text-lg max-w-3xl mx-auto leading-relaxed">
            My journey in software development, from internships to freelance work, 
            building skills across the full development stack.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Briefcase className="text-primary" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-fg">Education</h2>
          </div>

          <div className="glass-card p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-fg mb-2">{education.degree}</h3>
                <div className="flex items-center space-x-4 text-fg/60 mb-4">
                  <span className="font-medium">{education.school}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{education.period}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-primary font-semibold">{education.gpa}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-fg mb-3">Relevant Coursework:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {education.coursework.map((course, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-fg/80 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-muted/30 -z-10" />
              )}
              
              <div className="flex space-x-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 mt-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border-4 border-bg">
                    <Briefcase className="text-primary" size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-8 hover:bg-muted/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-fg mb-1">{experience.role}</h3>
                      <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                        <span>{experience.company}</span>
                        <ExternalLink size={16} className="opacity-60" />
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-1">
                      <div className="flex items-center space-x-2 text-fg/60">
                        <Calendar size={16} />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-fg/60">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-fg/80 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="space-y-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-fg mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-fg/80 text-sm leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-fg mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-muted/30 text-fg/80 rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {experience.achievements && (
                      <div>
                        <h4 className="font-semibold text-fg mb-3">Key Achievements:</h4>
                        <div className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-primary text-sm font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}