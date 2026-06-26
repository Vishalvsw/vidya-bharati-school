import React, { useState } from 'react';
import { PlusIcon, TrashIcon, PencilIcon, BellIcon, MegaphoneIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const NoticeManagement = () => {
  const [notices, setNotices] = useState([
    { id: 1, title: 'Winter Break Announcement', date: '2024-12-20', priority: 'High', content: 'School closed from Dec 25 to Jan 1' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-12-15', priority: 'Medium', content: 'PTM scheduled on Dec 20, 2024' },
    { id: 3, title: 'Annual Sports Day', date: '2024-12-25', priority: 'High', content: 'Sports day celebration on Dec 25' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newNotice, setNewNotice] = useState({ title: '', content: '', date: '', priority: 'Medium' });

  const handleDelete = (id) => {
    if (window.confirm('Delete this notice?')) {
      setNotices(notices.filter(n => n.id !== id));
      toast.success('Notice deleted!');
    }
  };

  const handleAddNotice = () => {
    if (!newNotice.title || !newNotice.content) {
      toast.error('Please fill all required fields');
      return;
    }
    const notice = { id: notices.length + 1, ...newNotice };
    setNotices([notice, ...notices]);
    setShowAddModal(false);
    setNewNotice({ title: '', content: '', date: '', priority: 'Medium' });
    toast.success('Notice added!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📢 Notice Board</h2>
          <p className="text-sm text-gray-500">Manage school notices</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
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
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{notice.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{notice.content}</p>
                <p className="text-xs text-gray-400 mt-2">📅 {notice.date}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  notice.priority === 'High' ? 'bg-red-200 text-red-700' : 
                  'bg-yellow-200 text-yellow-700'
                }`}>
                  {notice.priority}
                </span>
                <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition">
                  <PencilIcon className="h-4 w-4" />
                </button>
                <button onClick={() => handleDelete(notice.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Notice Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Notice</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Title *" value={newNotice.title} onChange={(e) => setNewNotice({...newNotice, title: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea rows="3" placeholder="Content *" value={newNotice.content} onChange={(e) => setNewNotice({...newNotice, content: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="date" value={newNotice.date} onChange={(e) => setNewNotice({...newNotice, date: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <select value={newNotice.priority} onChange={(e) => setNewNotice({...newNotice, priority: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
              <button onClick={handleAddNotice} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Add Notice</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeManagement;
