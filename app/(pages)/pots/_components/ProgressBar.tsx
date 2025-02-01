/* HELPERS */
import { formatToUsd } from "@/app/_utils/helpers";

interface Props {
    value: number;
    max_value: number;
    theme?: string;
}

const ProgressBar = ({ value, max_value, theme }: Props) => {
    const percentage = ((value / max_value) * 100).toFixed(2);

    return (
        <div className="flex flex-col gap-[1.3rem]">
            <div className="flex h-[.8rem] w-full rounded-[.4rem] bg-beige-100">
                <div
                    className="rounded-[.4rem]"
                    style={{
                        backgroundColor: theme || "#000",
                        width: `${percentage}%`
                    }}
                ></div>
            </div>

            <div className="flex items-center justify-between text-gray-500">
                <span className="text-preset_5_bold">{percentage}%</span>
                <span className="text-preset_5">
                    Target of {formatToUsd(max_value)}
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;
