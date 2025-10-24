import type { IUserRepository } from "../../domain/Users/IUserRepository.js";
import { User } from "../../domain/Users/User.js";
export declare class MongoUserRepository implements IUserRepository {
    save(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;
    private toDomain;
}
//# sourceMappingURL=MongoUserRepository.d.ts.map