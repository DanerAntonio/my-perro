const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Crear un carrito para un cliente
router.post('/', async (req, res) => {
  const { clientId, products, total } = req.body;
  try {
    const newCart = new Cart({ clientId, products, total });
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener el carrito de un cliente
router.get('/:clientId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ clientId: req.params.clientId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar un carrito
router.put('/:cartId', async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.cartId, req.body, { new: true });
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Eliminar un carrito
router.delete('/:cartId', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.cartId);
    res.status(200).json({ message: 'Carrito eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
