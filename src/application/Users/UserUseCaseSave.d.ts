import { User } from "../../domain/Users/User.js";
import type { IUserRepository } from "../../domain/Users/IUserRepository.js";
export declare class UserUseCaseSave {
    private readonly userRepo;
    constructor(userRepo: IUserRepository);
    execute(input: Omit<User, 'createdAt' | 'updatedAt'>): Promise<User>;
}
//# sourceMappingURL=UserUseCaseSave.d.ts.map