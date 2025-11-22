import React, { useState } from "react";

export default function EditVehicleModal({ vehicle, onClose, onSave }) {
  const [status, setStatus] = useState(vehicle.status || "Available");

  const handleSave = () => {
    onSave({ ...vehicle, status });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 relative">

        <button
          className="absolute top-3 right-3 text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Vehicle Status</h2>

        <div className="space-y-4">

          <div>
            <label className="font-medium">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md bg-gray-100"
            >
              <option value="Available">Available</option>
              <option value="On Trip">On Trip</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700"
            >
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
