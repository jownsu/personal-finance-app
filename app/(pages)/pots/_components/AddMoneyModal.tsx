"use client";

/* REACT */
import { ChangeEvent, useEffect } from "react";

/* COMPONENTS */
import Button from "@/app/_components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/app/_components/ui/Dialog";
import { Label } from "@/app/_components/ui/Label";
import CompareProgressBar from "./CompareProgressBar";

/* PLUGINS */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

/* SCHEMA */
import {
    add_withdraw_pot_schema,
    AddWithdrawPotSchema
} from "@/app/_constants/_schema/pot.schema";

/* UTILITIES */
import usePotStore from "@/app/_store/pot.store";
import { cn, formatToUsd } from "@/app/_utils/helpers";

/* CONSTANTS */
import { COLORS_VALUE } from "@/app/_constants/constants";
import { ColorOption } from "@/app/_constants/entities";

const AddMoneyModal = () => {
    const modal = usePotStore((state) => state.modal);
    const setModal = usePotStore((state) => state.setModal);
    const selected_pot = usePotStore((state) => state.selected_pot);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm<AddWithdrawPotSchema>({
        resolver: zodResolver(add_withdraw_pot_schema),
        defaultValues: {
            amount: 0
        }
    });

    const onSubmit = (data: AddWithdrawPotSchema) => {
        console.log(data);
        setModal("add_money", false);
    };

    const onAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input_value = event.target.value;

        if (/^\d*$/.test(input_value)) {

            if(selected_pot && selected_pot.total + +input_value <= selected_pot.target) {
                setValue("amount", +input_value);
            }
            else{
                setValue("amount", (selected_pot?.target || 0)- (selected_pot?.total || 0));
            }
        }
    };

    useEffect(() => {
        reset({
            id: selected_pot?.id,
            amount: 0
        });
    }, [reset, selected_pot]);

    if (!selected_pot) {
        return null;
    }

    const new_amount = selected_pot.total + +watch("amount");

    return (
        <Dialog
            open={modal.add_money}
            onOpenChange={(open) => setModal("add_money", open)}
        >
            <DialogContent>
                <DialogHeader className="mb-[3rem]">
                    <DialogTitle>
                        Add to {`'${selected_pot?.name}'`}
                    </DialogTitle>
                    <DialogDescription>
                        Add money to your pot to keep it separate from your main
                        balance. As soon as you add this money, it will be
                        deducted from your current balance.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-[2rem] flex flex-col gap-[3.4rem]">
                        <div className="flex flex-col gap-[1.6rem]">
                            <div className="flex items-center justify-between">
                                <span className="text-preset_4 text-grey-500">
                                    New Amount
                                </span>
                                <span className="text-preset_1 text-grey-900">
                                    {formatToUsd(new_amount)}
                                </span>
                            </div>

                            <CompareProgressBar
                                original_value={selected_pot.total}
                                new_value={watch("amount")}
                                max_value={selected_pot.target}
                                theme={COLORS_VALUE[ColorOption.Green]}
                            />
                        </div>

                        <div className="flex flex-col gap-[.4rem]">
                            <Label htmlFor="name">Amount to Add</Label>
                            <div
                                className={cn(
                                    "flex h-[4.5rem] items-center gap-[1.2rem] rounded-[.8rem] border border-beige-500 px-[2rem] text-preset_4 text-beige-500",
                                    {
                                        ["border-red"]: errors.amount
                                    }
                                )}
                            >
                                <span>$</span>
                                <input
                                    type="text"
                                    className="h-full w-full text-grey-900 outline-none"
                                    placeholder="e.g. 2000"
                                    {...register("amount")}
                                    onChange={(event) => {
                                        onAmountChange(event);
                                    }}
                                    value={watch("amount") || ""}
                                />
                            </div>
                            {errors.amount && (
                                <p className="text-preset_4 text-red">
                                    {errors.amount.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        className="w-full !text-preset_4_bold"
                        type="submit"
                    >
                        Confirm Addition
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddMoneyModal;
