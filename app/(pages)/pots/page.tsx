/* COMPONENTS */
import AddPotModal from "./_components/AddPotModal";
import PotItem from "./_components/PotItem";

/* COMPONENTS */
import { pots } from "@/app/_constants/data";

const PotsPage = () => {
    return (
        <>
            <div className="container flex flex-col gap-[3.2rem] pb-[7.6rem] pt-[2.4rem] md:pb-[5.4rem] md:pt-[3.2rem] lg:pb-[3.2rem]">
                <div className="flex items-center justify-between">
                    <h1 className="text-preset_1">Pots</h1>
                    <AddPotModal />
                </div>

                <div className="flex flex-col gap-[2.4rem]">
                    {pots.map((pot) => (
                        <PotItem key={pot.id} pot={pot} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PotsPage;
