"use client";

/* COMPONENTS */
import PotAction from "./PotAction";
import ProgressBar from "./ProgressBar";
import Button from "@/app/_components/ui/Button";

/* CONSTANTS */
import { COLORS_VALUE } from "@/app/_constants/constants";

/* STORE */
import usePotStore from "@/app/_store/pot.store";

/* HELPERS */
import { formatToUsd } from "@/app/_utils/helpers";

/* ENTITIES */
import { Pot } from "@/app/_constants/entities";

interface Props {
    pot: Pot;
}

const PotItem = ({ pot }: Props) => {

    const setModal = usePotStore((state) => state.setModal);
    const setSelectedpot = usePotStore((state) => state.setSelectedpot);

    return (
        <div className="flex flex-col gap-[4.3rem] rounded-[1.2rem] bg-white px-[2rem] pb-[3.8rem] pt-[2.4rem] md:px-[2.4rem] lg:p-[2.4rem]">
            <div className="flex items-center gap-[1.6rem]">
                <span
                    className="block size-[1.6rem] rounded-full"
                    style={{ backgroundColor: COLORS_VALUE[pot.color] }}
                ></span>
                <h2 className="mr-auto text-preset_2 text-grey-900">
                    {pot.name}
                </h2>
                <PotAction pot={pot} />
            </div>

            <div className="flex flex-col gap-[1.6rem]">
                <div className="flex items-center justify-between">
                    <span className="text-preset_4 text-grey-500">
                        Total Saved
                    </span>
                    <span className="text-preset_1 text-grey-900">
                        {formatToUsd(pot.total)}
                    </span>
                </div>

                <ProgressBar
                    value={pot.total}
                    max_value={pot.target}
                    theme={COLORS_VALUE[pot.color]}
                />
            </div>

            <div className="flex justify-between gap-[1.6rem] *:flex-1 *:text-preset_4_bold">
                <Button 
                    variant="secondary" 
                    type="button"
                    onClick={() => {
                        setModal("add_money", true);
                        setSelectedpot(pot);
                    }}
                >
                    + Add Money
                </Button>
                <Button 
                    variant="secondary" 
                    type="button"
                    onClick={() => {
                        setModal("withdraw_money", true);
                        setSelectedpot(pot);
                    }}
                >
                    Withdraw
                </Button>
            </div>
        </div>
    );
};

export default PotItem;
