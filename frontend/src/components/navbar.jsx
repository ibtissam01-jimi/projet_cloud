import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/add-project">Ajouter un Projet</Link></li>
        <li><Link to="/list-projects">Liste des Projets</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
