// controllers/productoController.js

const Producto = require('../models/Producto');

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un producto por ID
exports.obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({ message: "Producto no encontrado" });
        res.json(producto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un producto
exports.actualizarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(producto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un producto
exports.eliminarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.json({ message: "Producto eliminado" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
