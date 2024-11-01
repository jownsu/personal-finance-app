
/* REACT */
import Link from "next/link";

/* COMPONENTS */
import TransactionItem from "./TransactionItem";
import CaretRightIcon from "@/public/images/icon-caret-right.svg";

/* DATA */
import { transactions_overview } from "../_constants/data";

const Transactions = () => {
    return (
        <div className="flex w-full flex-col gap-[1.4rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem]">
            <div className="flex items-center justify-between">
                <h2 className="text-preset_2 text-grey-900">Transactions</h2>
                <Link
                    href="/transactions"
                    className="flex items-center gap-[1.2rem] text-preset_4 text-grey-500"
                >
                    View All <CaretRightIcon className="size-[1rem]" />
                </Link>
            </div>
            <ul className="flex flex-col gap-[2rem] divide-y divide-grey-100 *:pt-[2rem]">
                {transactions_overview.map((transaction) => (
                    <li key={transaction.id}>
                        <TransactionItem transaction={transaction} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
