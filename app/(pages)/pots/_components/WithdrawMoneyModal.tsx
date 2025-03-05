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
import WithdrawMoneyBar from "./WithdrawMoneyBar";

/* PLUGINS */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

/* SCHEMA */
import {
    add_withdraw_pot_schema,
    AddWithdrawPotSchema
} from "@/app/_constants/_schema/pot.schema";

/* STORE */
import usePotStore from "@/app/_store/pot.store";

/* UTILITIES */
import { cn, formatToUsd } from "@/app/_utils/helpers";

const WithdrawMoneyModal = () => {
    const modal = usePotStore((state) => state.modal);
    const setModal = usePotStore((state) => state.setModal);
    const selected_pot = usePotStore((state) => state.selected_pot);
    const withdrawMoney = usePotStore((state) => state.withdrawMoney);

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
        if(data.id){
            withdrawMoney(data.id, data.amount);
            setModal("withdraw_money", false);
        }
    };

    const onAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input_value = event.target.value;

        if (/^\d*$/.test(input_value)) {
            if (selected_pot && selected_pot.total - +input_value >= 0) {
                setValue("amount", +input_value);
            } else {
                setValue("amount", selected_pot?.total || 0);
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

    const new_amount = selected_pot.total - +watch("amount");

    return (
        <Dialog
            open={modal.withdraw_money}
            onOpenChange={(open) => setModal("withdraw_money", open)}
        >
            <DialogContent>
                <DialogHeader className="mb-[3rem] pr-[2rem]">
                    <DialogTitle>
                        Withdraw from {`'${selected_pot?.name}'`}
                    </DialogTitle>
                    <DialogDescription>
                        Withdraw from your pot to put money back in your main
                        balance. This will reduce the amount you have in this
                        pot.
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

                            <WithdrawMoneyBar
                                original_value={selected_pot.total}
                                withdraw_value={watch("amount")}
                                max_value={selected_pot.target}
                            />
                        </div>

                        <div className="flex flex-col gap-[.4rem]">
                            <Label htmlFor="name">Amount to Withdraw</Label>
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

export default WithdrawMoneyModal;
