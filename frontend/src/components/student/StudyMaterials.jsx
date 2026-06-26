import React, { useState } from 'react';
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  VideoCameraIcon, 
  ArrowDownTrayIcon, 
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const materials = [
    { id: 1, title: 'Mathematics - Algebra', subject: 'Mathematics', type: 'PDF', uploadDate: '2024-12-01', size: '2.4 MB' },
    { id: 2, title: 'Physics - Newton\'s Laws', subject: 'Physics', type: 'Video', uploadDate: '2024-11-28', size: '120 MB' },
    { id: 3, title: 'Chemistry - Periodic Table', subject: 'Chemistry', type: 'PDF', uploadDate: '2024-11-25', size: '5.2 MB' },
    { id: 4, title: 'English Grammar - Tenses', subject: 'English', type: 'Document', uploadDate: '2024-11-20', size: '3.8 MB' },
    { id: 5, title: 'Computer Science - Python', subject: 'Computer Science', type: 'Video', uploadDate: '2024-11-15', size: '85 MB' }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'PDF': return <DocumentTextIcon className="h-5 w-5 text-red-500" />;
      case 'Video': return <VideoCameraIcon className="h-5 w-5 text-blue-500" />;
      default: return <BookOpenIcon className="h-5 w-5 text-green-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'PDF': return 'bg-red-100 text-red-700';
      case 'Video': return 'bg-blue-100 text-blue-700';
      default: return 'bg-green-100 text-green-700';
    }
  };

  const filteredMaterials = materials.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         m.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || m.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleDownload = (title) => {
    toast.success(`Downloading: ${title}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📚 Study Materials</h2>
          <p className="text-sm text-gray-500">Access your study materials</p>
        </div>
        <div className="text-sm text-gray-500">
          Total: <span className="font-semibold text-gray-800">{materials.length} items</span>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search materials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Types</option>
          <option value="PDF">PDF</option>
          <option value="Video">Video</option>
          <option value="Document">Document</option>
        </select>
      </div>

      {/* Materials List */}
      <div className="space-y-4">
        {filteredMaterials.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">No materials found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredMaterials.map((material) => (
            <div key={material.id} className="flex flex-wrap items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition">
              <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                <div className={`p-3 rounded-xl ${getTypeColor(material.type)}`}>
                  {getTypeIcon(material.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{material.title}</h3>
                  <p className="text-sm text-gray-500">{material.subject} • {material.type}</p>
                  <p className="text-xs text-gray-400">📅 {material.uploadDate} • 📦 {material.size}</p>
                </div>
              </div>
              <button
                onClick={() => handleDownload(material.title)}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mt-2 sm:mt-0"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudyMaterials;
