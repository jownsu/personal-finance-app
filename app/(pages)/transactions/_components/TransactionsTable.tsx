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

/* UTILITIES */
import { cn } from "@/app/_utils/helpers";

/* DATA */
import { transactions } from "@/app/_constants/data";

const TransactionsTable = () => {
    return (
        <Table>
            <TableHeader className="hidden md:table-header-group">
                <TableRow className="text-grey-500 *:px-0 *:py-[2rem] *:text-preset_5 *:xl:py-[1.1rem]">
                    <TableHead>Recipient / Sender</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Transaction Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.map((transaction, key) => (
                    <TableRow key={key} className="*:px-0">
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
                                    {transaction.category}
                                </span>
                            </div>
                        </TableCell>
                        <TableCell className="hidden !text-preset_5 text-grey-500 md:table-cell">
                            {transaction.category}
                        </TableCell>
                        <TableCell className="hidden !text-preset_5 text-grey-500 md:table-cell">
                            {moment(transaction.date).format("D MMM YYYY")}
                        </TableCell>
                        <TableCell className="text-right">
                            <div
                                className={cn("!text-preset_4_bold", {
                                    ["text-green"]: transaction.amount > 0,
                                    ["text-grey-900"]: !(transaction.amount > 0)
                                })}
                            >
                                {transaction.amount > 0 && "+"}
                                {transaction.amount.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                })}
                            </div>
                            <div className="text-preset_5 text-grey-500 md:hidden">
                                {moment(transaction.date).format("D MMm YYYY")}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TransactionsTable;
