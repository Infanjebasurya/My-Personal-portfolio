import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Star,
  Calendar,
  ArrowRight,
  Filter,
  Search,
  Play,
  Award,
  Users,
  Zap
} from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Mock portfolio data - replace with your actual data
  const portfolioData = {
    projects: [
      {
        id: 1,
        title: "Vincaland App",
        description: "A modern, responsive Company APK built with React and Tailwind CSS, featuring All in one platform and smooth animations and optimized performance.",
        image: "/Assets/Images/Vincalan-APK.jpeg",
        technologies: ["React Native", "TypeScript", "Firebase", "Real-time Updates", "Payment Integration", "Admin Panel"],
        category: "frontend",
        link: "https://example.com",
        github: "https://github.com/example",
        featured: true,
        status: "completed",
        duration: "5 months",
        team: "3 Developers",
        highlights: ["Real-time Sync", "Drag & Drop", "Team Chat"]
      },
      {
        id: 2,
        title: "E-Commerce Platform",
        description: "A full-featured online food ordering platform that enables users to browse restaurant.",
        image: "/Assets/Images/E-comme.png",
        technologies: ["React", "HTML", "CSS", "Git"],
        category: "frontend",
        link: "https://website-eta-six-93.vercel.app/",
        github: "https://github.com/Infanjebasurya/",
        featured: true,
        status: "completed",
        duration: "3 months",
        team: "Solo Project",
        highlights: ["Payment Integration", "Real-time Updates", "Admin Panel"]
      },
      {
        id: 3,
        title: "Starbucks Website",
        description: "A responsive and visually appealing website inspired by the official Starbucks platform.",
        image: "/Assets/Images/Starbucks Website.png",
        technologies: ["React js", "SASS", "OpenMap API", "Payment Integration"],
        category: "frontend",
        link: "https://starbucks-eta-nine.vercel.app/",
        github: "https://github.com/example",
        featured: false,
        status: "completed",
        duration: "1 month",
        team: "Solo Project",
        highlights: ["Interactive Maps", "Live Data", "Responsive Design"]
      },
      {
        id: 5,
        title: "City Weather Finder",
        description: "A responsive and real-time weather forecasting website.",
        image: "/Assets/Images/weather.png",
        technologies: ["React", "OpenWeather API", "Node.js", "MySQL"],
        category: "fullstack",
        link: "https://weather-app-client-seven-gamma.vercel.app/",
        github: "https://github.com/Infanjebasurya/weather-app-server",
        featured: true,
        status: "in-progress",
        duration: "4 months",
        team: "Solo Project",
        highlights: ["Data Visualization", "Automated Reports", "Multi-platform"]
      },
      {
        id: 6,
        title: "Vincaland Website",
        description: "A modern, responsive Company website built with React and Tailwind CSS, featuring All in one platform and  smooth animations and optimized performance.",
        image: "/Assets/Images/Vincaland.1.png",
        technologies: ["React Js", "Tailwind", "Payment Integration", "AWS","Real-time Updates","Admin Panel","Firebase","Responsive Design"],
        category: "fullstack",
        link: "https://www.vincaland.com/",
        github: "https://github.com/example",
        featured: false,
        status: "completed",
        duration: "3 month",
        team: "5 Members",
        highlights: ["Modern Design", "Fast Loading", "SEO Optimized"]
      }
    ]
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Eye },
    { id: 'backend', label: 'Backend', icon: Zap },
    { id: 'fullstack', label: 'Full Stack', icon: Award }
  ];

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }) => {
    return (
      <div
        className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Project Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'completed'
              ? 'bg-green-100 text-green-800 border border-green-200'
              : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
            }`}>
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </div>
          </div>
        )}

        {/* Image Container */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex space-x-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-xl">
              {project.title}
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {project.duration}
            </div>
          </div>

          <p className="text-gray-600 mb-4 text-sm line-clamp-3">
            {project.description}
          </p>

          {/* Project Meta */}
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {project.team}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              View Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here's a showcase of my recent work. Each project represents my passion for creating
            exceptional digital experiences and solving real-world problems through code.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`group flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
          {filter !== 'all' && (
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Filter className="w-6 h-6 text-blue-500 mr-2" />
              {categories.find(cat => cat.id === filter)?.label} Projects
            </h3>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and bring innovative ideas to life.
              Let's discuss your next project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/Infanjebasurya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base"
              >
                <Github className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                View More on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;