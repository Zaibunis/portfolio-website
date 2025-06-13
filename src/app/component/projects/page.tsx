'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Moon, Sun, Github, Linkedin, Twitter,Menu, X} from 'lucide-react';


import Link from 'next/link';
import { FaCode, FaGraduationCap, FaLaptopCode, FaBrain, FaRocket } from 'react-icons/fa';

import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and real-time cart updates.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/Zaibunis/figma-template.git',
    live: 'https://figma-template-one.vercel.app/',
    image: '/done49.PNG',
    color: 'from-green-500 to-teal-600'
  },
  {
    title: 'Hand Gesture Recognition',
    description: 'Real-time hand gesture recognition system using TensorFlow.js and MediaPipe. Features include multiple gesture detection, live webcam feed, and interactive UI for gesture-based controls.',
    technologies: ['Streamlit', 'Python', 'MediaPipe', 'Open Csv'],
    github: 'https://github.com/Zaibunis/hand-gesture.git',
    video: '/done.mp4',
    image: '/done51.PNG',
    color: 'from-green-500 to-teal-600'
  },
  {
    title: 'Password Strength Meter',
    description: 'Interactive password strength analyzer with real-time feedback. Features include multiple criteria checking, visual strength indicator, and password generation suggestions.',
    technologies: ['Streamlit', 'Python'],
    github: 'https://github.com/Zaibunis/password-strength-meter-by-faria-mustaqim.git',
    live: 'https://password-strength-meter-by-faria-mustaqim.streamlit.app/',
    image: '/done50.PNG',
    color: 'from-green-500 to-teal-600'
  },
];

export default function Projects() {
   const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-500`}>
       <header className="fixed top-0 left-0 w-full z-50 bg-black/70 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4B5563" />
                <stop offset="100%" stopColor="#9CA3AF" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
            <text x="50%" y="58%" textAnchor="middle" fill="white" fontSize="32" fontFamily="sans-serif" fontWeight="bold">FM</text>
          </svg>
          <span className="ml-3 text-xl">Faria Mustaqim</span>
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors border ${
              isDark ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-white" />}
          </motion.button>

          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 text-white">
          <Link href="/component/front" className="hover:text-indigo-400">Home</Link>
          <Link href="/component/about" className="hover:text-indigo-400">About</Link>
          <Link href="/component/skills" className="hover:text-indigo-400">Skills</Link>
          <Link href="/component/projects" className="hover:text-indigo-400">Projects</Link>
          <Link href="/component/contact" className="hover:text-indigo-400">Contact</Link>
          <motion.button
            onClick={() => setIsDark(!isDark)}
            className={`ml-4 w-10 h-10 flex items-center justify-center rounded-full transition-colors border ${
              isDark ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-white" />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur p-5 space-y-4 text-center text-white">
          <Link href="/component/front" onClick={() => setIsOpen(false)} className="block hover:text-indigo-400">Home</Link>
          <Link href="/component/about" onClick={() => setIsOpen(false)} className="block hover:text-indigo-400">About</Link>
          <Link href="/component/skills" onClick={() => setIsOpen(false)} className="block hover:text-indigo-400">Skills</Link>
          <Link href="/component/projects" onClick={() => setIsOpen(false)} className="block hover:text-indigo-400">Projects</Link>
          <Link href="/component/contact" onClick={() => setIsOpen(false)} className="block hover:text-indigo-400">Contact</Link>
        </div>
      )}
    </header>


      <div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className={`absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob ${
            isDark ? 'bg-purple-500/30' : 'bg-purple-200'
          }`}></div>
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000 ${
            isDark ? 'bg-blue-500/30' : 'bg-blue-200'
          }`}></div>
          <div className={`absolute bottom-0 left-1/2 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000 ${
            isDark ? 'bg-pink-500/30' : 'bg-pink-200'
          }`}></div>
        </div>

        <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} py-20 px-8 transition-colors duration-500`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <motion.h1 
              className={`text-5xl font-bold mt-10 mb-12 text-center ${
                isDark ? 'text-white' : 'text-black'
              }`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${project.color} p-[2px]`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`relative ${
                    isDark ? 'bg-gray-900' : 'bg-gray-100'
                  } p-6 rounded-xl h-full transition-colors duration-500`}>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        isDark ? 'from-blue-500/10 to-purple-500/10' : 'from-blue-500/5 to-purple-500/5'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      {project.image && (
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.title}
                      </h3>
                      <p className={`${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      } mb-4 line-clamp-3 transition-colors duration-500`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.color} ${
                              isDark ? 'bg-opacity-10 text-white' : 'bg-opacity-20 text-black'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'
                          } transition-colors`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub size={24} />
                        </motion.a>
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                              isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'
                            } transition-colors`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiExternalLink size={24} />
                          </motion.a>
                        )}
                        {project.video && (
                          <motion.a
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                              isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'
                            } transition-colors`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: "0%" }}
                      animate={{ width: hoveredProject === index ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}
