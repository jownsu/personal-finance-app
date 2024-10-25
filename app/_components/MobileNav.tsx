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

/* HELPERS */
import { cn } from "../_utils/helpers";

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

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <nav className="mt-auto h-[5.2rem] rounded-t-[.8rem] bg-grey-900 px-[1.6rem] pt-[.8rem]">
            <ul className="flex h-full justify-between *:flex *:flex-1 *:items-center *:justify-center *:rounded-t-[.8rem]">
                {LINKS.map((link) => (
                    <li
                        key={link.id}
                        className={cn("text-grey-300", {
                            "border-b-[.4rem] border-green bg-beige-100 text-green":
                                pathname === link.url
                        })}
                    >
                        <Link href={link.url}>{link.icon}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileNav;
