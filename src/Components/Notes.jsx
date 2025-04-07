// Notes.jsx
import React from "react";
import { FileText } from "lucide-react";

const notes = [
  {
    subject: "Data Structures",
    title: "Stacks & Queues",
    uploadedBy: "Aarav Sharma",
    date: "April 5, 2025",
    link: "#",
  },
  {
    subject: "Operating Systems",
    title: "Process Management",
    uploadedBy: "Meera Kapoor",
    date: "April 4, 2025",
    link: "#",
  },
  {
    subject: "DBMS",
    title: "Normalization Techniques",
    uploadedBy: "Rahul Verma",
    date: "April 3, 2025",
    link: "#",
  },
];

export default function Notes() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-[#F72585] mb-6 flex items-center gap-2">
        <FileText size={24} />
        Shared Notes
      </h1>

      <div className="space-y-6">
        {notes.map((note, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {note.title} -{" "}
              <span className="text-[#7209B7]">{note.subject}</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Uploaded by {note.uploadedBy} on {note.date}
            </p>
            <a
              href={note.link}
              className="mt-3 inline-block bg-[#F72585] text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              View Note
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
