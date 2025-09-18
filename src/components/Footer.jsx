import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaTimes, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Portfolio data - replace with your actual data
  const portfolioData = {
    name: "Infant Jeba Surya A",
    role: "Frontend Developer",
    contact: {
      email: "infantjebasurya2.0@gmail.com",
      phone: "+91 9677794485",
      location: "Bengaluru",
      social: {
        github: "https://github.com/Infanjebasurya/",
        linkedin: "https://www.linkedin.com/in/infant-jeba-surya-a-33901b348/",
        twitter: "https://twitter.com/InfantJeba"
      }
    }
  };

  // Show/hide floating button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Enhanced WhatsApp click handler with professional message options
  const handleWhatsAppClick = (messageType = 'general') => {
    const phoneNumber = portfolioData.contact.phone.replace(/\D/g, '');
    
    const messages = {
      general: "Hello! I'm interested in discussing a potential project or collaboration opportunity.",
      project: "Hi! I'd like to discuss a project requirement with you. Are you available for a consultation?",
      consultation: "Hello! I'm looking for professional consultation in your area of expertise. Could we schedule a call?",
      collaboration: "Hi! I came across your portfolio and would love to explore collaboration opportunities."
    };
    
    const message = messages[messageType];
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppModal(false);
  };

  // Professional WhatsApp Modal Component
  const WhatsAppModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={() => setShowWhatsAppModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-10"
          >
            <FaTimes className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <FaWhatsapp className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Let's Connect on WhatsApp</h3>
              <p className="text-green-100 text-sm">Choose how you'd like to start our conversation</p>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          <div className="grid gap-3">
            <button
              onClick={() => handleWhatsAppClick('project')}
              className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="bg-blue-100 group-hover:bg-blue-200 p-3 rounded-full">
                <FaPhone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">Project Discussion</h4>
                <p className="text-sm text-gray-600">Discuss your project requirements</p>
              </div>
            </button>

            <button
              onClick={() => handleWhatsAppClick('consultation')}
              className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="bg-purple-100 group-hover:bg-purple-200 p-3 rounded-full">
                <FaEnvelope className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">Professional Consultation</h4>
                <p className="text-sm text-gray-600">Schedule a consultation call</p>
              </div>
            </button>

            <button
              onClick={() => handleWhatsAppClick('collaboration')}
              className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="bg-orange-100 group-hover:bg-orange-200 p-3 rounded-full">
                <FaGithub className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">Collaboration Opportunity</h4>
                <p className="text-sm text-gray-600">Explore working together</p>
              </div>
            </button>

            <button
              onClick={() => handleWhatsAppClick('general')}
              className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="bg-green-100 group-hover:bg-green-200 p-3 rounded-full">
                <FaWhatsapp className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">General Inquiry</h4>
                <p className="text-sm text-gray-600">Start a general conversation</p>
              </div>
            </button>
          </div>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Response time: Usually within 2-4 hours during business hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <>
      {/* Enhanced Professional Floating WhatsApp Button */}
      {isVisible && (
        <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40">
          <div className="relative group">
            {/* Professional Tooltip */}
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 sm:mr-4 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg hidden sm:block">
              Let's discuss your project
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
            
            {/* Enhanced Main Button */}
            <button
              onClick={() => setShowWhatsAppModal(true)}
              className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group-hover:shadow-green-500/30"
              aria-label="Contact via WhatsApp"
            >
              {/* Professional Pulse Animation */}
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></div>
              
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              
              {/* Professional Online Indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 border-2 border-white rounded-full shadow-sm">
                <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Professional WhatsApp Modal */}
      {showWhatsAppModal && <WhatsAppModal />}

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Left Section - About */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {portfolioData.name}
                </h3>
                <p className="text-base sm:text-lg text-blue-200 font-medium">{portfolioData.role}</p>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Passionate about creating innovative solutions and bringing ideas to life through code. 
                Let's build something amazing together!
              </p>
              
              <div className="flex space-x-3 sm:space-x-4">
                <a 
                  href={portfolioData.contact.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 relative z-10"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white" />
                </a>
                
                <a 
                  href={portfolioData.contact.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 relative z-10"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white" />
                </a>
                
                <a 
                  href={portfolioData.contact.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 relative z-10"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            {/* Middle Section - Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-200">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                {['Home','About', 'Projects','Experience', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform text-sm sm:text-base relative z-10"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right Section - Contact Info - WhatsApp Updated */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-200">Get In Touch</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <a 
                    href={`mailto:${portfolioData.contact.email}`}
                    className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base break-all relative z-10"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-sm sm:text-base">{portfolioData.contact.location}</span>
                </div>
                
                {/* Enhanced WhatsApp Section */}
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="relative">
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <button 
                    onClick={() => setShowWhatsAppModal(true)}
                    className="hover:text-green-400 transition-colors duration-300 font-medium text-sm sm:text-base relative z-10"
                  >
                    Professional Chat
                  </button>
                </div>
              </div>
              
              {/* Enhanced Call to Action */}
              <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-green-500/30 relative z-10">
                <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-green-300">Ready to collaborate?</p>
                <button 
                  onClick={() => setShowWhatsAppModal(true)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 text-sm sm:text-base"
                >
                  Start Professional Chat
                </button>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-700 mb-6 sm:mb-8 relative z-10">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 space-y-4 md:space-y-0 relative z-10">
            <div className="text-center md:text-left">
              <p className="text-xs sm:text-sm">
                © {currentYear} {portfolioData.name}. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#privacy" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements - Moved to back with lower z-index */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
      </footer>
      
      {/* Enhanced CSS for professional WhatsApp features */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Mobile responsiveness improvements */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
          
          .space-y-4 > * + * {
            margin-top: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;