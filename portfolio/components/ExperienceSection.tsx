'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import Image from 'next/image';
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'education';
  description: string[];
  technologies?: string[];
  achievements?: string[];
  icon: string;
  color: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Full Stack Developer',
      company: 'AISOLO Technologies',
      location: 'Remote',
      duration: 'Feb 2025 – Present',
      type: 'work',
      description: [
        'Designed and implemented scalable web applications utilizing modern JavaScript and Python frameworks (React, Node.js, FastAPI) and RESTful APIs',
        'Led technical architecture decisions and participated in all phases of agile development, from concept to deployment',
        'Ensured optimal performance and code quality through best practices and continuous integration'
      ],
      technologies: ['React', 'Node.js', 'FastAPI', 'JavaScript', 'Python', 'REST APIs'],
      achievements: [
        'Improved application performance by 25%',
        'Led architecture decisions for 3 major projects',
        'Implemented CI/CD pipelines for faster deployment'
      ],
      icon: '💼',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: '2',
      title: 'B.Tech Computer Engineering',
      company: 'R.C Patel Institute of Technology, Shirpur',
      location: 'Shirpur, India',
      duration: '2021 – 2025',
      type: 'education',
      description: [
        'Pursuing Bachelor of Technology in Computer Engineering',
        'Maintaining a strong academic record with CGPA of 7.33',
        'Active participation in coding clubs and technical events',
        'Focus on software development, data structures, and algorithms'
      ],
      technologies: ['Java', 'C++', 'Data Structures', 'Algorithms', 'Database Systems'],
      achievements: [
        'CGPA: 7.33/10',
        'Team Member - Akatsuki Coding Club',
        'Lead Coordinator - E-Builder Social Club',
        'Multiple project completions with distinction'
      ],
      icon: '🎓',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: '3',
      title: '12th (HSC) Information Technology',
      company: 'Madhyamik Vidyalaya, Tarhadi',
      location: 'Tarhadi, India',
      duration: '2019 – 2021',
      type: 'education',
      description: [
        'Completed Higher Secondary Certificate with Information Technology specialization',
        'Achieved excellent academic performance with 87.2% marks',
        'Developed foundational knowledge in computer science and programming',
        'Participated in various technical competitions and events'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Database Basics', 'Programming Fundamentals'],
      achievements: [
        'Secured 87.2% marks',
        'IT specialization with distinction',
        'Active in technical competitions',
        'Strong foundation in programming concepts'
      ],
      icon: '📚',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: '4',
      title: '10th (CBSE)',
      company: 'Kendriya Vidyalaya, Dhule',
      location: 'Dhule, India',
      duration: '2018 – 2019',
      type: 'education',
      description: [
        'Completed Central Board of Secondary Education (CBSE) curriculum',
        'Achieved 82.2% marks with strong performance in mathematics and science',
        'Developed analytical and problem-solving skills',
        'Participated in various academic and extracurricular activities'
      ],
      achievements: [
        'Secured 82.2% marks',
        'Strong performance in STEM subjects',
        'Active in school competitions',
        'Developed leadership and teamwork skills'
      ],
      icon: '🏫',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const certifications = [
    {
      title: 'Java Full Stack Developer',
      issuer: 'Wipro',
      date: '2024',
      icon: '/wipro.png',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Zensar ESDP',
      issuer: 'Zensar, RPG Foundation',
      date: '2024',
      icon: "/zensar.png",
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'Angela Yu',
      date: '2023',
      icon: '/udemy.png',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Front/Back-End Development',
      issuer: 'Meta',
      date: '2023',
      icon: '/meta.png',
      color: 'from-purple-500 to-blue-500'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden scroll-mt-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
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
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            My journey through education and professional experience, showcasing growth, 
            learning, and the development of technical expertise.
          </p>
        </motion.div>

        {/* Timeline */}
        <ExperienceTimeline items={experiences} />

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-dark p-6 rounded-xl hover-lift smooth-transition relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={"w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md"}>
                      {cert.icon && (cert.icon.endsWith('.png') || cert.icon.endsWith('.jpg')) ? (
                        <span className="text-2xl">
                          <Image src={cert.icon} alt="icon" width={40} height={40} className="aspect-square object-contain" />
                        </span>
                      ) : (
                        <span className="text-2xl text-gray-800">{cert.icon}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-semibold text-sm">
                        {cert.title}
                      </h4>
                      <p className="text-gray-700 font-medium text-xs">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-800 text-xs">
                    <Award size={12} />
                    {cert.date}
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 rounded-xl"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;