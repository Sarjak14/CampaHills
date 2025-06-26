import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Filter, X } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', nepali: 'सबै परियोजनाहरू' },
    { id: 'website', name: 'Websites', nepali: 'वेबसाइटहरू' },
    { id: 'ecommerce', name: 'E-commerce', nepali: 'ई-कमर्स' },
    { id: 'assignment', name: 'IT Solutions', nepali: 'आईटी समाधान' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Himalayan Crafts E-commerce',
      nepali: 'हिमालयन शिल्प ई-कमर्स',
      category: 'ecommerce',
      description: 'A beautiful e-commerce platform showcasing traditional Nepali handicrafts to global customers.',
      longDescription: 'Complete e-commerce solution featuring secure payments, inventory management, multi-language support, and mobile-optimized design. Helped local artisans reach international markets.',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Multi-language Support', 'Secure Payments', 'Inventory Management', 'Mobile Responsive'],
      client: 'Local Artisan Cooperative',
      duration: '3 months',
      year: '2024',
      status: 'Live',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Nepal Tourism Portal',
      nepali: 'नेपाल पर्यटन पोर्टल',
      category: 'website',
      description: 'Comprehensive tourism website promoting Nepal\'s natural beauty and cultural heritage.',
      longDescription: 'Interactive tourism platform with virtual tours, booking system, travel guides, and real-time weather updates. Features stunning galleries and multilingual content.',
      image: 'https://images.unsplash.com/photo-1660629512606-184b75cc86fc',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'AWS'],
      features: ['Virtual Tours', 'Booking System', 'Weather Integration', 'Interactive Maps'],
      client: 'Tourism Board Initiative',
      duration: '4 months',
      year: '2024',
      status: 'Development',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Student Assignment Helper',
      nepali: 'विद्यार्थी असाइनमेन्ट सहायक',
      category: 'assignment',
      description: 'Platform connecting students with expert tutors for IT assignment help and guidance.',
      longDescription: 'Comprehensive learning platform with video tutorials, live chat support, assignment submission system, and progress tracking for IT students.',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg',
      technologies: ['React', 'Firebase', 'Node.js', 'Socket.io'],
      features: ['Live Chat Support', 'Video Tutorials', 'Progress Tracking', 'Assignment Submission'],
      client: 'Educational Institution',
      duration: '2 months',
      year: '2024',
      status: 'Live',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Local Restaurant Chain',
      nepali: 'स्थानीय रेस्टुरेन्ट चेन',
      category: 'website',
      description: 'Modern website for a growing restaurant chain with online ordering and reservation system.',
      longDescription: 'Full-featured restaurant website with menu management, online ordering, table reservations, and customer reviews. Integrated with kitchen management system.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      technologies: ['React', 'Node.js', 'MySQL', 'PayPal'],
      features: ['Online Ordering', 'Table Reservations', 'Menu Management', 'Customer Reviews'],
      client: 'Mountain View Restaurants',
      duration: '3 months',
      year: '2023',
      status: 'Live',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Startup Portfolio Website',
      nepali: 'स्टार्टअप पोर्टफोलियो वेबसाइट',
      category: 'website',
      description: 'Professional portfolio website for a growing tech startup showcasing their innovative solutions.',
      longDescription: 'Corporate website with dynamic content management, team profiles, service showcases, and client testimonials. Optimized for search engines and social media.',
      image: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238',
      technologies: ['React', 'Gatsby', 'Contentful', 'Netlify'],
      features: ['CMS Integration', 'SEO Optimized', 'Team Profiles', 'Client Testimonials'],
      client: 'Tech Innovators Pvt. Ltd.',
      duration: '2 months',
      year: '2023',
      status: 'Live',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Code Learning Platform',
      nepali: 'कोड सिक्ने प्लेटफर्म',
      category: 'assignment',
      description: 'Interactive platform for students to learn programming with hands-on exercises and projects.',
      longDescription: 'Complete learning management system with interactive coding exercises, project submissions, peer reviews, and instructor feedback system.',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
      technologies: ['React', 'Python', 'Django', 'Docker'],
      features: ['Interactive Coding', 'Project Submissions', 'Peer Reviews', 'Instructor Feedback'],
      client: 'Coding Academy Nepal',
      duration: '5 months',
      year: '2024',
      status: 'Development',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
                Projects Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the innovative solutions we've crafted for our clients. Each project represents 
              our commitment to quality, creativity, and client success.
            </p>
            
            <p className="text-lg text-blue-600 font-medium">
              हाम्रा सफल परियोजनाहरूको झलक
            </p>
            
            <div className="flex justify-center">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Live Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>In Development</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Filter size={16} />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-70">{category.nepali}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    
                    <p className="text-sm text-blue-600 font-medium mb-3">
                      {project.nepali}
                    </p>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{project.client}</span>
                      <div className="flex items-center text-blue-600">
                        <span className="text-sm mr-2">View Details</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProject.status === 'Live' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-blue-600 font-medium mb-4">
                      {selectedProject.nepali}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedProject.longDescription}
                    </p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={selectedProject.demoUrl}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>View Live</span>
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                      <p className="text-gray-600">{selectedProject.client}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                      <p className="text-gray-600">{selectedProject.duration}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Year</h4>
                      <p className="text-gray-600">{selectedProject.year}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;