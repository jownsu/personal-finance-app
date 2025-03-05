"use client";

/* REACT */
import { ChangeEvent, useEffect, useState } from "react";

/* COMPONENTS */
import Button from "@/app/_components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/app/_components/ui/Dialog";
import { Input } from "@/app/_components/ui/Input";
import { Label } from "@/app/_components/ui/Label";
import {
    Select,
    SelectContent,
    SelectIcon,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/app/_components/ui/Select";

/* PLUGINS */
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

/* ICONS */
import CaretDown from "@/public/images/icon-caret-down.svg";

/* CONSTANTS */
import { COLOR_TAG_OPTIONS } from "@/app/_constants/constants";

/* STORE */
import usePotStore from "@/app/_store/pot.store";

/* SCHEMA */
import { pot_form_schema, PotForm } from "@/app/_constants/_schema/pot.schema";

/* UTILITIES */
import { cn } from "@/app/_utils/helpers";

const MAX_POT_NAME_LENGTH = 30;

const EditPotModal = () => {
    const modal = usePotStore((state) => state.modal);
    const setModal = usePotStore((state) => state.setModal);
    const selected_pot = usePotStore((state) => state.selected_pot);
    const editPot = usePotStore((state) => state.editPot);

    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm<PotForm>({
        resolver: zodResolver(pot_form_schema)
    });

    const [pot_name, setPotName] = useState("");

    const onSubmit = (data: PotForm) => {
        editPot(data);
        setModal("edit_pot", false);
    };

    const onTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input_value = event.target.value;

        if (/^\d*$/.test(input_value)) {
            setValue("target", +input_value);
        }
    };

    useEffect(() => {
        reset({
            id: selected_pot?.id,
            name: selected_pot?.name,
            target: selected_pot?.target,
            color: selected_pot?.color
        });
        setPotName(selected_pot?.name || "");
    }, [reset, selected_pot]);

    return (
        <Dialog
            open={modal.edit_pot}
            onOpenChange={(open) => setModal("edit_pot", open)}
        >
            <DialogContent>
                <DialogHeader className="mb-[1.8rem] md:mb-[2rem]">
                    <DialogTitle>Edit Pot</DialogTitle>
                    <DialogDescription>
                        If your saving targets change, feel free to update your
                        pots.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-[2rem] flex flex-col gap-[1.6rem]">
                        <div className="flex flex-col gap-[.4rem]">
                            <Label htmlFor="name">Pot Name</Label>
                            <Input
                                className="text-preset_4"
                                type="text"
                                id="name"
                                {...register("name")}
                                value={pot_name}
                                onChange={(event) => {
                                    if (
                                        event.target.value.length >
                                        MAX_POT_NAME_LENGTH
                                    ) {
                                        return;
                                    }
                                    setPotName(event.target.value);
                                }}
                            />
                            {errors.name && (
                                <span className="text-end text-preset_5 text-grey-500">
                                    {errors.name.message}
                                </span>
                            )}
                            <span className="text-right text-preset_5 text-grey-500">
                                {MAX_POT_NAME_LENGTH - pot_name.length}{" "}
                                characters left
                            </span>
                        </div>

                        <div className="flex flex-col gap-[.4rem]">
                            <label
                                htmlFor="color_tag"
                                className="text-preset_5_bold text-grey-500"
                            >
                                Target
                            </label>
                            <div
                                className={cn(
                                    "flex h-[4.5rem] items-center gap-[1.2rem] rounded-[.8rem] border border-beige-500 px-[2rem] text-preset_4 text-beige-500",
                                    {
                                        ["border-red"]: errors.target
                                    }
                                )}
                            >
                                <span>$</span>
                                <input
                                    type="text"
                                    className="h-full w-full text-grey-900 outline-none"
                                    placeholder="e.g. 2000"
                                    {...register("target")}
                                    onChange={(event) => {
                                        onTargetChange(event);
                                    }}
                                    value={watch("target")?.toString() || "0"}
                                />
                            </div>
                            {errors.target && (
                                <p className="text-preset_4 text-red">
                                    {errors.target.message}
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
                                name="color"
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        onValueChange={onChange}
                                        value={value}
                                    >
                                        <SelectTrigger
                                            className={cn(
                                                "h-[4.5rem] w-full rounded-[.8rem] border border-beige-500 px-[2rem] !text-preset_4 text-grey-900",
                                                {
                                                    ["border-red"]: errors.color
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

                            {errors.color && (
                                <p className="text-preset_4 text-red">
                                    {errors.color.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        className="w-full !text-preset_4_bold"
                        type="submit"
                    >
                        Save Changes
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditPotModal;
