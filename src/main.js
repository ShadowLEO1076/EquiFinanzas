import express from "express";
import cors from 'cors';
import { connectDB } from './Conection/Conection.js';
import UserRoutes from './infraestructure/Users/UserRoutes.js';
const app = express();
const PORT = process.env.PORT || 3001;
// Middlewares
app.use(cors());
app.use(express.json());
app.use('/users', UserRoutes);
// Ruta de salud
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Hx-EquiFin API is running!',
        timestamp: new Date().toISOString()
    });
});
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
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        console.log(`Health check: http://localhost:${PORT}/health`);
    });
});
//# sourceMappingURL=main.js.map