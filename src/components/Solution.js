import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Users, 
  MessageCircle, 
  Tags, 
  Leaf, 
  Smartphone,
  Target,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Solution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict what stock will run out next week using advanced machine learning algorithms.',
      tag: 'Intelligence',
      color: 'from-purple-500 to-pink-500',
      benefits: ['Predictive Analytics', 'Smart Alerts', 'Trend Analysis'],
      delay: 0,
    },
    {
      icon: Users,
      title: 'Community Stock Exchange',
      description: 'Share or sell excess stock to nearby vendors, creating a collaborative ecosystem.',
      tag: 'Community',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Peer Network', 'Shared Resources', 'Local Support'],
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      title: 'Voice & WhatsApp Commands',
      description: 'Update stock and request reports using natural language - no complex interfaces.',
      tag: 'Accessibility',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Voice Control', 'WhatsApp Integration', 'Natural Language'],
      delay: 0.2,
    },
    {
      icon: Tags,
      title: 'Dynamic Pricing Assistant',
      description: 'Suggest discounts or smart price adjustments based on market conditions and inventory levels.',
      tag: 'Optimization',
      color: 'from-orange-500 to-red-500',
      benefits: ['Market Analysis', 'Price Optimization', 'Revenue Growth'],
      delay: 0.3,
    },
    {
      icon: Leaf,
      title: 'Sustainability Tracker',
      description: 'Reduce waste, donate near-expiry items, and earn eco-badges for sustainable practices.',
      tag: 'Sustainability',
      color: 'from-green-400 to-teal-500',
      benefits: ['Waste Reduction', 'Eco Badges', 'Social Impact'],
      delay: 0.4,
    },
    {
      icon: Smartphone,
      title: 'Offline-First Design',
      description: 'Works seamlessly even with poor internet connectivity, syncing when connection is available.',
      tag: 'Reliability',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Offline Sync', 'Data Backup', 'Always Available'],
      delay: 0.5,
    },
  ];

  const keyDifferentiators = [
    {
      icon: Target,
      title: 'Vendor-First Design',
      description: 'Built specifically for small vendors with their unique challenges in mind',
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Fosters collaboration between vendors, suppliers, and customers',
      color: 'from-secondary-500 to-accent-500'
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Growth',
      description: 'Intelligent insights that help vendors make smarter business decisions',
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
    <section id="solution" className="section-padding bg-slate-900 relative overflow-hidden">
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
            The Solution: Inventura
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Revolutionary features that set us apart from traditional inventory management systems
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="enhanced-card h-full">
                  {/* Gradient Border Effect */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: feature.delay + 0.5, type: 'spring', stiffness: 200 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Tag */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: feature.delay + 0.7 }}
                    className="inline-block bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  >
                    {feature.tag}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: feature.delay + 0.9 }}
                    className="text-xl font-semibold text-slate-100 mb-4"
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: feature.delay + 1.1 }}
                    className="text-slate-300 leading-relaxed mb-4"
                  >
                    {feature.description}
                  </motion.p>

                  {/* Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: feature.delay + 1.3 }}
                    className="space-y-2"
                  >
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: feature.delay + 1.5 + benefitIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                        <span className="text-slate-400 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Why Inventura is Different
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Built with vendors in mind, not just for them
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-slate-300">{item.description}</p>
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-6">
              See how Inventura can revolutionize your inventory management
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
              onClick={() => {
                const techSection = document.querySelector('#technology');
                if (techSection) {
                  techSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Explore Technology</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
