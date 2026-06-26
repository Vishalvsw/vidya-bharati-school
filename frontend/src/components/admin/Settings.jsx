import React, { useState } from 'react';
import { Cog6ToothIcon, UserCircleIcon, BuildingLibraryIcon, AcademicCapIcon, ShieldCheckIcon, BellIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const Settings = () => {
  const [settings, setSettings] = useState({
    schoolName: 'Vidya Bharati Public School',
    schoolAddress: 'Near Subhash Chowk, Bhalki - 585328',
    schoolPhone: '+91 97316 66652',
    schoolEmail: 'vbpsbhalki@gmail.com',
    academicYear: '2026-27',
    sessionStart: 'April',
    sessionEnd: 'March'
  });

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">⚙️ Settings</h2>
          <p className="text-sm text-gray-500">Manage system settings</p>
        </div>
        <button onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Save Settings</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* School Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <BuildingLibraryIcon className="h-5 w-5 text-blue-600" /> School Information
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
            <input type="text" value={settings.schoolName} onChange={(e) => setSettings({...settings, schoolName: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input type="text" value={settings.schoolAddress} onChange={(e) => setSettings({...settings, schoolAddress: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="text" value={settings.schoolPhone} onChange={(e) => setSettings({...settings, schoolPhone: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={settings.schoolEmail} onChange={(e) => setSettings({...settings, schoolEmail: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
          </div>
        </div>

        {/* Academic Settings */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <AcademicCapIcon className="h-5 w-5 text-purple-600" /> Academic Settings
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
            <select value={settings.academicYear} onChange={(e) => setSettings({...settings, academicYear: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="2025-26">2025-26</option>
              <option value="2026-27">2026-27</option>
              <option value="2027-28">2027-28</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Session Start</label>
            <select value={settings.sessionStart} onChange={(e) => setSettings({...settings, sessionStart: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Session End</label>
            <select value={settings.sessionEnd} onChange={(e) => setSettings({...settings, sessionEnd: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
              <option value="March">March</option>
              <option value="February">February</option>
              <option value="January">January</option>
            </select>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
              <ShieldCheckIcon className="h-5 w-5 text-green-600" /> System Info
            </h3>
            <div className="space-y-1 text-sm text-gray-500">
              <p>Version: 2.0.0</p>
              <p>Last Updated: {new Date().toLocaleDateString()}</p>
              <p>Database: MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
