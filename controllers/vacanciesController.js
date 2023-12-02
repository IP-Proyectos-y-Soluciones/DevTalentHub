const Vacant = require("../models/Vacancies.js");

exports.formNewVacant = async ( req, res ) => {
  res.render("new-vacant", {
    namePage: "Nueva Vacante",
    tagline: "Llena el formulario y publica tu vacante",
  });
};

// agrega las vacantes a la base de datos
exports.addVacant = async (req, res) => {
 
    const vacant = new Vacant(req.body);

    /*     // usuario autor de la vacante
    vacant.author = req.user._id; */

    // crear arreglo de habilidades (skills)
    vacant.skills = req.body.skills.split(",");

    console.log(vacant);
    // almacenarlo en la base de datos
    const newVacant = await vacant.save();


    // redireccionar
    res.redirect(`/vacancies/${newVacant.url}`);
 
};
