/* COMPONENTS */
import BalanceCard from "../_components/BalanceCard";
import Pots from "../_components/Pots";
import Transactions from "../_components/Transactions";

/* DATA */
import { balance } from "../_constants/data";

const HomePage = () => {
    return (
        <div className="container flex flex-col gap-[3.2rem] py-[2.4rem] md:py-[3.2rem]">
            <h1 className="text-preset_1">Overview</h1>
            <div className="flex flex-col gap-[1.2rem] md:flex-row md:gap-[2.4rem]">
                <BalanceCard
                    label="Current Balance"
                    balance={balance.current}
                    primary
                />
                <BalanceCard
                    label="Current Balance"
                    balance={balance.current}
                />
                <BalanceCard
                    label="Current Balance"
                    balance={balance.current}
                />
            </div>

            <div className="flex flex-col xl:flex-row">
                <div className="xl:flex-1 xl:gap-[2.4rem] flex flex-col gap-[1.6rem]">
                    <Pots />
                    <Transactions />
                </div>
                <div className="xl:basis-[42.8rem]"></div>
            </div>
        </div>
    );
};

export default HomePage;
