const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slug");
const shortid = require("shortid");

const vacanciesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: "El nombre de la vacante es obligatorio",
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
      // required: "La ubicación es obligatoria",
    },
    salary: {
      type: String,
      default: 0,
      trim: true,
    },
    contract: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      lowercase: true,
    },
    skills: [String],
    candidates: [
      {
        name: String,
        email: String,
        cv: String,
      },
    ],
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      // required: "El autor es obligatorio",
    },
  }
);

vacanciesSchema.pre("save", function (next) {
  try {
    // crear la url
    const url = slug(this.title);
    this.url = `${url}-${shortid.generate()}`;    
  } catch (error) {
    console.error("Error al generar la URL:", error);
  }
  
  next();
});

// Crear un indice
vacanciesSchema.index({ title: "text" });
vacanciesSchema.index({ url: 1 }, { unique: true });

module.exports = mongoose.model("Vacant", vacanciesSchema);
