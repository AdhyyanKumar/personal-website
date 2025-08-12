'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink, Calendar, Tag, Search, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'LaunchMate – AI Startup Assistant',
    description: 'Comprehensive AI assistant for startups with pitch generation, market analysis, and collaboration tools. Built with TypeScript and Gemini API.',
    image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['TypeScript', 'Next.js', 'Gemini API', 'MongoDB', 'Vercel'],
    category: 'AI/ML',
    year: '2025',
    status: 'Live',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Blood Bank Prediction',
    description: 'Machine learning model using Linear Regression to predict monthly blood supply requirements in India with 95% accuracy.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    category: 'AI/ML',
    year: '2023',
    status: 'Completed',
    featured: true,
  },
];

const categories = ['All', 'AI/ML', 'Full Stack', 'Frontend'];
const techStack = ['TypeScript', 'React', 'Next.js', 'Python', 'Node.js', 'MongoDB', 'TensorFlow'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTech = selectedTech === 'All' || project.tech.includes(selectedTech);
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesTech && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-fg/60 text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my skills in full-stack development, 
            machine learning, and creating exceptional user experiences.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-card p-6 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fg/40" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-muted/30 border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-fg placeholder-fg/40"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Category Filter */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <Filter size={18} className="text-fg/60" />
                  <span className="font-medium text-fg/80">Category</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'bg-muted/30 text-fg/80 hover:bg-muted/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tech Filter */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <Tag size={18} className="text-fg/60" />
                  <span className="font-medium text-fg/80">Technology</span>
                </div>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full px-4 py-2 bg-muted/30 border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-fg"
                >
                  <option value="All">All Technologies</option>
                  {techStack.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover:bg-muted/40 transition-all duration-300 hover:scale-105 hover:glow-effect"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded">
                      Featured
                    </span>
                  )}
                  <span className={`px-2 py-1 ${getStatusColor(project.status)} text-white text-xs font-medium rounded`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-muted/90 backdrop-blur-sm text-fg px-2 py-1 rounded text-xs font-medium">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar size={14} className="text-fg/60" />
                  <span className="text-sm text-fg/60">{project.category}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-fg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-fg/80 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-muted/30 text-fg/60 rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-primary hover:text-accent transition-colors group/btn">
                    <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm font-medium">View Project</span>
                  </button>
                  <button className="flex items-center space-x-2 text-fg/60 hover:text-fg transition-colors group/btn">
                    <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-fg/60">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}