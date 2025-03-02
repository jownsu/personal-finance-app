/* PLUGINS */
import { create } from "zustand";

/* CONSTANTS */
import { bills } from "@/app/_constants/data";
import { Bills, SortData } from "@/app/_constants/entities";
import { BillsFilters } from "@/app/_constants/filters";

const default_bills_data = [...bills];

interface BillStore {
    bills: Bills[];
    filterBills: (filters: BillsFilters) => void;
}

const useBillStore = create<BillStore>()((set) => ({
    bills: default_bills_data,
    filterBills: (filters) => {
        const filtered_bills = default_bills_data
            .filter((bill) => {
                const matches_search = bill.name
                    .toLocaleLowerCase()
                    .includes(filters?.search?.toLocaleLowerCase() || "");

                return matches_search;
            })
            .sort((a, b) => {
                if (filters.sort === SortData.Latest) {
                    return (
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    );
                } else if (filters.sort === SortData.Oldest) {
                    return (
                        new Date(a.date).getTime() - new Date(b.date).getTime()
                    );
                } else if (filters.sort === SortData.AtoZ) {
                    return a.name.localeCompare(b.name);
                } else if (filters.sort === SortData.ZtoA) {
                    return b.name.localeCompare(a.name);
                } else if (filters.sort === SortData.Highest) {
                    return b.amount - a.amount;
                } else if (filters.sort === SortData.Lowest) {
                    return a.amount - b.amount;
                }

                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });

        return set({bills: filtered_bills});
    }
}));

export default useBillStore;
