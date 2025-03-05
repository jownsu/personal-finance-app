"use client";

/* COMPONENTS */
import PotItem from "./PotItem";

/* STORE */
import usePotStore from "@/app/_store/pot.store";

const PotList = () => {
    const pots = usePotStore((state) => state.pots);

    return (
        <div className="grid gap-[2.4rem] md:grid-cols-2">
            {pots.map((pot) => (
                <PotItem key={pot.id} pot={pot} />
            ))}
        </div>
    );
};

export default PotList;
