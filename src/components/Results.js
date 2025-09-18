import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Clock, 
  TrendingUp, 
  Lightbulb, 
  Leaf, 
  Users, 
  DollarSign,
  Target,
  Zap,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Results = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counters, setCounters] = useState({
    timeSaved: 0,
    stockReduction: 0,
    wastageReduction: 0,
  });

  const results = [
    {
      icon: Clock,
      number: 'Automated',
      label: 'Stock Updates',
      description: 'Streamlined daily inventory management',
      color: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: TrendingUp,
      number: 'Improved',
      label: 'Accuracy',
      description: 'Better stock tracking and management',
      color: 'from-green-500 to-emerald-500',
      delay: 0.1,
    },
    {
      icon: Lightbulb,
      number: 'Smart',
      label: 'Purchasing',
      description: 'AI-powered insights for better decisions',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.2,
    },
    {
      icon: Leaf,
      number: 'Reduced',
      label: 'Wastage',
      description: 'Better management of perishable goods',
      color: 'from-green-400 to-teal-500',
      delay: 0.3,
    },
    {
      icon: Users,
      number: 'Enhanced',
      label: 'Collaboration',
      description: 'Community-driven stock sharing',
      color: 'from-purple-500 to-pink-500',
      delay: 0.4,
    },
    {
      icon: DollarSign,
      number: 'Optimized',
      label: 'Profits',
      description: 'Better inventory management practices',
      color: 'from-emerald-500 to-green-500',
      delay: 0.5,
    },
  ];

  const impactAreas = [
    {
      icon: Target,
      title: 'Operational Excellence',
      description: 'Streamlined processes that reduce errors and save time',
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Zap,
      title: 'Smart Decision Making',
      description: 'AI-powered insights that guide better business choices',
      color: 'from-secondary-500 to-accent-500'
    },
    {
      icon: Award,
      title: 'Sustainable Growth',
      description: 'Long-term profitability through efficient resource management',
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

  // Counter animation effect
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setCounters({
          timeSaved: 70,
          stockReduction: 80,
          wastageReduction: 30,
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="results" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
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
            Expected Results & Benefits
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Measurable impact on vendor operations and business growth
          </motion.p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={result.label}
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
                    transition={{ delay: result.delay + 0.5, type: 'spring', stiffness: 200 }}
                    className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: result.delay + 0.7, type: 'spring', stiffness: 200 }}
                    className="text-4xl font-bold gradient-text mb-2"
                  >
                    {result.number}
                  </motion.div>

                  {/* Label */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: result.delay + 0.9 }}
                    className="text-xl font-semibold text-white mb-2"
                  >
                    {result.label}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: result.delay + 1.1 }}
                    className="text-white/70 leading-relaxed"
                  >
                    {result.description}
                  </motion.p>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${result.color} rounded-b-2xl origin-left`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl p-8 md:p-12 border border-white/10 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Transformative Impact
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Inventura doesn't just track inventory - it transforms how vendors do business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-2">{area.title}</h4>
                  <p className="text-white/70">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ROI Calculator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center"
        >
          <div className="enhanced-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              ROI Calculator
            </h3>
            <p className="text-white/70 text-lg mb-6">
              For small and mid-scale vendors looking to optimize their operations
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">Significant</div>
                <div className="text-white/70">Monthly Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-2">Substantial</div>
                <div className="text-white/70">Annual Benefits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">High</div>
                <div className="text-white/70">Return on Investment</div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
              onClick={() => {
                const roadmapSection = document.querySelector('#roadmap');
                if (roadmapSection) {
                  roadmapSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>View Implementation Plan</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
