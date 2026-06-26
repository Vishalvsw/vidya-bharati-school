import React, { useState } from 'react';
import { PlusIcon, EyeIcon, TrashIcon, MagnifyingGlassIcon, CreditCardIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const FeeManagement = () => {
  const [fees, setFees] = useState([
    { id: 1, student: 'Rahul Sharma', amount: 5000, date: '2024-12-01', status: 'Paid', method: 'UPI' },
    { id: 2, student: 'Priya Patel', amount: 5000, date: '2024-12-15', status: 'Pending', method: '-' },
    { id: 3, student: 'Amit Kumar', amount: 3000, date: '2024-12-10', status: 'Paid', method: 'Card' },
    { id: 4, student: 'Sneha Reddy', amount: 5000, date: '2024-12-20', status: 'Overdue', method: '-' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newFee, setNewFee] = useState({ student: '', amount: '', date: '', status: 'Pending' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Delete this fee record?')) {
      setFees(fees.filter(f => f.id !== id));
      toast.success('Fee record deleted!');
    }
  };

  const handleAddFee = () => {
    if (!newFee.student || !newFee.amount) {
      toast.error('Please fill all required fields');
      return;
    }
    const fee = { id: fees.length + 1, ...newFee, method: '-' };
    setFees([...fees, fee]);
    setShowAddModal(false);
    setNewFee({ student: '', amount: '', date: '', status: 'Pending' });
    toast.success('Fee record added!');
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Paid': return <CheckCircleIcon className="h-4 w-4 text-green-500" />;
      case 'Pending': return <ClockIcon className="h-4 w-4 text-yellow-500" />;
      case 'Overdue': return <XCircleIcon className="h-4 w-4 text-red-500" />;
      default: return null;
    }
  };

  const total = fees.reduce((sum, f) => sum + f.amount, 0);
  const paid = fees.filter(f => f.status === 'Paid').reduce((sum, f) => sum + f.amount, 0);
  const pending = fees.filter(f => f.status === 'Pending').reduce((sum, f) => sum + f.amount, 0);
  const overdue = fees.filter(f => f.status === 'Overdue').reduce((sum, f) => sum + f.amount, 0);

  const filteredFees = fees.filter(f => 
    f.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Fee Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
          <p className="text-sm text-gray-600">Total Fees</p>
          <p className="text-2xl font-bold text-blue-700">₹{total.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
          <p className="text-sm text-gray-600">Collected</p>
          <p className="text-2xl font-bold text-green-700">₹{paid.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-700">₹{pending.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
          <p className="text-sm text-gray-600">Overdue</p>
          <p className="text-2xl font-bold text-red-700">₹{overdue.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">💰 Fee Management</h2>
            <p className="text-sm text-gray-500">Manage fee records</p>
          </div>
          <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
            <PlusIcon className="h-4 w-4" /> Add Fee
          </button>
        </div>

        <div className="flex-1 min-w-[200px] relative mb-4">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search fees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
              {filteredFees.map((fee) => (
                <tr key={fee.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-800">{fee.student}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">₹{fee.amount}</td>
                  <td className="px-4 py-3 text-gray-600">{fee.date}</td>
                  <td className="px-4 py-3 text-gray-600">{fee.method}</td>
                  <td className="px-4 py-3">
                    <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      fee.status === 'Paid' ? 'bg-green-100 text-green-700' :
                      fee.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {getStatusIcon(fee.status)} {fee.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleDelete(fee.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500">Showing {filteredFees.length} of {fees.length} records</div>
      </div>

      {/* Add Fee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add Fee Record</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Student Name *" value={newFee.student} onChange={(e) => setNewFee({...newFee, student: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="number" placeholder="Amount *" value={newFee.amount} onChange={(e) => setNewFee({...newFee, amount: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="date" value={newFee.date} onChange={(e) => setNewFee({...newFee, date: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <select value={newFee.status} onChange={(e) => setNewFee({...newFee, status: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
              <button onClick={handleAddFee} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Add Fee</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeeManagement;
