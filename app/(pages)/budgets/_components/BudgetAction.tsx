"use client";

/* COMPONENTS */
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/_components/ui/DropdownMenu";

/* STORE */
import useBudgetStore from "@/app/_store/budget.store";

/* PLUGINS */
import EllipsisIcon from "@/public/images/icon-ellipsis.svg";

/* ENTITIES */
import { Budget } from "@/app/_constants/entities";

interface Props {
    budget: Budget;
}

const BudgetAction = ({ budget }: Props) => {
    const setModal = useBudgetStore((state) => state.setModal);
    const setSelectedBudget = useBudgetStore(
        (state) => state.setSelectedBudget
    );

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                <EllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    className="text-grey-900"
                    onClick={() => {
                        setModal("edit_budget", true);
                        setSelectedBudget(budget);
                    }}
                >
                    Edit Budget
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="text-red"
                    onClick={() => {
                        setModal("delete_budget", true);
                        setSelectedBudget(budget);
                    }}
                >
                    Delete Budget
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default BudgetAction;
