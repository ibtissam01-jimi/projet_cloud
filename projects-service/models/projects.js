const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    status: {
      type: String,
      enum: ["En cours", "Terminé", "En attente"],
      default: "En attente",
    },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
