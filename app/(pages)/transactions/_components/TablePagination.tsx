"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/app/_components/ui/Pagination";
import { TransactionFiltersQuery } from "@/app/_constants/filters";
import useTransactionStore, {
    TRANSACTIONS_PER_PAGE
} from "@/app/_store/transaction.store";
import { useQueryStates } from "nuqs";

const TablePagination = () => {
    const [filters, setFilters] = useQueryStates(TransactionFiltersQuery);
    const total_transactions = useTransactionStore(
        (state) => state.total_transactions
    );

    const pages_count = Math.ceil(total_transactions / TRANSACTIONS_PER_PAGE);

    if (!pages_count) {
        return null;
    }

    return (
        <Pagination
            defaultValue={"1"}
            onChange={(value) => {
                console.log(value);
            }}
        >
            <PaginationContent className="w-full justify-center md:justify-between">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => {
                            setFilters({
                                page: filters.page > 1 ? filters.page - 1 : 1
                            });
                        }}
                    />
                </PaginationItem>
                <div className="flex gap-[.8rem]">
                    {[...Array(pages_count)].map((_, index) => {
                        const current_page = index + 1;

                        return (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    isActive={filters.page === current_page}
                                    onClick={() =>
                                        setFilters({ page: current_page })
                                    }
                                >
                                    {current_page}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}
                </div>
                <PaginationItem>
                    <PaginationNext
                        onClick={() => {
                            setFilters({
                                page:
                                    filters.page < pages_count
                                        ? filters.page + 1
                                        : filters.page
                            });
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default TablePagination;
