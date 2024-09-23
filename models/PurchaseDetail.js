const mongoose = require('mongoose');

const purchaseDetailSchema = new mongoose.Schema({
  purchaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Purchase', required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PurchaseDetail', purchaseDetailSchema);
