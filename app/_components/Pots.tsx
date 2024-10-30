/* REACT */
import Link from "next/link";

/* COMPONENTS */
import CaretRightIcon from "@/public/images/icon-caret-right.svg";
import PotIcon from "@/public/images/icon-pot.svg";

/* DATA */
import { total_saved, pots_overview } from "../_constants/data";

const Pots = () => {
    return (
        <div className="flex w-full flex-col gap-[2rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem]">
            <div className="flex items-center justify-between">
                <h2 className="text-preset_2 text-grey-900">Pots</h2>
                <Link
                    href="/pots"
                    className="flex items-center gap-[1.2rem] text-grey-500"
                >
                    See Details <CaretRightIcon className="size-[1rem]" />
                </Link>
            </div>

            <div className="flex flex-col gap-[2rem] md:flex-row">
                <div className="flex items-center gap-[1.6rem] rounded-[1.2rem] bg-beige-100 p-[1.6rem] md:basis-[24.7rem]">
                    <PotIcon className="size-[4rem]" />
                    <div className="flex flex-col gap-[1.1rem]">
                        <span className="text-preset_4 text-grey-500">
                            Total Saved
                        </span>
                        <span className="text-preset_1 text-grey-900">
                            {total_saved.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD"
                            })}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-[1.6rem] md:flex-1">
                    {pots_overview.map((pot) => (
                        <div key={pot.id} className="flex gap-[1.6rem]">
                            <span
                                className={
                                    "block h-full w-[.4rem] flex-shrink-0 rounded-[.8rem]"
                                }
                                style={{ backgroundColor: pot.bg }}
                            ></span>
                            <div className="flex flex-col">
                                <span className="text-preset_5 text-grey-500">
                                    {pot.name}
                                </span>
                                <span className="text-preset_4_bold text-grey-900">
                                    {pot.value.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    })}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pots;
