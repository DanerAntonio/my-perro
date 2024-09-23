const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Crear un cliente
router.post('/', async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const newClient = new Client({ name, email, phone, address });
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
