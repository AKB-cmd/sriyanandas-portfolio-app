import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  MapPin,
  ArrowUpRight,
  ExternalLink,
  Github,
  Code,
  Cpu,
  Wrench,
  Database,
  Cloud,
  Network,
  FileText,
} from "lucide-react";

import profileImg from "./assets/profile.jpeg"; 

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [logoGlow, setLogoGlow] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const fullHeroText =
    "I build fault-tolerant distributed systems and high-performance backend services that scale.";
  const [heroText, setHeroText] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Respect reduced-motion users, but still keep hero readable
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHeroText(fullHeroText);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setHeroText(fullHeroText.slice(0, index));
      if (index >= fullHeroText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullHeroText]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setLogoGlow(true);
    const hero = document.getElementById('hero');
    hero?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setLogoGlow(false), 600);
  };

  // Icon mapping for skill categories
  const categoryIcons = {
    "Languages": Cpu,
    "Frameworks & Tools": Wrench,
    "Databases": Database,
    "DevOps & Cloud": Cloud,
    "Architecture": Network
  };


  const experiences = [
    {
      company: "People Tech Group Inc",
      role: "Software Development Engineer I (FTC) — Amazon",
      period: "October 2025 - Present",
      duration: "5 months",
      location: "Hyderabad, Telangana, India",
      description: "Working on Amazon projects focused on distributed systems and backend services.",
      tech: ["Java", "Spring Boot", "AWS", "Distributed Systems"]
    },
    {
      company: "Netenrich, Inc.",
      role: "Software Engineer",
      period: "October 2024 - October 2025",
      duration: "1 year 1 month",
      location: "Hyderabad, Telangana, India",
      description: "Contributed to the distributed systems platform, engineering solutions with Java, Spring Boot, and Kafka to support over 10K requests per minute with 99.9% uptime. Designed a fault-tolerant Kafka consumer using Spring's DefaultErrorHandler, resolving conflicts between infinite retry and pause/resume behaviors to guarantee zero data loss during outages; this solution is now an architectural standard across our event-driven microservices.",
      achievements: [
        "Led transformation of a Python-based ticketing system by implementing an in-memory Bloom Filter, reducing validation time from 265s to 21s (~12.6×) while processing 1M+ daily tickets and cutting database load by 83%.",
        "Implemented automated incident classification using Elasticsearch percolator queries and a Python rules engine, achieving 92% accuracy and reducing triage latency by 80%, saving 15+ engineering hours weekly.",
        "Architected the CompositePublisherAdapter, providing reliable multi-channel messaging across Kafka, HTTP, and MessageQueue."
      ],
      tech: ["Java 21", "Spring Boot 3.x", "Kafka Streams", "Python 3.10", "Elasticsearch 8.x", "PostgreSQL 14", "Docker"]
    },
    {
      company: "Subex",
      role: "Software Engineer",
      period: "November 2023 - October 2024",
      duration: "1 year",
      location: "Bengaluru, Karnataka, India",
      description: "Worked with Java, Spring Boot, Apache Kafka, PostgreSQL, Docker, ELK Stack, and Apache Camel to build and maintain data pipelines integrating Kafka for efficient message processing and storage in PostgreSQL. Contributed to containerization and observability efforts and designed integration routes with Apache Camel to enable reliable data flow.",
      keyAchievement: "Led migration of the service codebase from Java 8 to Java 21, improving performance and aligning with modern development standards.",
      tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "ELK Stack", "Apache Camel"]
    },
    {
      company: "Wipro",
      role: "Project Engineer",
      period: "March 2023 - August 2023",
      duration: "6 months",
      location: "Hyderabad, Telangana, India",
      description: "Participated in requirements gathering and testing processes.",
      tech: ["Java", "Testing"]
    }
  ];

  const projects = [
    {
      title: "Eztime Spring Boot Starter",
      description: "A Spring Boot starter library for simplified time and timezone handling. Provides utilities for managing date/time operations, timezone conversions, and scheduling across distributed systems.",
      tech: ["Java", "Spring Boot", "Maven"],
      github: "https://github.com/sriyananda7/eztime-spring-boot-starter"
    },
    {
      title: "Medication Reminder App",
      description: "A web-based medication reminder application that helps users stay on track with their daily prescriptions. Features notifications and adherence tracking for better health management.",
      tech: ["HTML", "CSS", "JavaScript", "Web Storage"],
      github: "https://github.com/sriyananda7/medication-reminder-app"
    },
    {
      title: "Better ATS Check",
      description: "An ATS (Applicant Tracking System) optimization tool that analyzes resumes and job descriptions for better compatibility. Helps candidates improve their applications for keyword matching and parsing accuracy.",
      tech: ["Java", "ATS Parsing", "Text Analysis"],
      github: "https://github.com/sriyananda7/better-ats-check"
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript"]
    },
    {
      category: "Frameworks & Tools",
      items: ["Spring Boot", "Apache Kafka", "Kafka Streams", "Apache Camel"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Git", "ELK Stack", "AWS"]
    },
    {
      category: "Architecture",
      items: ["Microservices", "Distributed Systems", "REST APIs", "Event-Driven"]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrollY > 20 ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200/60' : 'bg-neutral-50/90 backdrop-blur-xl border-b border-neutral-200/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-5 flex justify-between items-center gap-4">
          <div className="relative flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
              aria-label="Scroll to top"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Space') { e.preventDefault(); handleLogoClick(e); } }}
              className={`text-2xl sm:text-xl font-black tracking-tight cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 bg-gradient-to-r from-black via-neutral-700 to-neutral-400 bg-clip-text text-transparent ${logoGlow ? 'shadow-lg shadow-neutral-900/30' : ''}`}
              style={logoGlow ? { textShadow: '0 0 20px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)' } : {}}
            >
              SK
            </button>
            {logoHover && (
              <div
                className="absolute top-full left-0 mt-2 px-3 py-1.5 bg-neutral-900 text-neutral-50 text-[11px] rounded-lg transition-all duration-200 opacity-100 scale-100 origin-top shadow-lg shadow-black/30 border border-neutral-700/80 whitespace-nowrap"
                style={{
                  animation: 'fadeScaleIn 0.22s ease-out'
                }}
              >
                <style>{`
                  @keyframes fadeScaleIn {
                    from {
                      opacity: 0;
                      transform: scale(0.9) translateY(-3px);
                    }
                    to {
                      opacity: 1;
                      transform: scale(1) translateY(0);
                    }
                  }
                `}</style>
                <span className="font-medium tracking-tight">
                  Sriyananda Kuchimanchi
                </span>
              </div>
            )}
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 lg:gap-6">
              <a href="#experience" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-900 pb-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2">
                Experience
              </a>
              <a href="#projects" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-900 pb-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2">
                Projects
              </a>
              <a href="#skills" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-900 pb-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2">
                Skills
              </a>
            </div>
            <a 
              href="/resume.txt"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-neutral-900 text-neutral-50 hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile nav toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-neutral-200 bg-white/70 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-neutral-800 transition-transform ${isNavOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-4 rounded-full bg-neutral-800 transition-opacity ${isNavOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-neutral-800 transition-transform ${isNavOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile nav panel */}
        {isNavOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-3">
              <a
                href="#experience"
                className="block text-sm font-medium text-neutral-700 hover:text-neutral-900 py-1"
                onClick={() => setIsNavOpen(false)}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block text-sm font-medium text-neutral-700 hover:text-neutral-900 py-1"
                onClick={() => setIsNavOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block text-sm font-medium text-neutral-700 hover:text-neutral-900 py-1"
                onClick={() => setIsNavOpen(false)}
              >
                Skills
              </a>
              <a
                href="/resume.txt"
                download
                className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-full text-sm font-semibold bg-neutral-900 text-neutral-50 hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
                title="Download Resume"
                onClick={() => setIsNavOpen(false)}
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-base md:text-lg font-semibold text-neutral-500 uppercase tracking-widest">
                    Software Engineer
                  </p>
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tighter bg-gradient-to-r from-black via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
                    Sriyananda<br />
                    <span className="bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-400 bg-clip-text text-transparent">
                      Kuchimanchi
                    </span>
                  </h1>
                </div>
                
                <p
                  className="text-lg md:text-xl lg:text-2xl text-neutral-600 leading-relaxed md:leading-[1.7] max-w-2xl font-light"
                  aria-label={fullHeroText}
                >
                  {heroText}
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-neutral-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="mailto:sriyananda007@gmail.com"
                  className="inline-flex items-center justify-center w-12 h-12 bg-neutral-900 text-neutral-50 rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
                  title="Get in touch"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sriyananda-kuchimanchi-1562011b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-neutral-200 rounded-full hover:border-neutral-300 hover:bg-neutral-100 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/sriyananda7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-neutral-200 rounded-full hover:border-neutral-300 hover:bg-neutral-100 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/u/sriyananda007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border-2 border-neutral-200 rounded-full hover:border-neutral-300 hover:bg-neutral-100 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
                  title="LeetCode"
                >
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative w-full max-w-sm sm:max-w-md mx-auto">
              <div className="absolute -inset-8 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 rounded-[3rem] -z-10" />
              <div className="absolute -inset-6 border-2 border-neutral-200 rounded-[2.5rem] -z-10" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl">
                <img 
                  src={profileImg}
                  alt="Sriyananda Kuchimanchi"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl border border-neutral-200 p-4 sm:p-6 max-w-xs">
                <div className="text-sm font-semibold text-neutral-900 mb-1">Currently</div>
                <div className="text-xs text-neutral-600">Software Development Engineer at People Tech Group (Amazon)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-10 bg-gradient-to-r from-black via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
              About
            </h2>
              <div className="space-y-8 text-lg md:text-xl leading-relaxed md:leading-[1.7] font-light text-neutral-700">
              <p>
                I am a software engineer with 3.5+ years of experience building large-scale distributed systems and backend services. I specialize in high-performance APIs and have managed systems handling 10k+ requests per minute with 99.9% uptime.
              </p>
              <p>
                I have reduced latency through caching and thread tuning, and designed fault-tolerant Kafka pipelines that ensured zero data loss. I am proficient in Java, Python, and Spring Boot, and familiar with tools such as Kafka, Docker, Elasticsearch, and Redis. I am passionate about scalable systems, microservices, and clean, modular design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-20 bg-gradient-to-r from-black via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="space-y-20">
            {experiences.map((exp, idx) => (
              <article key={idx} className="group relative">
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent hidden md:block" 
                       style={{ height: 'calc(100% + 5rem)' }} />
                )}
                
                <div className="md:pl-16 relative">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-neutral-900 border-4 border-neutral-50 hidden md:block" />
                  
                  <div className="bg-white rounded-3xl border-2 border-neutral-200 p-8 md:p-10 hover:border-neutral-300 hover:shadow-xl transition-all">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-neutral-100">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-black mb-3 text-neutral-900">{exp.company}</h3>
                        <p className="text-lg md:text-xl font-semibold text-neutral-700 mb-3">{exp.role}</p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-neutral-300" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-neutral-900 mb-1">{exp.period}</div>
                      </div>
                    </div>

                    <div className="space-y-6 mb-8">
                      <p className="text-neutral-700 leading-relaxed text-base md:text-lg">
                        {exp.description}
                      </p>
                      
                      {exp.achievements && (
                        <div className="space-y-4 pt-4">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex gap-4 items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5 flex-shrink-0" />
                              <p className="text-neutral-700 leading-relaxed text-base md:text-lg flex-1">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {exp.keyAchievement && (
                        <div className="pt-4 border-t border-neutral-100">
                          <div className="text-sm font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Key Achievement</div>
                          <p className="text-neutral-700 leading-relaxed text-base md:text-lg">{exp.keyAchievement}</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-neutral-100">
                      <div className="text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wider">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 text-sm font-medium bg-neutral-100 text-neutral-700 rounded-xl border border-neutral-200 hover:bg-neutral-900 hover:text-neutral-50 hover:border-neutral-900 transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6 bg-gradient-to-r from-black via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-neutral-500 text-xl md:text-2xl">Showcasing my latest work and side projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const primaryLink = project.link || project.github;
              return (
              <article 
                key={idx} 
                className={`group bg-neutral-50 rounded-2xl border-2 border-neutral-200 p-8 hover:border-neutral-300 hover:shadow-lg transition-all ${primaryLink ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (primaryLink) {
                    window.open(primaryLink, "_blank", "noopener,noreferrer");
                  }
                }}
                tabIndex={primaryLink ? 0 : -1}
                onKeyDown={(e) => {
                  if (!primaryLink) return;
                  if (e.key === "Enter" || e.code === "Space") {
                    e.preventDefault();
                    window.open(primaryLink, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-neutral-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-white text-neutral-700 rounded-lg border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2 flex-nowrap">
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-neutral-100 text-neutral-700 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-all border border-neutral-200 hover:border-neutral-900 flex-shrink-0"
                        title="View Project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-neutral-100 text-neutral-700 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-all border border-neutral-200 hover:border-neutral-900 flex-shrink-0"
                        title="View Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )})}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 text-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-3 bg-gradient-to-r from-neutral-50 via-neutral-300 to-neutral-100 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-neutral-400 text-xl md:text-2xl">Technologies and tools I specialize in</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div 
                key={idx} 
                className="group relative"
                style={{
                  animation: `slideInUp 0.6s ease-out forwards`,
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0
                }}
              >
                <style>{`
                  @keyframes slideInUp {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl border border-neutral-700 group-hover:border-neutral-600 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      <div className="flex items-center gap-2.5">
                        {React.createElement(categoryIcons[skillGroup.category] || Code, {
                          className: "w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors"
                        })}
                        <h3 className="text-lg font-bold text-neutral-100 group-hover:text-white transition-colors">
                          {skillGroup.category}
                        </h3>
                      </div>
                    </div>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-br from-neutral-700/60 to-neutral-800/60 hover:from-blue-600/40 hover:to-purple-600/40 text-neutral-100 hover:text-neutral-50 text-sm font-medium rounded-lg border border-neutral-600/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm cursor-default transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                        style={{
                          animation: `fadeInScale 0.4s ease-out forwards`,
                          animationDelay: `${idx * 0.1 + i * 0.05}s`,
                          opacity: 0
                        }}
                      >
                        <style>{`
                          @keyframes fadeInScale {
                            from {
                              opacity: 0;
                              transform: scale(0.8);
                            }
                            to {
                              opacity: 1;
                              transform: scale(1);
                            }
                          }
                        `}</style>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-32 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-12 bg-gradient-to-r from-black via-neutral-800 to-black bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="bg-white rounded-2xl border-2 border-neutral-200 p-8 md:p-10 max-w-3xl">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Bachelor of Engineering - Mechanical Engineering</h3>
            <p className="text-base md:text-lg text-neutral-700 mb-3">
              Sri Chandrasekharendra Saraswathi Vishwa Mahavidyalaya, Kancheepuram
            </p>
            <p className="text-neutral-500 text-base md:text-lg">July 2018 - May 2022</p>
          </div>
        </div>
      </section>

      {/* Back to top floating button */}
      {scrollY > 400 && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-black via-neutral-800 to-neutral-600 text-neutral-50 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUpRight className="w-5 h-5 -rotate-90" />
        </button>
      )}

      {/* Contact / Footer */}
      <footer className="py-24 px-6 md:px-12 bg-gradient-to-b from-neutral-900 to-black text-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-6xl md:text-7xl font-black tracking-tight leading-tight bg-gradient-to-r from-neutral-50 via-neutral-300 to-neutral-50 bg-clip-text text-transparent">
              Let's build<br />something great
            </h2>
            <p className="text-neutral-400 text-2xl leading-relaxed max-w-md mx-auto mt-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:sriyananda007@gmail.com"
              className="inline-flex items-center justify-center w-12 h-12 bg-neutral-900 text-neutral-50 rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sriyananda-kuchimanchi-1562011b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-neutral-200 rounded-full hover:border-neutral-300 hover:bg-neutral-100 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sriyananda7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-neutral-200 rounded-full hover:border-neutral-300 hover:bg-neutral-100 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/sriyananda007/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-neutral-200 rounded-full hover:border-neutral-300 hover:bg-neutral-100 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
              title="LeetCode"
            >
              <Code className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-12 border-t border-neutral-800 text-center">
            <p
              className="text-neutral-50 cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Space') { window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
              title="Scroll to top"
            >
              © 2026 Sriyananda Kuchimanchi
            </p>
          </div>
        </div>
      </footer>

  
    </div>
  );
};

export default Portfolio;
