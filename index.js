const express = require("express");
const conectedDB = require("./config/db");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectedDB();

app.use(express.json());

app.use("/api/product", require("./routes/product"));

app.listen(4000, () => {
  console.log("Server run at port 4000");
});
