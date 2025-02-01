/* COMPONENTS */
import AddPotModal from "./_components/AddPotModal";
import DeletePotModal from "./_components/DeletePotModal";
import EditPotModal from "./_components/EditPotModal";
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

                <div className="grid gap-[2.4rem] md:grid-cols-2">
                    {pots.map((pot) => (
                        <PotItem key={pot.id} pot={pot} />
                    ))}
                </div>
            </div>
            <EditPotModal />
            <DeletePotModal />
        </>
    );
};

export default PotsPage;
