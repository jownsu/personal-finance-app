/* COMPONENTS */
import AddMoneyModal from "./_components/AddMoneyModal";
import AddPotModal from "./_components/AddPotModal";
import DeletePotModal from "./_components/DeletePotModal";
import EditPotModal from "./_components/EditPotModal";
import PotList from "./_components/PotList";
import WithdrawMoneyModal from "./_components/WithdrawMoneyModal";

const PotsPage = () => {
    return (
        <>
            <div className="container flex flex-col gap-[3.2rem] pb-[7.6rem] pt-[2.4rem] md:pb-[5.4rem] md:pt-[3.2rem] lg:pb-[3.2rem]">
                <div className="flex items-center justify-between">
                    <h1 className="text-preset_1">Pots</h1>
                    <AddPotModal />
                </div>
                <PotList />
            </div>
            <EditPotModal />
            <DeletePotModal />
            <AddMoneyModal />
            <WithdrawMoneyModal />
        </>
    );
};

export default PotsPage;
