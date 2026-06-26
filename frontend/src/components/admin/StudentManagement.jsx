import React, { useState } from 'react';
import { PlusIcon, EyeIcon, PencilIcon, TrashIcon, MagnifyingGlassIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const StudentManagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul Sharma', class: '10th A', fees: 'Paid', status: 'Active', date: '2024-01-15' },
    { id: 2, name: 'Priya Patel', class: '10th B', fees: 'Pending', status: 'Active', date: '2024-01-20' },
    { id: 3, name: 'Amit Kumar', class: '9th A', fees: 'Paid', status: 'Active', date: '2024-02-01' },
    { id: 4, name: 'Sneha Reddy', class: '9th B', fees: 'Pending', status: 'Inactive', date: '2024-02-10' },
    { id: 5, name: 'Vikram Singh', class: '8th A', fees: 'Paid', status: 'Active', date: '2024-02-15' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', class: '', fees: 'Pending', status: 'Active' });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(s => s.id !== id));
      toast.success('Student deleted successfully!');
    }
  };

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.class) {
      toast.error('Please fill all required fields');
      return;
    }
    const student = {
      id: students.length + 1,
      ...newStudent,
      date: new Date().toISOString().split('T')[0]
    };
    setStudents([...students, student]);
    setShowAddModal(false);
    setNewStudent({ name: '', class: '', fees: 'Pending', status: 'Active' });
    toast.success('Student added successfully!');
  };

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         s.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || s.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">👥 Student Management</h2>
          <p className="text-sm text-gray-500">Manage all student records</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2"
        >
          <UserPlusIcon className="h-4 w-4" />
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
                    <button onClick={() => handleDelete(student.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
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

      {/* Add Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Student</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Student Name *" value={newStudent.name} onChange={(e) => setNewStudent({...newStudent, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Class *" value={newStudent.class} onChange={(e) => setNewStudent({...newStudent, class: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <select value={newStudent.fees} onChange={(e) => setNewStudent({...newStudent, fees: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
              <select value={newStudent.status} onChange={(e) => setNewStudent({...newStudent, status: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
              <button onClick={handleAddStudent} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Add Student</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentManagement;
