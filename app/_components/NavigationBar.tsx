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
import Logo from "@/public/images/logo-large.svg";
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
        <nav className="mt-auto h-[5.2rem] rounded-t-[.8rem] bg-grey-900 px-[1.6rem] pt-[.8rem] md:h-[7.4rem] md:px-[4rem] lg:mt-0 lg:flex lg:h-auto lg:basis-[30rem] lg:flex-col lg:gap-[2.4rem] lg:rounded-r-[1.6rem] lg:rounded-tl-none lg:px-0 lg:pb-[5.8rem] lg:pr-[2.4rem] lg:pt-0">
            <div className="hidden px-[3.2rem] py-[4rem] lg:block">
                <Logo className="h-[2.2rem] w-[12.1rem]" />
            </div>

            <ul className="flex h-full justify-between lg:h-auto lg:flex-col">
                {LINKS.map((link) => (
                    <li
                        key={link.id}
                        className={cn(
                            "flex max-w-[10.4rem] flex-1 items-center justify-center rounded-t-[.8rem] text-grey-300 lg:h-[5.6rem] lg:max-w-none lg:flex-initial lg:justify-start lg:px-[3.2rem]",
                            {
                                "border-b-[.4rem] border-green bg-beige-100 text-green lg:rounded-r-[1.2rem] lg:rounded-tl-none lg:border-b-0 lg:border-l-[.4rem] lg:px-[2.8rem]":
                                    pathname === link.url
                            }
                        )}
                    >
                        <Link
                            href={link.url}
                            className="flex flex-col items-center gap-[.4rem] lg:flex-row lg:gap-[1.6rem] [&>svg]:size-[2.4rem]"
                        >
                            {link.icon}
                            <span
                                className={cn(
                                    "hidden !text-preset_5_bold text-grey-300 md:block lg:!text-preset_3",
                                    {
                                        "text-grey-900": pathname === link.url
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
                className="mt-auto flex h-[5.6rem] items-center gap-[1.6rem] px-[3.2rem]"
            >
                <BackIcon className="size-[2.4rem]" />
                <span className="text-preset_3 text-grey-300">
                    Minimize Menu
                </span>
            </button>
        </nav>
    );
};

export default NavigationBar;
