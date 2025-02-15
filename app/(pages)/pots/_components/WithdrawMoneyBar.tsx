/* HELPERS */
import { formatToUsd } from "@/app/_utils/helpers";

interface Props {
    original_value: number;
    withdraw_value: number;
    max_value: number;
}

const WithdrawMoneyBar = ({
    original_value,
    withdraw_value,
    max_value
}: Props) => {
    const max_percentage = (original_value / max_value) * 100;
    const withdraw_percentage = (withdraw_value / max_value) * 100;
    const total_percentage = (max_percentage - withdraw_percentage).toFixed(2);

    return (
        <div className="flex flex-col gap-[1.3rem]">
            <div className="flex h-[.8rem] w-full gap-[.4rem] overflow-hidden rounded-[.4rem] bg-beige-100">
                <div
                    className="shrink-0 rounded-bl-[.4rem] rounded-tl-[.4rem] bg-black"
                    style={{
                        width: `${total_percentage}%`
                    }}
                ></div>
                <div
                    className="shrink-0 rounded-br-[.4rem] rounded-tr-[.4rem] bg-red"
                    style={{
                        width: `${withdraw_percentage}%`
                    }}
                ></div>
            </div>

            <div className="flex items-center justify-between text-gray-500">
                <span className="text-preset_5_bold text-red">
                    {total_percentage}%
                </span>
                <span className="text-preset_5">
                    Target of {formatToUsd(max_value)}
                </span>
            </div>
        </div>
    );
};

export default WithdrawMoneyBar;
