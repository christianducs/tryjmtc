import React from "react";

  // Helper to format "time ago"
  function timeAgo(timestamp) {
  const now = Date.now();
  const seconds = Math.floor((now - timestamp) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute(s) ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour(s) ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day(s) ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month(s) ago`;

  const years = Math.floor(months / 12);
  return `${years} year(s) ago`;
}

export default function VehicleTable({ vehicles, onVehicleClick }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
      case "Available":
        return "bg-green-500";
      case "Out Of Service":
      case "Unavailable":
        return "bg-red-500";
      case "Maintenance":
        return "bg-blue-500";
      case "On Trip":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full overflow-x-auto">
      <table className="w-full text-left min-w-[900px]">
        <thead className="border-b text-gray-600">
          <tr>
            <th className="pb-2">Name</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Type</th>
            <th className="pb-2">Current Meter</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((v, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 cursor-pointer"
              onClick={() => onVehicleClick(v)}
            >
              {/* NAME COLUMN */}
              <td className="py-4 flex gap-3 items-start">
                <img
                  src={v.image}
                  alt="vehicle"
                  className="w-16 h-16 object-cover rounded-md bg-gray-200"
                />

                <div>
                  <div className="font-semibold">{v.name}</div>
                  <div className="text-sm text-gray-500">{v.year} {v.type}</div>

                  <div className="text-sm mt-1">
                    <span className="font-semibold">VIN/SN:</span> {v.vin}
                  </div>

                  <div className="text-sm">
                    <span className="font-semibold">License Plate:</span>{" "}
                    {v.licensePlate}
                  </div>

                  <div className="text-sm">
                    <span className="font-semibold">RFID Balance:</span>{" "}
                    {v.rfidBalance}
                  </div>
                </div>
              </td>

              {/* STATUS */}
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${getStatusColor(
                      v.status
                    )}`}
                  ></div>
                  <span>{v.status}</span>
                </div>
              </td>

              {/* TYPE */}
              <td className="py-4">{v.type}</td>

              {/* CURRENT METER */}
              <td className="py-4">
                <div className="font-semibold">{v.currentMeter}</div>
                <div className="text-orange-500 text-xs">{timeAgo(v.lastUpdated)}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {vehicles.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No vehicles yet</p>
      )}
    </div>
  );
}
