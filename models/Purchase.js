const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  items: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // pendiente, completado, cancelado
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
