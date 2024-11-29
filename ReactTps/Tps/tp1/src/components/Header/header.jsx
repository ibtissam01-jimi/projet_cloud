import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header style={listStyle.header}>
        <div style={listStyle.logo}>Logo</div>
        <nav style={listStyle.nav}>
          <a href="#home" style={listStyle.navLink}>Home</a>
          <a href="#about" style={listStyle.navLink}>About Us</a>
          <a href="#service" style={listStyle.navLink}>Service</a>
          <a href="#blog" style={listStyle.navLink}>Blog</a>
        </nav>
        <div style={listStyle.authButtons}>
          <button style={listStyle.signInButton}>Sign in</button>
          <button style={listStyle.loginButton}>Log in</button>
        </div>
      </header>
      
    );
  }
}

const listStyle = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    backgroundColor: "#F8F9FA",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "23px",
    fontWeight: "bold",
    color: "#000",
  },
  nav: {
    display: "flex",
    gap: "30px",
  },
  navLink: {
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: "#6a0dad", 
  },
  authButtons: {
    display: "flex",
    gap: "10px",
  },
  signInButton: {
    padding: "8px 15px",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "#6a0dad",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
  loginButton: {
    padding: "8px 15px",
    borderRadius: "20px",
    border: "1px solid #6a0dad",
    backgroundColor: "#fff",
    color: "#6a0dad",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
};


export default Header;
