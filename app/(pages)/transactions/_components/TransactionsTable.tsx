"use client";

/* REACT */
import Image from "next/image";

/* PLUGINS */
import moment from "moment";

/* COMPONENTS */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/app/_components/ui/Table";
import TablePagination from "@/app/(pages)/transactions/_components/TablePagination";

/* UTILITIES */
import { cn, formatToUsd } from "@/app/_utils/helpers";

/* STORE */
import useTransactionStore from "@/app/_store/transaction.store";

/* CONSTANTS */
import { BudgetCategoryLabel } from "@/app/_constants/labels";

const TransactionsTable = () => {

    const transactions = useTransactionStore(state => state.transactions);

    return (
        <div className="px-[2rem] pb-[2.4rem] md:px-[3.2rem] md:pb-[3.2rem]">
            <Table className="mb-[3.2rem]">
                <TableHeader className="hidden md:table-header-group">
                    <TableRow className="text-grey-500 *:px-0 *:pb-[2rem] *:pt-[1.3rem] *:text-preset_5 lg:*:pt-[.4rem]">
                        <TableHead>Recipient / Sender</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Transaction Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((transaction, key) => (
                        <TableRow
                            key={key}
                            className="*:px-0 *:py-[1.8rem] *:first:pt-0 md:*:first:pt-[1.8rem]"
                        >
                            <TableCell className="flex items-center gap-[1.2rem]">
                                <Image
                                    src={transaction.avatar}
                                    alt={`Picture of ${transaction.name}`}
                                    width={32}
                                    height={32}
                                    className="size-[3.2rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                    <span className="text-preset_4_bold text-gray-900">
                                        {transaction.name}
                                    </span>
                                    <span className="text-preset_5 text-grey-500 md:hidden">
                                        {BudgetCategoryLabel[transaction.category]}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell className="hidden !text-preset_5 text-grey-500 md:table-cell">
                                {BudgetCategoryLabel[transaction.category]}
                            </TableCell>
                            <TableCell className="hidden !text-preset_5 text-grey-500 md:table-cell">
                                {moment(transaction.date).format("D MMM YYYY")}
                            </TableCell>
                            <TableCell className="text-right">
                                <div
                                    className={cn("!text-preset_4_bold", {
                                        ["text-green"]: transaction.amount > 0,
                                        ["text-grey-900"]: !(
                                            transaction.amount > 0
                                        )
                                    })}
                                >
                                    {transaction.amount > 0 && "+"}
                                    { formatToUsd(transaction.amount) }
                                </div>
                                <div className="text-preset_5 text-grey-500 md:hidden">
                                    {moment(transaction.date).format(
                                        "D MMm YYYY"
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination />
        </div>
    );
};

export default TransactionsTable;
