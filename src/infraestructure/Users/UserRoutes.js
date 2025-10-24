import { Router } from 'express';
import { UserUseCaseSave } from '../../application/Users/UserUseCaseSave.js';
import { UserController } from './UserController.js';
import { MongoUserRepository } from './MongoUserRepository.js';
const userRepo = new MongoUserRepository();
const userSave = new UserUseCaseSave(userRepo);
const controller = new UserController(userSave);
const router = Router();
router.post('/save', controller.create);
export default router;
//# sourceMappingURL=UserRoutes.js.map