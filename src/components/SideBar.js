import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import ScenarioForm from "./ScenarioForm";
import ScenarioList from "./ScenarioList";
import VehicleForm from "./VehicleForm";
export default function Sidebar() {
  return (
    <>
      <Router>
        <nav>
          <NavLink active to="/">
            Home
          </NavLink>
          <NavLink to="/add-scenario">Add Scenario</NavLink>
          <NavLink to="/all-scenarios">All Scenarios</NavLink>
          <NavLink to="/add-vehicle">Add Vehicle</NavLink>
        </nav>

        <Routes>
          <Route path="/add-scenario" element={<ScenarioForm />} />
          <Route path="/all-scenarios" element={<ScenarioList />} />
          <Route path="/add-vehicle" element={<VehicleForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
