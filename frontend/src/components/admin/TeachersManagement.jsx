import React, { useState } from 'react';
import { PlusIcon, TrashIcon, PencilIcon, EyeIcon, MagnifyingGlassIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const TeachersManagement = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Dr. Suresh Kumar', subject: 'Mathematics', experience: '12 years', status: 'Active' },
    { id: 2, name: 'Mrs. Geeta Sharma', subject: 'Physics', experience: '8 years', status: 'Active' },
    { id: 3, name: 'Mr. Rajesh Reddy', subject: 'Chemistry', experience: '10 years', status: 'Active' },
    { id: 4, name: 'Ms. Priya Patel', subject: 'English', experience: '5 years', status: 'Inactive' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newTeacher, setNewTeacher] = useState({ name: '', subject: '', experience: '', status: 'Active' });

  const handleDelete = (id) => {
    if (window.confirm('Delete this teacher?')) {
      setTeachers(teachers.filter(t => t.id !== id));
      toast.success('Teacher deleted!');
    }
  };

  const handleAddTeacher = () => {
    if (!newTeacher.name || !newTeacher.subject) {
      toast.error('Please fill all required fields');
      return;
    }
    const teacher = { id: teachers.length + 1, ...newTeacher };
    setTeachers([...teachers, teacher]);
    setShowAddModal(false);
    setNewTeacher({ name: '', subject: '', experience: '', status: 'Active' });
    toast.success('Teacher added!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">👨‍🏫 Teachers Management</h2>
          <p className="text-sm text-gray-500">Manage all teachers records</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
          <UserPlusIcon className="h-4 w-4" /> Add Teacher
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
          <p className="text-sm text-gray-600">Total Teachers</p>
          <p className="text-2xl font-bold text-blue-700">{teachers.length}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 border border-green-200">
          <p className="text-sm text-gray-600">Active</p>
          <p className="text-2xl font-bold text-green-700">{teachers.filter(t => t.status === 'Active').length}</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-3 border border-purple-200">
          <p className="text-sm text-gray-600">Subjects</p>
          <p className="text-2xl font-bold text-purple-700">{teachers.length}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Subject</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Experience</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-800">{teacher.name}</td>
                <td className="px-4 py-3 text-gray-600">{teacher.subject}</td>
                <td className="px-4 py-3 text-gray-600">{teacher.experience}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${teacher.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {teacher.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(teacher.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Teacher Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Teacher</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Teacher Name *" value={newTeacher.name} onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Subject *" value={newTeacher.subject} onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Experience (e.g., 5 years)" value={newTeacher.experience} onChange={(e) => setNewTeacher({...newTeacher, experience: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <select value={newTeacher.status} onChange={(e) => setNewTeacher({...newTeacher, status: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
              <button onClick={handleAddTeacher} className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Add Teacher</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachersManagement;
