import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Monitor, 
  Server, 
  Database, 
  Brain, 
  MessageSquare, 
  Cloud,
  Code,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Technology = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      icon: Monitor,
      title: 'Frontend',
      technologies: ['React (Web)', 'Flutter (Mobile)'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Modern, responsive interfaces that work across all devices',
      features: ['Responsive Design', 'PWA Support', 'Offline Capability']
    },
    {
      icon: Server,
      title: 'Backend',
      technologies: ['Node.js (Express)', 'Django REST'],
      color: 'from-green-500 to-emerald-500',
      description: 'Scalable APIs and microservices architecture',
      features: ['RESTful APIs', 'Microservices', 'Auto-scaling']
    },
    {
      icon: Database,
      title: 'Database',
      technologies: ['PostgreSQL', 'Redis', 'ElasticSearch'],
      color: 'from-purple-500 to-pink-500',
      description: 'Robust data storage with caching and search capabilities',
      features: ['ACID Compliance', 'Real-time Sync', 'Full-text Search']
    },
    {
      icon: Brain,
      title: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'Prophet'],
      color: 'from-orange-500 to-red-500',
      description: 'Advanced machine learning for demand forecasting',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Auto-learning']
    },
    {
      icon: MessageSquare,
      title: 'Integrations',
      technologies: ['WhatsApp Business API', 'SMS Alerts', 'QR/Barcode Scanners'],
      color: 'from-indigo-500 to-purple-500',
      description: 'Seamless communication and data capture tools',
      features: ['Multi-channel', 'Real-time Alerts', 'Easy Setup']
    },
    {
      icon: Cloud,
      title: 'Deployment',
      technologies: ['Docker', 'Kubernetes', 'AWS/DigitalOcean'],
      color: 'from-teal-500 to-blue-500',
      description: 'Cloud-native deployment with auto-scaling',
      features: ['99.9% Uptime', 'Global CDN', 'Auto-scaling']
    },
  ];

  const architecturePrinciples = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed with caching, CDN, and efficient algorithms',
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, secure APIs, and compliance standards',
      color: 'from-secondary-500 to-accent-500'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Cloud-native architecture that scales with your business',
      color: 'from-accent-500 to-primary-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="technology" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-100"
          >
            Technology Stack
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Modern, scalable architecture built for enterprise-grade performance and reliability
          </motion.p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="enhanced-card h-full">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    className="text-xl font-semibold text-white mb-4"
                  >
                    {category.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                    className="text-white/70 mb-6 leading-relaxed"
                  >
                    {category.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 1.1 }}
                    className="space-y-2 mb-4"
                  >
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 + 1.3 + techIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`} />
                        <span className="text-white/80 text-sm">{tech}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 1.5 }}
                    className="space-y-1"
                  >
                    {category.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 + 1.7 + featureIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-3 h-3 text-secondary-400 flex-shrink-0" />
                        <span className="text-white/60 text-xs">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-2xl origin-left`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Architecture Principles
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Built with scalability, security, and performance in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {architecturePrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-2">{principle.title}</h4>
                  <p className="text-white/70">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="enhanced-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Ready to See Results?
            </h3>
            <p className="text-white/70 mb-6">
              Discover the measurable impact Inventura can have on your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
              onClick={() => {
                const resultsSection = document.querySelector('#results');
                if (resultsSection) {
                  resultsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>View Results</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
