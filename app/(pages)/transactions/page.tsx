import Filters from "./_components/Filters";


const TransactionPage = () => {
    return (
        <div className="container flex flex-col gap-[3.2rem] py-[2.4rem] md:py-[3.2rem]">
            <h1 className="text-preset_1">Transactions</h1>

            <div className="bg-white px-[2rem] py-[2.4rem] rounded-[1.2rem] md:px-[3.2rem]">
                <Filters />
            </div>
        </div>
    );
};

export default TransactionPage;
