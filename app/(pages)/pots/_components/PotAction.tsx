"use client";

/* COMPONENTS */
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/app/_components/ui/DropdownMenu";

/* STORE */
import usePotStore from "@/app/_store/pot.store";

/* ENTITIES */
import { Pot } from "@/app/_constants/entities";

/* ICONS */
import EllipsisIcon from "@/public/images/icon-ellipsis.svg";

interface Props {
    pot: Pot;
}

const PotAction = ({ pot }: Props) => {
    const setModal = usePotStore((state) => state.setModal);
    const setSelectedPot = usePotStore(
        (state) => state.setSelectedpot
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
                        setModal("edit_pot", true);
                        setSelectedPot(pot);
                    }}
                >
                    Edit Pot
                </DropdownMenuItem>
                <DropdownMenuItem 
                    className="text-red"
                    onClick={() => {
                        setModal("delete_pot", true);
                        setSelectedPot(pot);
                    }}
                >
                    Delete Pot
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default PotAction;
