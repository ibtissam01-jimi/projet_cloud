<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

//=======
const PORT = process.env.PORT;

var corsOptions = {
  origin: "http://localhost:5173/"
};

app.use(cors(corsOptions));
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Routes
const projectRoutes = require('./routes/projectRoutes.js');

app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
=======
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


const projectRoutes = require('./routes/projectRoutes.js');

app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
>>>>>>> 7cefe44fbad23ef561d4c65beb04527ffb56d414
