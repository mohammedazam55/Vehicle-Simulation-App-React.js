import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

// Fetch all scenarios
export const fetchScenarios = () => {
  return axios.get(`${API_BASE_URL}/scenarios`);
};

// Fetch a specific scenario
export const fetchScenario = (id) => {
  return axios.get(`${API_BASE_URL}/scenarios/${id}`);
};

// Create a new scenario
export const createScenario = (scenarioData) => {
  return axios.post(`${API_BASE_URL}/scenarios`, scenarioData);
};

// Update a scenario
export const updateScenario = (id, scenarioData) => {
  return axios.put(`${API_BASE_URL}/scenarios/${id}`, scenarioData);
};

// Delete a scenario
export const deleteScenario = (id) => {
  return axios.delete(`${API_BASE_URL}/scenarios/${id}`);
};

// Fetch all vehicles
export const fetchVehicles = () => {
  return axios.get(`${API_BASE_URL}/vehicles`);
};

// Fetch vehicles for a specific scenario
export const fetchScenarioVehicles = (scenarioId) => {
  return axios.get(`${API_BASE_URL}/vehicles?scenarioId=${scenarioId}`);
};

// Create a new vehicle
export const createVehicle = (vehicleData) => {
  return axios.post(`${API_BASE_URL}/vehicles`, vehicleData);
};

// Update a vehicle
export const updateVehicle = (id, vehicleData) => {
  return axios.put(`${API_BASE_URL}/vehicles/${id}`, vehicleData);
};

// Delete a vehicle
export const deleteVehicle = (id) => {
  return axios.delete(`${API_BASE_URL}/vehicles/${id}`);
};
