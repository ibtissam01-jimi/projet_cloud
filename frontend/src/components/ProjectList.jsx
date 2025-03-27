import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectFilter from "./ProjectFilter";
import "../css/ProjectList.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
    category: "",
  });

  // Charger les projets au montage du composant
  useEffect(() => {
    axios.get("http://localhost:5000/api/projects/all")
      .then((response) => {
        setProjects(response.data);
        setFilteredProjects(response.data);
      })
      .catch((error) => console.error("Erreur lors du chargement des projets:", error));
  }, []);

  // Filtrer les projets en fonction des critères
  const handleFilter = (filters) => {
    let filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.startDate ? new Date(project.startDate) >= new Date(filters.startDate) : true) &&
      (filters.endDate ? new Date(project.endDate) <= new Date(filters.endDate) : true) &&
      (filters.status ? project.status === filters.status : true)
    );
    setFilteredProjects(filtered);
  };

  // Gérer la suppression d'un projet
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/projects/${id}`)
      .then(() => {
        setProjects(projects.filter((project) => project._id !== id));
        setFilteredProjects(filteredProjects.filter((project) => project._id !== id));
      })
      .catch((error) => console.error("Erreur lors de la suppression:", error));
  };

  // Gérer la modification d'un projet
  const handleEdit = (project) => {
    setIsEditing(true);
    setCurrentProject(project);
    setFormData({
      name: project.name,
      description: project.description,
      startDate: project.startDate.split("T")[0],
      endDate: project.endDate.split("T")[0],
      status: project.status,
      category: project.category,
    });
  };

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/projects/${currentProject._id}`, formData)
      .then((response) => {
        setProjects(projects.map((proj) => (proj._id === currentProject._id ? response.data : proj)));
        setFilteredProjects(filteredProjects.map((proj) => (proj._id === currentProject._id ? response.data : proj)));
        setIsEditing(false);
        setCurrentProject(null);
      })
      .catch((error) => console.error("Erreur lors de la mise à jour:", error));
  };

  return (
    <div>
      <ProjectFilter onFilter={handleFilter} />
      <h2>Liste des Projets</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Début</th>
            <th>Fin</th>
            <th>Statut</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project._id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{new Date(project.startDate).toLocaleDateString()}</td>
              <td>{new Date(project.endDate).toLocaleDateString()}</td>
              <td>{project.status}</td>
              <td>{project.category}</td>
              <td>
                <button onClick={() => handleEdit(project)}>Modifier</button>
                <button onClick={() => handleDelete(project._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulaire de modification */}
      {isEditing && (
        <div className="edit-form">
          <h2>Modifier le Projet</h2>
          <form onSubmit={handleSubmit}>
            <label>Nom:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />

            <label>Date de début:</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

            <label>Date de fin:</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />

            <label>Statut:</label>
            <select name="status" value={formData.status} onChange={handleChange} required>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <label>Catégorie:</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} required />

            <button type="submit">Mettre à jour</button>
            <button type="button" onClick={() => setIsEditing(false)}>Annuler</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
