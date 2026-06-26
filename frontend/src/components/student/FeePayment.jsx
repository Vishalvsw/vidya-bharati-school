import React, { useState } from 'react';
import { CreditCardIcon, CheckCircleIcon, ClockIcon, XCircleIcon, EyeIcon, DownloadIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const FeePayment = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const fees = [
    { id: 1, type: 'Tuition Fee', amount: 5000, dueDate: '2024-12-31', status: 'Pending' },
    { id: 2, type: 'Exam Fee', amount: 2000, dueDate: '2024-12-15', status: 'Paid' },
    { id: 3, type: 'Transport Fee', amount: 3000, dueDate: '2024-12-20', status: 'Pending' },
    { id: 4, type: 'Library Fee', amount: 1000, dueDate: '2024-12-25', status: 'Paid' }
  ];

  const paymentHistory = [
    { id: 1, date: '2024-01-15', amount: 5000, status: 'Paid', receipt: 'RCP-001' },
    { id: 2, date: '2024-02-15', amount: 5000, status: 'Paid', receipt: 'RCP-002' },
    { id: 3, date: '2024-03-15', amount: 5000, status: 'Pending', receipt: '-' }
  ];

  const totalFees = fees.reduce((sum, f) => sum + f.amount, 0);
  const totalPaid = fees.filter(f => f.status === 'Paid').reduce((sum, f) => sum + f.amount, 0);
  const totalPending = fees.filter(f => f.status === 'Pending').reduce((sum, f) => sum + f.amount, 0);

  const handlePayment = () => {
    if (!paymentAmount || paymentAmount <= 0) {
      toast.error('Please enter valid amount');
      return;
    }
    toast.success(`Payment of ₹${paymentAmount} initiated via ${paymentMethod.toUpperCase()}`);
    setShowPaymentModal(false);
    setPaymentAmount('');
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Paid': return <CheckCircleIcon className="h-4 w-4 text-green-500" />;
      case 'Pending': return <ClockIcon className="h-4 w-4 text-yellow-500" />;
      default: return <XCircleIcon className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <div>
      {/* Fee Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg">
          <p className="text-sm opacity-90">Total Fees</p>
          <p className="text-2xl font-bold">₹{totalFees.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-5 text-white shadow-lg">
          <p className="text-sm opacity-90">Paid</p>
          <p className="text-2xl font-bold">₹{totalPaid.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-5 text-white shadow-lg">
          <p className="text-sm opacity-90">Pending</p>
          <p className="text-2xl font-bold">₹{totalPending.toLocaleString()}</p>
        </div>
      </div>

      {/* Fee List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Fee Details</h3>
        <div className="space-y-3">
          {fees.map((fee) => (
            <div key={fee.id} className="flex flex-wrap items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition">
              <div>
                <p className="font-semibold text-gray-800">{fee.type}</p>
                <p className="text-sm text-gray-500">Due: {fee.dueDate}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-gray-800">₹{fee.amount}</span>
                <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                  fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {getStatusIcon(fee.status)} {fee.status}
                </span>
                {fee.status === 'Pending' && (
                  <button
                    onClick={() => { setSelectedFee(fee); setShowPaymentModal(true); }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📋 Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paymentHistory.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 text-sm text-gray-600">{payment.date}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-800">₹{payment.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      payment.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {getStatusIcon(payment.status)} {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{payment.receipt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Pay {selectedFee?.type}</h2>
              <button onClick={() => setShowPaymentModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
                <input
                  type="number"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="upi">UPI (PhonePe, GPay, Paytm)</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="netbanking">Net Banking</option>
                </select>
              </div>
              <button
                onClick={handlePayment}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
              >
                Pay ₹{parseInt(paymentAmount || 0).toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeePayment;
