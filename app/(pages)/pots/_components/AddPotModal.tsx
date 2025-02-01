"use client";

/* REACT */
import { ChangeEvent, useState } from "react";

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
import { Input } from "@/app/_components/ui/Input";

/* PLUGINS */
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/app/_components/ui/Label";

/* ICONS */
import CaretDown from "@/public/images/icon-caret-down.svg";

/* CONSTANTS */
import { COLOR_TAG_OPTIONS } from "@/app/_constants/constants";

/* UTILITIES */
import { pot_form_schema, PotForm } from "@/app/_constants/_schema/pot.schema";
import { cn } from "@/app/_utils/helpers";

const MAX_POT_NAME_LENGTH = 30;

const AddPotModal = () => {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<PotForm>({
        resolver: zodResolver(pot_form_schema)
    });

    const [pot_name, setPotName] = useState("");

    const onSubmit = (data: PotForm) => {
        console.log(data);
    };

    const onTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input_value = event.target.value;

        if (/^\d*$/.test(input_value)) {
            setValue("target", +input_value);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    type="button"
                    className="px-[1.6rem] !text-preset_4_bold"
                >
                    + Add New Pot
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="mb-[1.8rem] md:mb-[2rem]">
                    <DialogTitle>Add New Pot</DialogTitle>
                    <DialogDescription>
                        Create a pot to set savings targets. These can help keep
                        you on track as you save for special purchases.
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
                                    value={watch("target") || ""}
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
                                name="theme"
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        onValueChange={onChange}
                                        value={value}
                                    >
                                        <SelectTrigger
                                            className={cn(
                                                "h-[4.5rem] w-full rounded-[.8rem] border border-beige-500 px-[2rem] !text-preset_4 text-grey-900",
                                                {
                                                    ["border-red"]: errors.theme
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

                            {errors.theme && (
                                <p className="text-preset_4 text-red">
                                    {errors.theme.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        className="w-full !text-preset_4_bold"
                        type="submit"
                    >
                        Add Pot
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddPotModal;
