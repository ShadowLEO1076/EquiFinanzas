//entidad Users, la interfaz Preferences puede luego traducirse como un json dentro de un json.
//Investigando un poco, no es necesario declarar los datos de la clase pues con el constructor correcto
//estamos asegurando persistencia, nada más.
//clase necesaria para que el usuario pueda ser usado.
export class User {
    id;
    email;
    name;
    currency;
    language;
    timezone;
    preferences;
    isActive;
    familyId;
    createdAt;
    updatedAt;
    constructor(id, email, name, currency, language, timezone, preferences, isActive = true, familyId, createdAt = new Date(), updatedAt = new Date()) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.currency = currency;
        this.language = language;
        this.timezone = timezone;
        this.preferences = preferences;
        this.isActive = isActive;
        this.familyId = familyId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        if (!email.includes('@'))
            throw new Error('Email inválido');
        if (!name.trim())
            throw new Error('Nombre requerido');
        if (preferences.monthlyBudget < 0)
            throw new Error('Presupuesto inválido');
    }
}
//# sourceMappingURL=User.js.map