import { createContext, useContext, useState } from "react";

const VehicleContext = createContext();

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState([]);

  const addVehicle = (vehicle) => {
    setVehicles(prev => [...prev, vehicle]);
  };

  return (
    <VehicleContext.Provider value={{ vehicles, addVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicles() {
  return useContext(VehicleContext);
}
