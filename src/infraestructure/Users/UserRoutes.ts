import { Router } from 'express';
import { UserUseCaseSave } from '../../application/Users/UserUseCaseSave.js';
import { UserController } from './UserController.js';
import {MongoUserRepository} from './MongoUserRepository.js'

//se instancia el repo
const userRepo = new MongoUserRepository();
//se instancian los servicios
const userSave = new UserUseCaseSave(userRepo);
//Se instancia el controlador
const controller = new UserController(userSave);
//se crea el router
const router = Router();
//Se define el tipo de solicitud http, su url, y qué controlador usa
router.post('/save', controller.create);
//Se exporta
export default router;