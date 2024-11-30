/* COMPONENTS */
import Doughnut from "@/app/_components/Doughnut";
import Button from "@/app/_components/ui/Button";
import {
    budgets_overview,
    budgets_overview_overall
} from "@/app/_constants/data";
import BudgetItem from "./_components/BudgetItem";

const BudgetPage = () => {
    return (
        <div className="container flex flex-col gap-[3.2rem] pb-[7.6rem] pt-[2.4rem] md:pb-[5.4rem] md:pt-[3.2rem] lg:pb-[3.2rem]">
            <div className="flex items-center justify-between">
                <h1 className="text-preset_1">Budgets</h1>
                <Button
                    type="button"
                    className="px-[1.6rem] !text-preset_4_bold"
                >
                    + Add New Budget
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-[2.4rem]">
                <div className="flex flex-col gap-[5.4rem] rounded-[1.2rem] bg-white px-[2rem] py-[1.6rem] pt-[4.6rem] md:flex-row md:justify-between md:gap-[6rem] md:py-[5.2rem] md:pl-[6rem] md:pr-[3.2rem] lg:max-w-[42.8rem] lg:flex-1 lg:flex-col lg:gap-[5.5rem] lg:px-[3.2rem] lg:pb-[2.4rem]">
                    <div className="relative mx-auto size-[24rem] md:mx-0 lg:mx-auto">
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
                    <div className="flex flex-col gap-[.4rem] md:flex-1 md:gap-[.8rem]">
                        <h2 className="text-preset_2 text-grey-900">
                            Spending Summary
                        </h2>
                        <div className="flex flex-col gap-[1.3rem] divide-y divide-grey-100 *:pt-[1.6rem]">
                            {budgets_overview.map((budget) => (
                                <div
                                    key={budget.id}
                                    className="flex justify-between gap-[1.6rem]"
                                >
                                    <div className="flex gap-[1.6rem]">
                                        <span
                                            className={
                                                "block h-[2.1rem] w-[.4rem] flex-shrink-0 rounded-[.8rem]"
                                            }
                                            style={{
                                                backgroundColor: budget.bg
                                            }}
                                        ></span>
                                        <span className="text-preset_4 text-grey-500">
                                            {budget.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-[.8rem]">
                                        <span className="text-preset_3 text-grey-900">
                                            {budget.value.toLocaleString(
                                                "en-US",
                                                {
                                                    style: "currency",
                                                    currency: "USD"
                                                }
                                            )}
                                        </span>
                                        <span className="text-preset_5 text-grey-500">
                                            of{" "}
                                            {budget.max_value.toLocaleString(
                                                "en-US",
                                                {
                                                    style: "currency",
                                                    currency: "USD"
                                                }
                                            )}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1">
                    <BudgetItem />
                </div>
            </div>
        </div>
    );
};

export default BudgetPage;
