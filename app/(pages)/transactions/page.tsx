import Filters from "./_components/Filters";
import TransactionsTable from "./_components/TransactionsTable";

const TransactionPage = () => {
    return (
        <div className="container flex flex-col gap-[4rem] py-[2.4rem] md:py-[3.2rem]">
            <h1 className="text-preset_1">Transactions</h1>

            <div className="flex flex-col gap-[.9rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:gap-[2.5rem] md:px-[3.2rem] md:py-[3.2rem]">
                <Filters />
                <TransactionsTable />
            </div>
        </div>
    );
};

export default TransactionPage;
