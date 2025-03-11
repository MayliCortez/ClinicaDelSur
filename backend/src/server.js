const express = require("express");
const cors = require("cors");
const historialRoutes = require('./routes/historial.routes');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/historial", historialRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
