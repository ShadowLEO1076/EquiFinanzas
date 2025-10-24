export declare class Budget {
    id: string;
    userId: string;
    categoryId: string;
    amount: number;
    period: BudgetPeriod;
    spent: number;
    remaining: number;
    alerts: BudgetAlert[];
    isActive: boolean;
    createdAt: Date;
    constructor(id: string, userId: string, categoryId: string, amount: number, period: BudgetPeriod, spent?: number, remaining?: number, alerts?: BudgetAlert[], isActive?: boolean, createdAt?: Date);
}
export interface BudgetPeriod {
    type: 'monthly' | 'weekly' | 'quarterly' | 'yearly';
    startDate: Date;
    endDate: Date;
}
export interface BudgetAlert {
    type: 'percentage' | 'amount';
    threshold: number;
    isTriggered: boolean;
}
//# sourceMappingURL=Budget.d.ts.map