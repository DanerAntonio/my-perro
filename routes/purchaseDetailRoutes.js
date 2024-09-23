const express = require('express');
const router = express.Router();
const PurchaseDetail = require('../models/PurchaseDetail');

// Crear un detalle de compra
router.post('/', async (req, res) => {
  const { purchaseId, productId, quantity, price } = req.body;
  try {
    const newDetail = new PurchaseDetail({ purchaseId, productId, quantity, price });
    const savedDetail = await newDetail.save();
    res.status(201).json(savedDetail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener los detalles de una compra
router.get('/:purchaseId', async (req, res) => {
  try {
    const details = await PurchaseDetail.find({ purchaseId: req.params.purchaseId });
    res.status(200).json(details);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
