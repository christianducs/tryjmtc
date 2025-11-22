import React from "react";

function ValueCell({ value, colorClass = "text-green-600", loading = false }) {
  if (loading) return <div className="animate-pulse bg-gray-200 h-8 w-24 rounded mx-auto" />;
  return <div className={`text-3xl md:text-5xl font-bold ${colorClass}`}>{value ?? 0}</div>;
}

export default function StatsCard({ title, leftValue, leftLabel, rightValue, rightLabel, loading = false }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h3 className="text-center font-semibold mb-4 text-sm md:text-lg">{title}</h3>
      <div className="flex justify-around mb-6">
        <div className="text-center">
          <ValueCell value={leftValue} loading={loading} colorClass="text-green-600" />
          <div className="text-xs md:text-sm text-gray-600 mt-1">{leftLabel}</div>
        </div>
        {rightValue !== "" && (
          <div className="text-center">
            <ValueCell value={rightValue} loading={loading} colorClass="text-blue-500" />
            <div className="text-xs md:text-sm text-gray-600 mt-1">{rightLabel}</div>
          </div>
        )}
      </div>
    </div>
  );
}
