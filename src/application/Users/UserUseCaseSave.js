import { User } from "../../domain/Users/User.js";
//aquí vamos a poner el primer caso de uso
//añadir verifiación considerando que todo no puede compartir mail
export class UserUseCaseSave {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    //Omit permite crear o ingrear la entidad omitiendo los datos que pasemos tras la coma, cool
    async execute(input) {
        let user = new User(input.id, input.email, input.name, input.currency, input.language, input.timezone, input.preferences, true, //isActive
        input.familyId);
        return await this.userRepo.save(user);
    }
}
//# sourceMappingURL=UserUseCaseSave.js.map