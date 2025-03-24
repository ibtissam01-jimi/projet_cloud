// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, required: true },
  category: { type: String, required: true }, // Champ pour la catégorie
});

module.exports = mongoose.model('Project', projectSchema);
