import React from 'react';
import { 
  UserCircleIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  AcademicCapIcon,
  IdentificationIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Profile = ({ student }) => {
  const profileData = {
    name: student?.full_name || 'Student User',
    email: student?.email || 'student@example.com',
    studentId: student?.student_id || 'STU-2024-001',
    class: student?.class || '10th A',
    section: student?.section || 'A',
    rollNumber: student?.roll_number || '101',
    admissionYear: '2024',
    address: 'Near Subhash Chowk, Bhalki - 585328'
  };

  const infoCards = [
    { icon: UserCircleIcon, label: 'Full Name', value: profileData.name },
    { icon: EnvelopeIcon, label: 'Email', value: profileData.email },
    { icon: IdentificationIcon, label: 'Student ID', value: profileData.studentId },
    { icon: AcademicCapIcon, label: 'Class', value: `${profileData.class} - ${profileData.section}` },
    { icon: PhoneIcon, label: 'Roll Number', value: profileData.rollNumber },
    { icon: CalendarIcon, label: 'Admission Year', value: profileData.admissionYear },
    { icon: MapPinIcon, label: 'Address', value: profileData.address }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto shadow-lg">
          {profileData.name.charAt(0)}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-3">{profileData.name}</h2>
        <p className="text-gray-500">Student ID: {profileData.studentId}</p>
        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Active Student
        </div>
      </div>

      {/* Profile Info */}
      <div className="grid md:grid-cols-2 gap-4">
        {infoCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div key={index} className="bg-gray-50 rounded-xl p-4 flex items-start gap-3 hover:bg-gray-100 transition">
              <div className="p-2 bg-blue-50 rounded-lg">
                <IconComponent className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">{card.label}</p>
                <p className="font-semibold text-gray-800 break-all">{card.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
            Change Password
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm">
            Download ID Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
