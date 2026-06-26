// src/components/website/Admissions.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  AcademicCapIcon, 
  DocumentTextIcon, 
  CalendarIcon, 
  ChevronRightIcon,
  HomeIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Admissions = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    altPhone: '',
    class: '',
    previousSchool: '',
    address: '',
    message: '',
    academicYear: '2026-27',
    branch: 'Bhalki Main Campus'
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('✅ Application submitted successfully! We will contact you within 24 hours.');
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      altPhone: '',
      class: '',
      previousSchool: '',
      address: '',
      message: '',
      academicYear: '2026-27',
      branch: 'Bhalki Main Campus'
    });
    setStep(1);
    setSubmitting(false);
  };

  const steps = [
    { icon: DocumentTextIcon, title: 'Fill Application', desc: 'Complete the online application form' },
    { icon: CheckCircleIcon, title: 'Verification', desc: 'Documents and details verification' },
    { icon: CalendarIcon, title: 'Assessment', desc: 'Entrance test and parent interview' },
    { icon: AcademicCapIcon, title: 'Enrollment', desc: 'Fee payment and admission confirmation' }
  ];

  const classes = ['Nursery', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const academicYears = ['2025-26', '2026-27', '2027-28'];
  const branches = ['Bhalki Main Campus', 'Bhalki Branch'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">📢 Admission Open for 2026-27</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">Vidya Bharati</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Begin your child's journey to excellence. Admissions open for Nursery to Class 10.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/" className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition flex items-center gap-2">
              <HomeIcon className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-white shadow-sm border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <span className="text-gray-600">📅 Last Date: <strong className="text-blue-600">March 31, 2026</strong></span>
            <span className="text-gray-300 hidden md:inline">|</span>
            <span className="text-gray-600">📞 For Queries: <strong className="text-blue-600">+91 97316 66652</strong></span>
            <span className="text-gray-300 hidden md:inline">|</span>
            <span className="text-gray-600">✉️ <strong className="text-blue-600">vbpsbhalki@gmail.com</strong></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Admission Process</h2>
              {steps.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className={`flex items-start gap-4 p-3 rounded-xl transition ${step === idx + 1 ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Step {idx + 1}: {item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}

              {/* Documents Required */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">📋 Documents Required</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">• Birth Certificate</li>
                  <li className="flex items-start gap-2">• Previous School Report Card</li>
                  <li className="flex items-start gap-2">• Transfer Certificate (if applicable)</li>
                  <li className="flex items-start gap-2">• Aadhar Card copy</li>
                  <li className="flex items-start gap-2">• Passport size photographs (4)</li>
                  <li className="flex items-start gap-2">• Medical Fitness Certificate</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">📞 Need Help?</h3>
                <p className="text-sm text-blue-600">Contact: <strong>+91 97316 66652</strong></p>
                <p className="text-sm text-blue-600">Email: <strong>vbpsbhalki@gmail.com</strong></p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Apply Now</h2>
              <p className="text-gray-500 mb-6">Fill in the details below to start your admission process</p>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Student & Parent Details */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-700">Student & Parent Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year *</label>
                        <select
                          name="academicYear"
                          value={formData.academicYear}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          {academicYears.map((year) => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Branch *</label>
                        <select
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          {branches.map((branch) => (
                            <option key={branch} value={branch}>{branch}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Select Class *</label>
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Class</option>
                        {classes.map((cls) => (
                          <option key={cls} value={cls}>Class {cls}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Student Name *</label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter student's full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Parent Name *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter parent's full name"
                        required
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Next Step
                      <ChevronRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-700">Contact Information</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Alternative Mobile Number</label>
                      <input
                        type="tel"
                        name="altPhone"
                        value={formData.altPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter alternative mobile number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email ID *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter email address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Previous School</label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name of previous school (if any)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter complete address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>

                    {/* Review Section */}
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">📋 Review Your Application</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><span className="font-medium">Academic Year:</span> {formData.academicYear || '-'}</p>
                        <p><span className="font-medium">Branch:</span> {formData.branch || '-'}</p>
                        <p><span className="font-medium">Class:</span> {formData.class || '-'}</p>
                        <p><span className="font-medium">Student:</span> {formData.studentName || '-'}</p>
                        <p><span className="font-medium">Parent:</span> {formData.parentName || '-'}</p>
                        <p><span className="font-medium">Mobile:</span> {formData.phone || '-'}</p>
                        <p><span className="font-medium">Email:</span> {formData.email || '-'}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          'Submit Application ✅'
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Progress Indicator */}
                <div className="mt-6 flex justify-center gap-2">
                  {[1, 2].map((num) => (
                    <div
                      key={num}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        step === num ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-gray-400 mt-2">Step {step} of 2</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Need Help with Admissions?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Contact our admission office for any queries or assistance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span>+91 97316 66652</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span>+91 94494 59013</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <span>vbpsbhalki@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;