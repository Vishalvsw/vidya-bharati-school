import React, { useState } from 'react';
import { PlusIcon, TrashIcon, PencilIcon, CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const EventManagement = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Annual Sports Day', date: '2025-01-15', venue: 'Sports Complex', status: 'upcoming' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-12-20', venue: 'Auditorium', status: 'upcoming' },
    { id: 3, title: 'Science Exhibition', date: '2024-12-10', venue: 'Science Lab', status: 'completed' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', venue: '', status: 'upcoming' });

  const handleDelete = (id) => {
    if (window.confirm('Delete this event?')) {
      setEvents(events.filter(e => e.id !== id));
      toast.success('Event deleted!');
    }
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date) {
      toast.error('Please fill all required fields');
      return;
    }
    const event = { id: events.length + 1, ...newEvent };
    setEvents([...events, event]);
    setShowAddModal(false);
    setNewEvent({ title: '', date: '', venue: '', status: 'upcoming' });
    toast.success('Event added!');
  };

  const getStatusBadge = (status) => {
    return status === 'upcoming' ? 
      'bg-green-100 text-green-700' : 
      'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">📅 Event Management</h2>
          <p className="text-sm text-gray-500">Manage school events and activities</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
          <PlusIcon className="h-4 w-4" /> Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
          <p className="text-sm text-gray-600">Total Events</p>
          <p className="text-2xl font-bold text-blue-700">{events.length}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 border border-green-200">
          <p className="text-sm text-gray-600">Upcoming</p>
          <p className="text-2xl font-bold text-green-700">{events.filter(e => e.status === 'upcoming').length}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-2xl font-bold text-gray-700">{events.filter(e => e.status === 'completed').length}</p>
        </div>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-50 rounded-xl">
                <CalendarIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <CalendarIcon className="h-3 w-3" /> {event.date}
                  <MapPinIcon className="h-3 w-3 ml-2" /> {event.venue}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadge(event.status)}`}>
                {event.status}
              </span>
              <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition">
                <PencilIcon className="h-4 w-4" />
              </button>
              <button onClick={() => handleDelete(event.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Event</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Event Title *" value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({...newEvent, date: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Venue" value={newEvent.venue} onChange={(e) => setNewEvent({...newEvent, venue: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              <select value={newEvent.status} onChange={(e) => setNewEvent({...newEvent, status: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">Cancel</button>
              <button onClick={handleAddEvent} className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">Add Event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventManagement;
