/* REACT */
import Link from "next/link";

/* COMPONENTS */
import CaretRightIcon from "@/public/images/icon-caret-right.svg";
import Doughnut from "./Doughnut";

/* DATA */
import { budgets_overview, budgets_overview_overall } from "../_constants/data";

/* HELPERS */
import { formatToUsd } from "../_utils/helpers";

const Budgets = () => {
    return (
        <div className="flex w-full flex-col gap-[2.8rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem] md:gap-[5.1rem] md:pb-[6.3rem] flex-1">
            <div className="flex items-center justify-between">
                <h2 className="text-preset_2 text-grey-900">Budgets</h2>
                <Link
                    href="/budgets"
                    className="flex items-center gap-[1.2rem] text-preset_4 text-grey-500"
                >
                    See Details <CaretRightIcon className="size-[1rem] fill-grey-500" />
                </Link>
            </div>

            <div className="flex flex-col gap-[1.6rem] md:flex-row">
                <div className="relative mx-auto size-[24rem]">
                    <Doughnut data={budgets_overview} />
                    <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center">
                        <span className="text-preset_1 text-grey-900">
                            ${budgets_overview_overall.total}
                        </span>
                        <span className="text-preset_5 text-grey-500">
                            of ${budgets_overview_overall.limit} limit
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-[1.6rem] md:grid-cols-1">
                    {budgets_overview.map((budget) => (
                        <div key={budget.id} className="flex gap-[1.6rem]">
                            <span
                                className={
                                    "block h-full w-[.4rem] flex-shrink-0 rounded-[.8rem]"
                                }
                                style={{ backgroundColor: budget.bg }}
                            ></span>
                            <div className="flex flex-col">
                                <span className="text-preset_5 text-grey-500">
                                    {budget.name}
                                </span>
                                <span className="text-preset_4_bold text-grey-900">
                                    { formatToUsd(budget.value) }
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Budgets;
