const mysql = require("mysql2");
const db = mysql.createConnection ({
    host: "localhost",//"192.168.0.4",//"192.168.20.132", //"201.221.172.25",
    user: "root",//"jpgarzon",
    password: "s4nt1ag0",///SUS CONTRASEÑAS
    database: "sistema_asistencia",
});

db.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log ("BD Mysql Conectado");
});

module.exports = db;
