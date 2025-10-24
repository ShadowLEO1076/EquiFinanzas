import type { Request, Response } from 'express';
import { UserUseCaseSave } from '../../application/Users/UserUseCaseSave.js';

export class UserController {

    //irá creciendo con cada nuevo caso de uso
    constructor(private saveUser: UserUseCaseSave) {}

    //método crear
    create = async (req: Request, res: Response) => { 
        try{
            //le decimos a la solicitud que, a tavés del caso de uso, inicie el método del repositorio
            //que deba
            let user = await this.saveUser.execute(req.body);
            res.status(201).json(user)
        }
        catch(err: any){
            res.status(400).json({ error: err.message });
        }
    }
}