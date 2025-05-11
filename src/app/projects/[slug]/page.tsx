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
    technologies: ["Flutter", "Firebase", "TensorFlow", "Social Media API","Auth0","AWS"],
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
    duration: "NaN",
    role: "Lead Mobile Developer & Product Manager",
    links: {
      github: "https://github.com/Firadians/kisum",
      live: "https://kisum-app.com"
    }
  },
 "pclub": {
  "title": "P·CLUB – Social Ticketing Platform",
  "description": "A complete event ticketing and social engagement app that connects users with events and each other. Supports ticket and table booking for concerts, DJ parties, and more.",
  "fullDescription": "P·CLUB is a modern ticketing platform that empowers users to discover, book, and attend diverse events — from concerts to private parties — while connecting with fellow attendees. Promotors can easily create and publish events, manage tickets, and engage with the audience directly through the app.",
  "challenge": "Event-goers struggle to find quality events and connect socially before attending. Organizers lack an efficient system to promote events and manage attendees.",
  "solution": "P·CLUB offers a dual-role platform — users can explore events, book tickets or tables, chat with attendees, and select seats; while promotors can create events, manage bookings, and connect with their audience in real time.",
  "technologies": ["Flutter", "MongoDB", "Stripe", "Firebase", "Google Maps API", "Deep Link", "AWS", "Chat System"],
  "features": [
    "Ticket & Table Booking",
    "Event Discovery & Filtering",
    "Promotor Event Dashboard",
    "In-App Chat & Social Features",
    "Seat Selection with Preview",
    "Contactless Check-In Integration"
  ],
  "images": [
    "/assets/projects/pclub/1.png",
    "/assets/projects/pclub/2.png",
    "/assets/projects/pclub/3.png",
    "/assets/projects/pclub/4.png"
  ],
  "duration": "Ongoing",
  "role": "Mobile Developer",
  "links": {
    "github": "https://github.com/Firadians/pclub",
    "live": "https://pclub-tickets.com"
  }
},

"pclub_scanner": {
  "title": "P·CLUB SCANNER – Event Access & Analytics Tool",
  "description": "A companion app for promotors to verify tickets at entry points and monitor event statistics in real time.",
  "fullDescription": "P·CLUB SCANNER is designed for promotors to efficiently manage event access. The app scans digital or NFT-based tickets via barcode and provides real-time insights into attendance and crowd behavior, ensuring smooth operations and security.",
  "challenge": "Event organizers face bottlenecks at entrances, ticket fraud, and a lack of data insights during live events.",
  "solution": "The scanner app enables barcode ticket validation with live feedback, real-time attendance tracking, and access to metrics like check-in rates and user behavior analysis.",
  "technologies": ["Flutter", "MongoDB", "Google Analytics", "Firebase", "Google Maps API", "Barcode Scanner"],
  "features": [
    "Ticket Barcode Scanning",
    "Real-Time Check-In Dashboard",
    "Promotor Analytics & Metrics",
    "Event Access Control",
    "Secure Ticket Validation with Blockchain"
  ],
  "images": [
    "/assets/projects/pclub_scanner/1.png"
  ],
  "duration": "Ongoing",
  "role": "Mobile Developer",
  "links": {
    "github": "https://github.com/Firadians/pclub",
    "live": "https://pclub-tickets.com"
  }
}
,
  "pclub_artist": {
    title: "P·CLUB ARTIST – Ticketing Platform",
    description: "A modern ticketing platform for events like concerts, dance, ballet — supports NFT-based and digital tickets, inspired by Ticketmaster.",
    fullDescription: "P·CLUB revolutionizes event ticketing with a focus on premium cultural experiences like ballet, opera, and exclusive concerts. The platform combines traditional ticketing with blockchain technology for secure, verifiable tickets.",
    challenge: "Traditional ticketing suffers from counterfeiting, scalping, and poor user experience. Event organizers need better tools to manage attendance and engage with audiences before and after events.",
    solution: "P·CLUB implements blockchain verification for ticket authenticity while maintaining a user-friendly interface. It includes features for event discovery, seat selection with AR preview, and post-event community engagement.",
    technologies: ["Kotlin", "React", "Ethereum", "Firebase", "Google Maps API", "ARCore", "Stripe"],
    features: [
      "Artist Dashboard",
      "Ticket Management",
      "Event Discovery",
      "Seat Selection",
      "Post-Event Community Engagement",
      "Contactless Venue Entry",
      "Secondary Market with Royalties to Original Organizers"
    ],
    images: [
      "/assets/projects/pclub_artist/1.png",
      "/assets/projects/pclub_artist/2.png",
      "/assets/projects/pclub_artist/3.png",
      "/assets/projects/pclub_artist/4.png",
      "/assets/projects/pclub_artist/5.png",
      "/assets/projects/pclub_artist/6.png",
      "/assets/projects/pclub_artist/7.png",
      "/assets/projects/pclub_artist/8.png",
    ],
    duration: "NaN",
    role: "Mobile Developer",
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
    technologies: ["Flutter", "PHP", "RFID Integration", "Biometrics API", "Firebase", "MySQL", "Google Maps API"],
    features: [
      "RFID Card",
      "Geofencing for location verification",
      "Real-time access monitoring dashboard",
      "Emergency protocols and alerts",
      "Comprehensive audit logs",
      "Company news and announcements integration"
    ],
    images: [
      "/assets/projects/accessflow/1.png",
      "/assets/projects/accessflow/2.png",
      "/assets/projects/accessflow/3.png",
      "/assets/projects/accessflow/4.png",
      "/assets/projects/accessflow/5.png",
      "/assets/projects/accessflow/6.png",
      "/assets/projects/accessflow/7.png",

    ],
    duration: "7 months",
    role: "Full Stack Mobile Developer",
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
    technologies: ["Flutter", "Firebase", "GIS Integration", "Geofencing"],
    features: [
      "Shift scheduling with conflict resolution",
      "Automated payroll calculation",
      "Security incident reporting and analysis",
      "Personnel qualification tracking",
      "Performance analytics dashboard"
    ],
    images: [
      "/assets/projects/segments/1.png",
      "/assets/projects/segments/2.png",
      "/assets/projects/segments/3.png",
      "/assets/projects/segments/4.png",
      "/assets/projects/segments/5.png"
    ],
    duration: "7 months",
    role: "Mobile Developer",
    links: {
      github: "https://github.com/Firadians/segments",
      live: ""
    }
  },
  "dewangga": {
    title: "DEWANGGA – Batik Platform",
    description: "A platform for selling batik products, with a focus on providing a seamless shopping experience for customers.",
    fullDescription: "DEWANGGA is a platform for selling batik products, with a focus on providing a seamless shopping experience for customers.",
    challenge: "Manual HR processes led to inefficiencies in scheduling, attendance tracking, and payroll management. Security reports were siloed and difficult to correlate for comprehensive threat assessment.",
    solution: "SEGMENTS centralizes all aspects of security personnel management with biometric attendance verification, automated scheduling, and integrated security incident reporting with threat analysis capabilities.",
    technologies: ["Kotlin", "Tensorflow", "Tflite", "Google Cloud Platform", "Firebase", "Image Recognition"],
    features: [
      "Image Recognition",
      "Object Detection",
      "Image Classification",
    ],
    images: [
      "/assets/projects/dewangga/1.png",
      "/assets/projects/dewangga/2.png",
      "/assets/projects/dewangga/3.png",
      "/assets/projects/dewangga/4.png"
    ],
    duration: "2 months",
    role: "Android Developer",
    links: {
      github: "https://github.com/Firadians/segments",
      live: ""
    }
  },
  "kenangin": {
    title: "KENANGIN – E-Commerce Platform",
    description: "An e-commerce platform for selling products, with a focus on providing a seamless shopping experience for customers.",
    fullDescription: "KENANGIN is an e-commerce platform for selling products, with a focus on providing a seamless shopping experience for customers.",
    challenge: "Manual HR processes led to inefficiencies in scheduling, attendance tracking, and payroll management. Security reports were siloed and difficult to correlate for comprehensive threat assessment.",
    solution: "SEGMENTS centralizes all aspects of security personnel management with biometric attendance verification, automated scheduling, and integrated security incident reporting with threat analysis capabilities.",
    technologies: ["Figma", "Usability Testing", "User Research", "User Testing"],
    features: [
      "User Testing",
      "Usability Testing",
      "User Research",
      "User Testing",
    ],
    images: [
      "/assets/projects/kenangin/1.png",
      "/assets/projects/kenangin/2.png",
      "/assets/projects/kenangin/3.png",
      "/assets/projects/kenangin/4.png"
    ],
    duration: "3 months",
    role: "UI/UX Designer",
    links: {
      github: "https://github.com/Firadians/segments",
      live: ""
    }
  },
  "envihelp": {
    title: "ENVIHELP – Environment Monitoring Platform",
    description: "A platform for monitoring the environment, with a focus on providing a seamless monitoring experience for customers.",
    fullDescription: "ENVIHELP is a platform for monitoring the environment, with a focus on providing a seamless monitoring experience for customers.",
    challenge: "Manual HR processes led to inefficiencies in scheduling, attendance tracking, and payroll management. Security reports were siloed and difficult to correlate for comprehensive threat assessment.",
    solution: "SEGMENTS centralizes all aspects of security personnel management with biometric attendance verification, automated scheduling, and integrated security incident reporting with threat analysis capabilities.",
    technologies: ["Jira", "Figma", "Microsoft Word"],
    features: [
       
    ],
    images: [
      "/assets/projects/envirohelp/1.png",
      "/assets/projects/envirohelp/2.png",
      "/assets/projects/envirohelp/3.png",
      "/assets/projects/envirohelp/4.png",
      "/assets/projects/envirohelp/5.png",
      "/assets/projects/envirohelp/6.png",
      "/assets/projects/envirohelp/7.png"
      
    ],
    duration: "3 months",
    role: "Product Manager",
    links: {
      github: "https://github.com/Firadians/segments",
      live: ""
    }
  },
  "contactme": {
    title: "CONTACTME – Contact Management Platform",
    description: "A platform for managing contacts, with a focus on providing a seamless contact management experience for customers.",
    fullDescription: "CONTACTME is a platform for managing contacts, with a focus on providing a seamless contact management experience for customers.",
    challenge: "Manual HR processes led to inefficiencies in scheduling, attendance tracking, and payroll management. Security reports were siloed and difficult to correlate for comprehensive threat assessment.",
    solution: "SEGMENTS centralizes all aspects of security personnel management with biometric attendance verification, automated scheduling, and integrated security incident reporting with threat analysis capabilities.",
    technologies: ["Flutter", "Firebase"],
    features: [
      "Biometric attendance verification",
      "Shift scheduling with conflict resolution",
      "Automated payroll calculation",  
    ],
    images: [
      "/assets/projects/contactme/1.png",
      "/assets/projects/contactme/2.png",
      "/assets/projects/contactme/3.png",
      "/assets/projects/contactme/4.png"
    ],
    duration: "1 months",
    role: "Mobile Developer",
    links: {
      github: "https://github.com/Firadians/segments",
      live: ""
    }
  },
  "finflow": {
    title: "FINFLOW – Personal Finance Tracker",
    description: "A platform for managing personal finances, with a focus on providing a seamless personal finance tracking experience for customers.",
    fullDescription: "FINFLOW is a platform for managing personal finances, with a focus on providing a seamless personal finance tracking experience for customers.",
    challenge: "Manual HR processes led to inefficiencies in scheduling, attendance tracking, and payroll management. Security reports were siloed and difficult to correlate for comprehensive threat assessment.",
    solution: "SEGMENTS centralizes all aspects of security personnel management with biometric attendance verification, automated scheduling, and integrated security incident reporting with threat analysis capabilities.",
    technologies: ["Flutter", "Chart"],
    features: [
      "Biometric attendance verification",
      "Shift scheduling with conflict resolution",
      "Automated payroll calculation",  
    ],
    images: [
      "/assets/projects/finflow/1.png",
      "/assets/projects/finflow/2.png",
      "/assets/projects/finflow/3.png",
      "/assets/projects/finflow/4.png"
    ],
    duration: "-",
    role: "Mobile Developer",
    links: {
      github: "-",
      live: ""
    }
  },
  "blockgraph": {
    title: "BLOCKGRAPH – Crypto Marketplace",
    description: "A modern crypto marketplace for buying and selling crypto assets, inspired by Binance.",
    fullDescription: "BLOCKGRAPH is a modern crypto marketplace for buying and selling crypto assets, inspired by Binance.",
    challenge: "Manual HR processes led to inefficiencies in scheduling, attendance tracking, and payroll management. Security reports were siloed and difficult to correlate for comprehensive threat assessment.",
    solution: "SEGMENTS centralizes all aspects of security personnel management with biometric attendance verification, automated scheduling, and integrated security incident reporting with threat analysis capabilities.",
    technologies: ["Flutter", "Coingecko API", "Firebase", "Ethereum", "Solana", "Web3.js"],
    features: [
      "Biometric attendance verification",
      "Shift scheduling with conflict resolution",
      "Automated payroll calculation",  
    ],
    images: [
      "/assets/projects/blockgraph/1.png",
      "/assets/projects/blockgraph/2.png",
      "/assets/projects/blockgraph/3.png",
      "/assets/projects/blockgraph/4.png",
    ],
    duration: "-",
    role: "Mobile Developer",
    links: {
      github: "-",
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
    // First try direct match
    let projectData = projectsData[slug as keyof typeof projectsData];
    
    // If not found, try to find a matching key by normalizing both strings
    if (!projectData) {
      const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
      const matchingKey = Object.keys(projectsData).find(key => 
        key.toLowerCase().replace(/[^a-z0-9]/g, '') === normalizedSlug
      );
      
      if (matchingKey) {
        projectData = projectsData[matchingKey as keyof typeof projectsData];
      }
    }
    
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
                    href={`/projects/${slug}`}
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