import mongoose from "mongoose";
export function connectDB() {
    const connectDB = async () => {
        try {
            await mongoose.connect('mongodb://localhost:27017/hx-equifin');
            console.log('Conectado a MongoDB');
        }
        catch (error) {
            console.error(' Error conectando a MongoDB:', error);
            process.exit(1);
        }
    };
}
//# sourceMappingURL=Conection.js.map