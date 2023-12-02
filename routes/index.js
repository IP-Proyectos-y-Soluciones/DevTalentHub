const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController.js");
const vacanciesController = require('../controllers/vacanciesController.js')

module.exports = () => {
  router.get("/", homeController.showJobs);

  // Crear Vacantes
  router.get(
    "/vacancies/new",
    vacanciesController.formNewVacant
  );
  router.post(
    '/vacancies/new', 
    vacanciesController.addVacant
  );

  return router;
};
