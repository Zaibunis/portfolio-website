'use client'

import React , { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, X, Menu} from "lucide-react";
import Link from "next/link";
const Front = () => {
   const [isOpen, setIsOpen] = useState(false);

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


      

      

      {/* Hero Section */}
<div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-8 bg-black/50">
  <motion.h1 
    className="title-font text-3xl sm:text-5xl font-extrabold text-white"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Faria Mustaqim: Frontend Developer<br className="hidden lg:inline-block" />
    Crafting Engaging Web Experiences
  </motion.h1>

  <motion.p 
    className="mt-4 mb-8 text-base sm:text-lg text-gray-200 max-w-2xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    Building high-performance web applications using Next.js, Tailwind CSS, Web 3.0, and Blockchain.
  </motion.p>

  <div className="flex justify-center flex-wrap gap-4">
    <motion.a 
      href="/component/contact"
      className="inline-flex items-center justify-center text-sm sm:text-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-transparent py-2 sm:py-3 px-4 sm:px-6 text-white focus:outline-none rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      Contact Me
    </motion.a>

    <motion.a 
      href="/component/projects"
      className="ml-0 sm:ml-4 inline-flex items-center justify-center text-sm sm:text-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-transparent py-2 sm:py-3 px-4 sm:px-6 text-white focus:outline-none rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
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
