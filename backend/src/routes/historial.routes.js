const express = require("express");
const router = express.Router();
const HistorialController = require("../controllers/historial.controller");

router.post("/", HistorialController.crearHistorial);
router.get("/:id", HistorialController.obtenerHistorial);

module.exports = router;
