import Filters from "./_components/Filters";
import TransactionsTable from "./_components/TransactionsTable";

const TransactionPage = () => {
    return (
        <div className="container flex flex-col gap-[4rem] pt-[2.4rem] pb-[7.6rem] md:pt-[3.2rem] md:pb-[5.4rem] lg:pb-[3.2rem]">
            <h1 className="text-preset_1">Transactions</h1>

            <div className="flex flex-col rounded-[1.2rem] bg-white">
                <Filters />
                <TransactionsTable />
            </div>
        </div>
    );
};

export default TransactionPage;

export const dynamic = "force-dynamic";