"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaDatabase, FaJava, FaMobile } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { IconType } from "react-icons";
import Image from "next/image";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: IconType;
  category: string;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>(
    {}
  );
  const skills: Skill[] = [
    // Languages
    {
      name: "JavaScript",
      level: 90,
      color: "from-yellow-400 to-yellow-600",
      icon: SiJavascript,
      category: "languages",
    },
    {
      name: "TypeScript",
      level: 85,
      color: "from-blue-400 to-blue-600",
      icon: SiTypescript,
      category: "languages",
    },
    {
      name: "Python",
      level: 80,
      color: "from-green-400 to-green-600",
      icon: SiPython,
      category: "languages",
    },
    {
      name: "Java",
      level: 75,
      color: "from-red-400 to-red-600",
      icon: FaJava,
      category: "languages",
    },

    // Frontend
    {
      name: "React.js",
      level: 95,
      color: "from-blue-400 to-cyan-400",
      icon: SiReact,
      category: "frontend",
    },
    {
      name: "Next.js",
      level: 90,
      color: "from-gray-400 to-gray-600",
      icon: SiNextdotjs,
      category: "frontend",
    },
    {
      name: "HTML/CSS",
      level: 95,
      color: "from-orange-400 to-orange-600",
      icon: SiHtml5,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      color: "from-teal-400 to-teal-600",
      icon: SiTailwindcss,
      category: "frontend",
    },
    {
      name: "React Native",
      level: 80,
      color: "from-blue-500 to-purple-500",
      icon: FaMobile,
      category: "frontend",
    },

    // Backend
    {
      name: "Node.js",
      level: 85,
      color: "from-green-500 to-green-700",
      icon: SiNodedotjs,
      category: "backend",
    },
    {
      name: "Express.js",
      level: 88,
      color: "from-gray-500 to-gray-700",
      icon: SiExpress,
      category: "backend",
    },
    {
      name: "FastAPI",
      level: 82,
      color: "from-teal-400 to-teal-600",
      icon: SiFastapi,
      category: "backend",
    },
    {
      name: "Spring Boot",
      level: 70,
      color: "from-green-400 to-green-600",
      icon: SiSpring,
      category: "backend",
    },

    // Database
    {
      name: "MongoDB",
      level: 85,
      color: "from-green-600 to-green-800",
      icon: SiMongodb,
      category: "database",
    },
    {
      name: "PostgreSQL",
      level: 80,
      color: "from-blue-600 to-blue-800",
      icon: SiPostgresql,
      category: "database",
    },
    {
      name: "MySQL",
      level: 75,
      color: "from-orange-500 to-orange-700",
      icon: SiMysql,
      category: "database",
    },
    {
      name: "PineCone",
      level: 70,
      color: "from-purple-500 to-purple-700",
      icon: FaDatabase,
      category: "database",
    },

    // Tools
    {
      name: "Git",
      level: 88,
      color: "from-orange-500 to-orange-700",
      icon: SiGit,
      category: "tools",
    },
    {
      name: "Docker",
      level: 75,
      color: "from-blue-500 to-blue-700",
      icon: SiDocker,
      category: "tools",
    },
    {
      name: "Linux",
      level: 80,
      color: "from-yellow-500 to-yellow-700",
      icon: SiLinux,
      category: "tools",
    },
  ];

  const categories = [
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated: Record<string, number> = {};
      filteredSkills.forEach((skill) => {
        animated[skill.name] = skill.level;
      });
      setAnimatedSkills(animated);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, filteredSkills]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across different technologies and frameworks.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full smooth-transition flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "glass-dark hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-dark p-6 rounded-xl hover-lift smooth-transition relative overflow-hidden"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    <skill.icon />
                  </span>
                  <h3 className="text-lg font-semibold text-black">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-bold text-black">
                  {animatedSkills[skill.name] || 0}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedSkills[skill.name] || 0}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>

                {/* Glowing effect */}
                <motion.div
                  className={`absolute top-0 h-2 rounded-full bg-gradient-to-r ${skill.color} blur-sm opacity-50`}
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedSkills[skill.name] || 0}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>

              {/* Level Indicator */}
              <div className="flex justify-between text-xs text-gray-800 mt-2">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Expert</span>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 rounded-xl"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Java Full Stack Developer",
                provider: "Wipro",
                icon: "/wipro.png",
              },
              {
                title: "Zensar ESDP",
                provider: "Zensar, RPG Foundation",
                icon: "/zensar.png",
              },
              {
                title: "Web Development Bootcamp",
                provider: "Angela Yu",
                icon: "/udemy.png",
              },
              {
                title: "Front/Back-End Development",
                provider: "Meta",
                icon: "/meta.png",
              },
              {
                title: "Team Member",
                provider: "Akatsuki Coding Club",
                icon: "/akatsuki.png",
              },
              {
                title: "Lead Coordinator",
                provider: "E-Builder Social Club",
                icon: "/rcpit.png",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="glass-dark p-6 rounded-xl hover-lift smooth-transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">
                    <Image
                      src={cert.icon}
                      alt="icon"
                      width={50}
                      height={50}
                      className="aspect-square object-contain"
                    />
                  </span>
                  <h4 className="text-lg font-semibold text-gray-700">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">{cert.provider}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
