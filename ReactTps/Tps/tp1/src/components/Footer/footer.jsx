import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={ListStyle.footer}>
        <p style={ListStyle.text}>
          copyright DEVOFS202 – Aya El Hannach – Year 2024/2025
        </p>
      </footer>
    );
  }
}

const ListStyle = {
  footer: {
    backgroundColor: "#F8F9FA",
    padding: "10px 0",
    position: "fixed",
    bottom: "0",
    width: "100%",
    textAlign: "center",
    color: "#000",
  },
  text: {
    fontStyle: "italic",
    fontSize: "20px",
    margin: 0,
  },
};

export default Footer;
