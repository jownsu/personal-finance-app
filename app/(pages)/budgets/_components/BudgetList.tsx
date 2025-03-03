"use client";

import useBudgetStore from "@/app/_store/budget.store";
import BudgetItem from "./BudgetItem";

const BudgetList = () => {
    const budgets = useBudgetStore((state) => state.budgets);

    return (
        <div className="flex flex-col gap-[2.4rem] lg:flex-1">
            {budgets.map((budget) => (
                <BudgetItem key={budget.id} budget={budget} />
            ))}
        </div>
    );
};

export default BudgetList;
