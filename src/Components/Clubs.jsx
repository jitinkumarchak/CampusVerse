// Clubs.jsx
import React from "react";
import { Users } from "lucide-react";

const clubs = [
  {
    name: "Coding Club",
    description:
      "Join to participate in coding contests, DSA sessions, and projects.",
    members: 150,
  },
  {
    name: "AI/ML Society",
    description: "Learn and build projects on AI, ML, and Data Science.",
    members: 120,
  },
  {
    name: "Photography Club",
    description: "Capture and showcase your creative side through lenses.",
    members: 90,
  },
];

export default function Clubs() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-[#7209B7] mb-6 flex items-center gap-2">
        <Users size={24} />
        Explore Clubs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">{club.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{club.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Members:{" "}
              <span className="text-[#4CC9F0] font-semibold">
                {club.members}
              </span>
            </p>
            <button className="mt-4 bg-[#7209B7] text-white px-4 py-2 rounded hover:bg-purple-700">
              Join Club
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
