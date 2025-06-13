'use client'
import React, { useState } from "react";
import { Github, Linkedin, Twitter, X, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-20 bg-black/70 shadow-lg backdrop-blur-sm transition-colors duration-500">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex title-font font-medium items-center text-white cursor-pointer hover:opacity-80 transition-opacity">
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
            <span className="ml-3 text-xl text-white">Faria Mustaqim</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`${isOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex md:items-center text-base justify-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
          >
            <Link href="/component/front" className="hover:text-indigo-400 text-white block">
              Home
            </Link>
            <Link href="/component/about" className="hover:text-indigo-400 text-white block">
              About
            </Link>
            <Link href="/component/skills" className="hover:text-indigo-400 text-white block">
              Skills
            </Link>
            <Link href="/component/projects" className="hover:text-indigo-400 text-white block">
              Projects
            </Link>
            <Link href="/component/contact" className="hover:text-indigo-400 text-white block">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 ml-4">
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
      </header>
    </div>
  );
};

export default Navbar;
