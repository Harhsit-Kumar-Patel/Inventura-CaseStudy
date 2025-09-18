import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, TrendingUp, Users, Mic, Leaf } from 'lucide-react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const keyFeatures = [
    { icon: TrendingUp, text: 'AI Forecasting', color: 'bg-blue-600', accent: 'text-blue-400' },
    { icon: Users, text: 'Community Exchange', color: 'bg-emerald-600', accent: 'text-emerald-400' },
    { icon: Mic, text: 'Voice Commands', color: 'bg-slate-600', accent: 'text-slate-400' },
    { icon: Leaf, text: 'Sustainability', color: 'bg-amber-600', accent: 'text-amber-400' },
  ];


  const scrollToNext = () => {
    const nextSection = document.querySelector('#challenge');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8"
            >
              <motion.span 
                className="gradient-text"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Inventura
              </motion.span>
              <br />
              <span className="text-white text-4xl sm:text-5xl md:text-6xl">The Smart Inventory Assistant</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Revolutionizing inventory management for small & mid-scale vendors with AI-powered insights, 
              community collaboration, and sustainable business practices.
            </motion.p>

            {/* Key Features - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl glass-effect hover:shadow-lg transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className={`text-sm font-medium ${feature.accent}`}>
                      {feature.text}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>



          </motion.div>

        </div>
      </div>

      {/* Clean Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center cursor-pointer hover:border-slate-300 transition-colors duration-300"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-300 rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-slate-400 text-xs mt-3 text-center"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
