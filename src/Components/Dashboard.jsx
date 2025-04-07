import React from "react";
import { MessageCircle, CalendarDays, FileText } from "lucide-react";
import DashboardCard from "./DashboardCard";

export default function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-[#7209B7] mb-6">
        Welcome back, Jitin! 👋
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="New Messages"
          value="12"
          icon={MessageCircle}
          color="#4361EE"
        />
        <DashboardCard
          title="Upcoming Events"
          value="3"
          icon={CalendarDays}
          color="#7209B7"
        />
        <DashboardCard
          title="New Notes"
          value="7"
          icon={FileText}
          color="#F72585"
        />
      </div>
    </main>
  );
}
