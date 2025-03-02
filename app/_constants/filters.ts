import { parseAsInteger, parseAsString } from "nuqs/server";

export const TransactionFiltersQuery = {
    page: parseAsInteger.withDefault(1),
    search: parseAsString,
    category: parseAsString.withDefault("all"),
    sort: parseAsString.withDefault("latest")
};

export interface TransactionFilters {
    page: number,
    search: string | null,
    category: string,
    sort: string
};

export const BillsFiltersQuery = {
    search: parseAsString,
    sort: parseAsString.withDefault("latest")
};

export interface BillsFilters {
    search: string | null,
    sort: string
};
