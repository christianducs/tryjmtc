import React, { useState } from "react";

export default function AddVehicleModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    type: "",
    name: "",
    year: "",
    vin: "",
    licensePlate: "",
    mileage: "",
    dailyRate: ""
  });

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onAdd({ ...form, 
  status: "Available" 
    })
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl font-light"
          onClick={onClose}
        >
          ✖
        </button>

        <h3 className="text-xl font-bold mb-6 text-center">Vehicle Details</h3>

        <div className="space-y-4">

          <div>
            <label className="block mb-1 font-medium text-sm">Vehicle Type</label>
            <select value={form.type} onChange={(e) => update("type", e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-200"
            >
            <option value="">Select type</option>
            <option value="SUV">SUV</option>
            <option value="VAN">VAN</option>
            </select>
          </div>


          <div>
            <label className="block mb-1 font-medium text-sm">Name</label>
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Year</label>
            <input
              value={form.year}
              onChange={(e) => update("year", e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">VIN/SN</label>
            <input
              value={form.vin}
              onChange={(e) => update("vin", e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">License Plate</label>
            <input
              value={form.licensePlate}
              onChange={(e) => update("licensePlate", e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Current Mileage</label>
            <input
              value={form.mileage}
              onChange={(e) => update("mileage", e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Daily Rate</label>
            <input
              value={form.dailyRate}
              onChange={(e) => update("dailyRate", e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-yellow-600 text-white rounded-full font-medium hover:bg-yellow-700"
            >
              Confirm
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
