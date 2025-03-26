import React, { useState, useEffect } from 'react';

import "../../css/AddProject.css"

const AddTask = ({ onProjectAdded, editingProject, onProjectUpdated }) => {
  const [task, setTask] = useState({ titre: '', description: '',projet_id:"",priorite:"", startDate: '', deadline: '', status: 'En cours',users:[] });

  //predefined values
  const priorities = ['faible', 'moyen', 'urgent'];
  const statuses = ["En cours", "Terminé", "En attente"];

  useEffect(() => {
    if (editingProject) setTask(editingProject);
  }, [editingProject]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingProject ? `http://localhost:5000/api/projects/${editingProject._id}` : 'http://localhost:5000/api/tasks';
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
        setTask({ name: '', description: '', startDate: '', endDate: '', status: 'Pending', category: '' });
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProject ? 'Modifier' : 'Ajouter'} une Tache</h2>
      <input type="text" name="name" placeholder="Nom" value={task.name} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={task.description} onChange={handleChange} required />
      <input type="date" name="deadline" value={task.deadline} onChange={handleChange} required />
      <select name="status" value={task.status} onChange={handleChange}>
        {statuses.map((value, index) => <option key={index} value={value}>{value}</option>)}
      </select>
      <select name="category" value={task.priorite} onChange={handleChange} required>
        <option value="">Priorite du Tache</option>
        {priorities.map((cat, index) => <option key={index} value={cat}>{cat}</option>)}
      </select>
      <button type="submit">{editingProject ? 'Mettre à jour' : 'Ajouter'}</button>
    </form>
  );
};

export default AddTask;