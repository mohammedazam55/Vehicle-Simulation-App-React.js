// React Imports
import React, { useState, useEffect } from "react";
// Third Party Imports
import { ReactComponent as Edit } from "../icons/edit.svg";
import { ReactComponent as Delete } from "../icons/delete.svg";
import { ReactComponent as Add } from "../icons/add.svg";
//
import { fetchScenarios, deleteScenario } from "../services/api";
//
export default function AllScenarios() {
  //
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

  const deleteAScenario = async (id) => {
    try {
      await deleteScenario(id);
      setScenarios(scenarios.filter((scenario) => scenario.id !== id));
    } catch (error) {
      console.error("Error deleting scenario:", error);
    }
  };

  return (
    <div id="allSceneId">
      <div id="allSIdGrid">
        <h2>All Scenarios</h2>
        <div className="allBtns">
          <button className="btn3">New Scenario</button>
          <button className="btn1">Add Vehicle</button>
          <button className="btn2">Delete All</button>
        </div>
      </div>
      <table id="allSIdTable">
        <thead>
          <tr>
            <th>Scenario Id</th>
            <th>Scenario Name</th>
            <th>Scenario Time</th>
            <th>Number of Vehicles</th>
            <th>Add Vehicle</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario) => (
            <tr key={scenario.id}>
              <td>{scenario.id}</td>
              <td>{scenario.name}</td>
              <td>{scenario.time}s</td>
              <td>2</td>
              <td>
                <button>
                  <Add />
                </button>
              </td>
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
                      deleteAScenario(scenario.id);
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
    </div>
  );
}
