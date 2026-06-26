// src/components/website/Academics.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CalendarIcon, 
  CheckCircleIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  TrophyIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  BookmarkIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const Academics = () => {
  const curriculum = [
    { 
      grade: 'Primary School', 
      classes: 'Class 1 - 5', 
      age: '6-10 years',
      description: 'Foundation years focused on basic literacy, numeracy, and holistic development.', 
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer Science'],
      icon: BookOpenIcon,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      grade: 'Middle School', 
      classes: 'Class 6 - 8', 
      age: '11-13 years',
      description: 'Building strong academic foundation with introduction to advanced concepts.', 
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer Science', 'Sanskrit'],
      icon: AcademicCapIcon,
      color: 'from-green-500 to-green-600'
    },
    { 
      grade: 'High School', 
      classes: 'Class 9 - 10', 
      age: '14-16 years',
      description: 'Preparing students for board examinations with comprehensive curriculum.', 
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Computer Science', 'Physical Education'],
      icon: TrophyIcon,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const features = [
    { icon: ChartBarIcon, title: 'Smart Classrooms', description: 'Digital learning with smart boards and interactive content', color: 'from-blue-500 to-blue-600' },
    { icon: ClockIcon, title: 'Flexible Timings', description: 'Well-planned schedule for balanced academic and extracurricular activities', color: 'from-green-500 to-green-600' },
    { icon: CalendarIcon, title: 'Annual Calendar', description: 'Organized academic milestones and clear event schedule', color: 'from-purple-500 to-purple-600' },
    { icon: CheckCircleIcon, title: 'Regular Assessments', description: 'Continuous evaluation through tests, projects, and activities', color: 'from-orange-500 to-orange-600' }
  ];

  const highlights = [
    { icon: BeakerIcon, value: '5', label: 'Science Labs', color: 'from-blue-500 to-blue-600' },
    { icon: ComputerDesktopIcon, value: '3', label: 'Computer Labs', color: 'from-green-500 to-green-600' },
    { icon: BookOpenIcon, value: '15,000+', label: 'Library Books', color: 'from-purple-500 to-purple-600' },
    { icon: UserGroupIcon, value: '20:1', label: 'Student-Teacher Ratio', color: 'from-orange-500 to-orange-600' }
  ];

  const coCurricular = [
    { icon: GlobeAltIcon, title: 'Arts & Culture', items: ['Dance', 'Music', 'Art', 'Drawing', 'Painting'] },
    { icon: TrophyIcon, title: 'Sports & Games', items: ['Cricket', 'Volleyball', 'Kabaddi', 'Badminton', 'Chess', 'Carroms', 'Yoga'] },
    { icon: LightBulbIcon, title: 'Clubs & Activities', items: ['Science Club', 'Math Club', 'Literary Club', 'Eco Club', 'IT Club'] }
  ];

  const academicLevels = [
    { level: 'Primary', classes: '1-5', focus: 'Foundation & Basic Skills', color: 'bg-blue-100 text-blue-700' },
    { level: 'Middle', classes: '6-8', focus: 'Core Concepts & Exploration', color: 'bg-green-100 text-green-700' },
    { level: 'Secondary', classes: '9-10', focus: 'Board Preparation & Specialization', color: 'bg-purple-100 text-purple-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">📚 Academic Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive curriculum for holistic development and academic excellence.
          </p>
        </div>
      </section>

      {/* Academic Levels Quick Links */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {academicLevels.map((level, index) => (
              <div key={index} className={`px-6 py-2 rounded-full ${level.color} font-semibold text-sm`}>
                {level.level} (Class {level.classes}) - {level.focus}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${item.color} mb-3`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-4 py-1 rounded-full">Academic Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
              Our <span className="text-purple-600">Curriculum</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-2"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A well-structured curriculum that caters to the needs of every student at different stages of learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculum.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-xl">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.grade}</h3>
                        <p className="text-sm opacity-90">{item.classes} | {item.age}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.subjects.map((subject, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1 rounded-full">Academic Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
              Academic <span className="text-blue-600">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Co-Curricular Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-pink-600 uppercase tracking-wider bg-pink-50 px-4 py-1 rounded-full">Beyond Academics</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
              Co-Curricular <span className="text-pink-600">Activities</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coCurricular.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-block p-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {activity.items.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-4 py-1 rounded-full">Schedule</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
              Academic <span className="text-orange-600">Calendar</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="space-y-4">
              <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Term 1</h4>
                  <p className="text-gray-500 text-sm">April - September</p>
                </div>
                <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Ongoing</span>
              </div>
              <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Term 2</h4>
                  <p className="text-gray-500 text-sm">October - March</p>
                </div>
                <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Upcoming</span>
              </div>
              <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Summer Break</h4>
                  <p className="text-gray-500 text-sm">May - June</p>
                </div>
                <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Holiday</span>
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800">Board Examinations</h4>
                  <p className="text-gray-500 text-sm">March - April</p>
                </div>
                <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Important</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your <span className="text-yellow-300">Academic Journey</span>?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Vidya Bharati and experience quality education that prepares you for life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/admissions" 
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition hover:shadow-2xl inline-block"
            >
              Apply for Admission
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;