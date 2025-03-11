const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',   // Si MySQL está en tu máquina local
  user: 'root',        // Usuario root
  password: '1234',    // Contraseña root
  database: 'clinicadb', // Reemplaza por el nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL");
});

module.exports = connection;
