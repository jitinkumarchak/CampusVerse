import React, { useState } from "react";
import { Settings, User, Lock, Bell, LogOut } from "lucide-react";
import { useAuth } from "../Context/AuthContext";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const { logout } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-[#7209B7] mb-6 flex items-center gap-2">
        <Settings size={24} />
        Account Settings
      </h1>

      {/* Profile Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <User size={20} />
          Profile
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#7209B7] outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#7209B7] outline-none"
          />
        </div>
      </section>

      {/* Security Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Lock size={20} />
          Security
        </h2>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#7209B7] outline-none"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#7209B7] outline-none"
          />
        </div>
      </section>

      {/* Preferences Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Bell size={20} />
          Preferences
        </h2>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="accent-[#7209B7]"
            />
            <span className="text-gray-700">Email Notifications</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="accent-[#7209B7]"
            />
            <span className="text-gray-700">Dark Mode</span>
          </label>
        </div>
      </section>

      <div className="flex items-center gap-4 mt-4">
        <button className="bg-[#7209B7] text-white px-6 py-2 rounded hover:bg-purple-700">
          Save Changes
        </button>
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
