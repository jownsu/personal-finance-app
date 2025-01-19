/* REACT */
import Image from "next/image";
import Link from "next/link";

/* COMPONENTS */
import ProgressBar from "./ProgressBar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/_components/ui/DropdownMenu";

/* ICONS */
import CaretRightIcon from "@/public/images/icon-caret-right.svg";
import EllipsisIcon from "@/public/images/icon-ellipsis.svg";

/* PLUGINS */
import moment from "moment";

interface Props {
    budget: {
        id: number;
        theme: string;
        name: string;
        maximum: number;
        spend: number;
        free: number;
        latest_spending: {
            id: number;
            name: string;
            date: string;
            avatar: string;
            amount: number;
        }[];
    };
}

const BudgetItem = ({ budget }: Props) => {
    return (
        <div className="flex flex-col gap-[2rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem]">
            <div className="flex items-center gap-[1.6rem]">
                <span
                    className="block size-[1.6rem] rounded-full"
                    style={{ backgroundColor: budget.theme }}
                ></span>
                <h2 className="mr-auto text-preset_2 text-grey-900">
                    {budget.name}
                </h2>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <EllipsisIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="text-grey-900">
                            Edit Budget
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red">
                            Delete Budget
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex flex-col gap-[1.6rem]">
                <div className="text-grey-500">
                    Maximum of{" "}
                    {budget.maximum.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </div>

                <ProgressBar
                    value={budget.spend}
                    max_value={budget.maximum}
                    theme={budget.theme}
                />

                <div className="flex">
                    <div className="flex flex-1 gap-[1.6rem]">
                        <span
                            className={"block h-full w-[.4rem] rounded-[.8rem]"}
                            style={{ backgroundColor: budget.theme }}
                        ></span>
                        <div className="flex flex-col">
                            <span className="text-preset_5 text-grey-500">
                                Spent
                            </span>
                            <span className="text-preset_4_bold text-grey-900">
                                {budget.spend.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                })}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-[1.6rem]">
                        <span
                            className={
                                "block h-full w-[.4rem] rounded-[.8rem] bg-beige-100"
                            }
                        ></span>
                        <div className="flex flex-col">
                            <span className="text-preset_5 text-grey-500">
                                Free
                            </span>
                            <span className="text-preset_4_bold text-grey-900">
                                {budget.free.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-[1.2rem] bg-beige-100 p-[1.6rem]">
                <div className="flex items-center justify-between md:mb-[.7rem]">
                    <h3 className="text-preset_3 text-grey-900">
                        Latest Spending
                    </h3>
                    <Link
                        href="/pots"
                        className="flex items-center gap-[1.2rem] text-preset_4 text-grey-500"
                    >
                        See All{" "}
                        <CaretRightIcon className="size-[1rem] fill-grey-500" />
                    </Link>
                </div>
                <div className="flex flex-col gap-[1.4rem] divide-y divide-grey-500 divide-opacity-15 *:pt-[1.4rem]">
                    {budget.latest_spending.map((spending) => (
                        <div
                            key={spending.id}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-[1.6rem] text-preset_5_bold text-grey-900">
                                <Image
                                    src={spending.avatar}
                                    alt={`logo of ${spending.name}`}
                                    width={32}
                                    height={32}
                                    className="size-[3.2rem] rounded-full"
                                />
                                <span>{spending.name}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-preset_5_bold text-grey-900">
                                    {spending.amount.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    })}
                                </span>
                                <span className="text-preset_5 text-grey-500">
                                    {moment(spending.date).format("D MMM YYYY")}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BudgetItem;
