import type { Request, Response } from 'express';
import { UserUseCaseSave } from '../../application/Users/UserUseCaseSave.js';
export declare class UserController {
    private saveUser;
    constructor(saveUser: UserUseCaseSave);
    create: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=UserController.d.ts.map