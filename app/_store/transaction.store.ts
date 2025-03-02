/* PLUGINS */
import { create } from "zustand";

/* CONSTANTS */
import { transactions } from "@/app/_constants/data";
import { SortData, Transaction } from "@/app/_constants/entities";
import { TransactionFilters } from "@/app/_constants/filters";

export const TRANSACTIONS_PER_PAGE = 10;

const default_transactions_data = [...transactions];

interface TransactionStore {
    transactions: Transaction[];
    total_transactions: number;
    filterTransactions: (filters: TransactionFilters) => void;
}

const useTransactionStore = create<TransactionStore>()((set) => ({
    transactions: default_transactions_data,
    total_transactions: default_transactions_data.length,
    filterTransactions: (filters) => {
        const filtered_transactions = default_transactions_data
            .filter((transaction) => {
                const matches_search = transaction.name
                    .toLocaleLowerCase()
                    .includes(filters?.search?.toLocaleLowerCase() || "");
                const matches_category =
                    filters.category === "all" ||
                    transaction.category === filters.category;

                return matches_category && matches_search;
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

        const paginated_transactions = filtered_transactions.slice(
            (filters.page - 1) * TRANSACTIONS_PER_PAGE,
            Number(filters.page) * Number(TRANSACTIONS_PER_PAGE)
        );

        return set({
            transactions: paginated_transactions,
            total_transactions: filtered_transactions.length
        });
    }
}));

export default useTransactionStore;
