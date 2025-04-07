// src/Components/Profile.jsx
import React from "react";
import { User, Mail, School, CalendarDays } from "lucide-react";

export default function Profile() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-[#7209B7] mb-6 flex items-center gap-2">
        <User size={24} />
        My Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex items-center space-x-3">
          <User size={20} className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-semibold">John Doe</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <Mail size={20} className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-semibold">johndoe@example.com</p>
          </div>
        </div>

        {/* College */}
        <div className="flex items-center space-x-3">
          <School size={20} className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">College</p>
            <p className="text-lg font-semibold">IKGPTU</p>
          </div>
        </div>

        {/* Join Date */}
        <div className="flex items-center space-x-3">
          <CalendarDays size={20} className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Joined</p>
            <p className="text-lg font-semibold">April 6, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
