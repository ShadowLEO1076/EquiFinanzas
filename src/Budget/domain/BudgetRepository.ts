import type { Budget } from "./budget.js";

export interface BudgetRepository {
    // Define los métodos que el repositorio de presupuestos debe implementar
    create( buget: Budget): Promise<void>;
    getAll(): Promise<Budget[]>;
    getById(id: string): Promise<Budget | null>;
    update(buget: Budget): Promise<void>;
    delete(id: string): Promise<void>;


}