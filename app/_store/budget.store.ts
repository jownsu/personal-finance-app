import { create } from "zustand";
import { Budget } from "../_constants/entities";
import { budgets } from "../_constants/data";
import { BudgetForm } from "../_constants/_schema/budget.schema";
import { randomId } from "../_utils/helpers";

const default_budgets_data = [...budgets];

interface Modals {
    delete_budget: boolean;
    edit_budget: boolean;
}

interface BudgetStore {
    budgets: Budget[];
    modal: Modals;
    selected_budget: Budget | null;
    setModal: (modal: keyof Modals, value: boolean) => void;
    setSelectedBudget: (budget: Budget) => void;
    addBudget: (data: BudgetForm) => void;
    editBudget: () => void;
    deleteBudget: () => void;
}

const useBudgetStore = create<BudgetStore>()((set) => ({
    budgets: default_budgets_data,
    modal: {
        delete_budget: false,
        edit_budget: false
    },
    selected_budget: null,
    setModal: (modal, value) =>
        set((state) => ({
            modal: {
                ...state.modal,
                [modal]: value
            }
        })),
    setSelectedBudget: (selected_budget) => set({ selected_budget }),
    addBudget: (data) => {
        return set((state) => ({
            budgets: [
                { 
                    id: randomId(),
                    budget_option: data.budget_category,
                    color: data.color_tag,
                    maximum: data.maximum_spending,
                    spend: 0,
                    free: data.maximum_spending,
                    latest_spending: []
                },
                ...state.budgets
            ]
        }))
    },
    editBudget: () => {},
    deleteBudget: () => {}
}));

export default useBudgetStore;
