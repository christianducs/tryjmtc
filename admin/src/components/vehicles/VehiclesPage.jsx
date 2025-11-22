import React, { useState } from "react";
import VehicleTable from "./VehicleTable";
import AddVehicleModal from "./AddVehicleModal";
import EditVehicleModal from "./EditVehicleModal";
import { useVehicles } from "./VehicleContext";

export default function VehiclesPage() {
  const [vehicleSearchQuery, setVehicleSearchQuery] = useState("");
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const { vehicles, addVehicle, setVehicles } = useVehicles();


  const handleAddVehicle = (data) => {
    addVehicle({
      ...data,
      status: "Active", // or "Available"
      image:
        "https://cdn-icons-png.flaticon.com/512/3202/3202926.png", // default placeholder
      rfidBalance: 20000,
      currentMeter: data.currentMileage,
      lastUpdated: Date.now()
    });
    setShowAddVehicle(false);
  };

  const filteredVehicles = vehicles.filter((v) => {
    const q = vehicleSearchQuery.toLowerCase();
    return (
      (v.name && v.name.toLowerCase().includes(q)) ||
      (v.vin && v.vin.toLowerCase().includes(q)) ||
      (v.year && v.year.toLowerCase().includes(q)) ||
      (v.licensePlate && v.licensePlate.toLowerCase().includes(q)) ||
      (v.type && v.type.toLowerCase().includes(q))
    );
  });

  const handleSaveStatus = (updatedVehicle) => {
    setVehicles((prev) =>
      prev.map((v) =>
        v.vin === updatedVehicle.vin ? updatedVehicle : v
      )
    );
    setSelectedVehicle(null);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-3 md:p-6">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Vehicle List</h2>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder="Search VIN, Name, Year, Plate..."
            value={vehicleSearchQuery}
            onChange={(e) => setVehicleSearchQuery(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md flex-1"
          />
          <button className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600">
            🔍 Search
          </button>
        </div>

        {/* Sort + Count + Add Vehicle */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div>
              Sort:
              <select className="border border-gray-300 rounded px-2 py-1 ml-2">
                <option>Updated - Newest First</option>
              </select>
            </div>
            <div>{filteredVehicles.length} vehicle(s)</div>
          </div>

          <button
            onClick={() => setShowAddVehicle(true)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 flex items-center gap-2"
          >
            <span>+</span>
            <span className="hidden sm:inline">Add Vehicle</span>
          </button>
        </div>

        {/* Table */}
        <VehicleTable
          vehicles={filteredVehicles}
          onVehicleClick={setSelectedVehicle}
        />

        {/* Add Vehicle */}
        {showAddVehicle && (
          <AddVehicleModal
            onClose={() => setShowAddVehicle(false)}
            onAdd={handleAddVehicle}
          />
        )}

        {/* Edit Vehicle Status */}
        {selectedVehicle && (
          <EditVehicleModal
            vehicle={selectedVehicle}
            onClose={() => setSelectedVehicle(null)}
            onSave={handleSaveStatus}
          />
        )}
      </div>
    </div>
  );
}
