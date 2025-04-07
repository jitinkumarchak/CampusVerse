// Internships.jsx
import React from "react";
import { Briefcase } from "lucide-react";

const internships = [
  {
    company: "Google",
    role: "Software Engineering Intern",
    location: "Bangalore, India",
    duration: "May 2025 - July 2025",
    description: "Work on real-world projects with the Google Cloud team.",
  },
  {
    company: "Microsoft",
    role: "Product Management Intern",
    location: "Hyderabad, India",
    duration: "June 2025 - August 2025",
    description: "Collaborate with product teams and improve user experience.",
  },
  {
    company: "Zoho",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "April 2025 - July 2025",
    description: "Build scalable features in Zoho CRM and Zoho Creator.",
  },
];

export default function Internships() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-[#7209B7] mb-6 flex items-center gap-2">
        <Briefcase size={24} />
        Internships
      </h1>

      <div className="space-y-6">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {internship.role} @ {internship.company}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {internship.location} | {internship.duration}
            </p>
            <p className="mt-3 text-gray-600">{internship.description}</p>
            <button className="mt-4 bg-[#4361EE] text-white px-4 py-2 rounded hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
