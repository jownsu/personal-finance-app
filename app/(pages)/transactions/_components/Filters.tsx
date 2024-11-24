"use client";

/* COMPONENTS */
import SearchIcon from "@/public/images/icon-search.svg";
import SortIcon from "@/public/images/icon-sort-mobile.svg";
import FilterIcon from "@/public/images/icon-filter-mobile.svg";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/app/_components/ui/Select";

/* PLUGINS */
import { Icon as RadixSelectIcon } from "@radix-ui/react-select";
import { FaCaretDown } from "react-icons/fa";

/* CONSTANTS */
import { category_options, sort_options } from "@/app/_constants/constants";

const Filters = () => {
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:gap-[2.4rem] md:px-[3.2rem] md:py-[3.2rem]">
            <div className="flex h-[4.5rem] w-full max-w-[21.5rem] items-center gap-[1.6rem] rounded-[.8rem] border border-beige-500 bg-white px-[2rem] lg:max-w-[32rem]">
                <input
                    type="text"
                    placeholder="Search Transaction"
                    className="min-w-auto w-full truncate bg-white text-preset_4"
                />
                <SearchIcon className="shrink-0" />
            </div>

            <div className="flex shrink-0 gap-[2.4rem]">
                <Select defaultValue="1">
                    <div className="flex items-center gap-[.8rem]">
                        <span className="hidden flex-shrink-0 text-preset_4 text-grey-500 md:block">
                            Sort By
                        </span>
                        <SelectTrigger className="">
                            <div className="hidden h-[4.5rem] w-[11.3rem] items-center justify-between rounded-[.8rem] border border-beige-500 px-[2rem] md:flex">
                                <span className="!hidden text-preset_4 text-grey-900 md:!block">
                                    <SelectValue />
                                </span>
                                <RadixSelectIcon asChild>
                                    <FaCaretDown className="size-[1.6rem] fill-grey-900" />
                                </RadixSelectIcon>
                            </div>

                            <div className="md:hidden">
                                <SortIcon className="size-[1.6rem]" />
                            </div>
                        </SelectTrigger>
                    </div>
                    <SelectContent>
                        {sort_options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select defaultValue="1">
                    <div className="flex items-center gap-[.8rem]">
                        <span className="hidden flex-shrink-0 text-preset_4 text-grey-500 md:block">
                            Category
                        </span>
                        <SelectTrigger className="">
                            <div className="hidden h-[4.5rem] w-[17.7rem] items-center justify-between rounded-[.8rem] border border-beige-500 px-[2rem] md:flex">
                                <span className="!hidden text-preset_4 text-grey-900 md:!block">
                                    <SelectValue />
                                </span>
                                <RadixSelectIcon asChild>
                                    <FaCaretDown className="size-[1.6rem] text-grey-900" />
                                </RadixSelectIcon>
                            </div>

                            <div className="md:hidden">
                                <FilterIcon className="size-[1.6rem]" />
                            </div>
                        </SelectTrigger>
                    </div>
                    <SelectContent>
                        {category_options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Filters;
