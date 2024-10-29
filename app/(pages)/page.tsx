/* COMPONENTS */
import BalanceCard from "../_components/BalanceCard";

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
        </div>
    );
};

export default HomePage;
