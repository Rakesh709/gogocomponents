import React from "react";

function Badges() {
    const badges = [
        { label: "New", color: "bg-green-100 text-green-800" },
        { label: "Beta", color: "bg-yellow-100 text-yellow-800" },
        { label: "Pro", color: "bg-purple-100 text-purple-800" },
        { label: "Coming Soon", color: "bg-blue-100 text-blue-800" },
        { label: "🔥 Trending", color: "bg-red-100 text-red-800" },
      ];
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-white shadow rounded">
      {badges.map((badge, index) => (
        <span
          key={index}
          className={`px-3 py-1 text-sm font-semibold rounded-full ${badge.color}`}
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}

export default Badges;
