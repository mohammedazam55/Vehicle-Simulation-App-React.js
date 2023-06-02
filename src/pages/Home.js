// react imports
import React, { useState, useEffect } from "react";
// third party imports
import { ReactComponent as Edit } from "../icons/edit.svg";
import { ReactComponent as Delete } from "../icons/delete.svg";
// project imports
import { fetchVehicles, deleteVehicle, fetchScenarios } from "../services/api";
import "../utils/components.css";
import GraphContainer from "../components/GraphContainer";
// component
export default function Home() {
  const [scenarios, setScenarios] = useState([]);
  //
  useEffect(() => {
    fetchAllScenarios();
  }, []);
  //
  const fetchAllScenarios = async () => {
    try {
      const response = await fetchScenarios();
      setScenarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetchAllVehicles();
  });

  const fetchAllVehicles = async () => {
    try {
      const response = await fetchVehicles();
      setVehicles(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  //
  const deleteAVehicle = async (id) => {
    try {
      await deleteVehicle(id);
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  return (
    <div id="homeId">
      <h3>Scenario</h3>
      <select name="scenario" id="scenario">
        {scenarios.map((scenario) => (
          <option key={scenario.id} value={scenario.id}>
            {scenario.name}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Vehicle Id</th>
            <th>Vehicle Name</th>
            <th>Position X</th>
            <th>Position Y</th>
            <th>Speed</th>
            <th>Direction</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.name}</td>
              <td>{vehicle.iPosX}</td>
              <td>{vehicle.iPosY}</td>
              <td>{vehicle.speed}</td>
              <td>{vehicle.direction}</td>
              <td>
                <button>
                  <Edit />
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    const confirmed = window.confirm(
                      "Are you sure you want to delete this vehicle?"
                    );
                    if (confirmed) {
                      deleteAVehicle(vehicle.id);
                    }
                  }}
                >
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="simulationBtns">
        <button className="btn1">Start Simulation</button>
        <button className="btn3">Stop Simulation</button>
      </div>
      <div id="graphId">
        <GraphContainer />
      </div>
      {/* Add your home page content here */}
    </div>
  );
}
