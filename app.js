const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const clientRoutes = require('./routes/clientRoutes');
const cartRoutes = require('./routes/cartRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const purchaseDetailRoutes = require('./routes/purchaseDetailRoutes');
const cors = require('cors');

dotenv.config();
const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/clients', clientRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/purchase-details', purchaseDetailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
