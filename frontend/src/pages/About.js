import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Zap, Code, Coffee } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      role: 'Lead Developer',
      nepali: 'मुख्य विकासकर्ता',
      background: 'IT Student',
      description: 'Passionate about creating innovative web solutions and leading technical projects.',
      image: 'https://images.unsplash.com/photo-1618544976420-1f213fcf2052'
    },
    {
      name: 'Sita Poudel',
      role: 'Frontend Specialist',
      nepali: 'फ्रन्टएन्ड विशेषज्ञ',
      background: 'IT Student',
      description: 'Focused on creating beautiful, user-friendly interfaces that engage and convert.',
      image: 'https://images.unsplash.com/photo-1618544976420-1f213fcf2052'
    },
    {
      name: 'Amit Thapa',
      role: 'Backend Engineer',
      nepali: 'ब्याकएन्ड इन्जिनियर',
      background: 'Engineering Student',
      description: 'Ensures robust, scalable backend systems that power our client solutions.',
      image: 'https://images.unsplash.com/photo-1618544976420-1f213fcf2052'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion Driven',
      nepali: 'जोशले भरिएको',
      description: 'We pour our heart into every project, treating your success as our own.'
    },
    {
      icon: Target,
      title: 'Quality Focused',
      nepali: 'गुणस्तरमा केन्द्रित',
      description: 'We prefer delivering fewer, exceptional projects rather than many average ones.'
    },
    {
      icon: Users,
      title: 'Client Centric',
      nepali: 'ग्राहक केन्द्रित',
      description: 'Your business goals drive our development decisions and priorities.'
    },
    {
      icon: Zap,
      title: 'Innovation Ready',
      nepali: 'नवाचार तयार',
      description: 'We stay updated with latest technologies to deliver cutting-edge solutions.'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Foundation',
      description: 'Three friends started with a vision to empower local businesses.'
    },
    {
      year: '2023',
      title: 'First Clients',
      description: 'Successfully delivered our first commercial projects.'
    },
    {
      year: '2024',
      title: 'Growth Phase',
      description: 'Expanded services and built strong client relationships.'
    },
    {
      year: '2025',
      title: 'Digital Impact',
      description: 'Continuing to transform Nepali businesses digitally.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1565770772312-2b43cac7d585"
            alt="Nepal Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                About
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
                  CampaHills Technologies
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We are three passionate students from Nepal with a shared vision: to empower local businesses 
                through innovative digital solutions and help them thrive in the global marketplace.
              </p>
              
              <p className="text-lg text-blue-600 font-medium">
                हामी तीन साथीहरू मिलेर नेपाली व्यवसायहरूलाई डिजिटल संसारमा सफल बनाउने सपना देखेका छौं।
              </p>
              
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2+</div>
                  <div className="text-gray-600">Years Together</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Projects Planned</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052"
                  alt="Our Team"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From late-night coding sessions to launching successful projects, here's how we became 
              CampaHills Technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Coffee className="text-blue-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">The Beginning</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                It all started during our college days when we noticed many local businesses struggling 
                to establish their digital presence. We realized that quality web development services 
                were either too expensive or not tailored for the Nepali market.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                We decided to bridge this gap by combining our technical skills with deep understanding 
                of local business needs. What began as helping friends and family soon grew into a 
                mission to digitally transform Nepali entrepreneurship.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Code className="text-blue-600" size={24} />
                  <span className="font-semibold text-gray-900">Our Mission</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To make high-quality web development and IT solutions accessible to every Nepali 
                  entrepreneur, helping them compete globally while staying true to their roots.
                </p>
                
                <div className="flex items-center space-x-3 mt-6">
                  <Target className="text-blue-600" size={24} />
                  <span className="font-semibold text-gray-900">Our Vision</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become the trusted digital partner for growing businesses across Nepal and beyond, 
                  creating sustainable impact through technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three dedicated students with complementary skills and a shared passion for excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-blue-400/20 to-blue-600/20"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <div className="text-center mb-4">
                  <div className="text-blue-600 font-semibold">{member.role}</div>
                  <div className="text-sm text-gray-500">{member.nepali}</div>
                  <div className="text-sm text-gray-600 mt-1">{member.background}</div>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <div className="text-sm text-blue-600 font-medium mb-3">
                    {value.nepali}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our journey from students to digital solution providers.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our passion, skills, and local market understanding can help 
              transform your business idea into digital reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;