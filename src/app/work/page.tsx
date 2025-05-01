'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Filter } from 'lucide-react';

// Import the project data or define it here
const allProjects = [
  {
    title: "KISUM – Music Entertainment App",
    description: "Track artists, analyze performance, and monitor industry trends. Similar to SoundCharts, with insights from streaming data and social media.",
    image: "/assets/banner/kisum_banner.png",
    category: "Mobile App",
    year: "2024-Now"
  },
  {
    title: "P·CLUB – Ticketing Platform",
    description: "A modern ticketing platform for events like concerts, dance, ballet — supports NFT-based and digital tickets, inspired by Ticketmaster.",
    image: "/assets/banner/pclub_banner.png",
    category: "Mobile App",
    year: "2024-Now"
  },
  {
    title: "P·CLUB SCANNER – Ticketing Platform",
    description: "A modern ticketing platform for events like concerts, dance, ballet — supports NFT-based and digital tickets, inspired by Ticketmaster.",
    image: "/assets/banner/pclub_banner.png",
    category: "Mobile App",
    year: "2024-Now"
  },
  {
    title: "P·CLUB ARTIST – Ticketing Platform",
    description: "A modern ticketing platform for events like concerts, dance, ballet — supports NFT-based and digital tickets, inspired by Ticketmaster.",
    image: "/assets/banner/pclub_banner.png",
    category: "Mobile App",
    year: "Coming Soon"
  },
  {
    title: "ACCESSFLOW – RFID Access App",
    description: "An access card system app using RFID and geolocation for restricted areas at PT Petrokimia Gresik. Includes login and news updates.",
    image: "/assets/banner/accessflow_banner.png",
    category: "Mobile App",
    year: "2023"
  },
  {
    title: "SEGMENTS – Internal HR App",
    description: "Built for the Security Department of PT Petrokimia Gresik. Includes live attendance, salary management, and security reports.",
    image: "/assets/banner/segments_banner.png",
    category: "Mobile App",
    year: "2023"
  },
  {
    title: "DEWANGGA – Batik Platform",
    description: "A platform for selling batik products, with a focus on providing a seamless shopping experience for customers.",
    image: "/assets/banner/dewangga_banner.png",
    category: "Mobile App",
    year: "2022"
  },
  {
    title: "KENANGIN – E-Commerce Platform",
    description: "An e-commerce platform for selling products, with a focus on providing a seamless shopping experience for customers.",
    image: "/assets/banner/kenangin_banner.png",
    category: "UI/UX Design",
    year: "2022"
  },
  {
    title: "ENVIHELP – Environment Monitoring Platform",
    description: "An environment monitoring platform for monitoring the environment, with a focus on providing a seamless monitoring experience for customers.",
    image: "/assets/banner/envirohelp_banner.png",
    category: "Product Management",
    year: "2022"
  },
  {
    title: "CONTACTME – Contact Management App",
    description: "A contact management app for managing contacts, with a focus on providing a seamless contact management experience for customers.",
    image: "/assets/banner/contactme_banner.png",
    category: "Mobile App",
    year: "2024"
  },
  {
    title: "FINFLOW – Personal Finance Tracker",
    description: "Elegant personal finance app for tracking expenses, budgeting, and financial goal planning.",
    image: "/assets/banner/finflow_banner.png",
    category: "Mobile App",
    year: "2025"
  }
];

// All possible categories for filtering
const categories = ["All", "Mobile App", "Web App", "UI/UX Design", "Product Management"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [cursorScale, setCursorScale] = useState(1);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  // Cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const enterHover = () => setCursorScale(2.5);
  const leaveHover = () => setCursorScale(1);

  return (
    <div className="bg-[#f9f9f9] text-[#121212] min-h-screen font-serif">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 rounded-full bg-[#967bb6] opacity-70 mix-blend-difference pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
        }}
      />

      {/* Header - Same as main page */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#f9f9f9]/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-6">
          <Link href="/" className="text-xl text-[#121212] font-light z-20 pointer-events-auto">
            Firdaus
          </Link>
          
          <ul className="flex space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: "About", path: "/about" }
            ].map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <Link href={item.path} className="hover:text-[#967bb6] transition-colors relative group z-20 pointer-events-auto">
                  <span className="relative z-10 pointer-events-auto">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#967bb6] group-hover:w-full transition-all duration-300 z-0"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page title */}
          <motion.h1 
            className="text-4xl font-light mb-12 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            All Work
          </motion.h1>

          {/* Category filter */}
          <motion.div 
            className="mb-12 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center mr-2">
              <Filter size={16} className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-500">Filter:</span>
            </div>
            
            {categories.map((category, index) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-[#967bb6] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <Link href={`/projects/${project.title.toLowerCase().split(' ')[0].replace(/[^a-z0-9]/g, '')}`}>
                  <div className="aspect-[4/3] overflow-hidden mb-4 bg-gray-50 relative">
                    <div className="absolute inset-0 bg-[#967bb6]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium tracking-tight group-hover:text-[#967bb6] transition-colors pr-4">{project.title}</h3>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 leading-relaxed mb-2">{project.description}</p>
                  </div>
                  
                  <span className="text-xs py-1 px-2 bg-gray-100 text-gray-600 inline-block rounded-full">
                    {project.category}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Muhammad Firdaus Ardiansyah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 