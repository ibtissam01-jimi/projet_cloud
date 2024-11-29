import React, { Component } from "react";
import filesImg from './images/Logo_ofppt.png';
class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <img src={filesImg} alt="Logo" style={styles.logo} />
        <h1 style={styles.title}>OFPPT</h1>
      </header>
    );
  }
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "15px 20px",
    backgroundColor: "#eec0c8",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    height: "50px",
    marginRight: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
    color: "#000",
  },
};

export default Header;
