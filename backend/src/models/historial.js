const connection = require("../config/db");

const Historial = {
  crear: (data, callback) => {
    const sql = "INSERT INTO historial_clinico (paciente_id, descripcion) VALUES (?, ?)";
    connection.query(sql, [data.paciente_id, data.descripcion], callback);
  },
  obtenerPorId: (id, callback) => {
    const sql = "SELECT * FROM historial_clinico WHERE id = ?";
    connection.query(sql, [id], callback);
  }
};

module.exports = Historial;
