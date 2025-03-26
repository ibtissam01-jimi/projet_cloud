import axios from "axios";

const API_URL = "http://localhost:5001/api/projects";

export const getAllProjects = async () => {
  return await axios.get(`${API_URL}/all`);
};

export const addProject = async (project) => {
  return await axios.post(`${API_URL}/add`, project);
};

export const updateProject = async (id, project) => {
  return await axios.put(`${API_URL}/update/${id}`, project);
};

export const deleteProject = async (id) => {
  return await axios.delete(`${API_URL}/delete/${id}`);
};

export const searchProjects = async (keyword) => {
  return await axios.get(`${API_URL}/search?keyword=${keyword}`);
};

export const filterProjects = async (filters) => {
  return await axios.get(`${API_URL}/filter`, { params: filters });
};
