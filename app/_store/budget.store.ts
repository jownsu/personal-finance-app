import { create } from "zustand";
import { Budget } from "../_constants/entities";

interface Modals {
    delete_budget: boolean;
    edit_budget: boolean;
}

interface BudgetStore {
    modal: Modals;
    selected_budget: Budget | null;
    setModal: (modal: keyof Modals, value: boolean) => void;
    setSelectedBudget: (budget: Budget) => void;
}

const useBudgetStore = create<BudgetStore>()((set) => ({
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
    setSelectedBudget: (selected_budget) => set({ selected_budget })
}));

export default useBudgetStore;
