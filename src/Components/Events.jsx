import React from "react";
import { CalendarDays, MapPin } from "lucide-react";

const dummyEvents = [
  {
    title: "Hackathon 2025",
    date: "April 20, 2025",
    location: "IIT Delhi",
    description: "48-hour national level hackathon focused on social impact.",
  },
  {
    title: "AI & ML Bootcamp",
    date: "April 25, 2025",
    location: "Online",
    description: "Hands-on bootcamp on AI tools and real-world applications.",
  },
  {
    title: "Startup Pitch Fest",
    date: "May 5, 2025",
    location: "Bangalore",
    description: "Pitch your startup to top VCs and incubators.",
  },
];

export default function Events() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#4361EE" }}>
        Upcoming Events
      </h1>

      <div className="space-y-6">
        {dummyEvents.map((event, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {event.title}
            </h2>
            <div className="flex items-center text-gray-500 mt-1 text-sm space-x-4">
              <div className="flex items-center space-x-1">
                <CalendarDays size={16} />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{event.location}</span>
              </div>
            </div>
            <p className="mt-3 text-gray-600">{event.description}</p>
            <button
              className="mt-4 text-white px-4 py-2 rounded hover:bg-blue-600"
              style={{ backgroundColor: "#4361EE" }}
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
