/* REACT */
import Image from "next/image";

/* COMPONENTS */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/app/_components/ui/Table";
import { recurring_bills } from "@/app/_constants/data";
import Filters from "./Filters";

/* ICONS */
import DueIcon from "@/public/images/icon-bill-due.svg";
import PaidIcon from "@/public/images/icon-bill-paid.svg";

/* UTILITIES */
import { cn, formatToUsd } from "@/app/_utils/helpers";

const RecurringBillsTable = () => {
    return (
        <div className="flex min-h-full w-full flex-col gap-[2.4rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] lg:flex-1">
            <Filters />
            <Table>
                <TableHeader className="hidden md:table-header-group">
                    <TableRow className="text-grey-500 *:px-0 *:pb-[2rem] *:pt-[1.3rem] *:text-preset_5 lg:*:pt-[.4rem]">
                        <TableHead>Recipient / Sender</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Transaction Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recurring_bills.map((bill, key) => (
                        <TableRow
                            key={key}
                            className="*:px-0 *:py-[2.2rem] *:first:pt-0 md:*:first:pt-[1.8rem]"
                        >
                            <TableCell className="flex flex-col gap-[.8rem]">
                                <div className="flex items-center gap-[1.6rem]">
                                    <Image
                                        src={bill.avatar}
                                        alt={`Picture of ${bill.name}`}
                                        width={32}
                                        height={32}
                                        className="size-[3.2rem] rounded-full"
                                    />
                                    <span className="text-preset_4_bold">
                                        {bill.name}
                                    </span>
                                </div>
                                <div
                                    className={cn(
                                        "flex items-center gap-[.8rem] !text-preset_5",
                                        {
                                            ["text-red"]: bill.is_due,
                                            ["text-green"]: bill.is_paid
                                        }
                                    )}
                                >
                                    {bill.due_date}
                                    {bill.is_due && (
                                        <DueIcon className="size-[1.3rem]" />
                                    )}

                                    {bill.is_paid && (
                                        <PaidIcon className="size-[1.3rem]" />
                                    )}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div
                                    className={cn(
                                        "!text-preset_4_bold text-grey-900",
                                        {
                                            ["text-red"]: bill.is_due
                                        }
                                    )}
                                >
                                    {formatToUsd(bill.amount)}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default RecurringBillsTable;
