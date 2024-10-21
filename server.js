// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Rutas
const productoRoutes = require('./routes/productoRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error al conectar con MongoDB:', err));

// Usar las rutas
app.use('/api', productoRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
