//aquí tendremos los esquemas y las implementaciones de los repositorio,
//primero importamos todo lo necesario
import mongoose from "mongoose";
import { User } from "../../domain/Users/User.js";
//schema de preferencias
const userPreferenceSchema = new mongoose.Schema({
    monthlyBudget: Number,
    alertThreshold: Number,
    defaultCurrency: String,
    reportsFrequency: String
});
//schema de usuario
const userSchema = new mongoose.Schema({
    id: String,
    email: String,
    name: String,
    currency: String,
    language: String,
    timezone: String,
    preferences: userPreferenceSchema,
    isActive: Boolean,
    familyId: String,
    createdAt: Date,
    updatedAt: Date
});
//creamos un modelo, según la documentación de Mongo, un modelo compila un esquema
//el primer parámetro busca en la base de datos, el segundo se encarga debe de asegurar
//la integridad del archivo
const userModel = mongoose.model('User', userSchema);
export class MongoUserRepository {
    async save(user) {
        //creo mi modelo
        const newUser = new userModel(user);
        //llamamos a save
        const saved = await newUser.save();
        //retornamos la entidad guardada
        return this.toDomain(saved);
    }
    //por implementar
    findById(id) {
        throw new Error("Method not implemented.");
    }
    update(user) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    //función que transforma de nuestro Model a la entidad User
    toDomain(doc) {
        return new User(doc.id, doc.email, doc.name, doc.currency, doc.language, doc.timezone, doc.preferences, doc.isActive, doc.familyId, doc.createdAt, doc.updatedAt);
    }
}
//# sourceMappingURL=MongoUserRepository.js.map