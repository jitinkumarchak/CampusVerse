// Competitions.jsx
import React from "react";
import { Trophy } from "lucide-react";

const competitions = [
  {
    title: "CodeSprint 2025",
    date: "May 10, 2025",
    level: "National",
    description: "Solve algorithmic problems and compete for exciting prizes.",
  },
  {
    title: "Design-a-thon",
    date: "May 18, 2025",
    level: "Inter-college",
    description:
      "UI/UX design competition to build creative mobile/web designs.",
  },
  {
    title: "Startup Showdown",
    date: "May 25, 2025",
    level: "National",
    description: "Pitch your startup idea in front of investors and mentors.",
  },
];

export default function Competitions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-[#F72585] mb-6 flex items-center gap-2">
        <Trophy size={24} />
        Upcoming Competitions
      </h1>

      <div className="space-y-6">
        {competitions.map((comp, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {comp.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{comp.description}</p>
            <div className="flex text-sm text-gray-500 mt-2 justify-between">
              <span>
                <strong>Date:</strong> {comp.date}
              </span>
              <span className="text-[#B5179E] font-medium">{comp.level}</span>
            </div>
            <button className="mt-4 bg-[#F72585] text-white px-4 py-2 rounded hover:bg-pink-600">
              Participate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
