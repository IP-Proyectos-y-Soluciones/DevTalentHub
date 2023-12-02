const Vacant = require('../models/Vacancies');


exports.showJobs = async (req, res, next) => {
  
  const vacancies = await Vacant.find({}).lean();

  if (!vacancies) return next();

  res.render("home", {
    namePage: "DevTalentHub",
    tagline: "Encuentra y Pública Trabajos para Desarrolladores Web",
    bar: true,
    boton: true,
    vacancies
  });
};
