'use client'

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
const Front = () => {
  return (
    <div className="relative bg-black overflow-hidden min-h-screen transition-colors duration-500">
    {/* Background Video with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/167508-837077528_tiny.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>


      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black/70 shadow-lg backdrop-blur-sm transition-colors duration-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-white cursor-pointer hover:opacity-80 transition-opacity">
            {/* Custom Logo */}
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
            <span className="ml-3 text-xl text-white">
              Faria Mustaqim
            </span>
          </Link>

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
          

          {/* Social Icons */}
          <div className="flex items-center gap-6 ml-8">
            <div className="flex gap-4">
              <a
                href="https://github.com/Zaibunis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/faria-mustaqeem-3367b5301/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://x.com/Faria1539114"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
      </header>
      

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-8 bg-black/50">
        <motion.h1 
          className="title-font sm:text-5xl text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Faria Mustaqim: Frontend Developer<br className="hidden lg:inline-block" />
          Crafting Engaging Web Experiences
        </motion.h1>
        <motion.p 
          className="mt-4 mb-8 text-lg text-gray-200 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Building high-performance web applications using Next.js, Tailwind CSS, Web 3.0, and Blockchain.
        </motion.p>
        <div className="flex justify-center">
          <motion.a 
            href="/component/contact"
            className="inline-flex items-center justify-center text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-transparent py-3 px-6 focus:outline-none rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
          <motion.a 
            href="/component/projects"
            className="ml-4 inline-flex items-center justify-center text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-transparent py-3 px-6 focus:outline-none rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            View Projects
          </motion.a>
        </div>
      </div>
    </div>
    
  );
};

export default Front;
