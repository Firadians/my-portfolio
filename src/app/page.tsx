"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "KISUM – Music Entertainment App",
    description:
      "Track artists, analyze performance, and monitor industry trends. Similar to SoundCharts, with insights from streaming data and social media.",
    image: "/project1.png",
  },
  {
    title: "P·CLUB – Ticketing Platform",
    description:
      "A modern ticketing platform for events like concerts, dance, ballet — supports NFT-based and digital tickets, inspired by Ticketmaster.",
    image: "/project2.png",
  },
  {
    title: "ACCESSFLOW – RFID Access App",
    description:
      "An access card system app using RFID and geolocation for restricted areas at PT Petrokimia Gresik. Includes login and news updates.",
    image: "/project3.png",
  },
  {
    title: "SEGMENTS – Internal HR App",
    description:
      "Built for the Security Department of PT Petrokimia Gresik. Includes live attendance, salary management, and security reports.",
    image: "/project1.png",
  },
  {
    title: "DEWANGGA – Batik Recognition App",
    description:
      "An Android app using ML & TFLite to recognize Indonesian batik patterns. Uses camera input and Firebase integration.",
    image: "/project2.png",
  },
  {
    title: "ENVIHELP – Volunteer Cleaning App (UI/UX)",
    description:
      "Volunteer app concept with bounty-based cleaning tasks. Designed to encourage environmental action through gamification.",
    image: "/project3.png",
  },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#f9f9f9] dark:bg-[#111] text-[#111] dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "shadow-md bg-white/70 dark:bg-[#111]/70" : "bg-transparent"
        } backdrop-blur-md border-b border-transparent dark:border-gray-800`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Image
              src="/assets/logo/mfa_logo.png"
              alt="MFA Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </motion.div>

          {/* Navigation */}
          <ul className="flex space-x-6 text-sm font-medium">
            {[
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Price", href: "#price" },
              { label: "Contact", href: "#contact" },
            ].map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <a
                  href={item.href}
                  className="relative text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl max-w-2xl text-gray-600 dark:text-gray-300"
        >
          Explore my projects, concepts, and creative experiments — from real-world mobile apps to UX design challenges.
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className={`transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-8 py-16 bg-gray-100 dark:bg-[#222] text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I’m Muhammad Firdaus Ardiansyah, a Flutter-focused mobile developer with experience in UI/UX, full stack development, and system analysis.
          I've built and published apps that improve usability and scale, and I enjoy crafting beautiful user experiences.
        </motion.p>
        <Link
          href="/about"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
        >
          More About Me →
        </Link>
      </section>

      {/* Pricing (placeholder) */}
      <section id="price" className="p-8 py-16 text-center bg-white dark:bg-[#111]">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Coming soon: Freelance pricing, project rates, and service packages.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Have a project or collaboration idea? Let’s connect and make it happen!
        </p>
        <a
          href="mailto:mfirdausa30@gmail.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
        >
          Contact Me
        </a>
      </section>

      <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Muhammad Firdaus Ardiansyah. All rights reserved.
      </footer>
    </div>
  );
}
