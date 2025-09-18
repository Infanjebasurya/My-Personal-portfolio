import React, { useState, useEffect } from 'react';
import {
  User,
  MapPin,
  Mail,
  Calendar,
  Download,
  Award,
  Target,
  Heart,
  Code2,
  Briefcase,
  GraduationCap,
  Coffee,
  Clock,
  Globe,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  // Portfolio data - replace with your actual data
  const portfolioData = {
    name: "Infant Jeba Surya A",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    about: "I'm a Frontend Developer with 2+ years of experience in React.js, Redux, HTML5, CSS3, and JavaScript. I specialize in building responsive, user-friendly web applications and enjoy turning complex ideas into simple, elegant solutions.",
    contact: {
      email: "infantjebasurya2.0@gmail.com",
      location: "Bengalore, KA"
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const personalInfo = [
    { icon: User, label: "Name", value: portfolioData.name },
    { icon: Mail, label: "Email", value: portfolioData.contact.email },
    { icon: MapPin, label: "Location", value: portfolioData.contact.location },
    { icon: Calendar, label: "Availability", value: "Open to Work" },
    { icon: Globe, label: "Languages", value: "English, Tamil" },
    { icon: Coffee, label: "Coffee Consumed", value: "∞ Cups" }
  ];

  const achievements = [
    { icon: Award, title: "50+ Projects", desc: "Successfully delivered" },
    { icon: Star, title: "98% Success", desc: "Client satisfaction rate" },
    { icon: Briefcase, title: "2+ Years", desc: "Professional experience" },
    { icon: GraduationCap, title: "Always Learning", desc: "Continuous growth" }
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Target,
      title: "User-Focused",
      desc: "Creating intuitive experiences that solve real problems for real people."
    },
    {
      icon: Heart,
      title: "Passionate",
      desc: "Bringing enthusiasm and dedication to every project and collaboration."
    },
    {
      icon: Clock,
      title: "Reliable",
      desc: "Delivering high-quality work on time, every time, with clear communication."
    }
  ];

  const skills = [
    { name: "Frontend Development", percentage: 95 },
    { name: "Modern Frontend Frameworks", percentage: 90 },
    { name: "App Development", percentage: 65 },
    { name: "UI/UX Understanding", percentage: 88 },
    { name: "Version Control (Git & GitHub)", percentage: 82 },
    { name: "Problem Solving", percentage: 98 }
  ];

  const tabContent = {
    story: (
      <div className="space-y-6">
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p className="text-base md:text-base">
            {portfolioData.about}
          </p>
          <p className="text-sm md:text-base">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
            or sharing knowledge with the developer community. 
            
          </p>
          <p className="text-sm md:text-base">
            My approach combines technical expertise with creative problem-solving, ensuring that every project
            not only functions flawlessly but also provides an exceptional user experience.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <value.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{value.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{value.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    skills: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">{skill.name}</h4>
                <span className="text-xs md:text-sm font-medium text-blue-600">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 md:p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Expertise</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
            {["React", "Redux", "TypeScript", "JavaScript", "APIs Integration", "React Native", "Rest APIs", "Tailwind CSS,Bootstrap","Async/Await, Promises","Debugging","Lazy loading, code splitting","Git",].map((tech, index) => (
              <div
                key={tech}
                className={`flex items-center space-x-2 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 font-medium text-xs md:text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    achievements: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.title}
            className={`group bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{achievement.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm">{achievement.desc}</p>
            </div>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section id="about" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column - Personal Info */}
          <div className="lg:col-span-5">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}>

              {/* Personal Information */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 text-blue-600 mr-2" />
                  Personal Info
                </h3>
                <div className="space-y-3 flex-grow">
                  {personalInfo.map((info, index) => (
                    <div
                      key={info.label}
                      className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        <info.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-500">{info.label}</p>
                        <p className="text-gray-900 truncate text-sm">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download Resume Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="https://drive.google.com/file/d/1xd6Yl_4X0UW5i0k8zk4tWYMtSShdFHY2/view?usp=drivesdk"
                    download
                    className="group w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Tabs */}
          <div className="lg:col-span-7">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}>

              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                {[
                  { id: 'story', label: 'My Story', icon: Heart },
                  { id: 'skills', label: 'Skills', icon: Code2 },
                  { id: 'achievements', label: 'Achievements', icon: Award }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md font-medium transition-all duration-200 text-xs md:text-sm ${activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <tab.icon className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-6 min-h-[400px]">
                {tabContent[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;