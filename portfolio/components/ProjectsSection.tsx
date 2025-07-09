"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Filter, X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  highlights: string[];
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("modal-open");
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("modal-open");
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: "1",
      title: "ExplainX - AI-Powered Learning Platform",
      description:
        "Intelligent learning platform leveraging RAG architecture with vector embeddings and semantic search.",
      longDescription:
        "ExplainX is a cutting-edge AI-powered learning platform that revolutionizes how people learn and interact with information. Built with modern technologies and AI capabilities, it provides personalized learning experiences.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "Pinecone",
        "PostgreSQL",
        "JWT",
      ],
      category: "fullstack",
      image: "/projects/explainx.png",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "RAG architecture with vector embeddings",
        "Semantic search capabilities",
        "Personalized AI-driven learning spaces",
        "Custom knowledge base integration",
        "Contextual content generation",
      ],
      highlights: [
        "Enterprise-grade RBAC system",
        "Four permission levels (Owner, Moderator, Member, Viewer)",
        "JWT authentication with audit logging",
        "Real-time APIs and AI-powered pipeline",
      ],
    },
    {
      id: "2",
      title: "Ajinkyatara Consultants Website",
      description:
        "Responsive website for heritage conservation, architecture, and environmental engineering projects.",
      longDescription:
        "A comprehensive website showcasing Ajinkyatara Consultants' expertise in heritage conservation, architecture, and environmental engineering with dynamic features.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "AWS S3",
        "MongoDB",
      ],
      category: "frontend",
      image: "/projects/ajinkya.png",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Interactive project showcase",
        "Dynamic blog with search/filter",
        "Social media integration",
        "Contact form with notifications",
        "SEO optimization",
      ],
      highlights: [
        "Redis caching for performance",
        "AWS S3 storage integration",
        "RESTful API architecture",
        "Responsive design system",
      ],
    },
    {
      id: "3",
      title: "StudyNotion - EdTech Platform",
      description:
        "Fully functional Ed-tech platform supporting 70+ users for creating and consuming educational content.",
      longDescription:
        "StudyNotion is a comprehensive educational technology platform that empowers educators and learners with tools for content creation, consumption, and rating.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Payment Gateway",
      ],
      category: "fullstack",
      image: "/projects/notion.png",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "User authentication system",
        "Course creation and management",
        "Content rating system",
        "Payment processing",
        "Progress tracking",
      ],
      highlights: [
        "Supports 70+ active users",
        "RESTful API with 20% improved response time",
        "Scalable MERN stack architecture",
        "Integrated payment gateway",
      ],
    },
    {
      id: "4",
      title: "Portfolio Website",
      description:
        "Interactive portfolio website with modern design and smooth animations.",
      longDescription:
        "A stunning portfolio website showcasing my work and skills with cutting-edge design and interactive features.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      image: "/projects/blog.png",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Glassmorphism design",
        "Smooth animations",
        "Interactive elements",
        "Responsive layout",
        "Performance optimized",
      ],
      highlights: [
        "Modern dark theme",
        "Framer Motion animations",
        "TypeScript for type safety",
        "Optimized performance",
      ],
    },
    {
      id: "5",
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates.",
      longDescription:
        "A comprehensive task management solution that helps teams collaborate effectively with real-time updates and notifications.",
      technologies: [
        "React.js",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Express.js",
      ],
      category: "fullstack",
      image: "/projects/reactBlog.png",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time collaboration",
        "Task assignments",
        "Progress tracking",
        "Team notifications",
        "File attachments",
      ],
      highlights: [
        "Socket.io for real-time updates",
        "Team collaboration features",
        "Drag-and-drop interface",
        "Mobile responsive design",
      ],
    },
    {
      id: "6",
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with location-based forecasts and interactive maps.",
      longDescription:
        "An elegant weather dashboard that provides comprehensive weather information with beautiful visualizations and interactive features.",
      technologies: ["React.js", "API Integration", "Chart.js", "CSS3"],
      category: "frontend",
      image: "/projects/explainx.png",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Location-based weather",
        "Interactive maps",
        "Weather charts",
        "Forecast predictions",
        "Responsive design",
      ],
      highlights: [
        "Third-party API integration",
        "Data visualization with Chart.js",
        "Geolocation features",
        "Modern UI design",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            A showcase of my best work, featuring modern web applications built
            with cutting-edge technologies and innovative solutions.
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
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full smooth-transition flex items-center gap-2 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "glass-dark hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.label}</span>{" "}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-dark rounded-xl overflow-hidden hover-lift smooth-transition cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative w-full h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt="project-logo"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 smooth-transition flex items-center justify-center">
                    <span className="text-white font-semibold">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-700">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        title="Source Code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Black overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-40"
              />
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex items-center justify-center p-4 mt-40"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white/90 max-w-4xl w-full max-h-[calc(100vh-5rem)] overflow-y-scroll rounded-2xl p-8 shadow-2xl border border-gray-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{selectedProject.image}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {selectedProject.title}
                        </h3>
                        <p className="text-gray-700 capitalize">
                          {selectedProject.category} Project
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg smooth-transition"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Project Overview
                      </h4>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <span className="text-green-500">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Project Highlights
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <span className="text-blue-500">★</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 border border-gray-200 rounded-full text-sm text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Modal Actions */}
                    <div className="flex gap-4 pt-4">
                      {selectedProject.liveUrl && (
                        <motion.a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 smooth-transition"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} />
                          View Live Demo
                        </motion.a>
                      )}
                      {selectedProject.githubUrl && (
                        <motion.a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 glass border border-white/20 rounded-lg font-medium hover:bg-white/10 smooth-transition"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                          View Source Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
