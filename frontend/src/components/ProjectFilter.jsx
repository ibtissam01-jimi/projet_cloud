import React, { useState } from "react";

const ProjectFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    name: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  // Met à jour les filtres et applique la recherche
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  // Réinitialiser les filtres
  const resetFilters = () => {
    const emptyFilters = { name: "", startDate: "", endDate: "", status: "" };
    setFilters(emptyFilters);
    onFilter(emptyFilters);
  };

  return (
    <div className="filter-container">
      <h2>Filtrer les Projets</h2>
      <div className="filter-inputs">
        <input type="text" name="name" placeholder="Nom du projet" value={filters.name} onChange={handleChange} />
        <input type="date" name="startDate" value={filters.startDate} onChange={handleChange} />
        <input type="date" name="endDate" value={filters.endDate} onChange={handleChange} />
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
