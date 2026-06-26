
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BuildingLibraryIcon, 
  BookOpenIcon, 
  GlobeAltIcon,
  StarIcon, 
  UsersIcon, 
  ClipboardDocumentListIcon,
  RocketLaunchIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  TrophyIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  ClockIcon,
  ChevronRightIcon,
  PlayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const Home = () => {
  const [showNotice, setShowNotice] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: UsersIcon, value: '500+', label: 'Students', color: 'from-blue-500 to-blue-600' },
    { icon: AcademicCapIcon, value: '25+', label: 'Teachers', color: 'from-green-500 to-green-600' },
    { icon: BuildingLibraryIcon, value: '15,000+', label: 'Library Books', color: 'from-purple-500 to-purple-600' },
    { icon: StarIcon, value: '98%', label: 'Success Rate', color: 'from-orange-500 to-orange-600' }
  ];

  const features = [
    { 
      icon: BookOpenIcon, 
      title: 'Smart Classes', 
      desc: 'Digital classrooms with interactive learning and smart boards',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: AcademicCapIcon, 
      title: 'Expert Faculty', 
      desc: 'Qualified teachers with years of experience and dedication',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: GlobeAltIcon, 
      title: 'Global Curriculum', 
      desc: 'Internationally recognized education system with modern approach',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: UserGroupIcon, 
      title: 'Co-curricular', 
      desc: 'Sports, arts, music, and cultural activities for holistic growth',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Parent',
      content: 'Vidya Bharati has transformed my child\'s learning experience. The teachers are exceptional.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Rahul+Sharma&background=4F46E5&color=fff&size=60'
    },
    {
      name: 'Priya Patel',
      role: 'Student',
      content: 'I love the smart classes and interactive learning methods. Every subject is interesting!',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Priya+Patel&background=059669&color=fff&size=60'
    },
    {
      name: 'Dr. Suresh Kumar',
      role: 'Alumni Parent',
      content: 'Best school in the region with excellent infrastructure and caring teachers.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Suresh+Kumar&background=7C3AED&color=fff&size=60'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-6 border border-white/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">🏆 Excellence in Education</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Vidya Bharati
              </span>
              <br />
              <span className="text-white">Public School</span>
              <span className="text-yellow-300">, Bhalki</span>
            </h1>

            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 mb-6 border border-white/20">
              <p className="text-3xl md:text-4xl text-yellow-300 font-medium">
                विद्या परम भूषणम्
              </p>
              <p className="text-xs text-blue-200 mt-1">"Knowledge is the highest ornament"</p>
            </div>

            <p className="text-xl md:text-2xl text-blue-200 mb-4 font-light max-w-3xl mx-auto">
              Empowering minds, shaping futures since 1995
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/admissions" className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105">
                Apply Now
                <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/about" className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition">
                Explore Campus
              </Link>
            </div>
          </div>
        </div>

        <div className="relative bg-black/30 backdrop-blur-sm py-6 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-block p-3 rounded-2xl bg-gradient-to-r ${stat.color} mb-2 group-hover:scale-110 transition`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board */}
      {showNotice && (
        <section className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 border-b-2 border-yellow-200 py-3 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="flex items-center gap-3">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full animate-pulse shadow-lg">
                  📢 NEW
                </span>
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-bold text-red-600">Admissions Open for 2026-27!</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/admissions" className="text-sm bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-red-700 transition">
                  Apply Now
                </Link>
                <button onClick={() => setShowNotice(false)} className="text-gray-400 hover:text-gray-600 transition text-sm">
                  ✕ Close
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1 rounded-full">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-4">
              Excellence in <span className="text-blue-600">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center border border-gray-100 hover:-translate-y-2">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What <span className="text-indigo-600">People Say</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-20 h-20 rounded-full border-4 border-indigo-100 shadow-lg" />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (<StarSolidIcon key={i} className="h-5 w-5" />))}
                  </div>
                  <p className="text-gray-700 text-lg italic">"{testimonials[currentTestimonial].content}"</p>
                  <p className="font-bold text-gray-800 mt-4">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setCurrentTestimonial(index)} 
                    className={`w-3 h-3 rounded-full transition ${currentTestimonial === index ? 'bg-indigo-600 w-8' : 'bg-gray-300'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join <span className="text-yellow-300">Vidya Bharati</span>?
          </h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Give your child the best education and a bright future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:shadow-2xl transition">
              Apply for Admission
            </Link>
            <Link to="/contact" className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
