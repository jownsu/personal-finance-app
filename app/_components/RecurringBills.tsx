/* REACT */
import Link from "next/link";

/* COMPONENTS */
import CaretRightIcon from "@/public/images/icon-caret-right.svg";
import { recurring_bills } from "../_constants/data";

const RecurringBills = () => {
    return (
        <div className="flex w-full flex-1 flex-col gap-[3.2rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem]">
            <div className="flex items-center justify-between">
                <h2 className="text-preset_2 text-grey-900">Recurring Bills</h2>
                <Link
                    href="/Bills"
                    className="flex items-center gap-[1.2rem] text-preset_4 text-grey-500"
                >
                    See Details <CaretRightIcon className="size-[1rem] fill-grey-500" />
                </Link>
            </div>

            <ul className="flex flex-col gap-[1.2rem]">
                {recurring_bills.map((bill) => (
                    <BillItem key={bill.id} bill={bill} />
                ))}
            </ul>
        </div>
    );
};

interface BillProps {
    bill: {
        name: string;
        theme: string;
        amount: number;
    };
}
const BillItem = ({ bill }: BillProps) => {
    return (
        <li>
            <div
                className="flex h-[6.1rem] items-center justify-between rounded-[.8rem] border-l-[4px] bg-beige-100 px-[1.6rem]"
                style={{ borderColor: bill.theme }}
            >
                <span className="text-preset_4 text-grey-500">{bill.name}</span>
                <span className="text-preset_4_bold text-grey-900">
                    {bill.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </span>
            </div>
        </li>
    );
};

export default RecurringBills;
