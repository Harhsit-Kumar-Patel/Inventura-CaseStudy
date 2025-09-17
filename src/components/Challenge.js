import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Wifi, Users, Brain, TrendingDown, Clock, DollarSign } from 'lucide-react';

const Challenge = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const challenges = [
    {
      number: '01',
      icon: AlertTriangle,
      title: 'Trust & Complexity',
      description: 'Vendors often don\'t trust software because it feels complicated and intimidating.',
      color: 'text-red-400',
      bgColor: 'from-red-500/20 to-orange-500/20',
      stats: '73% avoid digital tools',
      delay: 0,
    },
    {
      number: '02',
      icon: Wifi,
      title: 'Digital Divide',
      description: 'Many lack stable internet or computer literacy, making digital solutions inaccessible.',
      color: 'text-orange-400',
      bgColor: 'from-orange-500/20 to-yellow-500/20',
      stats: '45% have poor connectivity',
      delay: 0.1,
    },
    {
      number: '03',
      icon: Users,
      title: 'Poor Collaboration',
      description: 'Suppliers and vendors don\'t collaborate efficiently, leading to wastage and losses.',
      color: 'text-yellow-400',
      bgColor: 'from-yellow-500/20 to-green-500/20',
      stats: '60% coordination issues',
      delay: 0.2,
    },
    {
      number: '04',
      icon: Brain,
      title: 'Limited Intelligence',
      description: 'No system helps vendors make smarter business decisions - they only track, they don\'t advise.',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-purple-500/20',
      stats: '85% lack insights',
      delay: 0.3,
    },
  ];

  const impactStats = [
    { icon: TrendingDown, value: '$2.3T', label: 'Global Opportunity Cost', color: 'text-red-400' },
    { icon: Clock, value: '40%', label: 'Time Wasted Daily', color: 'text-orange-400' },
    { icon: DollarSign, value: '₹50K', label: 'Monthly Losses (Avg)', color: 'text-yellow-400' },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="challenge" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">The Challenge</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Key obstacles facing small vendors today that prevent them from adopting modern inventory management solutions
          </motion.p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="enhanced-card text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                  className={`w-16 h-16 ${stat.color} mx-auto mb-4 flex items-center justify-center`}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Challenge Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="enhanced-card h-full">
                  {/* Gradient Background */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${challenge.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                    className="absolute -top-4 -left-4 w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  >
                    {challenge.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.1 + 0.7, type: 'spring', stiffness: 200 }}
                    className={`w-16 h-16 ${challenge.color} mb-6 flex items-center justify-center`}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                    className="text-xl font-semibold text-slate-100 mb-4"
                  >
                    {challenge.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 1.1 }}
                    className="text-slate-300 leading-relaxed mb-4"
                  >
                    {challenge.description}
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 1.3 }}
                    className={`text-sm font-semibold ${challenge.color} bg-white/10 px-3 py-1 rounded-full inline-block`}
                  >
                    {challenge.stats}
                  </motion.div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 gradient-bg rounded-b-2xl origin-left"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <div className="enhanced-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              These challenges create a <span className="gradient-text">$2.3 trillion</span> opportunity
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              Small vendors worldwide lose billions due to inefficient inventory management. 
              Inventura addresses these pain points with innovative, accessible solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="flex items-center justify-center space-x-2 text-blue-400">
                <TrendingDown className="w-5 h-5" />
                <span className="font-semibold">Scroll to see our solution</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;
