// src/components/website/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  TrophyIcon, 
  HeartIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  CalendarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  StarIcon,
  UsersIcon,
  BuildingLibraryIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const About = () => {
  const coreValues = [
    { 
      icon: HeartIcon, 
      title: 'Compassion', 
      description: 'We care for every student\'s well-being and growth.',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      icon: LightBulbIcon, 
      title: 'Innovation', 
      description: 'Embracing modern teaching methods and technology.',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: ShieldCheckIcon, 
      title: 'Integrity', 
      description: 'Building character with honesty and values.',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: UserGroupIcon, 
      title: 'Community', 
      description: 'Fostering a supportive and inclusive environment.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const milestones = [
    { year: '1995', title: 'Founded', description: 'Vidya Bharati was established with a vision to provide quality education.', icon: CalendarIcon },
    { year: '2005', title: 'Expanded Campus', description: 'New campus with modern facilities and infrastructure.', icon: BuildingLibraryIcon },
    { year: '2015', title: 'Smart Classrooms', description: 'Introduced digital learning with smart boards and technology.', icon: LightBulbIcon },
    { year: '2023', title: 'Best School Award', description: 'Recognized as the Best School in the district.', icon: TrophyIcon }
  ];

  const whyChooseUs = [
    { 
      icon: AcademicCapIcon, 
      title: 'Quality Education', 
      description: 'Experienced teachers and modern teaching methods.',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: UserGroupIcon, 
      title: 'Holistic Development', 
      description: 'Focus on academics, sports, arts, and character building.',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: ShieldCheckIcon, 
      title: 'Safe Environment', 
      description: 'Secure campus with caring staff and monitoring.',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: TrophyIcon, 
      title: 'Excellence Record', 
      description: '98% success rate with top results in board exams.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🏫 About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-300">Vidya Bharati</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering minds, shaping futures since 1995
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-blue-600">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education that nurtures intellectual curiosity, 
                fosters creativity, and develops responsible citizens who can 
                contribute positively to society.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-purple-600">
              <div className="text-5xl mb-4">🌟</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution that empowers students 
                with knowledge, skills, and values to excel in a rapidly 
                changing global environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1 rounded-full">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
              Why <span className="text-blue-600">Vidya Bharati</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-4 py-1 rounded-full">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
              Our <span className="text-purple-600">Core Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-4 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-green-600 uppercase tracking-wider bg-green-50 px-4 py-1 rounded-full">Timeline</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
              Our <span className="text-green-600">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full"></div>
            
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 p-4">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our <span className="text-yellow-300">Impact</span></h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100 text-sm">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-sm">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Join Our <span className="text-blue-600">Community</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Become a part of Vidya Bharati and give your child the best start in life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/admissions" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2"
              >
                Apply for Admission
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;