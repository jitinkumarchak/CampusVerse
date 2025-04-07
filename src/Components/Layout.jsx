import React from "react";
import { NavLink,Link, Outlet } from "react-router-dom";
import {
  User,
  Menu,
  Home,
  MessageCircle,
  Calendar,
  Briefcase,
  FileText,
  Users,
  Trophy,
  Settings,
  Bell,
  LogOut,
} from "lucide-react";

export default function Layout() {
  return (
    <div className="flex h-screen bg-[#F8F9FA]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col p-4 justify-between">
        <div>
          <div className="text-2xl font-bold text-[#4361EE] mb-8">
            CampusVerse
          </div>
          <nav className="flex flex-col space-y-4">
            <NavItem icon={<Home size={20} />} label="Home" to="/" />
            <NavItem
              icon={<MessageCircle size={20} />}
              label="Chats"
              to="/chats"
            />
            <NavItem
              icon={<Calendar size={20} />}
              label="Events"
              to="/events"
            />
            <NavItem
              icon={<Briefcase size={20} />}
              label="Internships"
              to="/internships"
            />
            <NavItem icon={<FileText size={20} />} label="Notes" to="/notes" />
            <NavItem icon={<Users size={20} />} label="Clubs" to="/clubs" />
            <NavItem
              icon={<Trophy size={20} />}
              label="Competitions"
              to="/competitions"
            />
            <NavItem
              icon={<Settings size={20} />}
              label="Settings"
              to="/settings"
            />
          </nav>
        </div>
        <div className="pt-4 border-t">
          <NavItem
            icon={<LogOut size={20} />}
            label="Logout"
            to="/login"
            onClick={() => localStorage.removeItem("token")}
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <div className="flex items-center space-x-2 md:hidden">
            <Menu size={24} className="text-[#4361EE]" />
            <span className="text-lg font-semibold text-[#4361EE]">Menu</span>
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
          />

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition ${
                isActive ? "bg-gray-200 font-semibold" : "text-gray-700"
              }`
            }
          >
            <User size={18} />
            Profile
          </NavLink>
        </header>

        {/* Routed Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, to, onClick }) {
  return (
    <Link to={to} onClick={onClick}>
      <div className="flex items-center space-x-3 text-gray-700 hover:text-primary-blue cursor-pointer">
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  );
}

