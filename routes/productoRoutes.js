const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Crear un nuevo producto
router.post('/productos', async (req, res) => {
    try {
        const nuevoProducto = new Product(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Otros endpoints pueden ir aquí...

module.exports = router;

