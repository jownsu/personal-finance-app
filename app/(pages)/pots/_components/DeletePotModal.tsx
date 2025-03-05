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

/* STORE */
import usePotStore from "@/app/_store/pot.store";

const DeletePotModal = () => {
    const modal = usePotStore((state) => state.modal);
    const setModal = usePotStore((state) => state.setModal);
    const selected_pot = usePotStore((state) => state.selected_pot);
    const deletePot = usePotStore((state) => state.deletePot);

    const onDelete = (id?: number) => {
        if(id){
            deletePot(id);
            setModal("delete_pot", false);
        }
    };

    return (
        <Dialog
            open={modal.delete_pot}
            onOpenChange={(open) => setModal("delete_pot", open)}
        >
            <DialogContent className="pb-[.6rem] md:pb-[1.5rem]">
                <DialogHeader className="mb-[1.8rem] md:mb-[2rem]">
                    <DialogTitle>
                        {`Delete '${selected_pot?.name}'`}
                    </DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this pot? This action
                        cannot be reversed, and all the data inside it will be
                        removed forever.
                    </DialogDescription>
                </DialogHeader>

                <Button
                    type="button"
                    className="mb-[.6rem] w-full bg-red !text-preset_4_bold"
                    onClick={() => onDelete(selected_pot?.id)}
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

export default DeletePotModal;
