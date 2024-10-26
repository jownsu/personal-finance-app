"use client";

/* NEXT */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ICONS */
import BudgetIcon from "@/public/images/icon-nav-budgets.svg";
import OverviewIcon from "@/public/images/icon-nav-overview.svg";
import PotIcon from "@/public/images/icon-nav-pots.svg";
import BillsIcon from "@/public/images/icon-nav-recurring-bills.svg";
import TransactionIcon from "@/public/images/icon-nav-transactions.svg";
import LargeLogo from "@/public/images/logo-large.svg";
import SmallLogo from "@/public/images/logo-small.svg";
import BackIcon from "@/public/images/icon-minimize-menu.svg";

/* HELPERS */
import { cn } from "../_utils/helpers";
import { useState } from "react";

const LINKS = [
    {
        id: 1,
        label: "Overview",
        url: "/",
        icon: <OverviewIcon className="" />
    },
    {
        id: 2,
        label: "Transactions",
        url: "/transactions",
        icon: <TransactionIcon />
    },
    {
        id: 3,
        label: "Budgets",
        url: "/budgets",
        icon: <BudgetIcon />
    },
    {
        id: 4,
        label: "Pots",
        url: "/pots",
        icon: <PotIcon />
    },
    {
        id: 5,
        label: "Recurring Bills",
        url: "/bills",
        icon: <BillsIcon />
    }
];

const NavigationBar = () => {
    const pathname = usePathname();
    const [is_open, setOpen] = useState(true);

    return (
        <nav
            className={cn(
                "mt-auto h-[5.2rem] rounded-t-[.8rem] bg-grey-900 px-[1.6rem] pt-[.8rem] duration-200 md:h-[7.4rem] md:px-[4rem] lg:mt-0 lg:flex lg:h-auto lg:w-[30rem] lg:flex-col lg:gap-[2.4rem] lg:rounded-r-[1.6rem] lg:rounded-tl-none lg:px-0 lg:pb-[5.8rem] lg:pr-[2.4rem] lg:pt-0",
                {
                    ["lg:w-[8.8rem] lg:pr-[1rem]"]: !is_open
                }
            )}
        >
            <div
                className={cn("hidden px-[3.2rem] py-[4rem] lg:block", {
                    ["pr-[2.2rem]"]: !is_open
                })}
            >
                <LargeLogo
                    className={cn(
                        "inline-block h-[2.2rem] w-[12.1rem] opacity-100 transition-opacity delay-200 duration-200",
                        {
                            ["w-0 opacity-0"]: !is_open
                        }
                    )}
                />
                <SmallLogo
                    className={cn("hidden h-[2.2rem] w-auto opacity-0", {
                        ["inline-block opacity-100"]: !is_open
                    })}
                />
            </div>

            <ul className="flex h-full justify-between lg:h-auto lg:flex-col">
                {LINKS.map((link) => (
                    <li
                        key={link.id}
                        className={cn(
                            "group flex max-w-[10.4rem] flex-1 items-center justify-center rounded-t-[.8rem] text-grey-300 hover:text-grey-100 lg:h-[5.6rem] lg:max-w-none lg:flex-initial lg:justify-start",
                            {
                                "border-b-[.4rem] border-green bg-beige-100 !text-green lg:rounded-r-[1.2rem] lg:rounded-tl-none lg:border-b-0 lg:border-l-[.4rem]":
                                    pathname === link.url
                            }
                        )}
                    >
                        <Link
                            href={link.url}
                            className={cn(
                                "flex h-full w-full flex-col items-center gap-[.4rem] lg:flex-row lg:gap-[1.6rem] lg:pl-[3.2rem] [&>svg]:size-[2.4rem]",
                                {
                                    ["lg:pl-[2.8rem]"]: pathname === link.url
                                }
                            )}
                        >
                            <div className="size-[2.4rem] flex-shrink-0 *:size-full">
                                {link.icon}
                            </div>
                            <span
                                className={cn(
                                    "hidden !text-preset_5_bold text-grey-300 group-hover:text-grey-100 md:block lg:!text-preset_3",
                                    {
                                        "!text-grey-900": pathname === link.url,
                                        "w-0 opacity-0": !is_open,
                                        "opacity-100 transition-opacity delay-200 duration-200":
                                            is_open
                                    }
                                )}
                            >
                                {link.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                className="mt-auto flex h-[5.6rem] items-center gap-[1.6rem] pl-[3.2rem]"
                onClick={() => setOpen(!is_open)}
            >
                <BackIcon
                    className={cn("size-[2.4rem]", {
                        ["rotate-180"]: !is_open
                    })}
                />
                <span
                    className={cn("text-preset_3 text-grey-300", {
                        ["w-0 opacity-0"]: !is_open,
                        ["opacity-100 delay-200 duration-200"]: is_open
                    })}
                >
                    Minimize Menu
                </span>
            </button>
        </nav>
    );
};

export default NavigationBar;
