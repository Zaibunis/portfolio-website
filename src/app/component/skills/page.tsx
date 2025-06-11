'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { 
    name: 'HTML', 
    level: 95, 
    color: 'from-[#E3CAA5] to-[#CEAB93]',
    icon: '🌐',
    description: 'Semantic markup, Accessibility, SEO optimization'
  },
  { 
    name: 'CSS', 
    level: 90, 
    color: 'from-[#AD8B73] to-[#CEAB93]',
    icon: '🎨',
    description: 'Tailwind CSS, Animations, Responsive design'
  },
  { 
    name: 'TypeScript', 
    level: 85, 
    color: 'from-[#FFFBE9] to-[#E3CAA5]',
    icon: '⚡',
    description: 'Type safety, Modern ES6+, Clean code'
  },
  { 
    name: 'Python', 
    level: 80, 
    color: 'from-[#CEAB93] to-[#AD8B73]',
    icon: '🐍',
    description: 'Data analysis, Automation, Backend development'
  },
  { 
    name: 'Next.js', 
    level: 88, 
    color: 'from-[#967E76] to-[#7D6E83]',
    icon: '⚛️',
    description: 'Server-side rendering, API routes, Full-stack apps'
  },
  { 
    name: 'Auth & Payments', 
    level: 85, 
    color: 'from-[#FFE5CA] to-[#FFB996]',
    icon: '🛡️',
    description: 'Clerk Authentication, Stripe Payments, User Management & Checkout flows'
  }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
    {/* Navbar */}
    <header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-70 shadow-lg backdrop-blur-sm">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      {/* Logo and Name */}
      <a className="flex title-font font-medium items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4B5563" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            fill="white"
            fontSize="32"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            FM
          </text>
        </svg>
        <span className="ml-3 text-xl">Faria Mustaqim</span>
      </a>
      
      {/* Navigation Links */}
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-6">
      <Link href="/component/front" className="hover:text-indigo-400 text-white">
          Home
        </Link>
        <Link href="/component/about" className="hover:text-indigo-400 text-white">
          About
        </Link>
        <Link href="/component/skills" className="hover:text-indigo-400 text-white">
          Skills
        </Link>
        <Link href="/component/projects" className="hover:text-indigo-400 text-white">
          Projects
        </Link>
        <Link href="/component/contact" className="hover:text-indigo-400 text-white">
          Contact
        </Link>
      </nav>

      {/* Theme Toggle and Social Icons with better spacing */}
      <div className="flex items-center gap-6 ml-8">
        {/* Theme Toggle with distinct styling */}
        <motion.button
          onClick={() => setIsDark(!isDark)}
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            isDark 
              ? 'bg-white/10 hover:bg-white/20' 
              : 'bg-gray-800 hover:bg-gray-700'
          } transition-all duration-300 border-2 ${
            isDark ? 'border-white/20' : 'border-gray-700'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDark ? (
            <Sun size={18} className="text-white" />
          ) : (
            <Moon size={18} className="text-white" />
          )}
        </motion.button>

        {/* Divider */}
        <div className={`h-8 w-px ${isDark ? 'bg-white/20' : 'bg-gray-700'}`}></div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Zaibunis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Github size={20} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/faria-mustaqeem-3367b5301/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Linkedin size={20} className="text-white" />
          </a>
          <a
            href="https://x.com/Faria1539114"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Twitter size={20} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  </header>
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

    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-500 relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: isDark ? 'rgba(226, 232, 240, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-10">
      <motion.h1 
          className={`text-7xl mt-20 font-bold mb-16 text-center ${
            isDark ? 'text-white' : 'text-black'
          }`}
          initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
      >
          Technical Arsenal
      </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
          <motion.div
            key={index}
              className="relative group perspective"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
              <motion.div
                className={`
                  relative w-full h-[340px] p-8
                  transform-gpu transition-all duration-500 ease-out
                  group-hover:scale-105 overflow-hidden
                  ${isDark ? 'bg-black border-white/50' : 'bg-white border-black/50'}
                  border-2
                `}
                style={{
                  transformStyle: "preserve-3d",
                  transform: hoveredSkill === index
                    ? `rotateY(${(mousePosition.x - window.innerWidth / 2) / 50}deg)
                       rotateX(${-(mousePosition.y - window.innerHeight / 2) / 50}deg)`
                    : "none",
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)"
                }}
              >
                {/* White border overlay */}
                <div className={`absolute inset-0 border-[1px] ${
                  isDark ? 'border-white/30' : 'border-black/30'
                }`}
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)"
                  }}
                />

                {/* Updated icon container - fixed position and size */}
                <div className="absolute right-8 top-8 w-16 h-16">
                  <div className="relative w-full h-full">
                    <div className={`absolute inset-0 ${
                      isDark ? 'bg-white/10' : 'bg-black/10'
                    } rounded-full`} />
                    <div className="absolute inset-0 flex items-center justify-center text-3xl">
                      {skill.icon}
                    </div>
                  </div>
                </div>

                {/* Content with updated layout */}
                <div className="h-full flex flex-col justify-between relative z-10 pt-4">
                  <div>
                    <h3 className={`text-3xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-black'
                    }`}>{skill.name}</h3>
                    <p className={`${
                      isDark ? 'text-white/80' : 'text-black/80'
                    } mt-4 pr-20`}>{skill.description}</p>
                  </div>

                  {/* Updated Progress Bar */}
                  <div className="mt-4 pr-4">
                    <div className="flex justify-between mb-2">
                      <span className={`font-semibold ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>Mastery</span>
                      <span className={isDark ? 'text-white' : 'text-black'}>{skill.level}%</span>
                    </div>
                    <div className={`h-2 ${
                      isDark ? 'bg-white/10' : 'bg-black/10'
                    } rounded-full overflow-hidden`}>
                      <motion.div
                        className={`h-full ${
                          isDark ? 'bg-white/60' : 'bg-black/60'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute inset-0">
                  <div className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 ${
                    isDark ? 'border-white/30' : 'border-black/30'
                  }`} />
                  <div className={`absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 ${
                    isDark ? 'border-white/30' : 'border-black/30'
                  }`} />
                  <div className={`absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 ${
                    isDark ? 'border-white/30' : 'border-black/30'
                  }`} />
                  <div className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 ${
                    isDark ? 'border-white/30' : 'border-black/30'
                  }`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
      </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(100px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>

      {/* Add these styles to your existing style tag */}
      <style jsx global>{`
        .clip-progress {
          clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        .geometric-pattern {
          background-image: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                            linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
      `}</style>
    </div>
     
    </>
  );
}
