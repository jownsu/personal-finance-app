import { BudgetCategory } from "./entities";

export const BudgetCategoryLabel: Record<BudgetCategory, string> = {
    [BudgetCategory.Entertainment]: "Entertainment",
    [BudgetCategory.Bills]: "Bills",
    [BudgetCategory.Groceries]: "Groceries",
    [BudgetCategory.DiningOut]: "Dining Out",
    [BudgetCategory.Transportation]: "Transportation",
    [BudgetCategory.PersonalCare]: "Personal Care",
    [BudgetCategory.Education]: "Education",
    [BudgetCategory.Lifestyle]: "Lifestyle",
    [BudgetCategory.Shopping]: "Shopping",
    [BudgetCategory.General]: "General"
}