import React, { useState, useEffect } from "react";


const ProjectFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    name: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  // Fonction pour mettre à jour les filtres
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Appliquer le filtre après un délai (évite les mises à jour instantanées)
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilter(filters);
    }, 500);
    return () => clearTimeout(timeout);
  }, [filters, onFilter]);

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setFilters({
      name: "",
      startDate: "",
      endDate: "",
      status: "",
    });
    onFilter({
      name: "",
      startDate: "",
      endDate: "",
      status: "",
    });
  };

  return (
    <div className="filter-container">
      <h2>Filtrer les Projets</h2>
      <div className="filter-inputs">
        <input
          type="text"
          name="name"
          placeholder="Nom du projet"
          value={filters.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
        />
        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">--Sélectionner le statut--</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button onClick={resetFilters} className="reset-button">Réinitialiser</button>
    </div>
  );
};

export default ProjectFilter;
