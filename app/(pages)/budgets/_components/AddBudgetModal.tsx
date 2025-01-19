"use client";

/* COMPONENTS */
import Button from "@/app/_components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/app/_components/ui/Dialog";
import {
    Select,
    SelectContent,
    SelectIcon,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/app/_components/ui/Select";

/* PLUGINS */
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/* ICONS */
import CaretDown from "@/public/images/icon-caret-down.svg";

/* CONSTANTS */
import {
    budget_form_schema,
    BudgetForm
} from "@/app/_constants/_schema/budget.schema";
import { BUDGET_OPTIONS, COLOR_TAG_OPTIONS } from "@/app/_constants/constants";
import { BudgetOption } from "@/app/_constants/entities";

/* UTILITIES */
import { cn } from "@/app/_utils/helpers";
import { ChangeEvent } from "react";

const AddBudgetModal = () => {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<BudgetForm>({
        resolver: zodResolver(budget_form_schema),
        defaultValues: {
            budget_category: BudgetOption.Entertainment
        }
    });

    const onSubmit = (data: BudgetForm) => {
        console.log(data);
    };

    const onMaximumSpendingChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input_value = event.target.value;

        if (/^\d*$/.test(input_value)) {
            setValue("maximum_spending", +input_value);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    type="button"
                    className="px-[1.6rem] !text-preset_4_bold"
                >
                    + Add New Budget
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="mb-[1.8rem] md:mb-[2rem]">
                    <DialogTitle>Add New Budget</DialogTitle>
                    <DialogDescription>
                        Choose a category to set a spending budget. These
                        categories can help you monitor spending.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-[2rem] flex flex-col gap-[1.6rem]">
                        <div className="flex flex-col gap-[.4rem]">
                            <label
                                htmlFor="budget_category"
                                className="text-preset_5_bold text-grey-500"
                            >
                                Budget Category
                            </label>
                            <Controller
                                control={control}
                                name="budget_category"
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        onValueChange={onChange}
                                        value={value}
                                    >
                                        <SelectTrigger className="h-[4.5rem] w-full rounded-[.8rem] border border-beige-500 px-[2rem] !text-preset_4 text-grey-900">
                                            <SelectValue />
                                            <SelectIcon asChild>
                                                <CaretDown />
                                            </SelectIcon>
                                        </SelectTrigger>
                                        <SelectContent
                                            className="!pointer-events-auto"
                                            onWheel={(e) => e.stopPropagation()}
                                            onTouchMove={(e) =>
                                                e.stopPropagation()
                                            }
                                        >
                                            {Object.values(BUDGET_OPTIONS).map(
                                                (budget) => (
                                                    <SelectItem
                                                        key={budget.value}
                                                        value={budget.value}
                                                    >
                                                        {budget.label}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>

                        <div className="flex flex-col gap-[.4rem]">
                            <label
                                htmlFor="color_tag"
                                className="text-preset_5_bold text-grey-500"
                            >
                                Maximum Spending
                            </label>
                            <div
                                className={cn(
                                    "flex h-[4.5rem] items-center gap-[1.2rem] rounded-[.8rem] border border-beige-500 px-[2rem] text-preset_4 text-beige-500",
                                    {
                                        ["border-red"]: errors.maximum_spending
                                    }
                                )}
                            >
                                <span>$</span>
                                <input
                                    type="text"
                                    className="h-full w-full text-grey-900 outline-none"
                                    placeholder="e.g. 2000"
                                    {...register("maximum_spending")}
                                    onChange={(event) => {
                                        onMaximumSpendingChange(event);
                                    }}
                                    value={watch("maximum_spending") || ""}
                                />
                            </div>
                            {errors.maximum_spending && (
                                <p className="text-preset_4 text-red">
                                    {errors.maximum_spending.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-[.4rem]">
                            <label
                                htmlFor="color_tag"
                                className="text-preset_5_bold text-grey-500"
                            >
                                Color Tag
                            </label>
                            <Controller
                                control={control}
                                name="color_tag"
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        onValueChange={onChange}
                                        value={value}
                                    >
                                        <SelectTrigger
                                            className={cn(
                                                "h-[4.5rem] w-full rounded-[.8rem] border border-beige-500 px-[2rem] !text-preset_4 text-grey-900",
                                                {
                                                    ["border-red"]:
                                                        errors.color_tag
                                                }
                                            )}
                                        >
                                            <SelectValue placeholder="Select color" />
                                            <SelectIcon asChild>
                                                <CaretDown />
                                            </SelectIcon>
                                        </SelectTrigger>
                                        <SelectContent
                                            className="!pointer-events-auto p-0"
                                            onWheel={(e) => e.stopPropagation()}
                                            onTouchMove={(e) =>
                                                e.stopPropagation()
                                            }
                                        >
                                            {Object.values(
                                                COLOR_TAG_OPTIONS
                                            ).map((color) => (
                                                <SelectItem
                                                    key={color.value}
                                                    value={color.value}
                                                    className="px-[2rem] hover:bg-beige-100"
                                                >
                                                    <div className="flex items-center gap-[1.2rem] !text-preset_4 text-grey-900">
                                                        <span
                                                            className="block size-[1.6rem] rounded-full bg-black"
                                                            style={{
                                                                backgroundColor:
                                                                    color.theme
                                                            }}
                                                        ></span>
                                                        {color.label}
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />

                            {errors.color_tag && (
                                <p className="text-preset_4 text-red">
                                    {errors.color_tag.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button className="w-full" type="submit">
                        Add Budget
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddBudgetModal;
