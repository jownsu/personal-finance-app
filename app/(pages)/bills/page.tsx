/* COMPONENTS */
import RecurringBillsTable from "./_components/RecurringBillsTable";
import Summary from "./_components/Summary";

const BillsPage = () => {
    return (
        <div className="container flex min-h-full flex-col gap-[3.9rem] pb-[7.6rem] pt-[2.4rem] md:pb-[5.4rem] md:pt-[3.2rem] lg:pb-[3.2rem]">
            <h1 className="text-preset_1">Recurring Bills</h1>

            <div className="flex h-full flex-col items-start gap-[2.4rem] lg:flex-row">
                <Summary />
                <RecurringBillsTable />
            </div>
        </div>
    );
};

export default BillsPage;
