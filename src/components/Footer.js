import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const socialLinks = [
    { icon: Github, href: 'https://github.com/Harhsit-Kumar-Patel', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harshit-patel-900729205/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/10 relative">
      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="flex justify-center">
            {/* Brand Section */}
            <div className="max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div 
                    className="p-2 rounded-lg gradient-bg"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Boxes className="w-8 h-8 text-white" />
                  </motion.div>
                  <span className="text-2xl font-bold gradient-text">Inventura</span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  The smart inventory assistant designed specifically for small and mid-scale vendors. 
                  Transform your business with AI-powered insights and community collaboration.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-3 flex flex-col items-center"
              >
                <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>work.harshitpatel@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>+91 6386226495</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-200">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>Chennai, India</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>


        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm"
            >
              © {currentYear} Harshit Kumar Patel. All rights reserved. Built with ❤️ for small vendors worldwide.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
