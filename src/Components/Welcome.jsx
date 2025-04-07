import React from "react";
import { useNavigate } from "react-router-dom";
import { Rocket, Smile, BookOpen } from "lucide-react";

export default function Welcome() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/"); // Redirect to dashboard/homepage
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center text-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl">
        <div className="text-[#7209B7] mb-4">
          <Rocket size={48} />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Welcome to CampusVerse 🚀
        </h1>
        <p className="text-gray-600 mb-6">
          Your all-in-one college companion — stay connected, learn more, grow
          together.
        </p>

        <ul className="text-left text-gray-700 mb-6 space-y-2">
          <li className="flex items-center gap-2">
            <Smile size={18} className="text-[#F72585]" />
            Connect with students across campuses
          </li>
          <li className="flex items-center gap-2">
            <BookOpen size={18} className="text-[#4361EE]" />
            Access notes, internships & events
          </li>
        </ul>

        <button
          onClick={handleGetStarted}
          className="bg-[#7209B7] hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
