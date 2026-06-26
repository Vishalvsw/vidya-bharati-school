import React, { useState } from 'react';
import { 
  CalendarIcon, 
  PlusIcon, 
  TrashIcon, 
  PencilIcon,
  ClockIcon,
  BookOpenIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const TimetableManagement = () => {
  const [timetable, setTimetable] = useState([
    { id: 1, day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM', teacher: 'Mr. Sharma', class: '10th A' },
    { id: 2, day: 'Monday', subject: 'Physics', time: '10:00 AM - 11:00 AM', teacher: 'Dr. Patel', class: '10th A' },
    { id: 3, day: 'Tuesday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM', teacher: 'Mr. Reddy', class: '10th A' },
    { id: 4, day: 'Tuesday', subject: 'English', time: '10:00 AM - 11:00 AM', teacher: 'Ms. Gupta', class: '10th A' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newEntry, setNewEntry] = useState({ day: '', subject: '', time: '', teacher: '', class: '' });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const handleAdd = () => {
    if (!newEntry.day || !newEntry.subject) {
      toast.error('Please fill all required fields');
      return;
    }
    const entry = { id: timetable.length + 1, ...newEntry };
    setTimetable([...timetable, entry]);
    setShowAddModal(false);
    setNewEntry({ day: '', subject: '', time: '', teacher: '', class: '' });
    toast.success('Timetable entry added!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this timetable entry?')) {
      setTimetable(timetable.filter(t => t.id !== id));
      toast.success('Entry deleted!');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📅 Timetable Management</h2>
          <p className="text-sm text-gray-500">Manage school timetable</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <PlusIcon className="h-4 w-4" /> Add Entry
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Day</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Time</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Teacher</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Class</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {timetable.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-800">{entry.day}</td>
                <td className="px-4 py-3 text-gray-700">{entry.subject}</td>
                <td className="px-4 py-3 text-gray-600">{entry.time}</td>
                <td className="px-4 py-3 text-gray-600">{entry.teacher}</td>
                <td className="px-4 py-3 text-gray-600">{entry.class}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(entry.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add Timetable Entry</h3>
            <div className="space-y-3">
              <select value={newEntry.day} onChange={(e) => setNewEntry({...newEntry, day: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="">Select Day</option>
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <input type="text" placeholder="Subject" value={newEntry.subject} onChange={(e) => setNewEntry({...newEntry, subject: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Time (e.g., 9:00 AM - 10:00 AM)" value={newEntry.time} onChange={(e) => setNewEntry({...newEntry, time: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Teacher Name" value={newEntry.teacher} onChange={(e) => setNewEntry({...newEntry, teacher: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Class" value={newEntry.class} onChange={(e) => setNewEntry({...newEntry, class: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg">Cancel</button>
              <button onClick={handleAdd} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Add Entry</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimetableManagement;
