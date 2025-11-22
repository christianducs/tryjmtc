import React, { useState } from "react";

export default function AddInventoryModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    type: "",
    quantity: "",
  });

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const newItem = {
      id: Date.now(),
      name: form.name,
      group: form.brand,
      type: form.type,
      quantity: Number(form.quantity),
      status: "Available",
      image: "📦",
    };

    onAdd(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">

        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Inventory Details</h2>

        <div className="space-y-4">

          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              placeholder="Input the item's name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Brand</label>
            <input
              type="text"
              placeholder="Input brand name"
              value={form.brand}
              onChange={(e) => update("brand", e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Type</label>
            <input
              type="text"
              placeholder="Input type"
              value={form.type}
              onChange={(e) => update("type", e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Quantity</label>
            <input
              type="number"
              placeholder="Input quantity"
              value={form.quantity}
              onChange={(e) => update("quantity", e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md bg-gray-100"
            />
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700"
            >
              Confirm
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
