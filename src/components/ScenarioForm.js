import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function ScenarioForm() {
  const resetFn = () => {
    document.getElementById("scenarioName").value = "";
    document.getElementById("scenarioTime").value = "";
  };

  return (
    <div id="sceneId">
      <h3>Scenario / add</h3>
      <h2>Add Scenario</h2>
      <div className="addScene">
        <div className="firstForm">
          <label htmlFor="scenarioName">Scenario Name</label>
          <input
            type="text"
            id="scenarioName"
            name="scenarioName"
            placeholder="Test Scenario"
          />
        </div>
        <div className="secondForm">
          <label htmlFor="scenarioTime">Scenario Time (seconds)</label>
          <input
            type="text"
            id="scenarioTime"
            name="scenarioTime"
            placeholder="10"
            required
          />
        </div>
      </div>
      <button className="btn1">Add</button>
      <button className="btn2" onClick={resetFn}>
        Reset
      </button>
      <Link to="/">
        <button className="btn3">Go Back</button>
      </Link>
    </div>
  );
}
