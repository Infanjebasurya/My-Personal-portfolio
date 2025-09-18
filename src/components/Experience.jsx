import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  TrendingUp,
  Code,
  Users,
  Zap,
  ChevronRight,
  Building,
  Clock,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Rocket,
  X,
  GitBranch,
  BarChart3
} from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [detailData, setDetailData] = useState(null);

  // Experience data - replace with your actual experience
  const experienceData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Vincaland Technologies",
      location: "Bengalore, Karnataka",
      period: "Jun 2023 - Present",
      duration: "2+ Years",
      type: "Full-time",
      logo: "/Assets/Images/vincaland-logo.png", // Add your company logo
      companyUrl: "https://www.vincaland.com/",
      description: "Leading the development of modern web applications and mobile solutions for diverse clients, focusing on React.js, React Native, and frontend development.",
      achievements: [
        "Developed and deployed 5+ production-ready applications serving 1000+ users",
        "Implemented real-time features using Firebase and Socket.io",
        "Optimized application performance resulting in 40% faster load times",
        "Led a team of 3 developers on multiple client projects",
        "Built responsive web applications with 99% uptime",
        "Introduced CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React.js", "React Native", "JavaScript", "Firebase", "TypeScript", "Tailwind CSS", "APIs", "API Integrations", "Redux", "Context API", "Jest", "Webpack"],
      projects: [
        {
          name: "Vincaland App",
          description: "All-in-one mobile platform with real-time updates and seamless user experience",
          impact: "1000+ active users",
          role: "Lead Developer",
          technologies: ["React Native", "Firebase", "Redux"]
        },
        {
          name: "E-Commerce Platform",
          description: "Full-featured online ordering system with payment integration and inventory management",
          impact: "30% increase in sales",
          role: "Frontend Developer",
          technologies: ["React.js", "Stripe API", "Context API"]
        },
        {
          name: "Admin Dashboard",
          description: "Comprehensive dashboard for business analytics and management",
          impact: "Improved decision making process",
          role: "Full-stack Developer",
          technologies: ["React.js", "Node.js", "MongoDB"]
        }
      ],
      skills: ["Team Leadership", "Project Management", "Client Communication", "Code Review", "Agile Methodology", "Technical Documentation"],
      current: true
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "freelancerx.in",
      location: "Remote",
      period: "Jan 2024 - Sep 2025",
      duration: "1.5 Years",
      type: "Freelance",
      logo: "/Assets/Images/freelance-logo.png",
      companyUrl: "#",
      description: "Worked with various clients to deliver high-quality web applications, focusing on modern frontend technologies and user experience optimization.",
      achievements: [
        "Successfully completed 15+ client projects with 100% satisfaction rate",
        "Built responsive websites for restaurants, startups, and small businesses",
        "Implemented modern design systems and component libraries",
        "Achieved 98+ Google PageSpeed scores on all projects",
        "Delivered projects 20% ahead of schedule on average",
        "Reduced client bounce rates by 45% through performance optimization",
        "Created reusable component libraries saving development time"
      ],
      technologies: ["React.js", "HTML5", "CSS3", "SASS", "JavaScript", "Git", "Vercel", "Netlify", "Figma", "Webflow", "GSAP"],
      projects: [
        {
          name: "Starbucks Website Clone",
          description: "Responsive website with interactive maps and product customization",
          impact: "Featured in portfolio",
          role: "Sole Developer",
          technologies: ["React.js", "CSS3", "Google Maps API"]
        },
        {
          name: "Weather App",
          description: "Real-time weather forecasting platform with location-based predictions",
          impact: "Real-time API integration",
          role: "Frontend Developer",
          technologies: ["React.js", "Weather API", "Geolocation API"]
        },
        {
          name: "Restaurant Booking System",
          description: "Reservation platform with table management and notifications",
          impact: "Streamlined booking process",
          role: "Full-stack Developer",
          technologies: ["React.js", "Node.js", "MongoDB"]
        }
      ],
      skills: ["UI/UX Design", "Responsive Design", "API Integration", "Performance Optimization", "Client Management", "Time Management"],
      current: false
    },
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar },
    { label: "Projects Completed", value: "20+", icon: Target },
    { label: "Happy Clients", value: "15+", icon: Users },
    { label: "Technologies", value: "10+", icon: Code }
  ];

  const skills = [
    { name: "Frontend Development", level: 90, color: "from-blue-500 to-purple-500" },
    { name: "React.js & React Native", level: 85, color: "from-green-500 to-blue-500" },
    { name: "API Integration", level: 75, color: "from-purple-500 to-pink-500" },
    // { name: "Database Management", level: 70, color: "from-yellow-500 to-red-500" },
    { name: "UI/UX Design", level: 80, color: "from-pink-500 to-purple-500" },
    { name: "Project Management", level: 75, color: "from-indigo-500 to-blue-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openDetailModal = (experience) => {
    setDetailData(experience);
    setShowDetailModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    setDetailData(null);
    document.body.style.overflow = 'unset';
  };

  const ExperienceCard = ({ experience, index, isActive }) => {
    return (
      <div
        className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
          isActive ? 'ring-2 ring-blue-500 ring-offset-2' : ''
        } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        style={{ transitionDelay: `${index * 200}ms` }}
        onMouseEnter={() => setHoveredCard(experience.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Current Role Badge */}
        {experience.current && (
          <div className="absolute -top-3 -right-3 z-10">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
              <Zap className="w-4 h-4 mr-1" />
              Current Role
            </div>
          </div>
        )}

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {experience.title}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                  >
                    {experience.company}
                    <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {experience.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {experience.duration}
                  </div>
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              experience.type === 'Full-time' 
                ? 'bg-green-100 text-green-800' 
                : experience.type === 'Freelance'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-purple-100 text-purple-800'
            }`}>
              {experience.type}
            </span>
          </div>

          {/* Period */}
          <div className="flex items-center text-sm font-medium text-gray-600 mb-4 bg-gray-50 px-3 py-2 rounded-lg">
            <Calendar className="w-4 h-4 mr-2" />
            {experience.period}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {experience.description}
          </p>

          {/* Key Achievements */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2 text-blue-500" />
              Key Achievements
            </h4>
            <div className="space-y-2">
              {experience.achievements.slice(0, 3).map((achievement, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{achievement}</span>
                </div>
              ))}
              {experience.achievements.length > 3 && (
                <button 
                  onClick={() => openDetailModal(experience)}
                  className="text-sm text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors mt-2"
                >
                  +{experience.achievements.length - 3} more achievements
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Code className="w-4 h-4 mr-2 text-purple-500" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.slice(0, 6).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                >
                  {tech}
                </span>
              ))}
              {experience.technologies.length > 6 && (
                <button 
                  onClick={() => openDetailModal(experience)}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                >
                  +{experience.technologies.length - 6} more
                </button>
              )}
            </div>
          </div>

          {/* Projects */}
          {experience.projects && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Rocket className="w-4 h-4 mr-2 text-green-500" />
                Notable Projects
              </h4>
              <div className="space-y-3">
                {experience.projects.slice(0, 2).map((project, idx) => (
                  <div key={idx} className="border-l-2 border-blue-200 pl-4">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium text-gray-800">{project.name}</h5>
                      <span className="text-xs text-blue-600 font-medium">{project.impact}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  </div>
                ))}
                {experience.projects.length > 2 && (
                  <button 
                    onClick={() => openDetailModal(experience)}
                    className="text-sm text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors mt-2"
                  >
                    +{experience.projects.length - 2} more projects
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={() => openDetailModal(experience)}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center group ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            View Full Details
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  const DetailModal = ({ experience, onClose }) => {
    if (!experience) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-start z-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{experience.title}</h2>
              <div className="flex items-center mt-2">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                >
                  {experience.company}
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">{experience.location}</span>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {experience.period}
                <span className="mx-2 text-gray-400">•</span>
                <Clock className="w-4 h-4 mr-1" />
                {experience.duration}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                Role Description
              </h3>
              <p className="text-gray-700 leading-relaxed">{experience.description}</p>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-500" />
                Key Achievements
              </h3>
              <div className="grid gap-3">
                {experience.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-500" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            {experience.projects && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-green-500" />
                  Notable Projects
                </h3>
                <div className="grid gap-4">
                  {experience.projects.map((project, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-gray-900">{project.name}</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {project.impact}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2 mb-3">{project.description}</p>
                      {project.role && (
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <GitBranch className="w-4 h-4 mr-1" />
                          <span>Role: {project.role}</span>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies && project.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {experience.skills && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-indigo-500" />
                  Skills Developed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 rounded-b-2xl flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey as a developer has been filled with exciting challenges, continuous learning,
            and the opportunity to work on impactful projects that solve real-world problems.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className={`mb-16 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="w-6 h-6 text-blue-500 mr-2" />
            Career Journey
          </h3>

          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isActive={activeExperience === index}
              />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
            Technical Expertise
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate with talented teams.
              Ready to discuss your next project?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                <Globe className="mr-2 w-5 h-5" />
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Detail Modal */}
        {showDetailModal && (
          <DetailModal experience={detailData} onClose={closeDetailModal} />
        )}
      </div>
    </section>
  );
};

export default Experience;