import React, { useState } from 'react';
import { BellIcon, MegaphoneIcon, CalendarIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const Notices = () => {
  const [filterPriority, setFilterPriority] = useState('all');

  const notices = [
    { id: 1, title: 'Winter Break Announcement', date: '2024-12-20', priority: 'High', content: 'School will be closed from Dec 25 to Jan 1 for winter break. Classes will resume on Jan 2.' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-12-15', priority: 'Medium', content: 'Parent-Teacher Meeting scheduled on Dec 20, 2024 at 10:00 AM in the auditorium.' },
    { id: 3, title: 'Annual Sports Day', date: '2024-12-25', priority: 'High', content: 'Annual Sports Day celebration on Dec 25. All students are requested to participate.' },
    { id: 4, title: 'Science Exhibition', date: '2024-12-10', priority: 'Low', content: 'Science Exhibition on Dec 10. Students can showcase their projects.' }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'border-red-500 bg-red-50';
      case 'Medium': return 'border-yellow-500 bg-yellow-50';
      default: return 'border-blue-500 bg-blue-50';
    }
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-200 text-red-700';
      case 'Medium': return 'bg-yellow-200 text-yellow-700';
      default: return 'bg-blue-200 text-blue-700';
    }
  };

  const filteredNotices = filterPriority === 'all' 
    ? notices 
    : notices.filter(n => n.priority === filterPriority);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📢 Notice Board</h2>
          <p className="text-sm text-gray-500">School announcements and updates</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Filter:</span>
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="all">All</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <div key={notice.id} className={`border-l-4 rounded-xl p-4 ${getPriorityColor(notice.priority)}`}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <MegaphoneIcon className="h-4 w-4 text-gray-600" />
                  <h3 className="font-semibold text-gray-800">{notice.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{notice.content}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    {notice.date}
                  </span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityBadge(notice.priority)}`}>
                {notice.priority}
              </span>
            </div>
          </div>
        ))}
        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-500">No notices found for this priority</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notices;
