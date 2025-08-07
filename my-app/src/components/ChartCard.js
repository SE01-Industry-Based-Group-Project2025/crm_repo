import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function ChartCard({ title, data, dataKey, color = "#8884d8" }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</span>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}