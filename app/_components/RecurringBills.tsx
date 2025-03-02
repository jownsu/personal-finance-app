/* REACT */
import Link from "next/link";

/* COMPONENTS */
import CaretRightIcon from "@/public/images/icon-caret-right.svg";

/* DATA */
import { bills_overview } from "@/app/_constants/data";

/* HELPERS */
import { formatToUsd } from "@/app/_utils/helpers";

/* CONSTANTS */
import { BillOverview } from "@/app/_constants/entities";
import { COLORS_VALUE } from "@/app/_constants/constants";

const RecurringBills = () => {
    return (
        <div className="flex w-full flex-1 flex-col gap-[3.2rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem]">
            <div className="flex items-center justify-between">
                <h2 className="text-preset_2 text-grey-900">Recurring Bills</h2>
                <Link
                    href="/bills"
                    className="flex items-center gap-[1.2rem] text-preset_4 text-grey-500"
                >
                    See Details <CaretRightIcon className="size-[1rem] fill-grey-500" />
                </Link>
            </div>

            <ul className="flex flex-col gap-[1.2rem]">
                {bills_overview.map((bill, index) => (
                    <BillItem key={index} bill={bill} />
                ))}
            </ul>
        </div>
    );
};

interface BillProps {
    bill: BillOverview;
}
const BillItem = ({ bill }: BillProps) => {
    return (
        <li>
            <div
                className="flex h-[6.1rem] items-center justify-between rounded-[.8rem] border-l-[4px] bg-beige-100 px-[1.6rem]"
                style={{ borderColor: COLORS_VALUE[bill.color] }}
            >
                <span className="text-preset_4 text-grey-500">{bill.name}</span>
                <span className="text-preset_4_bold text-grey-900">
                    { formatToUsd(bill.amount) }
                </span>
            </div>
        </li>
    );
};

export default RecurringBills;
