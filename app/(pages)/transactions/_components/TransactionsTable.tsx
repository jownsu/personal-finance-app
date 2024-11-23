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
            <TableHeader className="hidden">
                <TableRow>
                    <TableHead>Recipient / Sender</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Transaction Date</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.map((transaction, key) => (
                    <TableRow key={key} className="">
                        <TableCell className="flex items-center gap-[1.2rem] px-0">
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
                                <span className="text-preset_5 text-grey-500">
                                    {transaction.category}
                                </span>
                            </div>
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
                            <div className="text-preset_5 text-grey-500">
                                {moment(transaction.date).format("D MM YYYY")}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TransactionsTable;
