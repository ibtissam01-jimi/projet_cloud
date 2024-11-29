import React, { Component } from "react";
import image from './image/headPhone.png'; 
class Content extends Component {
  render() {
    return (
      <div style={ListStyle.Content}>
        <span style={ListStyle.seller}>Nearest Seller</span>
        <img src={image} alt="" style={ListStyle.image}/>
        <h2 style={ListStyle.title}>Wireless Bluetooth Headset</h2>
        <p style={ListStyle.shipping}>Shipped in 3-4 days</p>
        <p style={ListStyle.price}>$35.99</p>
        <div style={ListStyle.buttonContainer}>
          <button style={ListStyle.addCartButton}>Add Cart</button>
          <button style={ListStyle.buyButton}>Buy</button>
        </div>
      </div>
    );
  }
}

const ListStyle = {
  Content: {
    width: "250px",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    position: "relative",
    margin: "80px auto",
  },
  seller: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "#d9b3ff",
    color: "#6a0dad",
    fontSize: "12px",
    fontWeight: "bold",
    padding: "5px 10px",
    borderRadius: "15px",
  },
  image: {
    width: "80%", 
    height: "auto",
    marginBottom: "15px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  shipping: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "5px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "15px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  addCartButton: {
    padding: "8px 15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f7f7f7",
    color: "#333",
    fontSize: "14px",
    cursor: "pointer",
    flex: 1,
    marginRight: "5px",
    transition: "background-color 0.3s ease",
  },
  buyButton: {
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#6a0dad",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    flex: 1,
    transition: "background-color 0.3s ease",
  },
};


export default Content;
