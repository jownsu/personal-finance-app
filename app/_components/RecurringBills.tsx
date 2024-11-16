/* REACT */
import Link from "next/link";

/* COMPONENTS */
import CaretRightIcon from "@/public/images/icon-caret-right.svg";

const RecurringBills = () => {
    return (
        <div className="flex w-full flex-1 flex-col gap-[2.8rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:gap-[5.1rem] md:p-[3.2rem] md:pb-[6.3rem]">
            <div className="flex items-center justify-between">
                <h2 className="text-preset_2 text-grey-900">Recurring Bills</h2>
                <Link
                    href="/Bills"
                    className="flex items-center gap-[1.2rem] text-preset_4 text-grey-500"
                >
                    See Details <CaretRightIcon className="size-[1rem]" />
                </Link>
            </div>
        </div>
    );
};

export default RecurringBills;
