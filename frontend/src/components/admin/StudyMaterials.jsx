import React, { useState } from 'react';
import { PlusIcon, TrashIcon, BookOpenIcon, DocumentTextIcon, VideoCameraIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const StudyMaterials = () => {
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Mathematics - Algebra', subject: 'Maths', type: 'PDF', uploadDate: '2024-12-01' },
    { id: 2, title: 'Physics - Newton\'s Laws', subject: 'Physics', type: 'Video', uploadDate: '2024-11-28' },
    { id: 3, title: 'Chemistry - Periodic Table', subject: 'Chemistry', type: 'PDF', uploadDate: '2024-11-25' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newMaterial, setNewMaterial] = useState({ title: '', subject: '', type: 'PDF' });

  const handleDelete = (id) => {
    if (window.confirm('Delete this material?')) {
      setMaterials(materials.filter(m => m.id !== id));
      toast.success('Material deleted!');
    }
  };

  const handleAddMaterial = () => {
    if (!newMaterial.title || !newMaterial.subject) {
      toast.error('Please fill all required fields');
      return;
    }
    const material = { id: materials.length + 1, ...newMaterial, uploadDate: new Date().toISOString().split('T')[0] };
    setMaterials([...materials, material]);
    setShowAddModal(false);
    setNewMaterial({ title: '', subject: '', type: 'PDF' });
    toast.success('Material added!');
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'PDF': return <DocumentTextIcon className="h-5 w-5 text-red-500" />;
      case 'Video': return <VideoCameraIcon className="h-5 w-5 text-blue-500" />;
      default: return <BookOpenIcon className="h-5 w-5 text-green-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📚 Study Materials</h2>
          <p className="text-sm text-gray-500">Manage study materials</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          <PlusIcon className="h-4 w-4" /> Add Material
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {materials.map((material) => (
          <div key={material.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {getTypeIcon(material.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{material.title}</h3>
                  <p className="text-sm text-gray-500">{material.subject} • {material.type}</p>
                  <p className="text-xs text-gray-400">📅 {material.uploadDate}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                  <ArrowDownTrayIcon className="h-4 w-4" />
                </button>
                <button onClick={() => handleDelete(material.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Material Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add Study Material</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Title *" value={newMaterial.title} onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Subject *" value={newMaterial.subject} onChange={(e) => setNewMaterial({...newMaterial, subject: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <select value={newMaterial.type} onChange={(e) => setNewMaterial({...newMaterial, type: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="PDF">PDF</option>
                <option value="Video">Video</option>
                <option value="Document">Document</option>
                <option value="Presentation">Presentation</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
              <button onClick={handleAddMaterial} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Add Material</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;
