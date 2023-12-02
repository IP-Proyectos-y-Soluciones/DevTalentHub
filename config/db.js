const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

exports.db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      socketTimeoutMS: 60000,
      bufferCommands: false,
    });

    console.log( "Connected to MongoDB" );

    await mongoose.connection.on("error", (error) => {
      console.log("Error al conectar con MongoDB:", error);
    });
  } catch ( error ) {
    console.error( "Error al conectar con MongoDB:", error );
    /* process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log(
          "Connection closed due to application termination",
        );
        process.exit(1);
      });
    }); */
  }
};



// importar los modelos
require("../models/Vacancies");
