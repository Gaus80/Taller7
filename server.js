const express = require('express');
const cors = require("cors");
const serverless = require('serverless-http');

const app = express();
const estudiantesroutes = require("./backend/routes/estudiantesroutes.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

// Define las rutas antes de exportar el handler
app.use("/estudiantes", estudiantesroutes);

// Exporta el manejador para Netlify
module.exports.handler = serverless(app);

// Si no estás en el entorno de Netlify, escucha en el puerto 6500
if (process.env.NETLIFY !== 'true') {
    const port = process.env.PORT || 6500;
    app.listen(port, () => {
        console.log(`Servidor activo en el puerto ${port}`);
    });
}