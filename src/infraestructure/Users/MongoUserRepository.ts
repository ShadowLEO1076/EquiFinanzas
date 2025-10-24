//aquí tendremos los esquemas y las implementaciones de los repositorio,
//primero importamos todo lo necesario
import mongoose from "mongoose";
import type {IUserRepository} from "../../domain/Users/IUserRepository.js";
import {User} from "../../domain/Users/User.js";

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
const userModel = mongoose.model('User', userSchema,'Users');

export class MongoUserRepository implements IUserRepository{

    async save(user: User): Promise<User> {
        //creo mi modelo
        const newUser = new userModel(user);
        //llamamos a save
        const saved = await newUser.save();
        //retornamos la entidad guardada
        return this.toDomain(saved);
    }

    //por implementar
    findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    //función que transforma de nuestro Model a la entidad User
     private toDomain(doc: any): User {
    return new User(
      doc.id,
      doc.email,
      doc.name,
      doc.currency,
      doc.language,
      doc.timezone,
      doc.preferences,
      doc.isActive,
      doc.familyId,
      doc.createdAt,
      doc.updatedAt
    );
  }
}