import { create } from "zustand";
import { Pot } from "../_constants/entities";
import { pots } from "../_constants/data";
import { PotForm } from "../_constants/_schema/pot.schema";
import { randomId } from "../_utils/helpers";

const default_pots_data = [...pots];

interface Modals {
    delete_pot: boolean;
    edit_pot: boolean;
    add_money: boolean;
    withdraw_money: boolean;
}

interface PotStore {
    pots: Pot[];
    modal: Modals;
    selected_pot: Pot | null;
    setModal: (modal: keyof Modals, value: boolean) => void;
    setSelectedpot: (pot: Pot) => void;
    addPot: (data: PotForm) => void;
    deletePot: (id?: number) => void;
    editPot: (data: PotForm) => void;
    addMoney: (id: number, amount: number) => void;
    withdrawMoney: (id: number, amount: number) => void;
}

const usePotStore = create<PotStore>()((set) => ({
    pots: default_pots_data,
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
    setSelectedpot: (selected_pot) => set({ selected_pot }),
    addPot: (data) => {
        return set((state) => ({
            pots: [
                { 
                    id: randomId(),
                    color: data.color,
                    name: data.name,
                    target: data.target,
                    total: 0
                },
                ...state.pots
            ]
        }))
    },
    deletePot: (id) => {
        return set((state) => ({
            pots: state.pots.filter(pot => pot.id !== id)
        }))
    },
    editPot: (data) => {
        return set((state) => ({
            pots: state.pots.map(pot => {
                if(pot.id === data.id){
                    return {
                        ...pot,
                        color: data.color,
                        name: data.name,
                        target: data.target
                    }
                }
                return pot;
            })
        }))
    },
    addMoney: (id, amount) => {
        return set((state) => ({
            pots: state.pots.map(pot => {
                if(pot.id === id){
                    return {
                        ...pot,
                        total: pot.total + amount
                    }
                }
                return pot;
            })
        }))
    },
    withdrawMoney: (id, amount) => {
        return set((state) => ({
            pots: state.pots.map(pot => {
                if(pot.id === id){
                    return {
                        ...pot,
                        total: pot.total - amount
                    }
                }
                return pot;
            })
        }))
    }
}));

export default usePotStore;
