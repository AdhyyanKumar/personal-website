'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink, Code, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1] as const,
    },
  },
};

const featuredProjects = [
  {
    id: 1,
    title: 'LaunchMate – AI Startup Assistant',
    description: 'AI assistant with pitch generator and live market analysis tools. Full-stack functionality deployed on Vercel.',
    image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['TypeScript', 'Gemini API', 'MongoDB', 'Vercel'],
    year: '2025',
    highlights: ['AI assistant', 'Pitch generator', 'Market analysis', 'Team collaboration'],
  },
  {
    id: 2,
    title: 'AI Blood Bank Prediction',
    description: 'Linear Regression model predicting monthly supply requirements in India with ~95% accuracy.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'TensorFlow', 'Data Analysis'],
    year: '2023',
    highlights: ['95% accuracy', 'Linear regression', 'Public dataset', 'Government resources'],
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-full bg-muted/30 backdrop-blur-sm border border-muted/40 flex items-center justify-center">
                <Code size={48} className="text-primary" />
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="block text-fg">Hi, I'm</span>
              <span className="block gradient-text">Adhyyan Kumar</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl sm:text-2xl text-fg/80 mb-4 max-w-3xl mx-auto leading-relaxed">
              Computer Science & Mathematics Major @ University of Maryland
            </p>
            <p className="text-lg text-fg/60 max-w-2xl mx-auto leading-relaxed">
              I build fast, delightful software with clean UX and solid engineering. 
              Into full‑stack, ML, and polished UI.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/projects"
              className="group flex items-center space-x-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-3 glass-card hover:bg-muted/40 transition-all duration-200 hover:scale-105"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            
            <Link
              href="/contact"
              className="flex items-center space-x-2 px-8 py-3 border border-primary/50 text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <a
              href="https://github.com/adhyyankumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg/60 hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/adhyyan-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg/60 hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adhyyan@gmail.com"
              className="text-fg/60 hover:text-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-fg/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce-gentle" />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-fg/60 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              AI/ML, and clean user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group glass-card p-6 hover:bg-muted/40 transition-all duration-300 hover:scale-105 hover:glow-effect"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-2 py-1 rounded text-sm font-medium">
                    {project.year}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-fg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-fg/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center space-x-1 text-sm text-fg/60"
                    >
                      <Sparkles size={14} className="text-accent" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </button>
                  <button className="flex items-center space-x-2 text-fg/60 hover:text-fg transition-colors">
                    <Github size={16} />
                    <span>Source Code</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 glass-card hover:bg-muted/40 transition-all duration-200 hover:scale-105"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Years of Experience', value: '2+', description: 'Building software solutions' },
              { label: 'Projects Completed', value: '15+', description: 'From concept to deployment' },
              { label: 'Technologies', value: '10+', description: 'Languages & frameworks' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-fg font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-fg/60">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}