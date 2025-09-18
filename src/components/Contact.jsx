import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle,
  User,
  MessageSquare,
  AtSign,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Coffee,
  Zap,
  Heart,
  Globe,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  // Portfolio data - replace with your actual data
  const portfolioData = {
    contact: {
      email: "infantjebasurya2.0@gmail.com",
      phone: "+91 9677794485",
      location: "Bengalore, KA",
      availability: "Available for freelance",
      timezone: "IST (UTC+5:30)",
      social: {
        github: "https://github.com/Infanjebasurya/",
        linkedin: "https://www.linkedin.com/in/infant-jeba-surya-a-33901b348/",
        twitter: "https://twitter.com/johndoe"
      }
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters long';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear errors when user starts typing
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
    
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      description: "Best for detailed inquiries",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Phone",
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone}`,
      description: "Quick chat or consultation",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Location",
      value: portfolioData.contact.location,
      href: "#",
      description: "Available for remote work",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Timezone",
      value: portfolioData.contact.timezone,
      href: "#",
      description: "Usually respond within 24h",
      color: "orange"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: portfolioData.contact.social.github,
      color: "bg-gray-900 hover:bg-gray-800",
      description: "Check out my repositories"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: portfolioData.contact.social.linkedin,
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Connect professionally"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: portfolioData.contact.social.twitter,
      color: "bg-blue-400 hover:bg-blue-500",
      description: "Follow my thoughts"
    }
  ];

  const quickTopics = [
    "Web Development Project",
    "Mobile App Development", 
    "Consulting Services",
    "Freelance Opportunity",
    "Technical Questions",
    "Other"
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Send Message</h3>
                  <p className="text-gray-600">Fill out the form below</p>
                </div>
              </div>

              {/* Quick Topic Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-3">What's this about?</label>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {quickTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setFormData({...formData, subject: topic})}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formData.subject === topic
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <AtSign className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <MessageSquare className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                      focusedField === 'subject' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        formErrors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formErrors.subject}
                    </p>
                  )}
                </div>
                
                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      formErrors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tell me more about your project or inquiry... (minimum 10 characters)"
                    required
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`p-4 rounded-xl flex items-center space-x-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <CheckCircle className="w-5 h-5" />
                    <span>
                      {submitStatus === 'success' 
                        ? 'Message sent successfully! I\'ll get back to you soon.' 
                        : 'Something went wrong. Please try again.'}
                    </span>
                  </div>
                )}
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Methods */}
            <div className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <div key={method.title} 
                    className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors`}>
                        <method.icon className={`w-6 h-6 text-blue-600`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                        {method.href.startsWith('#') ? (
                          <p className="text-gray-600 font-medium">{method.value}</p>
                        ) : (
                          <a 
                            href={method.href}
                            className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
                          >
                            {method.value}
                          </a>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid - Social Links & Availability Status */}
        <div className="mt-12 lg:mt-16">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Social Links */}
            <div className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Connect With Me</h3>
              </div>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className={`w-10 h-10 ${social.color} rounded-xl flex items-center justify-center transition-colors group-hover:scale-110 transform duration-200`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{social.name}</h4>
                      <p className="text-sm text-gray-600">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className={`bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 lg:p-8 border border-green-200 transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-semibold text-gray-900">Current Status</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-semibold text-green-600">Open for work</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response time</span>
                  <span className="font-semibold text-gray-900">Within 24h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Current projects</span>
                  <span className="font-semibold text-gray-900">2 active</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-green-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Coffee className="w-4 h-4" />
                  <span>Fueled by coffee and great ideas ☕</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>  
    </section>
  );
};

export default Contact;