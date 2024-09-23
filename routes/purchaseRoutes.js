const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');

// Crear una compra
router.post('/', async (req, res) => {
  const { clientId, items, total, status } = req.body;
  try {
    const newPurchase = new Purchase({ clientId, items, total, status });
    const savedPurchase = await newPurchase.save();
    res.status(201).json(savedPurchase);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener todas las compras de un cliente
router.get('/:clientId', async (req, res) => {
  try {
    const purchases = await Purchase.find({ clientId: req.params.clientId });
    res.status(200).json(purchases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar una compra
router.put('/:purchaseId', async (req, res) => {
  try {
    const updatedPurchase = await Purchase.findByIdAndUpdate(req.params.purchaseId, req.body, { new: true });
    res.status(200).json(updatedPurchase);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Eliminar una compra
router.delete('/:purchaseId', async (req, res) => {
  try {
    await Purchase.findByIdAndDelete(req.params.purchaseId);
    res.status(200).json({ message: 'Compra eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
