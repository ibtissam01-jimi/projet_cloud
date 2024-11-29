import React, { Component } from "react";
import profileImg from './images/profile.jpg';
import filesImg from './images/files.png';

class Profile extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Student Profile Page Design Example</h1>
          <p style={styles.sousTitre}>A responsive student profile page design</p>
        </div>

        <div style={styles.profileContainer}>
          
          <div style={styles.profile}>
            <img src={profileImg} alt="Profile" style={styles.profileImage} />
            <h3 style={styles.profileName}>Fyodor Dostoevsky</h3>
            <hr style={styles.divider} />
            <h4>Student ID: 32100001</h4>
            <h4>Class: 4</h4>
            <h4>Section: A</h4>
          </div>

          
          <div style={styles.general}>
            <div style={styles.Info}>
              <h3 style={styles.infoTitle}>
                <img src={filesImg} alt="Icon" style={styles.icon} /> General Information
              </h3>
              <table style={styles.table}>
                <tbody>
                  <tr>
                    <td style={styles.td}>Roll</td>
                    <td style={styles.td}>:</td>
                    <td style={styles.td}>125</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Academic Year</td>
                    <td style={styles.td}>:</td>
                    <td style={styles.td}>1990</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Gender</td>
                    <td style={styles.td}>:</td>
                    <td style={styles.td}>Male</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Religion</td>
                    <td style={styles.td}>:</td>
                    <td style={styles.td}>Group</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Blood</td>
                    <td style={styles.td}>:</td>
                    <td style={styles.td}>B+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={styles.Info}>
              <h3 style={styles.infoTitle}>
                <img src={filesImg} alt="Icon" style={styles.icon} /> Other Information
              </h3>
              <p style={styles.infoText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae, animi reiciendis enim nobis rem! Ipsum
                doloremque deleniti dolores hic similique tempora, optio ut odio alias distinctio dolorum possimus ducimus et dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #FF69B4, #FFC0CB)",
    padding: "20px",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#004d99",
  },
  sousTitre: {
    fontSize: "14px",
    color: "#006600",
  },
  profileContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profile: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  profileName: {
    marginBottom: "10px",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #ddd",
    margin: "10px 0",
  },
  general: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  Info: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  infoTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
  },
  infoText: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#333",
  },
};

export default Profile;
