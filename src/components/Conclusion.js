import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, 
  ArrowRight, 
  Star
} from 'lucide-react';

const Conclusion = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: CheckCircle,
      text: 'Designed for Indian market with ₹ currency support',
      color: 'text-green-400'
    },
    {
      icon: CheckCircle,
      text: 'Accessible through voice and WhatsApp commands',
      color: 'text-blue-400'
    },
    {
      icon: CheckCircle,
      text: 'Community-driven approach to reduce waste',
      color: 'text-purple-400'
    },
    {
      icon: CheckCircle,
      text: 'AI-powered insights for smarter decisions',
      color: 'text-orange-400'
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
    <section id="conclusion" className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 text-slate-100"
          >
            Inventura: More Than Just Inventory Management
          </motion.h2>

          {/* Main Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Inventura isn't just another inventory tool — it's a complete smart assistant designed specifically 
            for small vendors in emerging markets. By combining AI-powered insights, community collaboration, 
            and sustainable business practices, we're creating a platform that doesn't just track inventory, 
            but actively helps vendors grow their businesses.
          </motion.p>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.text}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <Icon className={`w-8 h-8 ${highlight.color} mx-auto mb-4`} />
                  <p className="text-white/80 text-sm leading-relaxed">
                    {highlight.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>


          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Ready to Transform Your Inventory Management?
              </h3>
              <p className="text-white/70 mb-6">
                Join the revolution in smart inventory management. Let's build the future together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <Star className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Final Quote */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic max-w-4xl mx-auto">
              "The future of small business isn't just about surviving — it's about thriving with the right tools, 
              the right community, and the right mindset. Inventura makes that future possible today."
            </blockquote>
            <div className="mt-6 text-white/60">
              — Inventura Team
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
