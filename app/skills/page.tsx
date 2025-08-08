'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Cloud, Brain, Monitor } from 'lucide-react';

const skillCategories = {
  'Programming Languages': {
    icon: Code,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20',
    skills: [
      { name: 'Python', level: 90, experience: '3+ years' },
      { name: 'JavaScript', level: 85, experience: '2+ years' },
      { name: 'TypeScript', level: 80, experience: '1+ year' },
      { name: 'Java', level: 85, experience: '2+ years' },
      { name: 'C/C++', level: 75, experience: '2+ years' },
      { name: 'C#', level: 70, experience: '1+ year' },
      { name: 'SQL', level: 80, experience: '2+ years' },
      { name: 'HTML/CSS', level: 90, experience: '3+ years' },
    ],
  },
  'Frameworks & Libraries': {
    icon: Monitor,
    color: 'text-green-400',
    bgColor: 'bg-green-400/20',
    skills: [
      { name: 'React', level: 85, experience: '2+ years' },
      { name: 'Next.js', level: 80, experience: '1+ year' },
      { name: 'Node.js', level: 80, experience: '2+ years' },
      { name: 'Flask', level: 75, experience: '1+ year' },
      { name: 'TensorFlow', level: 70, experience: '1+ year' },
      { name: 'Tailwind CSS', level: 90, experience: '2+ years' },
    ],
  },
  'Databases & Cloud': {
    icon: Database,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/20',
    skills: [
      { name: 'MongoDB', level: 80, experience: '1+ year' },
      { name: 'MySQL', level: 85, experience: '2+ years' },
      { name: 'Microsoft SQL Server', level: 75, experience: '1+ year' },
      { name: 'Firebase', level: 70, experience: '1+ year' },
      { name: 'Vercel', level: 80, experience: '1+ year' },
    ],
  },
  'Tools & Technologies': {
    icon: Cloud,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/20',
    skills: [
      { name: 'Git', level: 85, experience: '2+ years' },
      { name: 'Docker', level: 70, experience: '1+ year' },
      { name: 'Unity', level: 75, experience: '2+ years' },
      { name: 'Blender', level: 80, experience: '2+ years' },
      { name: 'Autodesk Fusion', level: 75, experience: '1+ year' },
    ],
  },
  'Design & Creative': {
    icon: Palette,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/20',
    skills: [
      { name: 'Adobe Premiere Pro', level: 90, experience: '2+ years' },
      { name: 'Adobe Photoshop', level: 85, experience: '3+ years' },
      { name: 'UI/UX Design', level: 80, experience: '2+ years' },
      { name: 'Motion Graphics', level: 75, experience: '1+ year' },
    ],
  },
  'AI & Machine Learning': {
    icon: Brain,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/20',
    skills: [
      { name: 'Machine Learning', level: 75, experience: '1+ year' },
      { name: 'Data Analysis', level: 80, experience: '1+ year' },
      { name: 'Gemini API', level: 70, experience: '6+ months' },
      { name: 'Scikit-learn', level: 70, experience: '1+ year' },
    ],
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Programming Languages');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = Object.keys(skillCategories);
  const currentCategory = skillCategories[selectedCategory as keyof typeof skillCategories];

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
            <span className="gradient-text">Skills & Technologies</span>
          </h1>
          <p className="text-fg/60 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, tools, and technologies I work with. 
            From programming languages to creative software.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const categoryData = skillCategories[category as keyof typeof skillCategories];
              const Icon = categoryData.icon;
              const isSelected = selectedCategory === category;
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isSelected
                      ? `${categoryData.bgColor} ${categoryData.color} scale-105`
                      : 'glass-card hover:bg-muted/40'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8"
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className={`p-3 ${currentCategory.bgColor} rounded-lg`}>
              <currentCategory.icon className={currentCategory.color} size={24} />
            </div>
            <h2 className="text-2xl font-bold text-fg">{selectedCategory}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-3"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-fg">{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-fg/60">{skill.experience}</span>
                    <span className={`text-sm font-bold ${currentCategory.color}`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        skill.level >= 80 
                          ? 'from-green-400 to-green-500' 
                          : skill.level >= 60 
                          ? 'from-yellow-400 to-yellow-500'
                          : 'from-orange-400 to-orange-500'
                      } ${
                        hoveredSkill === skill.name ? 'shadow-lg scale-y-125' : ''
                      }`}
                      style={{
                        boxShadow: hoveredSkill === skill.name 
                          ? `0 0 20px ${skill.level >= 80 ? '#22c55e' : skill.level >= 60 ? '#eab308' : '#f97316'}40`
                          : 'none'
                      }}
                    />
                  </div>
                  
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-muted/90 backdrop-blur-sm text-fg px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap"
                    >
                      {skill.level}% Proficiency
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            { 
              label: 'Programming Languages', 
              value: '8+', 
              description: 'Languages mastered',
              icon: Code,
              color: 'text-blue-400'
            },
            { 
              label: 'Frameworks & Tools', 
              value: '15+', 
              description: 'Technologies used',
              icon: Monitor,
              color: 'text-green-400'
            },
            { 
              label: 'Years of Experience', 
              value: '3+', 
              description: 'In software development',
              icon: Brain,
              color: 'text-purple-400'
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <Icon className={stat.color} size={24} />
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-fg font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-fg/60">{stat.description}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-fg mb-4 text-center">Proficiency Scale</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
              <span className="text-fg/80 text-sm">Expert (80%+)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" />
              <span className="text-fg/80 text-sm">Proficient (60-79%)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
              <span className="text-fg/80 text-sm">Learning (40-59%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}