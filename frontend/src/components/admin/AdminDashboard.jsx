// src/components/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserGroupIcon, AcademicCapIcon, CreditCardIcon, BellIcon,
  ChartBarIcon, UsersIcon, UserCircleIcon, 
  ArrowLeftOnRectangleIcon, HomeIcon, BookOpenIcon,
  Cog6ToothIcon, ChatBubbleLeftRightIcon, PhotoIcon,
  DocumentTextIcon, PlusIcon, EyeIcon, PencilIcon, TrashIcon,
  XMarkIcon, CalendarIcon, MagnifyingGlassIcon,
  CheckCircleIcon, ExclamationCircleIcon, ClockIcon,
  ArrowUpIcon, ArrowDownIcon, PrinterIcon, ArrowDownTrayIcon,
  EnvelopeIcon, PhoneIcon, MapPinIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // ============================================
  // STUDENTS DATA
  // ============================================
  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul Sharma', class: '10th A', fees: 'Paid', status: 'Active', date: '2024-01-15', email: 'rahul@email.com', phone: '+91 98765 43210' },
    { id: 2, name: 'Priya Patel', class: '10th B', fees: 'Pending', status: 'Active', date: '2024-01-20', email: 'priya@email.com', phone: '+91 98765 43211' },
    { id: 3, name: 'Amit Kumar', class: '9th A', fees: 'Paid', status: 'Active', date: '2024-02-01', email: 'amit@email.com', phone: '+91 98765 43212' },
    { id: 4, name: 'Sneha Reddy', class: '9th B', fees: 'Pending', status: 'Inactive', date: '2024-02-10', email: 'sneha@email.com', phone: '+91 98765 43213' },
    { id: 5, name: 'Vikram Singh', class: '8th A', fees: 'Paid', status: 'Active', date: '2024-02-15', email: 'vikram@email.com', phone: '+91 98765 43214' }
  ]);

  // ============================================
  // FEES DATA
  // ============================================
  const [feeData, setFeeData] = useState([
    { id: 1, student: 'Rahul Sharma', amount: 5000, date: '2024-12-01', status: 'Paid', method: 'UPI' },
    { id: 2, student: 'Priya Patel', amount: 5000, date: '2024-12-15', status: 'Pending', method: '-' },
    { id: 3, student: 'Amit Kumar', amount: 3000, date: '2024-12-10', status: 'Paid', method: 'Card' },
    { id: 4, student: 'Sneha Reddy', amount: 5000, date: '2024-12-20', status: 'Overdue', method: '-' }
  ]);

  // ============================================
  // NOTICES DATA
  // ============================================
  const [notices, setNotices] = useState([
    { id: 1, title: 'Winter Break Announcement', date: '2024-12-20', priority: 'High', content: 'School will be closed from Dec 25 to Jan 1' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-12-15', priority: 'Medium', content: 'PTM scheduled on Dec 20, 2024' },
    { id: 3, title: 'Annual Sports Day', date: '2024-12-25', priority: 'High', content: 'Sports day celebration on Dec 25' }
  ]);

  // ============================================
  // EVENTS DATA
  // ============================================
  const [events, setEvents] = useState([
    { id: 1, title: 'Annual Sports Day', date: '2025-01-15', venue: 'Sports Complex', status: 'upcoming' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-12-20', venue: 'Auditorium', status: 'upcoming' },
    { id: 3, title: 'Science Exhibition', date: '2024-12-10', venue: 'Science Lab', status: 'completed' }
  ]);

  // ============================================
  // STUDY MATERIALS
  // ============================================
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Mathematics - Algebra', subject: 'Maths', type: 'PDF', uploadDate: '2024-12-01' },
    { id: 2, title: 'Physics - Newton\'s Laws', subject: 'Physics', type: 'Video', uploadDate: '2024-11-28' },
    { id: 3, title: 'Chemistry - Periodic Table', subject: 'Chemistry', type: 'PDF', uploadDate: '2024-11-25' }
  ]);

  // ============================================
  // RECENT ACTIVITIES
  // ============================================
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, action: 'New Student Added: Rahul Sharma', user: 'Admin', time: '2 hours ago', type: 'success' },
    { id: 2, action: 'Fee Payment Received: ₹5,000', user: 'Student', time: '3 hours ago', type: 'success' },
    { id: 3, action: 'Notice Published: Winter Break', user: 'Admin', time: '5 hours ago', type: 'info' },
    { id: 4, action: 'Student Profile Updated: Priya Patel', user: 'Admin', time: '1 day ago', type: 'warning' }
  ]);

  // ============================================
  // AUTHENTICATION
  // ============================================
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const adminData = localStorage.getItem('admin');
    if (!token || !adminData) { 
      navigate('/vsw-admin-portal'); 
      return; 
    }
    try { 
      setAdmin(JSON.parse(adminData)); 
    } catch(e) { 
      navigate('/vsw-admin-portal'); 
    }
    finally { setLoading(false); }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('admin');
    toast.success('Logged out successfully');
    navigate('/');
  };

  // ============================================
  // CRUD OPERATIONS
  // ============================================
  const handleDeleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(s => s.id !== id));
      toast.success('Student deleted successfully!');
    }
  };

  const handleDeleteNotice = (id) => {
    if (window.confirm('Delete this notice?')) {
      setNotices(notices.filter(n => n.id !== id));
      toast.success('Notice deleted!');
    }
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Delete this event?')) {
      setEvents(events.filter(e => e.id !== id));
      toast.success('Event deleted!');
    }
  };

  const handleDeleteFee = (id) => {
    if (window.confirm('Delete this fee record?')) {
      setFeeData(feeData.filter(f => f.id !== id));
      toast.success('Fee record deleted!');
    }
  };

  const handleDeleteMaterial = (id) => {
    if (window.confirm('Delete this material?')) {
      setMaterials(materials.filter(m => m.id !== id));
      toast.success('Material deleted!');
    }
  };

  // ============================================
  // FILTERS
  // ============================================
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         s.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || s.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // ============================================
  // STATS
  // ============================================
  const totalFees = feeData.reduce((sum, f) => sum + f.amount, 0);
  const paidFees = feeData.filter(f => f.status === 'Paid').reduce((sum, f) => sum + f.amount, 0);
  const pendingFees = feeData.filter(f => f.status === 'Pending').reduce((sum, f) => sum + f.amount, 0);
  const overdueFees = feeData.filter(f => f.status === 'Overdue').reduce((sum, f) => sum + f.amount, 0);

  // ============================================
  // LOADING
  // ============================================
  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-500 font-medium">Loading Dashboard...</p>
      </div>
    </div>
  );

  // ============================================
  // MENU ITEMS
  // ============================================
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'students', label: 'Students', icon: UsersIcon },
    { id: 'fees', label: 'Fees', icon: CreditCardIcon },
    { id: 'materials', label: 'Study Materials', icon: BookOpenIcon },
    { id: 'notices', label: 'Notices', icon: BellIcon },
    { id: 'events', label: 'Events', icon: CalendarIcon },
    { id: 'reports', label: 'Reports', icon: ChartBarIcon },
    { id: 'whatsapp', label: 'WhatsApp', icon: ChatBubbleLeftRightIcon },
    { id: 'settings', label: 'Settings', icon: Cog6ToothIcon }
  ];

  const stats = [
    { title: 'Total Students', value: students.length, icon: UsersIcon, color: 'from-blue-500 to-blue-600', change: '+12%' },
    { title: 'Total Revenue', value: `₹${totalFees.toLocaleString()}`, icon: CreditCardIcon, color: 'from-green-500 to-green-600', change: '+8%' },
    { title: 'Pending Fees', value: `₹${pendingFees.toLocaleString()}`, icon: ChartBarIcon, color: 'from-orange-500 to-orange-600', change: '-3%' },
    { title: 'Active Students', value: students.filter(s => s.status === 'Active').length, icon: UserGroupIcon, color: 'from-purple-500 to-purple-600', change: '+5%' }
  ];

  // ============================================
  // RENDER FUNCTIONS
  // ============================================
  const renderDashboard = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800 mt-3">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Students */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">📋 Recent Students</h2>
            <button onClick={() => setActiveTab('students')} className="text-sm text-blue-600 hover:underline">View All →</button>
          </div>
          <div className="space-y-3">
            {students.slice(0, 4).map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.class}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">🔄 Recent Activities</h2>
            <span className="text-sm text-gray-400">Last 7 days</span>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition">
                <div className={`p-2 rounded-lg ${activity.type === 'success' ? 'bg-green-100' : activity.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                  {activity.type === 'success' ? <CheckCircleIcon className="h-4 w-4 text-green-600" /> :
                   activity.type === 'warning' ? <ExclamationCircleIcon className="h-4 w-4 text-yellow-600" /> :
                   <BellIcon className="h-4 w-4 text-blue-600" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm">{activity.action}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderStudents = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">👥 Student Management</h2>
          <p className="text-sm text-gray-500">Manage all student records</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          Add Student
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1 min-w-[200px] relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Class</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Fees</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-800">{student.name}</td>
                <td className="px-4 py-3 text-gray-600">{student.class}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${student.fees === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {student.fees}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${student.status === 'Active' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{student.date}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDeleteStudent(student.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredStudents.length} of {students.length} students
      </div>
    </div>
  );

  const renderFees = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
          <p className="text-sm text-gray-600">Total Fees</p>
          <p className="text-2xl font-bold text-blue-700">₹{totalFees.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
          <p className="text-sm text-gray-600">Collected</p>
          <p className="text-2xl font-bold text-green-700">₹{paidFees.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-700">₹{pendingFees.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
          <p className="text-sm text-gray-600">Overdue</p>
          <p className="text-2xl font-bold text-red-700">₹{overdueFees.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">💰 Fee Management</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
            <PlusIcon className="h-4 w-4" /> Add Fee
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Student</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Method</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {feeData.map((fee) => (
                <tr key={fee.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-800">{fee.student}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">₹{fee.amount}</td>
                  <td className="px-4 py-3 text-gray-600">{fee.date}</td>
                  <td className="px-4 py-3 text-gray-600">{fee.method}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      fee.status === 'Paid' ? 'bg-green-100 text-green-700' :
                      fee.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDeleteFee(fee.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderNotices = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">📢 Notices</h2>
          <p className="text-sm text-gray-500">Manage school notices</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          <PlusIcon className="h-4 w-4" /> Add Notice
        </button>
      </div>
      <div className="space-y-3">
        {notices.map((notice) => (
          <div key={notice.id} className={`p-4 rounded-xl border-l-4 ${
            notice.priority === 'High' ? 'border-red-500 bg-red-50' : 
            notice.priority === 'Medium' ? 'border-yellow-500 bg-yellow-50' : 
            'border-blue-500 bg-blue-50'
          }`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{notice.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{notice.content}</p>
                <p className="text-xs text-gray-400 mt-2">📅 {notice.date}</p>
              </div>
              <div className="flex gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  notice.priority === 'High' ? 'bg-red-200 text-red-700' : 
                  'bg-yellow-200 text-yellow-700'
                }`}>
                  {notice.priority}
                </span>
                <button onClick={() => handleDeleteNotice(notice.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold">📅 Events Management</h2>
          <p className="text-sm text-gray-500">Manage school events and activities</p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
          <PlusIcon className="h-4 w-4" /> Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
          <p className="text-sm text-gray-600">Total Events</p>
          <p className="text-2xl font-bold text-blue-700">{events.length}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 border border-green-200">
          <p className="text-sm text-gray-600">Upcoming</p>
          <p className="text-2xl font-bold text-green-700">{events.filter(e => e.status === 'upcoming').length}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-2xl font-bold text-gray-700">{events.filter(e => e.status === 'completed').length}</p>
        </div>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-50 rounded-xl">
                <CalendarIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <CalendarIcon className="h-3 w-3" /> {event.date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${event.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                {event.status}
              </span>
              <button onClick={() => handleDeleteEvent(event.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMaterials = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">📚 Study Materials</h2>
          <p className="text-sm text-gray-500">Manage study materials</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          <PlusIcon className="h-4 w-4" /> Add Material
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {materials.map((material) => (
          <div key={material.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{material.title}</h3>
                <p className="text-sm text-gray-500">{material.subject} • {material.type}</p>
                <p className="text-xs text-gray-400">📅 {material.uploadDate}</p>
              </div>
              <button onClick={() => handleDeleteMaterial(material.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWhatsApp = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ChatBubbleLeftRightIcon className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">💬 WhatsApp Panel</h2>
        <p className="text-gray-500 mt-2">Send notifications to parents and students via WhatsApp</p>
        <div className="mt-6 space-y-3">
          <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
            <ChatBubbleLeftRightIcon className="h-5 w-5" /> Send Broadcast Message
          </button>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <DocumentTextIcon className="h-5 w-5" /> Send Fee Reminder
          </button>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="text-center max-w-lg mx-auto py-8">
        <Cog6ToothIcon className="h-20 w-20 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">⚙️ Settings</h2>
        <p className="text-gray-500 mt-2">System settings and configuration</p>
        <div className="mt-6 space-y-4 text-left">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">School Name</p>
              <p className="text-sm text-gray-500">Vidya Bharati Public School</p>
            </div>
            <button className="text-blue-600 text-sm hover:underline">Edit</button>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Academic Year</p>
              <p className="text-sm text-gray-500">2026-27</p>
            </div>
            <button className="text-blue-600 text-sm hover:underline">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">📊 Reports</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { id: 'students', title: 'Student Report', icon: UsersIcon, description: 'Complete student database' },
          { id: 'fees', title: 'Fee Report', icon: CreditCardIcon, description: 'Fee collection summary' },
          { id: 'attendance', title: 'Attendance Report', icon: ChartBarIcon, description: 'Monthly attendance' },
          { id: 'academic', title: 'Academic Report', icon: DocumentTextIcon, description: 'Academic performance' }
        ].map((report) => (
          <div key={report.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition">
            <div className="p-3 bg-blue-50 rounded-xl inline-block">
              <report.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mt-3">{report.title}</h3>
            <p className="text-sm text-gray-500">{report.description}</p>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <ArrowDownTrayIcon className="h-4 w-4" /> Generate
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // ============================================
  // MAIN RENDER
  // ============================================
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col fixed h-full z-20 shadow-2xl`}>
        <div className="p-5 border-b border-gray-700 flex justify-between items-center">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <UserCircleIcon className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="font-bold text-sm">Admin</h1>
                <p className="text-xs text-gray-400">Portal</p>
              </div>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-gray-700 rounded transition">
            {sidebarOpen ? <XMarkIcon className="h-5 w-5" /> : 
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }
          </button>
        </div>

        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-white">
                {admin?.full_name?.charAt(0) || 'A'}
              </span>
            </div>
            {sidebarOpen && (
              <div>
                <p className="font-semibold text-sm">{admin?.full_name || 'Admin'}</p>
                <p className="text-xs text-gray-400">Administrator</p>
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
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
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
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h1 className="text-lg font-bold text-gray-800 capitalize">{activeTab}</h1>
            <p className="text-sm text-gray-500">Welcome back, {admin?.full_name?.split(' ')[0] || 'Admin'}!</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <BellIcon className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'students' && renderStudents()}
          {activeTab === 'fees' && renderFees()}
          {activeTab === 'notices' && renderNotices()}
          {activeTab === 'events' && renderEvents()}
          {activeTab === 'materials' && renderMaterials()}
          {activeTab === 'whatsapp' && renderWhatsApp()}
          {activeTab === 'settings' && renderSettings()}
          {activeTab === 'reports' && renderReports()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;