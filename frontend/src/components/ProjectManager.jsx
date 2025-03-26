import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

import ProjectFilter from './ProjectFilter';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Récupérer les projets
    fetch('http://localhost:5000/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);  // Met à jour l'état des projets
        setFilteredProjects(data);  // Met à jour filteredProjects pour afficher les projets au départ
      })
      .catch((error) => console.error('Error fetching projects:', error));

    // Récupérer les catégories
    fetch('http://localhost:5000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const addProjectToList = (newProject) => {
    // Ajouter un nouveau projet à la liste des projets
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects); // Met à jour l'état des projets
    setFilteredProjects(updatedProjects); // Met à jour filteredProjects pour afficher le projet ajouté
  };

  const updateProjectInList = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
      project._id === updatedProject._id ? updatedProject : project
    );
    setProjects(updatedProjects);
    setFilteredProjects(updatedProjects);
  };

  const deleteProjectFromList = (id) => {
    const filteredProjects = projects.filter((project) => project._id !== id);
    setProjects(filteredProjects);
    setFilteredProjects(filteredProjects);
  };

  const handleFilter = (filters) => {
    let filtered = projects;

    if (filters.name) {
      filtered = filtered.filter((project) =>
        project.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.startDate) {
      filtered = filtered.filter((project) => new Date(project.startDate) >= new Date(filters.startDate));
    }
    if (filters.endDate) {
      filtered = filtered.filter((project) => new Date(project.endDate) <= new Date(filters.endDate));
    }
    if (filters.status) {
      filtered = filtered.filter((project) => project.status === filters.status);
    }

    setFilteredProjects(filtered);
  };

  const addCategoryToList = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <div>
      <h1>Gestion des Projets</h1>
     
      <AddProject onProjectAdded={addProjectToList} />
      <ProjectFilter onFilter={handleFilter} />
      <ProjectList
        projects={filteredProjects}
        onProjectUpdated={updateProjectInList}
        onProjectDeleted={deleteProjectFromList}
      />
    </div>
  );
};

export default ProjectManager;
