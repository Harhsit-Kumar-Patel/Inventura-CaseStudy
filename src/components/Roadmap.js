import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Rocket, 
  Brain, 
  Users, 
  Globe,
  CheckCircle,
  Clock,
  Target,
  Zap,
  ArrowRight
} from 'lucide-react';

const Roadmap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const phases = [
    {
      number: 1,
      icon: Rocket,
      title: 'Phase 1 – MVP',
      duration: '3-4 months',
      goal: 'Build a lightweight system vendors can start using quickly',
      features: [
        'Core modules: product catalog, stock tracking, sales/purchase records',
        'Low-stock alerts',
        'Simple reports (stock summary, sales summary)',
        'Role-based user accounts',
        'Offline-first sync (local DB + server sync)'
      ],
      color: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      number: 2,
      icon: Brain,
      title: 'Phase 2 – Smart Features',
      duration: '4-6 months',
      goal: 'Differentiate from competitors with smart features',
      features: [
        'AI demand forecasting (basic version)',
        'WhatsApp/Voice integration for stock updates & reports',
        'Invoice generation & simple POS integration',
        'Multi-branch/warehouse sync',
        'Export reports (Excel/PDF)'
      ],
      color: 'from-green-500 to-emerald-500',
      delay: 0.2,
    },
    {
      number: 3,
      icon: Users,
      title: 'Phase 3 – Community & Intelligence',
      duration: '6-9 months',
      goal: 'Build uniqueness & market moat',
      features: [
        'Vendor-to-vendor stock exchange',
        'Dynamic pricing assistant',
        'Supplier recommendation engine',
        'Gamified business insights (badges, growth tips)',
        'Sustainability tracker (wastage + donation options)'
      ],
      color: 'from-purple-500 to-pink-500',
      delay: 0.4,
    },
    {
      number: 4,
      icon: Globe,
      title: 'Phase 4 – Scale & Ecosystem',
      duration: '12+ months',
      goal: 'Make Inventura a regional leader',
      features: [
        'Advanced AI-driven sales forecasting',
        'Marketplace for suppliers & vendors',
        'Full POS + e-commerce integration (Shopify, WooCommerce, Amazon)',
        'API for third-party developers',
        'Multilingual & region-customized versions'
      ],
      color: 'from-orange-500 to-red-500',
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="roadmap" className="section-padding bg-dark-800 relative overflow-hidden">
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
            Implementation Roadmap
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Strategic phases for building Inventura into a market-leading platform
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 transform md:-translate-x-1/2"
          />

          {/* Timeline Items */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-16"
          >
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={phase.number}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: phase.delay + 0.5, type: 'spring', stiffness: 200 }}
                    className={`absolute left-8 md:left-1/2 w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="enhanced-card">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {phase.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-white/60" />
                            <span className="text-white/60 text-sm">{phase.duration}</span>
                          </div>
                        </div>
                        <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">{phase.number}</span>
                        </div>
                      </div>

                      {/* Goal */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: phase.delay + 0.8 }}
                        className="mb-6"
                      >
                        <div className="flex items-start space-x-3">
                          <Target className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                          <p className="text-white/80 italic">{phase.goal}</p>
                        </div>
                      </motion.div>

                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: phase.delay + 1 }}
                        className="space-y-3"
                      >
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                        {phase.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: phase.delay + 1.2 + featureIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/70 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Progress Bar */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ delay: phase.delay + 1.5, duration: 1 }}
                        className="mt-6"
                      >
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${(phase.number / 4) * 100}%` } : { width: 0 }}
                            transition={{ delay: phase.delay + 1.7, duration: 1 }}
                            className={`h-2 bg-gradient-to-r ${phase.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl p-8 md:p-12 border border-white/10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              From MVP to Market Leader
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
              A systematic approach to building a comprehensive inventory management ecosystem 
              that grows with your business and adapts to market needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 mb-2">12+ Months</div>
                <div className="text-white/70">Total Development Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-400 mb-2">4 Phases</div>
                <div className="text-white/70">Strategic Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-400 mb-2">∞</div>
                <div className="text-white/70">Scalable Growth Potential</div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
              onClick={() => {
                const conclusionSection = document.querySelector('#conclusion');
                if (conclusionSection) {
                  conclusionSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>See the Vision</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
