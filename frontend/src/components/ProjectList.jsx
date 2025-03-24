import React, { useState, useEffect } from 'react';


import "../css/ProjectList.css"

const ProjectList = ({ projects, onProjectUpdated, onProjectDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
    category: ''
  });

  const handleEditClick = (project) => {
    setIsEditing(true);
    setCurrentProject(project);
    setFormData({
      name: project.name,
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate,
      status: project.status,
      category: project.category
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentProject(null);
    setFormData({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      status: '',
      category: ''
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call the onProjectUpdated function passed as a prop with updated project data
    onProjectUpdated(currentProject._id, formData);  // Ensure you're passing the correct parameters
    setIsEditing(false);
    setCurrentProject(null);
  };

  return (
    <div>
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
          {projects.map(project => (
            <tr key={project._id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{new Date(project.startDate).toLocaleDateString()}</td>
              <td>{new Date(project.endDate).toLocaleDateString()}</td>
              <td>{project.status}</td>
              <td>{project.category}</td>
              <td>
                <button onClick={() => handleEditClick(project)}>Modifier</button>
                <button onClick={() => onProjectDeleted(project._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div>
          <h3>Modifier le Projet</h3>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                required
              />
            </div>
            <div>
              <label>Début</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleFormChange}
                required
              />
            </div>
            <div>
              <label>Fin</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleFormChange}
                required
              />
            </div>
            <div>
              <label>Statut</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleFormChange}
                required
              />
            </div>
            <div>
              <label>Catégorie</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleFormChange}
                required
              />
            </div>
            <div >
              <button type="submit">Enregistrer</button>
              <button type="button" onClick={handleCancelEdit}>Annuler</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
