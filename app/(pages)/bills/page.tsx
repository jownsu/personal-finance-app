import BillIcon from "@/public/images/icon-recurring-bills.svg";

const SUMMARY = [
    {
        label: "Paid Bills",
        value: "2 ($320.00)"
    },
    {
        label: "Total Upcoming",
        value: "6 ($1,230.00)"
    },
    {
        label: "Due Soon",
        value: "2 ($40.00)"
    }
];

const BillsPage = () => {
    return (
        <div className="container flex flex-col gap-[3.9rem] pb-[7.6rem] pt-[2.4rem] md:pb-[5.4rem] md:pt-[3.2rem] lg:pb-[3.2rem]">
            <h1 className="text-preset_1">Recurring Bills</h1>

            <div className="flex flex-col gap-[1.2rem]">
                <div className="flex h-[11.8rem] items-center gap-[2.4rem] rounded-[1.2rem] bg-grey-900 px-[2.4rem] text-white">
                    <BillIcon className="size-[4rem]" />
                    <div className="flex flex-col gap-[1.2rem]">
                        <span className="text-preset_4">Total Bills</span>
                        <span className="text-preset_1">$384.98</span>
                    </div>
                </div>

                <div className="flex flex-col gap-[.2rem] rounded-[1.2rem] bg-white p-[2rem]">
                    <div className="text-preset_3">Summary</div>
                    <div>
                        {SUMMARY.map((summary, index) => (
                            <div
                                key={index}
                                className="group flex justify-between border-b border-[#69686815] py-[1.6rem] last:border-b-0 last:pb-0"
                            >
                                <span className="text-preset_5 text-grey-500 group-last:text-red">
                                    {summary.label}
                                </span>
                                <span className="text-preset_5_bold text-grey-900 group-last:text-red">
                                    {summary.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillsPage;
