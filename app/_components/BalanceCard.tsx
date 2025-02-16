import { cn, formatToUsd } from "../_utils/helpers";

interface Props {
    label: string;
    balance: number;
    primary?: boolean;
}

const BalanceCard = ({ label, balance, primary = false }: Props) => {
    return (
        <div
            className={cn(
                "flex w-full flex-col gap-[1.2rem] rounded-[1.2rem] bg-white p-[2rem] text-grey-900 md:p-[2.4rem]",
                {
                    ["bg-grey-900 text-white"]: primary
                }
            )}
        >
            <span className="text-preset_4">{label}</span>
            <span className="text-preset_1">
                { formatToUsd(balance) }
            </span>
        </div>
    );
};

export default BalanceCard;
