import React from "react";
import { MessageCircle, Send, Smile } from "lucide-react";

export default function Chats() {
  return (
    <div className="flex h-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* Contacts List */}
      <aside className="w-1/3 border-r bg-gray-50 p-4">
        <h2 className="text-lg font-semibold mb-4" style={{ color: "#4361EE" }}>
          Chats
        </h2>
        <div className="space-y-3">
          {[
            "Aarav Sharma",
            "Meera Kapoor",
            "Rahul Verma",
            "Ananya Singh",
            "Dev Patel",
          ].map((name, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <div
                className="w-10 h-10 text-white flex items-center justify-center rounded-full font-semibold"
                style={{ backgroundColor: "#4361EE" }}
              >
                {name[0]}
              </div>
              <div>
                <p className="font-medium text-gray-800">{name}</p>
                <p className="text-sm text-gray-500">Hey! Let's catch up.</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Window */}
      <section className="w-2/3 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center space-x-4">
          <div
            className="w-10 h-10 text-white rounded-full flex items-center justify-center font-semibold"
            style={{ backgroundColor: "#4361EE" }}
          >
            A
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Aarav Sharma</h3>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 p-4 space-y-4 overflow-y-auto"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          {/* You */}
          <div className="flex justify-end">
            <div
              className="text-white p-3 rounded-xl max-w-sm"
              style={{ backgroundColor: "#4361EE" }}
            >
              Hey Aarav! How’s everything going?
            </div>
          </div>
          {/* Them */}
          <div className="flex justify-start">
            <div className="bg-gray-200 p-3 rounded-xl max-w-sm">
              Hey! All good here. What about you?
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="border-t p-3 flex items-center space-x-2">
          <button style={{ color: "#ADB5BD" }} className="hover:text-[#4361EE]">
            <Smile size={22} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2"
            style={{ borderColor: "#CED4DA", outlineColor: "#4361EE" }}
          />
          <button
            className="text-white p-2 rounded-full hover:bg-blue-600"
            style={{ backgroundColor: "#4361EE" }}
          >
            <Send size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
