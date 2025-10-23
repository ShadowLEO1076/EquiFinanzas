import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { connectDB } from './Conection/Conection.js';
const app = express();
const PORT = process.env.PORT || 3001;
// Middlewares
app.use(cors());
app.use(express.json());
// Ruta de salud
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Hx-EquiFin API is running!',
        timestamp: new Date().toISOString()
    });
});
// Conexión a MongoDB
connectDB();
/*
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/hx-equifin');
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error(' Error conectando a MongoDB:', error);
    process.exit(1);
  }
};*/
// Iniciar servidor
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
        console.log(`📊 Health check: http://localhost:${PORT}/health`);
    });
};
startServer().catch(console.error);
//# sourceMappingURL=main.js.map