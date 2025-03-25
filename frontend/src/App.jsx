import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import Accueil from "./components/Accueil";

function App() {
  const [projects, setProjects] = useState([]);

  // Charger les projets au montage du composant
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      }
    };
    fetchProjects();
  }, []);

  // Ajouter un projet
  const addProjectToList = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  // Mettre à jour un projet
  const updateProjectInList = (projectId, updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id === projectId ? { ...project, ...updatedProject } : project
      )
    );
  };

  // Supprimer un projet
  const deleteProjectFromList = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.error("Erreur lors de la suppression du projet:", error);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/add-project" element={<AddProject onProjectAdded={addProjectToList} />} />
        <Route
          path="/list-projects"
          element={
            <ProjectList
              projects={projects}
              onProjectUpdated={updateProjectInList}
              onProjectDeleted={deleteProjectFromList}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
