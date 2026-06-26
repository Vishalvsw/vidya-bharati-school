import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon, 
  AcademicCapIcon, 
  UserIcon, 
  ArrowLeftOnRectangleIcon,
  HomeIcon,
  InformationCircleIcon,
  BookOpenIcon,
  UserPlusIcon,
  PhotoIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const admin = localStorage.getItem('admin');
    const student = localStorage.getItem('student');
    if (token) {
      setIsLoggedIn(true);
      if (admin) { 
        try { 
          const d = JSON.parse(admin); 
          setUserRole('admin'); 
          setUserName(d.full_name || 'Admin'); 
        } catch(e) {} 
      }
      else if (student) { 
        try { 
          const d = JSON.parse(student); 
          setUserRole('student'); 
          setUserName(d.full_name || 'Student'); 
        } catch(e) {} 
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('admin');
    localStorage.removeItem('student');
    setIsLoggedIn(false);
    setUserRole(null);
    setUserName('');
    toast.success('Logged out successfully');
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: InformationCircleIcon },
    { name: 'Academics', path: '/academics', icon: BookOpenIcon },
    { name: 'Admissions', path: '/admissions', icon: UserPlusIcon },
    { name: 'Gallery', path: '/gallery', icon: PhotoIcon },
    { name: 'Contact', path: '/contact', icon: EnvelopeIcon }
  ];

  const getDashboardPath = () => { 
    if (userRole === 'admin') return '/vsw-admin'; 
    if (userRole === 'student') return '/vsw-student'; 
    return '/'; 
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 md:h-12 md:w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <AcademicCapIcon className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                Vidya Bharati
              </span>
              <span className="text-[10px] md:text-xs text-gray-400 leading-none -mt-0.5">
                Public School, Bhalki
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50 flex items-center gap-2 group"
              >
                <link.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                {link.name}
              </Link>
            ))}
            
            {isLoggedIn ? (
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{userName}</span>
                </div>
                <Link
                  to={getDashboardPath()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <UserIcon className="h-4 w-4" />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <ArrowLeftOnRectangleIcon className="h-4 w-4" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="ml-4 pl-4 border-l border-gray-200">
                <span className="text-xs text-gray-400">
                  🔒 Private Portals
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors duration-300 hover:text-blue-600"
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </Link>
            ))}
            
            {isLoggedIn ? (
              <>
                <div className="px-4 py-3 text-sm text-gray-600 border-t border-gray-100 mt-2 pt-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                      {userName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{userName}</div>
                      <div className="text-xs text-gray-400 flex items-center gap-1">
                        <span className="bg-gray-100 px-2 py-0.5 rounded-full">{userRole}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to={getDashboardPath()}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                >
                  <UserIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  Logout
                </button>
              </>
            ) : (
              <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100 mt-2 pt-3">
                🔒 Admin and Student portals are accessible via private URLs
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
