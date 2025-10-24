import { UserUseCaseSave } from '../../application/Users/UserUseCaseSave.js';
export class UserController {
    saveUser;
    //irá creciendo con cada nuevo caso de uso
    constructor(saveUser) {
        this.saveUser = saveUser;
    }
    //método crear
    create = async (req, res) => {
        try {
            //le decimos a la solicitud que, a tavés del caso de uso, inicie el método del repositorio
            //que deba
            let user = await this.saveUser.execute(req.body);
            res.status(201).json(user);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    };
}
//# sourceMappingURL=UserController.js.map