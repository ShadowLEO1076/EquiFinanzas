import type { Budget } from "./budget.js";
export interface BudgetRepository {
    create(buget: Budget): Promise<void>;
    getAll(): Promise<Budget[]>;
    getById(id: string): Promise<Budget | null>;
    update(buget: Budget): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=BudgetRepository.d.ts.map