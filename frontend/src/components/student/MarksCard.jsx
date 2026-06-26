import React, { useState } from 'react';
import { TrophyIcon, PrinterIcon, ArrowDownTrayIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const MarksCard = () => {
  const [selectedTerm, setSelectedTerm] = useState('Term 1');

  const marksData = {
    'Term 1': [
      { subject: 'Mathematics', internal: 45, external: 48, total: 93, grade: 'A+', status: 'Pass' },
      { subject: 'Physics', internal: 42, external: 45, total: 87, grade: 'A', status: 'Pass' },
      { subject: 'Chemistry', internal: 40, external: 42, total: 82, grade: 'A-', status: 'Pass' },
      { subject: 'English', internal: 48, external: 49, total: 97, grade: 'A+', status: 'Pass' },
      { subject: 'Computer Science', internal: 47, external: 48, total: 95, grade: 'A+', status: 'Pass' }
    ],
    'Term 2': [
      { subject: 'Mathematics', internal: 44, external: 46, total: 90, grade: 'A', status: 'Pass' },
      { subject: 'Physics', internal: 40, external: 43, total: 83, grade: 'A-', status: 'Pass' },
      { subject: 'Chemistry', internal: 38, external: 40, total: 78, grade: 'B+', status: 'Pass' },
      { subject: 'English', internal: 46, external: 47, total: 93, grade: 'A+', status: 'Pass' },
      { subject: 'Computer Science', internal: 45, external: 46, total: 91, grade: 'A', status: 'Pass' }
    ]
  };

  const terms = ['Term 1', 'Term 2'];
  const currentMarks = marksData[selectedTerm] || [];

  const getGradeColor = (grade) => {
    switch(grade) {
      case 'A+': return 'bg-green-100 text-green-700';
      case 'A': return 'bg-blue-100 text-blue-700';
      case 'A-': return 'bg-cyan-100 text-cyan-700';
      case 'B+': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const overallAverage = currentMarks.length > 0 
    ? Math.round(currentMarks.reduce((sum, m) => sum + m.total, 0) / currentMarks.length)
    : 0;

  const overallGrade = overallAverage >= 90 ? 'A+' : 
                      overallAverage >= 80 ? 'A' :
                      overallAverage >= 70 ? 'B+' : 'B';

  const handleDownload = () => toast.success('Marks card downloaded!');
  const handlePrint = () => window.print();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div><h2 className="text-xl font-bold text-gray-800">🏆 Marks Card</h2><p className="text-sm text-gray-500">Your academic performance</p></div>
        <div className="flex flex-wrap gap-2">
          <select value={selectedTerm} onChange={(e) => setSelectedTerm(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
            {terms.map((term) => (<option key={term} value={term}>{term}</option>))}
          </select>
          <button onClick={handleDownload} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2 text-sm">
            <ArrowDownTrayIcon className="h-4 w-4" /> Download
          </button>
          <button onClick={handlePrint} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm">
            <PrinterIcon className="h-4 w-4" /> Print
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
          <p className="text-sm text-gray-600">Subjects</p><p className="text-2xl font-bold text-blue-700">{currentMarks.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
          <p className="text-sm text-gray-600">Average</p><p className="text-2xl font-bold text-green-700">{overallAverage}%</p>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
          <p className="text-sm text-gray-600">Grade</p>
          <p className={`text-2xl font-bold px-3 py-1 rounded-full inline-block ${getGradeColor(overallGrade)}`}>{overallGrade}</p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
          <p className="text-sm text-gray-600">Status</p>
          <p className="text-2xl font-bold text-green-700 flex items-center gap-2"><CheckCircleIcon className="h-6 w-6" /> Pass</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Subject</th><th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Internal</th><th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">External</th><th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Total</th><th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Grade</th><th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Status</th></tr></thead>
          <tbody className="divide-y divide-gray-100">
            {currentMarks.map((mark, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-semibold text-gray-800">{mark.subject}</td>
                <td className="px-4 py-3 text-center text-gray-600">{mark.internal}</td>
                <td className="px-4 py-3 text-center text-gray-600">{mark.external}</td>
                <td className="px-4 py-3 text-center font-bold text-gray-800">{mark.total}</td>
                <td className="px-4 py-3 text-center"><span className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(mark.grade)}`}>{mark.grade}</span></td>
                <td className="px-4 py-3 text-center"><span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">✅ {mark.status}</span></td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td colSpan="3" className="px-4 py-3 font-bold text-gray-800">Overall Average</td>
              <td className="px-4 py-3 text-center font-bold text-gray-800">{overallAverage}%</td>
              <td className="px-4 py-3 text-center"><span className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(overallGrade)}`}>{overallGrade}</span></td>
              <td className="px-4 py-3 text-center"><span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">✅ Pass</span></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MarksCard;
