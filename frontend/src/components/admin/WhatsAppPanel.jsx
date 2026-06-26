import React, { useState } from 'react';
import { ChatBubbleLeftRightIcon, UsersIcon, DocumentTextIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const WhatsAppPanel = () => {
  const [message, setMessage] = useState('');
  const [recipientType, setRecipientType] = useState('all');

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error('Please enter a message');
      return;
    }
    toast.success(`Message sent to ${recipientType} recipients!`);
    setMessage('');
  };

  const quickMessages = [
    { id: 1, title: 'Fee Reminder', text: 'Dear Parent, This is a reminder that your child\'s fee is due. Please pay before the due date.' },
    { id: 2, title: 'Event Invitation', text: 'Dear Parents, We invite you to the Annual Sports Day on Dec 25. Your presence is requested.' },
    { id: 3, title: 'Notice Update', text: 'Dear Parents, Please check the latest notice on the school website for important updates.' },
    { id: 4, title: 'Holiday Announcement', text: 'Dear Parents, School will remain closed on Dec 25 for Winter Break. Wishing you a happy holiday!' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">💬 WhatsApp Panel</h2>
          <p className="text-sm text-gray-500">Send messages via WhatsApp</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 rounded-xl p-4 border border-green-200 text-center">
          <UsersIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="font-semibold text-gray-800">500+</p>
          <p className="text-sm text-gray-500">Active Parents</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
          <DocumentTextIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <p className="font-semibold text-gray-800">12</p>
          <p className="text-sm text-gray-500">Messages Sent Today</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200 text-center">
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <p className="font-semibold text-gray-800">98%</p>
          <p className="text-sm text-gray-500">Delivery Rate</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipients</label>
          <select value={recipientType} onChange={(e) => setRecipientType(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="all">All Parents & Students</option>
            <option value="parents">Parents Only</option>
            <option value="students">Students Only</option>
            <option value="teachers">Teachers Only</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea rows="4" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here..." className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        <button onClick={handleSendMessage} className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
          <ChatBubbleLeftRightIcon className="h-5 w-5" /> Send Message
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-3">Quick Messages</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {quickMessages.map((msg) => (
            <button key={msg.id} onClick={() => setMessage(msg.text)} className="text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition">
              {msg.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPanel;
