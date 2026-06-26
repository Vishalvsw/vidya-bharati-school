import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  UserIcon, ArrowLeftOnRectangleIcon, AcademicCapIcon,
  BookOpenIcon, CreditCardIcon, BellIcon, CalendarIcon,
  CheckCircleIcon, ClockIcon, UserGroupIcon, HomeIcon,
  DocumentTextIcon, TrophyIcon, FolderIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

// Import all student modules
import StudyMaterials from './StudyMaterials';
import FeePayment from './FeePayment';
import Notices from './Notices';
import MarksCard from './MarksCard';
import Documents from './Documents';
import Profile from './Profile';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const studentData = localStorage.getItem('student');
    if (!token || !studentData) { 
      navigate('/vsw-student-portal'); 
      return; 
    }
    try { 
      setStudent(JSON.parse(studentData)); 
    } catch(e) { 
      navigate('/vsw-student-portal'); 
    }
    finally { setLoading(false); }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('student');
    toast.success('Logged out successfully');
    navigate('/');
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600"></div>
    </div>
  );

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'materials', label: 'Study Materials', icon: BookOpenIcon },
    { id: 'fees', label: 'Fee Payment', icon: CreditCardIcon },
    { id: 'notices', label: 'Notices', icon: BellIcon },
    { id: 'marks', label: 'Marks Card', icon: TrophyIcon },
    { id: 'documents', label: 'Documents', icon: FolderIcon },
    { id: 'profile', label: 'Profile', icon: UserIcon }
  ];

  const stats = [
    { title: 'Attendance', value: '92%', icon: CheckCircleIcon, color: 'from-green-500 to-green-600' },
    { title: 'Fees Status', value: 'Paid', icon: CreditCardIcon, color: 'from-blue-500 to-blue-600' },
    { title: 'Class', value: student?.class || '10th A', icon: AcademicCapIcon, color: 'from-purple-500 to-purple-600' },
    { title: 'Roll No', value: student?.roll_number || '101', icon: UserGroupIcon, color: 'from-orange-500 to-orange-600' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return (
        <>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white mb-6">
            <h2 className="text-2xl font-bold">Welcome, {student?.full_name?.split(' ')[0] || 'Student'}! 👋</h2>
            <p className="text-green-100">Here's your learning progress today</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="bg-white/20 rounded-xl px-4 py-2 flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span className="text-sm">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="bg-white/20 rounded-xl px-4 py-2 flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span className="text-sm">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white inline-block`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-3">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.title}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">📋 Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {menuItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition text-center"
                >
                  <item.icon className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      );
      case 'materials': return <StudyMaterials />;
      case 'fees': return <FeePayment />;
      case 'notices': return <Notices />;
      case 'marks': return <MarksCard />;
      case 'documents': return <Documents />;
      case 'profile': return <Profile student={student} />;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col fixed h-full z-20 shadow-2xl`}>
        <div className="p-5 border-b border-gray-700 flex justify-between items-center">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <AcademicCapIcon className="h-8 w-8 text-green-400" />
              <div>
                <h1 className="font-bold text-sm">Student</h1>
                <p className="text-xs text-gray-400">Portal</p>
              </div>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-gray-700 rounded transition">
            {sidebarOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-white">
                {student?.full_name?.charAt(0) || 'S'}
              </span>
            </div>
            {sidebarOpen && (
              <div>
                <p className="font-semibold text-sm">{student?.full_name || 'Student'}</p>
                <p className="text-xs text-gray-400">{student?.class || 'N/A'}</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          {sidebarOpen && (
            <div className="px-4 mb-2">
              <p className="text-xs uppercase tracking-wider text-gray-500">Main Menu</p>
            </div>
          )}
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center ${sidebarOpen ? 'px-5' : 'justify-center'} py-3 my-1 transition-all rounded-lg mx-2 ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg' 
                  : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              <div className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} h-5 w-5`}>
                <item.icon className="h-5 w-5" />
              </div>
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button onClick={handleLogout} className={`flex items-center gap-3 w-full p-2 hover:bg-gray-700 rounded-lg transition ${!sidebarOpen && 'justify-center'}`}>
            <ArrowLeftOnRectangleIcon className="h-5 w-5 text-red-400" />
            {sidebarOpen && <span className="text-sm text-red-400">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-20'}`}>
        <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h1 className="text-lg font-bold text-gray-800 capitalize">{activeTab}</h1>
            <p className="text-sm text-gray-500">Welcome, {student?.full_name?.split(' ')[0] || 'Student'}!</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <BellIcon className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>

        <div className="p-6 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
