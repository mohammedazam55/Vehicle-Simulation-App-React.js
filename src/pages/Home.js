// react imports
import React, { useState, useEffect } from "react";
// third party imports
import { ReactComponent as Edit } from "../icons/edit.svg";
import { ReactComponent as Delete } from "../icons/delete.svg";
// project imports
import { fetchVehicles } from "../services/api";
import "../utils/components.css";
// component
export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetchAllVehicles();
  }, []);
  const fetchAllVehicles = async () => {
    try {
      const response = await fetchVehicles();
      setVehicles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="homeId">
      <h3>Scenario</h3>
      <select name="scenario" id="scenario">
        <option value="scenario1">Test Scenario</option>
        <option value="scenario2">My Scenario</option>
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
                <button>
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
      {/* Add your home page content here */}
    </div>
  );
}
