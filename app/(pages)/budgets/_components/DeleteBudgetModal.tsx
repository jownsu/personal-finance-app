"use client";

/* COMPONENTS */
import Button from "@/app/_components/ui/Button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/app/_components/ui/Dialog";
import { BUDGET_LABELS } from "@/app/_constants/constants";

/* STORE */
import useBudgetStore from "@/app/_store/budget.store";

const DeleteBudgetModal = () => {
    const modal = useBudgetStore((state) => state.modal);
    const setModal = useBudgetStore((state) => state.setModal);
    const selected_budget = useBudgetStore((state) => state.selected_budget);
    const deleteBudget = useBudgetStore((state) => state.deleteBudget);

    const onDelete = (id?: number) => {
        deleteBudget(id);
        setModal("delete_budget", false);
    };

    return (
        <Dialog
            open={modal.delete_budget}
            onOpenChange={(open) => setModal("delete_budget", open)}
        >
            <DialogContent className="pb-[.6rem] md:pb-[1.5rem]">
                <DialogHeader className="mb-[1.8rem] md:mb-[2rem]">
                    <DialogTitle>
                        Delete{" "}
                        {`'${selected_budget?.budget_option && BUDGET_LABELS[selected_budget?.budget_option]}'`}
                    </DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this budget? This action
                        cannot be reversed, and all the data inside it will be
                        removed forever.
                    </DialogDescription>
                </DialogHeader>

                <Button
                    type="button"
                    className="mb-[.6rem] w-full bg-red !text-preset_4_bold"
                    onClick={() => onDelete(selected_budget?.id)}
                >
                    Yes, Confirm Deletion
                </Button>
                <DialogClose asChild>
                    <Button
                        type="button"
                        variant={"secondary"}
                        className="text-g w-full bg-white !text-preset_4 text-grey-500 hover:outline-0"
                    >
                        No, Go back
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteBudgetModal;
