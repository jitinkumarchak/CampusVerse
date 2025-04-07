import React from "react";

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  color = "#F72585", // default to primary pink
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow hover:shadow-md transition duration-200">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm text-gray-500">{title}</h2>
          <p className="text-3xl font-bold" style={{ color }}>
            {value}
          </p>
        </div>
        {Icon && <Icon size={32} style={{ color }} />}
      </div>
    </div>
  );
}
