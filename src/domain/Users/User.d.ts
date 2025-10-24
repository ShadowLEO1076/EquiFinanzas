export interface UserPreferences {
    monthlyBudget: number;
    alertThreshold: number;
    defaultCurrency: string;
    reportsFrequency: 'weekly' | 'monthly';
}
export declare class User {
    id: string;
    email: string;
    name: string;
    currency: string;
    language: string;
    timezone: string;
    preferences: UserPreferences;
    isActive: boolean;
    familyId?: string | undefined;
    createdAt: Date;
    updatedAt: Date;
    constructor(id: string, email: string, name: string, currency: string, language: string, timezone: string, preferences: UserPreferences, isActive?: boolean, familyId?: string | undefined, createdAt?: Date, updatedAt?: Date);
}
//# sourceMappingURL=User.d.ts.map