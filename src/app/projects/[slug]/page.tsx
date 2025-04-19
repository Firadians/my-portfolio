'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { useParams } from 'next/navigation';

// Dummy project data - you can replace this later
const projectsData = {
  "kisum": {
    title: "KISUM – Music Entertainment App",
    description: "Track artists, analyze performance, and monitor industry trends. Similar to SoundCharts, with insights from streaming data and social media.",
    fullDescription: "KISUM is a comprehensive music analytics and entertainment platform designed for artists, labels, and industry professionals. It offers deep insights into streaming performance, social media engagement, and market trends to help stakeholders make data-driven decisions.",
    challenge: "The music industry lacks accessible analytics that combine streaming performance with social media impact. Artists and labels need unified dashboards to understand their audience and track growth across platforms.",
    solution: "KISUM integrates APIs from major streaming services and social platforms, presenting unified analytics with intuitive visualizations. It features customizable dashboards, automated reports, and predictive trends using machine learning.",
    technologies: ["Flutter", "Firebase", "Node.js", "TensorFlow", "Spotify API", "Twitter API", "YouTube API"],
    features: [
      "Real-time streaming analytics",
      "Social media sentiment analysis",
      "Audience demographics visualization",
      "Competitor benchmarking",
      "Customizable reporting",
      "Predictive trend forecasting"
    ],
    images: [
      "/assets/banner/kisum_banner.png",
      "/assets/details/kisum_detail1.png",
      "/assets/details/kisum_detail2.png"
    ],
    duration: "8 months",
    role: "Lead Mobile Developer & Product Manager",
    links: {
      github: "https://github.com/Firadians/kisum",
      live: "https://kisum-app.com"
    }
  },
  "pclub": {
    title: "P·CLUB – Ticketing Platform",
    description: "A modern ticketing platform for events like concerts, dance, ballet — supports NFT-based and digital tickets, inspired by Ticketmaster.",
    fullDescription: "P·CLUB revolutionizes event ticketing with a focus on premium cultural experiences like ballet, opera, and exclusive concerts. The platform combines traditional ticketing with blockchain technology for secure, verifiable tickets.",
    challenge: "Traditional ticketing suffers from counterfeiting, scalping, and poor user experience. Event organizers need better tools to manage attendance and engage with audiences before and after events.",
    solution: "P·CLUB implements blockchain verification for ticket authenticity while maintaining a user-friendly interface. It includes features for event discovery, seat selection with AR preview, and post-event community engagement.",
    technologies: ["Kotlin", "React", "Ethereum", "Firebase", "Google Maps API", "ARCore", "Stripe"],
    features: [
      "NFT-based ticket verification",
      "Interactive seating charts with AR preview",
      "Event recommendations based on preferences",
      "Digital collectibles from attended events",
      "Contactless venue entry",
      "Secondary market with royalties to original organizers"
    ],
    images: [
      "/assets/banner/pclub_banner.png",
      "/assets/details/pclub_detail1.png",
      "/assets/details/pclub_detail2.png"
    ],
    duration: "10 months",
    role: "Full Stack Developer",
    links: {
      github: "https://github.com/Firadians/pclub",
      live: "https://pclub-tickets.com"
    }
  },
  "accessflow": {
    title: "ACCESSFLOW – RFID Access App",
    description: "An access card system app using RFID and geolocation for restricted areas at PT Petrokimia Gresik. Includes login and news updates.",
    fullDescription: "ACCESSFLOW is an enterprise-grade access control system developed for PT Petrokimia Gresik's high-security areas. It combines RFID technology with mobile verification and real-time location tracking to ensure only authorized personnel can access sensitive locations.",
    challenge: "Traditional key card systems are vulnerable to sharing and don't provide adequate audit trails. The chemical manufacturing facilities required stricter access controls with multi-factor authentication.",
    solution: "ACCESSFLOW implements a dual verification system requiring both RFID cards and mobile authentication with biometrics. It includes geofencing, real-time monitoring, and comprehensive access logs for security compliance.",
    technologies: ["Flutter", "Java", "RFID Integration", "Biometrics API", "Firebase", "MySQL", "Google Maps API"],
    features: [
      "Multi-factor authentication",
      "Geofencing for location verification",
      "Real-time access monitoring dashboard",
      "Emergency protocols and alerts",
      "Comprehensive audit logs",
      "Company news and announcements integration"
    ],
    images: [
      "/assets/banner/accessflow_banner.png",
      "/assets/details/accessflow_detail1.png",
      "/assets/details/accessflow_detail2.png"
    ],
    duration: "6 months",
    role: "Mobile Developer & Security Consultant",
    links: {
      github: "https://github.com/Firadians/accessflow",
      live: ""
    }
  },
  "segments": {
    title: "SEGMENTS – Internal HR App",
    description: "Built for the Security Department of PT Petrokimia Gresik. Includes live attendance, salary management, and security reports.",
    fullDescription: "SEGMENTS is a comprehensive HR and operations management platform designed specifically for the Security Department of PT Petrokimia Gresik. It streamlines workforce management, attendance tracking, and security reporting in one integrated system.",
    challenge: "Manual HR processes led to inefficiencies in scheduling, attendance tracking, and payroll management. Security reports were siloed and difficult to correlate for comprehensive threat assessment.",
    solution: "SEGMENTS centralizes all aspects of security personnel management with biometric attendance verification, automated scheduling, and integrated security incident reporting with threat analysis capabilities.",
    technologies: ["Kotlin", "Laravel", "PostgreSQL", "Biometrics API", "GIS Integration", "JWT Authentication"],
    features: [
      "Biometric attendance verification",
      "Shift scheduling with conflict resolution",
      "Automated payroll calculation",
      "Security incident reporting and analysis",
      "Personnel qualification tracking",
      "Performance analytics dashboard"
    ],
    images: [
      "/assets/banner/segments_banner.png",
      "/assets/details/segments_detail1.png",
      "/assets/details/segments_detail2.png"
    ],
    duration: "7 months",
    role: "Lead Backend Developer",
    links: {
      github: "https://github.com/Firadians/segments",
      live: ""
    }
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Type assertion to tell TypeScript that slug is a valid key
    const projectData = projectsData[slug as keyof typeof projectsData];
    if (projectData) {
      setProject(projectData);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <motion.div 
        className="w-8 h-8 border-2 border-[#967bb6] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>;
  }

  if (!project) {
    return <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-light mb-4">Project not found</h1>
      <Link href="/" className="text-[#967bb6] hover:underline">
        Return to home
      </Link>
    </div>;
  }

  return (
    <div className="bg-[#f9f9f9] text-[#121212] min-h-screen font-serif">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f9f9f9]/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-6">
          <Link href="/" className="flex items-center text-[#967bb6] hover:text-[#7a639a] transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to projects</span>
          </Link>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Project title */}
          <motion.h1 
            className="text-4xl font-light mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>

          {/* Featured image */}
          <motion.div 
            className="w-full aspect-[16/9] relative mb-10 bg-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src={project.images[activeImageIndex]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Image thumbnails */}
          {project.images.length > 1 && (
            <motion.div 
              className="flex space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.images.map((img: string, index: number) => (
                <div 
                  key={index} 
                  className={`w-20 h-20 relative cursor-pointer ${
                    activeImageIndex === index ? 'ring-2 ring-[#967bb6]' : 'opacity-60'
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image
                    src={img}
                    alt={`${project.title} - image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {/* Project information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-light mb-4">Overview</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              <h2 className="text-2xl font-light mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {project.challenge}
              </p>

              <h2 className="text-2xl font-light mb-4">The Solution</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {project.solution}
              </p>

              <h2 className="text-2xl font-light mb-4">Key Features</h2>
              <ul className="list-disc pl-5 text-gray-700 mb-8 space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-[#967bb6]">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500">Role</h4>
                    <p>{project.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500">Duration</h4>
                    <p>{project.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {(project.links.github || project.links.live) && (
                    <div>
                      <h4 className="text-sm text-gray-500">Links</h4>
                      <div className="flex space-x-4 mt-2">
                        {project.links.github && (
                          <a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#967bb6] hover:text-[#7a639a]"
                          >
                            <Github size={16} className="mr-1" />
                            <span>Repository</span>
                          </a>
                        )}
                        
                        {project.links.live && (
                          <a 
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#967bb6] hover:text-[#7a639a]"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Next projects */}
          <motion.div 
            className="mt-20 border-t border-gray-200 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-light mb-8 text-center">Other Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(projectsData)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, data]: [string, any]) => (
                  <Link 
                    key={slug} 
                    href={`/projects/${data.title.toLowerCase().split('–')[0].trim().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <div className="aspect-video relative overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-[#967bb6]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Image
                        src={data.images[0]}
                        alt={data.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="text-lg font-medium group-hover:text-[#967bb6] transition-colors">{data.title}</h3>
                    <p className="text-sm text-gray-500">{data.description}</p>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link href="/" className="text-[#967bb6] hover:text-[#7a639a] transition-colors">
            Return to Home
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} Muhammad Firdaus Ardiansyah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 