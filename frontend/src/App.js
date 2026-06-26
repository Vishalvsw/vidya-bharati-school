import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppChatbot from './components/common/WhatsAppChatbot';

// Website Components
import Home from './components/website/Home';
import About from './components/website/About';
import Academics from './components/website/Academics';
import Admissions from './components/website/Admissions';
import Gallery from './components/website/Gallery';
import Contact from './components/website/Contact';

// Admin Components
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

// Student Components
import StudentLogin from './components/student/StudentLogin';
import StudentDashboard from './components/student/StudentDashboard';


// Route Guards
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  const admin = localStorage.getItem('admin');
  if (!token || !admin) return <Navigate to="/vsw-admin-portal" replace />;
  return children;
};

const StudentRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  const student = localStorage.getItem('student');
  if (!token || !student) return <Navigate to="/vsw-student-portal" replace />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/academics" element={<><Navbar /><Academics /><Footer /></>} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<><Navbar /><Gallery /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        
        {/* Admin Routes - Hidden Portal */}
        <Route path="/vsw-admin-portal" element={<AdminLogin />} />
        <Route path="/vsw-admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        
        {/* Student Routes - Hidden Portal */}
        <Route path="/vsw-student-portal" element={<StudentLogin />} />
        <Route path="/vsw-student" element={<StudentRoute><StudentDashboard /></StudentRoute>} />
        
        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      {/* WhatsApp Chatbot */}
      <WhatsAppChatbot />
    </BrowserRouter>
  );
}

export default App;
