import { Budget } from "./Budget.js";
import { BudgetId } from "./BudgetId.js";


export interface BudgetRepository {
    // Define los métodos que el repositorio de presupuestos debe implementar
    create( buget: Budget): Promise<void>;
    getAll(): Promise<Budget[]>;
    getById(id: BudgetId): Promise<Budget | null>;
    update(buget: Budget): Promise<void>;
    delete(id: BudgetId): Promise<void>;


}