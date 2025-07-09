'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white/80 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Paresh Bhamare
            </h3>
            <p className="text-gray-700 max-w-md mx-auto">
              Full Stack Developer passionate about creating innovative solutions 
              and bringing ideas to life through code.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {[
              { href: 'https://github.com/Paresh-95', label: 'GitHub' },
              { href: 'https://linkedin.com/in/pareshbhamare', label: 'LinkedIn'},
              { href: 'mailto:bhamareparesh.rcpit@gmail.com', label: 'Email' },
              { href: 'https://next-portfolio-beta-bice.vercel.app', label: 'Portfolio' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-dark rounded-lg hover:bg-white/10 smooth-transition"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
        
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-gray-500"
          >
            {[
              { href: '#about', label: 'About' },
              { href: '#skills', label: 'Skills' },
              { href: '#projects', label: 'Projects' },
              { href: '#experience', label: 'Experience' },
              { href: '#contact', label: 'Contact' },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="hover:text-gray-900 smooth-transition"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-gray-500 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Paresh Bhamare
            </p>
            <p className="text-gray-400 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute right-8 -top-6 p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:from-purple-600 hover:to-blue-600 smooth-transition shadow-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;