'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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

export default function AboutPage() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const enterHover = () => setCursorVariant("hover");
  const leaveHover = () => setCursorVariant("default");

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#121212] font-serif">
      <CustomCursor />
      
      {/* Animated background gradient */}
      <motion.div 
        className="fixed inset-0 w-full h-full z-0 opacity-50"
        animate={{ 
          background: [
            "linear-gradient(45deg, rgba(245, 246, 252, 0.2) 0%, rgba(155, 138, 220, 0.05) 100%)",
            "linear-gradient(45deg, rgba(155, 138, 220, 0.05) 0%, rgba(245, 246, 252, 0.2) 100%)"
          ]
        }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Header with navigation */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm bg-[#f9f9f9]/80 backdrop-blur-md" : "bg-transparent"
      }`}>
        <motion.div 
          className="absolute inset-0 w-full" 
          style={{ 
            scaleX: scrolled ? 1 : 0,
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
              { name: "Work", path: "/#work" }, 
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
                <Link 
                  href={item.path} 
                  className={`hover:text-[#967bb6] transition-colors relative group ${
                    item.name === "About" ? "text-[#967bb6]" : ""
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-[#967bb6] transition-all duration-300 z-0 ${
                    item.name === "About" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </header>

      <div className="px-6 py-32 max-w-5xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-light mb-16 text-center tracking-tight"
          onMouseEnter={enterHover}
          onMouseLeave={leaveHover}
        >
          About <span className="italic text-[#967bb6]">Me</span>
        </motion.h1>

        <section className="mb-16 relative">
          <motion.div 
            className="absolute -top-10 -left-20 w-40 h-40 rounded-full opacity-10 blur-3xl bg-purple-200 -z-10"
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
          
          <motion.h2 
            className="text-2xl font-light mb-4 tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            <span className="text-[#967bb6]">01.</span> Who am I?
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I'm <strong className="text-[#967bb6]">Muhammad Firdaus Ardiansyah</strong>, a passionate and experienced Mobile Developer with a
            background in full-stack development, system design, and UI/UX. With hands-on experience building apps using
            Flutter, Kotlin, Laravel, and Express.js, I specialize in turning complex ideas into beautiful and functional
            mobile solutions.
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-2xl font-light mb-4 tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            <span className="text-[#967bb6]">02.</span> Education & Certificates
          </motion.h2>
          
          <motion.ul 
            className="space-y-4 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              { title: "Brawijaya University", desc: "Bachelor of Computer Science (GPA 3.80) | 2020–2024" },
              { title: "Bangkit Academy 2023", desc: "Android Development Path (Capstone, SOLID, Jetpack Compose)" },
              { title: "Udemy: Flutter & Dart: SOLID Principles", desc: "Design Patterns & SOLID Principles | Oct 2024" },
              { title: "Udemy: Dart - Intermediate Course", desc: "Advanced Dart programming concepts | Oct 2024" },
              { title: "Udemy: Dart - Beginners Course", desc: "Fundamentals of Dart programming | Oct 2024" },
              { title: "HackerRank: REST API Intermediate", desc: "API development certification | Oct 2024" },
              { title: "HackerRank: Problem Solving Basic", desc: "Algorithm & problem-solving skills | Aug 2024" },
              { title: "HackerRank: SQL Basic", desc: "Database query fundamentals | Aug 2024" },
              { title: "Global Digital Savvy", desc: "PT. Golden Regency Consulting | Sep 2023" },
              { title: "Dicoding: Android Intermediate", desc: "Advanced Android development concepts | Jun 2023" },
              { title: "Dicoding: UX Design Fundamentals", desc: "User experience design principles | May 2023" },
              { title: "Dicoding: Jetpack Compose", desc: "Modern Android UI development | May 2023" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="border-b border-gray-100 pb-4"
                whileHover={{ x: 5 }}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-medium text-[#967bb6]">{item.title}</span>
                <span className="mx-2">–</span>
                <span>{item.desc}</span>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section className="mb-16 relative">
          <motion.div 
            className="absolute -bottom-10 -right-20 w-40 h-40 rounded-full opacity-10 blur-3xl bg-indigo-200 -z-10"
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
          
          <motion.h2 
            className="text-2xl font-light mb-6 tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            <span className="text-[#967bb6]">03.</span> Experience
          </motion.h2>
          
          <div className="space-y-8">
            {[
              {
                company: "Primuse Group – Mobile Developer",
                period: "Dec 2024 – Present",
                details: [
                  "Built & deployed cross-platform mobile apps with Flutter.",
                  "Integrated Stripe payments & collaborated on API integration.",
                ]
              },
              {
                company: "Uterx Healthcare – Freelance Flutter Dev",
                period: "Nov – Dec 2024",
                details: [
                  "Resolved bugs & improved performance on Flutter codebase.",
                  "Used GitHub to manage tasks and track issues.",
                ]
              },
              {
                company: "PT Petrokimia Gresik – Full Stack Mobile Dev",
                period: "Aug – Dec 2023",
                details: [
                  "Built RFID gate access app with maps, news, and secure login.",
                  "Designed internal HR app for live attendance and salary reports.",
                ]
              }
            ].map((exp, index) => (
              <Experience
                key={index}
                company={exp.company}
                period={exp.period}
                details={exp.details}
                index={index}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <motion.h2 
            className="text-2xl font-light mb-6 tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            <span className="text-[#967bb6]">04.</span> Skills & Tools
          </motion.h2>
          
          <motion.ul 
            className="flex flex-wrap gap-3 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[
              'Flutter', 'Kotlin', 'Dart', 'Firebase', 'Laravel', 'Express.js', 'Figma', 'Git',
              'Postman', 'Adobe Tools', 'Android Studio', 'VS Code',
            ].map((skill, index) => (
              <motion.li 
                key={skill} 
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  backgroundColor: "#967bb6" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
                className="bg-[#c6a1f0]/80 text-white rounded-full px-4 py-1.5"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <motion.section 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl font-light mb-6 tracking-tight"
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            Want to see my work?
          </motion.h2>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            <Link
              href="/portfolio"
              className="inline-block bg-[#967bb6] hover:bg-[#7a639a] text-white py-3 px-8 rounded-full transition relative group overflow-hidden"
            >
              <motion.span 
                className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">View Portfolio</span>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

function Experience({
  company,
  period,
  details,
  index,
  onMouseEnter,
  onMouseLeave
}: {
  company: string;
  period: string;
  details: string[];
  index: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + (index * 0.1), duration: 0.6 }}
      whileHover={{ x: 5 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="border-l-2 border-[#c6a1f0]/30 pl-6 py-2 hover:border-[#c6a1f0]"
    >
      <h3 className="font-medium text-lg">{company}</h3>
      <p className="text-sm text-[#967bb6] mb-3">{period}</p>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-2">
        {details.map((point, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-[#c6a1f0] mr-2">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
