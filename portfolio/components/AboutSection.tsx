'use client';

import { motion } from 'framer-motion';
import {} from "react-icons"
import { useState } from 'react';
import { FaAward, FaBrain, FaCodeBranch, FaRocket, FaUser } from 'react-icons/fa';
import { TbLayoutDashboard } from "react-icons/tb";
import Image from 'next/image';


const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: FaCodeBranch,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: TbLayoutDashboard,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with modern design principles.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency across all devices.'
    },
    {
      icon: FaUser,
      title: 'Collaboration',
      description: 'Working effectively in teams using agile methodologies and version control.'
    },
    {
      icon: FaAward,
      title: 'Quality',
      description: 'Delivering high-quality solutions that exceed expectations and requirements.'
    },
    {
      icon: FaBrain,
      title: 'Problem Solving',
      description: 'Analyzing complex problems and creating innovative solutions.'
    }
  ];

  const stats = [
    { value: '7.33', label: 'CGPA', suffix: '/10' },
    { value: '3+', label: 'Years', suffix: ' Coding' },
    { value: '10+', label: 'Projects', suffix: ' Built' },
    { value: '5+', label: 'Technologies', suffix: ' Mastered' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            I'm a passionate Computer Engineering student with a love for creating 
            innovative web solutions and exploring cutting-edge technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-dark p-8 rounded-2xl">
              <div className="relative">
                <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 hover-glow">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/paresh.jpeg"
                      alt="Paresh Bhamare"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white">Paresh Bhamare</h3>
                  <p className="text-blue-500 font-semibold">Full Stack Developer</p>
                  <p className="text-gray-500 font-semibold">
                    📍 Shirpur, India
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
                    <span>📧</span>
                    <span className="text-sm">bhamareparesh.rcpit@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
                    <span>📱</span>
                    <span className="text-sm">+91 9284521255</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-4 text-gray-600 font-medium">
                <p>
                  I'm currently pursuing my B.Tech in Computer Engineering at R.C Patel Institute 
                  of Technology, Shirpur, with a CGPA of 7.33. My passion for technology drives me 
                  to constantly learn and explore new frontiers in software development.
                </p>
                <p>
                  As a Full Stack Developer at AISOLO Technologies, I've gained hands-on experience 
                  in building scalable web applications using modern frameworks like React, Next.js, 
                  Node.js, and FastAPI. I believe in writing clean, maintainable code and following 
                  best practices.
                </p>
                <p>
                  My goal is to create innovative solutions that make a positive impact on users' 
                  lives while continuously expanding my knowledge in emerging technologies like AI, 
                  machine learning, and cloud computing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-dark p-6 rounded-lg text-center hover-lift smooth-transition"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                  <span className="text-lg text-gray-500">{stat.suffix}</span>
                </div>
                <div className="text-gray-700 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="glass-dark p-6 rounded-xl hover-lift smooth-transition relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0"
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-4">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;