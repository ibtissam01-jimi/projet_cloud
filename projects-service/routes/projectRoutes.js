<<<<<<< HEAD
const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

//<<<<<<< HEAD
/**
 * @route   GET /api/projects/all
 * @desc    Récupérer tous les projets
 */
router.get("/all", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des projets", error: err });
  }
});


//ameur a ajoute cet route, car il est necessaire pour valider que le projet exist avant l'ajout d'une nouvelle tache
router.get("/:id", async (req, res) => {
  try {
    const selectedOne = await Project.findById(req.params.id);
    res.status(200).json(selectedOne);
  } catch (err) {
    res.status(500).json({ message: "ce project n'exist pas", error: err });
  }
});

/**
 * @route   POST /api/projects/add
 * @desc    Ajouter un projet
 */
router.post("/add", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({ message: "Projet ajouté avec succès" });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de l'ajout du projet", error: err });
  }
});

/**
 * @route   PUT /api/projects/update/:id
 * @desc    Modifier un projet existant
 */
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    res.json({ message: "Projet mis à jour avec succès" });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la mise à jour", error: err });
  }
});

/**
 * @route   DELETE /api/projects/delete/:id
 * @desc    Supprimer un projet
 */
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    res.json({ message: "Projet supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la suppression", error: err });
  }
});

/**
 * @route   GET /api/projects/search
 * @desc    Rechercher un projet par nom ou description
 */
router.get("/search", async (req, res) => {
  try {
    const { keyword } = req.query;
    const projects = await Project.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } }
      ]
    });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la recherche de projets", error: err });
  }
});

/**
 * @route   GET /api/projects/filter
 * @desc    Filtrer les projets par nom, statut, date ou catégorie
 */
router.get("/filter", async (req, res) => {
  try {
    const { name, status, startDate, endDate, category } = req.query;
    let filter = {};

    if (name) filter.name = { $regex: name, $options: "i" };
    if (status) filter.status = status;
    if (startDate && endDate) {
      filter.startDate = { $gte: new Date(startDate) };
      filter.endDate = { $lte: new Date(endDate) };
    }
    if (category) filter.category = category;

    const projects = await Project.find(filter);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors du filtrage des projets", error: err });
  }
});
// router.post('/', ProjectController.createProject);
// router.get('/', ProjectController.getAllProjects);
// router.get('/:id', ProjectController.getProjectById);
// router.put('/:id', ProjectController.updateProject);
// router.delete('/:id', ProjectController.deleteProject);

module.exports = router;
=======
const express = require("express");
const router = express.Router();
const Project = require("../models/Project");


router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    res.status(200).json({ message: "Projet supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
>>>>>>> 7cefe44fbad23ef561d4c65beb04527ffb56d414
