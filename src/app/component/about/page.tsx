'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen transition-colors duration-500`}>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-70 shadow-lg backdrop-blur-sm">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white">
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
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-6">
            <Link href="/component/front" className="hover:text-indigo-400 text-white">Home</Link>
            <Link href="/component/about" className="hover:text-indigo-400 text-white">About</Link>
            <Link href="/component/skills" className="hover:text-indigo-400 text-white">Skills</Link>
            <Link href="/component/projects" className="hover:text-indigo-400 text-white">Projects</Link>
            <Link href="/component/contact" className="hover:text-indigo-400 text-white">Contact</Link>
          </nav>

          {/* Theme Toggle and Social Icons */}
          <div className="flex items-center gap-6 ml-8">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 border ${
                isDark ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-white" />}
            </motion.button>

            <div className={`h-6 w-px ${isDark ? 'bg-white/20' : 'bg-gray-700'}`} />

            <div className="flex items-center gap-3">
              <a href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Github size={18} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/faria-mustaqeem-3367b5301/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Linkedin size={18} className="text-white" />
              </a>
              <a href="https://x.com/Faria1539114" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-32 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* PC Image */}
          <div className="w-full lg:w-1/2">
            <Image src="/bg.png" alt="My PC Setup" width={300} height={100} className="rounded-xl shadow-lg object-cover" />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.h1 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>About Me</motion.h1>
            <motion.p className={`text-lg leading-relaxed ${isDark ? 'text-white/90' : 'text-black/90'}`}>
              Hello! I'm <strong className="text-purple-500">Faria Mustaqim</strong>, a dedicated Front-End Developer with a love for creating smooth, responsive, and beautiful web applications using modern technologies like Next.js, React, and TypeScript. My journey in tech began with curiosity and has grown into a purposeful pursuit of innovation. I'm passionate about exploring areas like Agentic AI, Web3, and Cloud Computing to build intelligent and meaningful digital experiences.
              <br /><br />
              Currently, I'm a Computer Science student who thrives in collaborative environments and values the power of clean, elegant code. My projects reflect my enthusiasm for user-friendly interfaces and functional design. I'm always learning and aiming to push boundaries in modern web development. My goal is simple yet impactful — to use technology to improve lives, one project at a time.
            </motion.p>
          </div>
        </div>
{/* Video Section */}
        <motion.div className="mt-16 pb-20 " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="relative w-full max-w-4xl mx-auto">
            <motion.h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>🎥 Hand Gesture Recognition Project</motion.h2>
            <motion.p className={`mb-6 text-base ${isDark ? 'text-white/80' : 'text-black/80'}`}>This video demonstrates my real-time Hand Gesture Recognition system, built using Python, OpenCV, and MediaPipe. It tracks hand landmarks via webcam and interprets gestures like thumbs up, peace sign, and stop. This project lays the groundwork for future innovations in gesture-based user interfaces, AI-driven control systems, and accessibility tools.</motion.p>
            <video 
              className="w-full h-auto rounded-xl shadow-2xl"
              controls
            >
              <source src="/done.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
