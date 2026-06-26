import React from 'react';
import { ChartBarIcon, DocumentTextIcon, PrinterIcon, ArrowDownTrayIcon, UserGroupIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Reports = () => {
  const handleGenerateReport = (type) => {
    toast.success(`Generating ${type} report...`);
  };

  const reportTypes = [
    { id: 'students', title: 'Student Report', icon: UserGroupIcon, description: 'Complete student database report' },
    { id: 'fees', title: 'Fee Report', icon: CreditCardIcon, description: 'Fee collection and pending report' },
    { id: 'attendance', title: 'Attendance Report', icon: ChartBarIcon, description: 'Monthly attendance summary' },
    { id: 'academic', title: 'Academic Report', icon: DocumentTextIcon, description: 'Academic performance report' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📊 Reports</h2>
          <p className="text-sm text-gray-500">Generate and download reports</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportTypes.map((report) => (
          <div key={report.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition">
            <div className="p-3 bg-blue-50 rounded-xl inline-block">
              <report.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mt-3">{report.title}</h3>
            <p className="text-sm text-gray-500">{report.description}</p>
            <button onClick={() => handleGenerateReport(report.title)} className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <ArrowDownTrayIcon className="h-4 w-4" /> Generate
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <h3 className="font-semibold text-gray-800 mb-2">📋 Recent Reports</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 hover:bg-white rounded-lg transition">
            <div>
              <p className="font-medium text-gray-700">Student Report - Jan 2024</p>
              <p className="text-xs text-gray-400">Generated on 2024-01-15</p>
            </div>
            <div className="flex gap-2">
              <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"><ArrowDownTrayIcon className="h-4 w-4" /></button>
              <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg"><PrinterIcon className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
