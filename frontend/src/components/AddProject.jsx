import React, { useState, useEffect } from 'react';

import "../css/AddProject.css"

const AddProject = ({ onProjectAdded, editingProject, onProjectUpdated }) => {
  const [project, setProject] = useState({ name: '', description: '', startDate: '', endDate: '', status: 'Pending', category: '' });
  const categories = ['Développement', 'Design', 'Marketing', 'Management'];

  useEffect(() => {
    if (editingProject) setProject(editingProject);
  }, [editingProject]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingProject ? `http://localhost:5000/api/projects/${editingProject._id}` : 'http://localhost:5000/api/projects';
    const method = editingProject ? 'PUT' : 'POST';
    
    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      });
      if (response.ok) {
        const result = await response.json();
        editingProject ? onProjectUpdated(result) : onProjectAdded(result);
        alert(editingProject ? 'Projet mis à jour' : 'Projet ajouté');
        setProject({ name: '', description: '', startDate: '', endDate: '', status: 'Pending', category: '' });
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProject ? 'Modifier' : 'Ajouter'} un Projet</h2>
      <input type="text" name="name" placeholder="Nom" value={project.name} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={project.description} onChange={handleChange} required />
      <input type="date" name="startDate" value={project.startDate} onChange={handleChange} required />
      <input type="date" name="endDate" value={project.endDate} onChange={handleChange} required />
      <select name="status" value={project.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="category" value={project.category} onChange={handleChange} required>
        <option value="">Sélectionner une catégorie</option>
        {categories.map((cat, index) => <option key={index} value={cat}>{cat}</option>)}
      </select>
      <button type="submit">{editingProject ? 'Mettre à jour' : 'Ajouter'}</button>
    </form>
  );
};

export default AddProject;