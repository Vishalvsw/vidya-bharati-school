// src/components/website/Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon, 
  ChatBubbleLeftRightIcon,
  UserIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('✅ Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('❌ Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: MapPinIcon, 
      title: 'Address', 
      details: (
        <>
          <p>Vidya Bharati Public School</p>
          <p>Near Subhash Chowk, Bhalki - 585328</p>
          <p>District: Bidar, Karnataka</p>
        </>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: PhoneIcon, 
      title: 'Phone Numbers', 
      details: (
        <>
          <p className="font-medium text-gray-700">Rohith Vairage</p>
          <p className="text-sm text-blue-600">+91 97316 66652</p>
          <p className="text-sm text-blue-600">+91 81236 66652</p>
          <p className="font-medium text-gray-700 mt-1">Santosh Patil</p>
          <p className="text-sm text-blue-600">+91 94494 59013</p>
        </>
      ),
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: EnvelopeIcon, 
      title: 'Email', 
      details: (
        <>
          <p><a href="mailto:vbpsbhalki@gmail.com" className="text-blue-600 hover:underline">vbpsbhalki@gmail.com</a></p>
          <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
        </>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: ClockIcon, 
      title: 'Office Hours', 
      details: (
        <>
          <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
          <p className="text-red-500 text-sm">Sunday: Closed</p>
        </>
      ),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const trustBadges = [
    { icon: CheckCircleIcon, text: 'Quick Response' },
    { icon: CheckCircleIcon, text: '24/7 Support' },
    { icon: CheckCircleIcon, text: 'Experienced Staff' },
    { icon: CheckCircleIcon, text: 'Quality Education' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">📞 Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries or feedback.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 -mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${info.color} mb-4 shadow-md`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  {info.details}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
              <p className="text-gray-500 text-sm mt-1">Fill in the form below and we'll get back to you</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRightIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Quick Info */}
          <div>
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                Find Us
              </h3>
              <div className="rounded-xl overflow-hidden bg-gray-200 h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15156.3456789!2d77.230456!3d18.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA3JzI0LjQiTiA3N8KwMTMnNDYuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="School Location"
                  className="hover:scale-105 transition"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-semibold text-gray-800">📍 Vidya Bharati Public School</p>
                <p>Near Subhash Chowk, Bhalki - 585328</p>
                <p>District: Bidar, Karnataka</p>
              </div>
            </div>

            {/* Quick Connect */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-200">Rohith Vairage</p>
                    <a href="tel:+919731666652" className="hover:underline text-sm block">+91 97316 66652</a>
                    <a href="tel:+918123666652" className="hover:underline text-sm block">+91 81236 66652</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-200">Santosh Patil</p>
                    <a href="tel:+919449459013" className="hover:underline text-sm">+91 94494 59013</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-blue-200 flex-shrink-0" />
                  <a href="mailto:vbpsbhalki@gmail.com" className="hover:underline text-sm break-all">vbpsbhalki@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-blue-500">
                  <ClockIcon className="h-5 w-5 text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="text-sm">Mon-Fri: 8:00 AM - 4:00 PM</p>
                    <p className="text-sm">Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-blue-500">
                  <a 
                    href="https://wa.me/919731666652" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition border border-white/30"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5" /> 
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-t border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <IconComponent className="h-5 w-5 text-green-500" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;