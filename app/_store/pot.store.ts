import { create } from "zustand";
import { Pot } from "../_constants/entities";

interface Modals {
    delete_pot: boolean;
    edit_pot: boolean;
    add_money: boolean;
    withdraw_money: boolean;
}

interface PotStore {
    modal: Modals;
    selected_pot: Pot | null;
    setModal: (modal: keyof Modals, value: boolean) => void;
    setSelectedpot: (pot: Pot) => void;
}

const usePotStore = create<PotStore>()((set) => ({
    modal: {
        delete_pot: false,
        edit_pot: false,
        add_money: false,
        withdraw_money: false
    },
    selected_pot: null,
    setModal: (modal, value) =>
        set((state) => ({
            modal: {
                ...state.modal,
                [modal]: value
            }
        })),
    setSelectedpot: (selected_pot) => set({ selected_pot })
}));

export default usePotStore;
