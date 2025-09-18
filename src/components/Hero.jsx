import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code2,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Portfolio data - replace with your actual data
  const portfolioData = {
    name: "Infant Jeba Surya",
    role: "Frontend Developer",
    location: "Bengalore,KA",
    experience: "2+ Years",
    heroImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    email: "infantjebasurya2.0@gmail.com",
    linkedin: "https://www.linkedin.com/in/infant-jeba-surya-a-33901b348/",
    github: "https://github.com/Infanjebasurya",
  };

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ["React", "Redux", "TypeScript", "JavaScript", "Tailwind"];

  // Create the grid pattern as a separate variable to avoid parsing issues
  const gridPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
      style={{ minHeight: '100vh' }}
    >
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 opacity-10 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url('${gridPattern}')` 
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content (Spans 7 columns on large screens) */}
          <div className={`lg:col-span-7 transform transition-all duration-1000 ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 mb-4 lg:mb-6 px-3 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm">Available for work</span>
            </div>

            {/* Main Heading - Responsive Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 lg:mb-6">
              Hi, I&apos;m{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                  {portfolioData.name}
                </span>
                <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                  <Sparkles className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
              </span>
            </h1>

            {/* Role with Icon */}
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <Code2 className="w-6 h-6 text-blue-400" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 font-light">
                {portfolioData.role}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 max-w-2xl leading-relaxed">
              I craft exceptional digital experiences with modern technologies. 
              Passionate about clean code, beautiful design, and solving complex problems.
            </p>

            {/* Skills Tags - Responsive */}
            <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs lg:text-sm font-medium border border-white/20 transition-all duration-300 hover:bg-white/20 transform hover:scale-105 ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm lg:text-base"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1xd6Yl_4X0UW5i0k8zk4tWYMtSShdFHY2/view?usp=drivesdk"
                download
                className="inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-200 transform hover:scale-105 text-sm lg:text-base"
              >
                <Download className="mr-2 w-4 h-4 lg:w-5 lg:h-5" />
                Download CV
              </a>
            </div>

            {/* Social Links & Info - Better Mobile Layout */}
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 lg:space-x-6">
                <a
                  href={portfolioData.github}
                  className="p-2 lg:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.linkedin}
                  className="p-2 lg:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="p-2 lg:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              
              {/* Info Cards */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-xs lg:text-sm">
                <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{portfolioData.location}</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-gray-300">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{portfolioData.experience}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual (Spans 5 columns on large screens) */}
          <div className={`lg:col-span-5 transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            <div className="relative flex items-center justify-center">
              
              {/* Floating Particles */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
              </div>

              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                {/* Main Image Container - Responsive Size */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl transform group-hover:scale-105 transition-transform duration-300 mx-auto">
                  <img
                    src={portfolioData.heroImage}
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Only on larger screens */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        /* Responsive height adjustments */
        @media (max-height: 700px) {
          section {
            min-height: 100vh;
          }
        }
        
        @media (max-height: 600px) and (orientation: landscape) {
          section {
            min-height: 100vh;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;