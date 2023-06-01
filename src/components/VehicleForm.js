import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchScenarios } from "../services/api";

export default function AddVehicle() {
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
  const vresetFn = () => {
    document.getElementById("vehicleName").value = "";
    document.getElementById("vehicleSpeed").value = "";
    document.getElementById("vehiclePositionX").value = "";
    document.getElementById("vehiclePositionY").value = "";
  };
  return (
    <div id="vehicleId">
      <h3>Vehicle / add</h3>
      <h2>Add Vehicle</h2>
      <div className="addVehicle">
        <div className="addBRow1">
          <div className="addVBttn1">
            <label htmlFor="scenariosList">Scenarios List</label>
            <select id="scenariosList" name="scenariosList" defaultValue="">
              <option disabled value="">
                Select Scenario
              </option>
              {scenarios.map((scenario) => (
                <option key={scenario.id} value={scenario.id}>
                  {scenario.name}
                </option>
              ))}
            </select>
          </div>
          <div className="addVBttn2">
            <label htmlFor="vehicleName">Vehicle Name</label>
            <input
              type="text"
              id="vehicleName"
              name="vehicleName"
              placeholder="Target abc"
            />
          </div>
          <div className="addVBttn3">
            <label htmlFor="vehicleSpeed">Speed</label>
            <input
              type="text"
              id="vehicleSpeed"
              name="vehicleSpeed"
              placeholder="2"
            />
          </div>
        </div>
        <div className="addBRow2">
          <div className="addVBttn4">
            <label htmlFor="vehiclePositionX">Position X</label>
            <input
              type="text"
              id="vehiclePositionX"
              name="vehiclePositionX"
              placeholder="1000"
            />
          </div>
          <div className="addVBttn5">
            <label htmlFor="vehiclePositionY">Position Y</label>
            <input
              type="text"
              id="vehiclePositionY"
              name="vehiclePositionY"
              placeholder="20"
            />
          </div>
          <div className="addVBttn6">
            <label htmlFor="vehicleDirection">Direction</label>
            <select
              id="vehicleDirection"
              name="vehicleDirection"
              defaultValue=""
            >
              <option disabled value="">
                Select Direction
              </option>
              <option value="towards">Towards</option>
              <option value="backwards">Backwards</option>
              <option value="upwards">Upwards</option>
              <option value="downwards">Downwards</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn1">Add</button>
      <button className="btn2" onClick={vresetFn}>
        Reset
      </button>
      <Link to="/">
        <button className="btn3">Go Back</button>
      </Link>
    </div>
  );
}
