const pool = require("../config/db"); // Conexión a la base de datos
const Historial = require("../models/historial");

exports.crearHistorial = (req, res) => {
  const { paciente_id, descripcion } = req.body;
  Historial.crear({ paciente_id, descripcion }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Historial creado", id: result.insertId });
  });
};

exports.obtenerHistorial = (req, res) => {
  const { id } = req.params;
  Historial.obtenerPorId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result.length) return res.status(404).json({ message: "No encontrado" });
    res.json(result[0]);
  });
};

module.exports = Historial; ////