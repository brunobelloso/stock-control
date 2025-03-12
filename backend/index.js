const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de productos
app.use('/api/products', productRoutes);

// Conexion a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Servidor Express funcionando');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});