
/* REACT */
import Image from "next/image";

/* PLUGINS */
import moment from "moment";

/* HELPERS */
import { cn } from "../_utils/helpers";

interface Props {
    transaction: {
        id: number;
        avatar: string;
        name: string;
        amount: number;
        date: string;
    };
}

const TransactionItem = ({ transaction }: Props) => {
    const is_positive = transaction.amount > 0;

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-[1.6rem]">
                <Image
                    src={transaction.avatar}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="size-[3.2rem] rounded-full"
                />
                <span className="text-preset_4_bold">{transaction.name}</span>
            </div>

            <div className="flex flex-col gap-[.4rem] text-right">
                <span
                    className={cn("!text-preset_4_bold", {
                        ["text-green"]: is_positive,
                        ["text-grey-500"]: !is_positive
                    })}
                >
                    {is_positive && "+"}
                    {transaction.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </span>
                <span className="text-preset_5 text-grey-500">
                    {moment(transaction.date).format("D MMM YYYY")}
                </span>
            </div>
        </div>
    );
};

export default TransactionItem;
