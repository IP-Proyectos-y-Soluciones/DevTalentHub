const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bcrypt = require("bcrypt");

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  token: String,
  expires: Date,
  image: String,
});

// Método para hashear los passwords
usersSchema.pre("save", async function (next) {
  // si el password ya esta hasheado
  if (!this.isModified("password")) {
    return next(); // deten la ejecución
  }
  // si no esta hasheado
  const hash = await bcrypt.hash(this.password, 12);
  this.password = hash;
  next();
});

// Envia alerta cuando un usuario ya esta registrado
usersSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next("Ese correo ya esta registrado");
  } else {
    next(error);
  }
});

// Autenticar Usuarios
usersSchema.methods = {
  comparePassword: function (password) {
    return bcrypt.compareSync(password, this.password);
  },
};

module.exports = mongoose.model("Users", usersSchema);