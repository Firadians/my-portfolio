"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, ArrowLeft, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "KISUM – Music Entertainment App",
    description:
      "Track artists, analyze performance, and monitor industry trends. Similar to SoundCharts, with insights from streaming data and social media.",
    image: "/assets/banner/kisum_banner.png",
  },
  {
    title: "P·CLUB – Ticketing Platform",
    description:
      "A modern ticketing platform for events like concerts, dance, ballet — supports NFT-based and digital tickets, inspired by Ticketmaster.",
    image: "/assets/banner/pclub_banner.png",
  },
  {
    title: "ACCESSFLOW – RFID Access App",
    description:
      "An access card system app using RFID and geolocation for restricted areas at PT Petrokimia Gresik. Includes login and news updates.",
    image: "/assets/banner/accessflow_banner.png",
  },
  {
    title: "SEGMENTS – Internal HR App",
    description:
      "Built for the Security Department of PT Petrokimia Gresik. Includes live attendance, salary management, and security reports.",
    image: "/assets/banner/segments_banner.png",
  },
  {
    title: "DEWANGGA – Batik Recognition App",
    description:
      "An Android app using ML & TFLite to recognize Indonesian batik patterns. Uses camera input and Firebase integration.",
    image: "/assets/banner/dewangga_banner.png",
  },
  {
    title: "ENVIHELP – Volunteer Cleaning App (UI/UX)",
    description:
      "Volunteer app concept with bounty-based cleaning tasks. Designed to encourage environmental action through gamification.",
    image: "/assets/banner/envirohelp_banner.png",
  },
  {
    title: "FINFLOW – Personal Finance Tracker",
    description:
      "A platform for managing personal finances, with a focus on providing a seamless personal finance tracking experience for customers.",
    image: "/assets/banner/finflow_banner.png",
  },
  
];

const techLogos = [
  "/assets/tech/flutter.png", 
  "/assets/tech/javascript.png", 
  "/assets/tech/meta.png", 
  "/assets/tech/firebase.png", 
  "/assets/tech/postman.png",
  "/assets/tech/figma.png",
  "/assets/tech/sql.png",
];

const techLogos2 = [
  "/assets/tech/maze.png",
  "/assets/tech/typescript.png",
  "/assets/tech/aws.png",
  "/assets/tech/auth0.png",
  "/assets/tech/eraser.png",
  "/assets/tech/git.png",
  "/assets/tech/laravel.png",
];

// Custom cursor component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(249, 249, 249, 0.05)",
      border: "1px solid rgba(200, 200, 200, 0.5)",
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(249, 249, 249, 0.15)",
      height: 60,
      width: 60,
      border: "1px solid rgba(200, 200, 200, 0.8)",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 backdrop-blur-sm"
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const backgroundY = useTransform(
    springScrollY,
    [0, 1],
    ["0%", "10%"]
  );

  const opacity = useTransform(
    springScrollY,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.9, 0.8, 0.7, 0.6, 0.5]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text reveal animation for the hero title
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const heroText = "I craft digital experiences that combine function with elegance.";

  // Animated gradient background
  const gradientColors = [
    "linear-gradient(45deg, rgba(245, 246, 252, 0.2) 0%, rgba(155, 138, 220, 0.05) 100%)",
    "linear-gradient(45deg, rgba(155, 138, 220, 0.05) 0%, rgba(245, 246, 252, 0.2) 100%)",
  ];
  const [gradient, setGradient] = useState(gradientColors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(gradient === gradientColors[0] ? gradientColors[1] : gradientColors[0]);
    }, 8000);
    return () => clearInterval(interval);
  }, [gradient]);

  const enterHover = () => setCursorVariant("hover");
  const leaveHover = () => setCursorVariant("default");

  return (
    <div 
      ref={containerRef} 
      className="bg-[#f9f9f9] text-[#121212] min-h-screen font-serif relative"
    >
      <CustomCursor />
      
      {/* Animated background gradient */}
      <motion.div 
        className="fixed inset-0 w-full h-full z-0 opacity-50"
        animate={{ background: gradient }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />
      
      {/* Elegant navbar */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm bg-[#f9f9f9]/80 backdrop-blur-md" : "bg-transparent"
      }`}>
        <motion.div 
          className="absolute inset-0 w-full" 
          style={{ 
            scaleX: scrollYProgress,
            transformOrigin: "left",
            height: "2px",
            bottom: 0,
            background: "linear-gradient(90deg, #c6a1f0, #967bb6, #c6a1f0)"
          }}
        />
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            <Link href="/" className="text-xl tracking-tight relative group">
              <span className="relative z-10">M. Firdaus</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#967bb6] group-hover:w-full transition-all duration-300 z-0"></span>
            </Link>
          </motion.div>
          
          <motion.ul 
            className="flex space-x-14 text-sm tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
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
                className="z-50"
              >
                <Link 
                  href={item.path} 
                  className="hover:text-[#967bb6] transition-colors relative group z-50 pointer-events-auto block"
                  onClick={(e) => {
                    // Force navigation on click
                    e.stopPropagation();
                    window.location.href = item.path;
                  }}
                >
                  <span className="relative z-50 pointer-events-auto">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#967bb6] group-hover:w-full transition-all duration-300 z-0"></span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </header>

      {/* Main content with elegant typography */}
      <main>
        {/* Hero section with parallax */}
        <section className="pt-40 pb-32 relative">
          <motion.div 
            className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full opacity-20 blur-3xl bg-purple-200"
            style={{ y: backgroundY }}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.15, 0.1] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 left-20 w-1/4 h-1/4 rounded-full opacity-10 blur-3xl bg-indigo-200"
            style={{ y: backgroundY }}
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.1, 0.18, 0.1] 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
          
          <div className="max-w-4xl mx-auto px-6 relative">
            <motion.h1 
              className="text-5xl font-light mb-20 leading-snug tracking-tight"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {heroText.split("").map((char, index) => {
                return (
                  <motion.span 
                    key={`char-${index}`} 
                    variants={letter}
                    className={char === "f" || char === "e" ? "italic text-[#967bb6]" : ""}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <h2 className="text-lg font-normal mb-6 text-gray-800">About</h2>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  Developer & designer with a focus on creating minimal, 
                  purposeful digital products. I believe in making things that work <span className="text-[#967bb6]">beautifully</span>.
                </p>
                
                <div className="text-sm text-gray-500 space-y-1">
                  <p>Muhammad Firdaus Ardiansyah</p>
                  <p>Indonesia</p>
                  <p>mfirdausa30@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <h2 className="text-lg font-normal mb-6 text-gray-800">Expertise</h2>
                
                <ul className="space-y-6 text-gray-600">
                  {[
                    "Mobile Development",
                    "Product Manager",
                    "UI/UX Designer",
                    "Full Stack Development",
                    "System Analysis"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-baseline group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-xs mr-2 text-[#967bb6] opacity-70 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Tech Stack Marquee - Using Framer Motion */}
        <section className="relative w-full overflow-hidden py-10 bg-[#f9f9f9] border-y border-gray-100">
          <h2 className="text-center text-2xl font-light mb-6">Technologies</h2>
          
          {/* First row - left to right */}
          <div className="overflow-hidden relative mb-8">
            <motion.div
              className="flex whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 120,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              {/* Duplicate the array to create a seamless loop */}
              {[...techLogos, ...techLogos].map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="mx-8 flex items-center justify-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 relative overflow-hidden rounded-md">
                    {/* Gray overlay that fades on hover */}
                    <div className="absolute inset-0 bg-gray-200 opacity-40 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                    
                    <Image
                      src={logo}
                      alt={`Technology Logo ${index}`}
                      fill
                      sizes="(max-width: 768px) 64px, 80px"
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Second row - right to left (opposite direction) */}
          <div className="overflow-hidden relative">
            <motion.div
              className="flex whitespace-nowrap"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 120,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              {/* Duplicate the array to create a seamless loop */}
              {[...techLogos2, ...techLogos2].map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="mx-8 flex items-center justify-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 relative overflow-hidden rounded-md">
                    {/* Gray overlay that fades on hover */}
                    <div className="absolute inset-0 bg-gray-200 opacity-40 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                    
                    <Image
                      src={logo}
                      alt={`Technology Logo ${index + techLogos.length}`}
                      fill
                      sizes="(max-width: 768px) 64px, 80px"
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Statement section with typing effect */}
        <section className="py-32 bg-[#f9f9f9]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.p 
              className="text-3xl font-light leading-relaxed text-gray-800 tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              "The polymath walks where <motion.span
                className="italic text-[#967bb6]"
                animate={{ 
                  color: ["#967bb6", "#c6a1f0", "#967bb6"] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >specialists</motion.span> stall, carving <motion.span
                className="italic text-[#967bb6]"
                animate={{ 
                  color: ["#967bb6", "#c6a1f0", "#967bb6"] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
              >function</motion.span> paths in electric skies."
            </motion.p>
          </div>
        </section>
        
        {/* Projects section with featured projects and count indicator */}
        <section id="work" className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center mb-20">
              <div className="flex items-baseline">
                <motion.h2 
                  className="text-2xl font-light tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Featured Projects
                </motion.h2>
                <motion.span
                  className="ml-3 text-sm text-[#967bb6] bg-purple-50 px-2 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {projects.length - 2}+
                </motion.span>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <Link 
                  href="/work" 
                  className="text-[#967bb6] hover:text-[#7a639a] transition-colors group flex items-center relative z-20"
                >
                  <span className="pointer-events-auto">View All</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform pointer-events-auto">→</span>
                </Link>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="group"
                  onMouseEnter={enterHover}
                  onMouseLeave={leaveHover}
                >
                  <Link href={`/projects/${project.title.toLowerCase().split(' ')[0].replace(/[^a-z0-9]/g, '')}`}>
                    <motion.div 
                      className="aspect-[4/3] overflow-hidden mb-6 bg-gray-50 relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-[#967bb6]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>
                    <h3 className="text-lg font-medium mb-2 tracking-tight group-hover:text-[#967bb6] transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* "Clients" section with elegant styling and interactive elements */}
        <section className="py-32 bg-[#f9f9f9]">
          <div className="max-w-3xl mx-auto px-6">
            <motion.h2 
              className="text-2xl font-light mb-16 text-center tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Clients & Collaborations
            </motion.h2>
            
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {[
                "PT Petrokimia Gresik",
                "Primuse Group",
                "Uterx Healthcare",
                "Various Startups"
              ].map((client, index) => (
                <motion.li 
                  key={index}
                  className="text-gray-600 border-t border-gray-200 pt-4 group"
                  whileHover={{ y: -5, color: "#967bb6" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onMouseEnter={enterHover}
                  onMouseLeave={leaveHover}
                >
                  {client}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>
      </main>

      {/* Elegant footer with animated elements */}
      <footer className="border-t border-gray-200 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <motion.div 
              className="mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              <h3 className="text-lg font-medium mb-4 tracking-tight">Contact</h3>
              <p className="text-sm text-gray-500 mb-1">
                Muhammad Firdaus Ardiansyah
              </p>
              <a 
                href="mailto:mfirdausa30@gmail.com" 
                className="text-sm text-gray-500 hover:text-[#967bb6] transition-colors inline-block relative group"
              >
                <span>mfirdausa30@gmail.com</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#967bb6] group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-lg font-medium mb-4 tracking-tight">Connect</h3>
              <div className="flex space-x-6">
                {[
                  { icon: <Github size={20} />, url: "https://github.com/Firadians" },
                  { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/muhammad-firdausa/" },
                  { icon: <Instagram size={20} />, url: "https://www.instagram.com/firadians?igsh=dnhzNmM4Z2duOTFm" },
                  { icon: <Mail size={20} />, url: "mailto:mfirdausa30@gmail.com" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-[#967bb6] transition-colors"
                    whileHover={{ 
                      scale: 1.2,
                      color: "#967bb6",
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={enterHover}
                    onMouseLeave={leaveHover}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-xs text-gray-400 pt-8 border-t border-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Muhammad Firdaus Ardiansyah. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
