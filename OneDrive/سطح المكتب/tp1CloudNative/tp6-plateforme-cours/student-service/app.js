const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const verifyToken = require('../auth-service/middleware/verifyToken');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// Test route for verifying the server
app.get('/', verifyToken, (req, res) => {
    res.send('Serveur Student Service en fonctionnement');
});

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connecté"))
    .catch(err => console.log("Erreur de connexion MongoDB: ", err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Serveur Student Service démarré sur le port ${PORT}`);
});
