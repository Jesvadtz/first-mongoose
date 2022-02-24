const mongoose = require("mongoose");

const DB_USER = "****";
const DB_PASSWORD = "********";
const DB_HOST = "kodemia16-jess.bnfzu.mongodb.net";
const DB_NAME = "kodemia";

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

// Modelo (Es la plantilla | template)
// Schema ( Define la plantilla)
/**
 1. Generamos el schema
 3. A partir del schema generamos el modelo o plantilla
 */

// Schema que va a recibir un objeto, es un constructor
const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 100,
    trim: true, // si la cadena llena con espacios al principio o al final, los quita
  },
  lastname: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  age: {
    type: Number,
    require: true,
    min: 0,
    max: 100,
  },
  gender: {
    type: String,
    require: true,
    trim: true,
    enum: ["m", "f"],
  },
  generation: {
    type: Number,
    require: true,
    min: 0,
    max: 100,
  },
});

// Modelo

const Koder = mongoose.model("koders", koderSchema);

// Conexión a la base de datos
mongoose
  .connect(URL)
  .then(async (connection) => {
    console.log("DB connection established: ");
    // A partir de aquí ya podemos hacer uso de los datos

    // Koder.find({})
    //   .then((koders) => {
    //     console.log("Mis koders: ", koders);
    //   })
    //   .catch((error) => {
    //     console.error("Error: ", error);
    //   });
    const newKoder = {
      name: "Bryan",
      lastName: "Castro",
      age: 31,
      gender: "m",
      generation: 16,
    };
    // Koder.create(newKoder)
    //   .then((koderCreated) => {
    //     console.log("koderCreated: ", koderCreated);
    //   })
    //   .catch((error) => {
    //     console.error("Error: ", error);
    //   });

    const koderCreated = await Koder.create(newKoder);
    console.log(koderCreated);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
