export class User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;


    constructor(id: string, name: string, email: string, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    // metodo para validar nombre de usuario
    validateName(): boolean {
        return this.name.length >= 3;
    }
    // metodo para validar email de usuario
    validateEmail(): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }
    // metodo para validar que la fecha de creacion no sea futura
    validateCreatedAt(): boolean {
        return this.createdAt <= new Date();
    }


}
