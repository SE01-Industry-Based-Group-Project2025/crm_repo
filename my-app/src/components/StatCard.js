import React from "react";

export default function StatCard({ title, value, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</span>
      <span className="text-3xl font-bold mt-2 mb-2 text-blue-600 dark:text-blue-300">{value}</span>
      {children}
    </div>
  );
}