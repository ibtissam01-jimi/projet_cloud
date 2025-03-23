const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
require('dotenv').config()

// Middleware
app.use(express.json());
app.use(cors()); // Pour autoriser les requêtes cross-origin
app.use("/api/projects", projectRoutes);

// Connexion à la base de données MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connexion à la base de données réussie");
  } catch (err) {
    console.error("Erreur de connexion à la base de données", err);
    process.exit(1);
  }
};

// Connexion à la base de données
connectDB();

// Lancer le serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
