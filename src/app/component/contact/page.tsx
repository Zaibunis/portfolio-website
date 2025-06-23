'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Twitter,Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaGraduationCap, FaLaptopCode, FaBrain, FaRocket } from 'react-icons/fa';
export default function Contact() {
   const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);
    form.append('_subject', 'New Contact Form Submission');
    form.append('_template', 'table');
    form.append('_captcha', 'false');
    form.append('_autoresponse', 'Thank you for contacting me! I will reply soon.');

    try {
      const response = await fetch('https://formsubmit.co/56bfe3c8dc7e27c91310ebff7098c7cc', {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  
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
    <div className={`min-h-screen ${
      isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    } ${isDark ? 'text-white' : 'text-black'} relative overflow-hidden transition-colors duration-500`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${
          isDark 
            ? 'from-purple-900/20 via-black to-black'
            : 'from-purple-100/50 via-white to-white'
        }`} />
        <div className={`absolute top-0 left-0 w-full h-full ${
          isDark 
            ? 'bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)]'
        } bg-[size:4rem_4rem]`} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-20 pt-10">
          <h1 className="text-6xl font-bold relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
              Get in Touch
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
            <div className="absolute -inset-1 blur-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30" />
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side - Social Links */}
          <div className="space-y-8">
            {[
              {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/faria-mustaqeem-3367b5301/',
                color: 'cyan',
                icon: '→'
              },
              {
                name: 'Twitter',
                link: 'https://x.com/Faria1539114',
                color: 'purple',
                icon: '→'
              },
              {
                name: 'GitHub',
                link: 'https://github.com/Zaibunis',
                color: 'pink',
                icon: '→'
              }
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`
                  relative overflow-hidden rounded-lg p-6
                  ${isDark 
                    ? `bg-gradient-to-r from-${social.color}-500/10 to-transparent`
                    : `bg-gradient-to-r from-${social.color}-100 to-transparent`
                  }
                  border border-${social.color}-500/20
                  hover:border-${social.color}-500/50
                  transition-all duration-500
                `}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                    isDark ? 'via-white/5' : 'via-black/5'
                  } to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h3 className={`text-2xl font-bold text-${social.color}-${isDark ? '400' : '600'}`}>
                        {social.name}
                      </h3>
                      <p className={`${isDark ? 'text-white/60' : 'text-black/60'} mt-2`}>
                        Connect with me
                      </p>
                    </div>
                    <span className={`
                      text-3xl transform group-hover:translate-x-2 
                      transition-transform duration-300 text-${social.color}-${isDark ? '400' : '600'}
                    `}>
                      {social.icon}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-30" />
            <form 
              onSubmit={handleSubmit} 
              className={`relative backdrop-blur-sm ${
                isDark ? 'bg-black/50' : 'bg-white/50'
              } rounded-2xl p-8 border ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <div className="space-y-6">
                {/* Stylized Input Fields */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-5 py-4 ${
                      isDark ? 'bg-white/5' : 'bg-black/5'
                    } rounded-lg border ${
                      isDark ? 'border-white/10' : 'border-black/10'
                    } focus:border-purple-500 transition-all duration-300 outline-none group-hover:border-purple-500/50 ${
                      isDark ? 'text-white' : 'text-black'
                    } placeholder:${isDark ? 'text-white/50' : 'text-black/50'}`}
                    required
                  />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-5 py-4 ${
                      isDark ? 'bg-white/5' : 'bg-black/5'
                    } rounded-lg border ${
                      isDark ? 'border-white/10' : 'border-black/10'
                    } focus:border-purple-500 transition-all duration-300 outline-none group-hover:border-purple-500/50 ${
                      isDark ? 'text-white' : 'text-black'
                    } placeholder:${isDark ? 'text-white/50' : 'text-black/50'}`}
                    required
                  />
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className={`w-full px-5 py-4 ${
                      isDark ? 'bg-white/5' : 'bg-black/5'
                    } rounded-lg border ${
                      isDark ? 'border-white/10' : 'border-black/10'
                    } focus:border-purple-500 transition-all duration-300 outline-none group-hover:border-purple-500/50 ${
                      isDark ? 'text-white' : 'text-black'
                    } placeholder:${isDark ? 'text-white/50' : 'text-black/50'}`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="relative w-full group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`relative px-6 py-3 ${
                    isDark ? 'bg-black' : 'bg-white'
                  } rounded-lg border ${
                    isDark ? 'border-white/10' : 'border-black/10'
                  } group-hover:border-purple-500/50 transition-colors duration-300`}>
                    <span className="relative z-10 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </span>
                  </div>
                </button>

             {/* Status Messages */}
{status === 'success' && (
  <div className="mt-4 text-center">
    <p className="bg-black text-white border border-white/20 px-4 py-3 rounded-md font-medium inline-block">
      Message sent successfully.
    </p>
  </div>
)}
{status === 'error' && (
  <div className="mt-4 text-center">
    <p className="bg-black text-white border border-white/20 px-4 py-3 rounded-md font-medium inline-block">
      Failed to send message. Please try again.
    </p>
  </div>
)}
</div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
