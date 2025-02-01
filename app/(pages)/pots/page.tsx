import React from "react";
import AddPotModal from "./_components/AddPotModal";

const PotsPage = () => {
    return (
        <>
            <div className="container flex flex-col gap-[3.2rem] pb-[7.6rem] pt-[2.4rem] md:pb-[5.4rem] md:pt-[3.2rem] lg:pb-[3.2rem]">

                <div className="flex items-center justify-between">
                    <h1 className="text-preset_1">Pots</h1>
                    <AddPotModal />
                </div>

            </div>
        </>
    );
};

export default PotsPage;
