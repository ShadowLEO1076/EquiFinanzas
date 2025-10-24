export class Budget {
    id;
    userId;
    categoryId;
    amount;
    period;
    spent;
    remaining;
    alerts;
    isActive;
    createdAt;
    constructor(id, userId, categoryId, amount, period, spent = 0, remaining = 0, alerts = [], isActive = true, createdAt = new Date()) {
        this.id = id;
        this.userId = userId;
        this.categoryId = categoryId;
        this.amount = amount;
        this.period = period;
        this.spent = spent;
        this.remaining = remaining;
        this.alerts = alerts;
        this.isActive = isActive;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=Budget.js.map