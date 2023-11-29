exports.showJobs =  (req, res, next) => {
  res.render("home", {
    namePage: "DevTalentHub",
    tagline: "Encuentra y Pública Trabajos para Desarrolladores Web",
    bar: true,
    boton: true,
  });
};
