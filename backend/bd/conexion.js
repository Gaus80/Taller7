const mysql = require("mysql2");
const db = mysql.createConnection ({
    host: "127.0.0.1",//"192.168.0.4",//"192.168.20.132", //"201.221.172.25",
    user: "root",//"jpgarzon",
    password: "Gaus8021.",///SUS CONTRASEÑAS
    database: "sistema_asistencia",
});

db.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log ("BD Mysql Conectado");
});

module.exports = db;
