'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('adhyyan@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adhyyan@gmail.com',
      action: () => window.open('mailto:adhyyan@gmail.com'),
      color: 'text-blue-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(240) 706-3684',
      action: () => window.open('tel:+12407063684'),
      color: 'text-green-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'College Park, MD (currently India)',
      action: null,
      color: 'text-orange-400',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: 'adhyyankumar',
      url: 'https://github.com/adhyyankumar',
      color: 'text-gray-400 hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'adhyyan-kumar',
      url: 'https://linkedin.com/in/adhyyan-kumar',
      color: 'text-blue-400 hover:text-blue-300',
    },
  ];

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
            <span className="gradient-text">Let's Connect</span>
          </h1>
          <p className="text-fg/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you. Drop me a message and I'll get back to you soon!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-fg mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-fg/80 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/30 border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-fg placeholder-fg/40"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-fg/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/30 border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-fg placeholder-fg/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-fg/80 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/30 border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-fg placeholder-fg/40"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-fg/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/30 border border-muted/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-fg placeholder-fg/40 resize-none"
                    placeholder="Tell me about your project, idea, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-muted/30 text-fg/50 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary/90 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-fg/30 border-t-fg/80 rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400 text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400 text-sm"
                  >
                    Something went wrong. Please try again or contact me directly via email.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-fg mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center space-x-4 group">
                      <div className={`p-3 bg-muted/30 rounded-lg ${item.color}`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-fg/60">{item.label}</div>
                        <div className="text-fg font-medium">{item.value}</div>
                      </div>
                      {item.label === 'Email' && (
                        <button
                          onClick={copyEmail}
                          className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                          title="Copy email"
                        >
                          {copiedEmail ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} className="text-fg/60" />
                          )}
                        </button>
                      )}
                      {item.action && (
                        <button
                          onClick={item.action}
                          className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ExternalLink size={16} className="text-fg/60" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-fg mb-6">Connect Online</h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-200 group"
                    >
                      <Icon size={24} className={social.color} />
                      <div className="flex-1">
                        <div className="text-fg font-medium group-hover:text-primary transition-colors">
                          {social.label}
                        </div>
                        <div className="text-sm text-fg/60">@{social.username}</div>
                      </div>
                      <ExternalLink size={16} className="text-fg/40 group-hover:text-fg/80 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-fg mb-6">Quick Info</h2>
              
              <div className="space-y-4 text-fg/80">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="font-medium text-primary">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Contact:</span>
                  <span className="font-medium">Email or LinkedIn</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Zone:</span>
                  <span className="font-medium">EST (GMT-5)</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="font-medium text-green-400">Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}