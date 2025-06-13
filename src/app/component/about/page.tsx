'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Moon, Sun, Github, Menu, X ,Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
   const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} min-h-screen transition-colors duration-500`}>
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
  Hello! I&apos;m <strong className="text-purple-500">Faria Mustaqim</strong>, a dedicated Front-End Developer with a love for creating smooth, responsive, and beautiful web applications using modern technologies like Next.js, React, and TypeScript. My journey in tech began with curiosity and has grown into a purposeful pursuit of innovation. I&apos;m passionate about exploring areas like Agentic AI, Web3, and Cloud Computing to build intelligent and meaningful digital experiences.
  <br /><br />
  Currently, I&apos;m a Computer Science student who thrives in collaborative environments and values the power of clean, elegant code. My projects reflect my enthusiasm for user-friendly interfaces and functional design. I&apos;m always learning and aiming to push boundaries in modern web development. My goal is simple yet impactful — to use technology to improve lives, one project at a time.
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
