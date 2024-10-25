"use client";

/* REACT */
import Link from "next/link";

/* COMPONENTS */
import Button from "@/app/_components/ui/Button";
import { Input } from "@/app/_components/ui/Input";
import { Label } from "@/app/_components/ui/Label";

/* PLUGINS */
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/* SCHEMA */
import { register_schema, RegisterSchema } from "@/app/_schema/auth.schema";

/* ICON */
import IconShowPassword from "@/public/images/icon-show-password.svg";
import { useState } from "react";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterSchema>({
        resolver: zodResolver(register_schema)
    });

    const [show_password, setShowPassword] = useState(true);

    const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full max-w-[56rem] flex-col gap-[3.2rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem]"
        >
            <h1 className="text-preset_1">Sign Up</h1>
            <div className="grid gap-[1.6rem]">
                <div className="grid gap-[.4rem]">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        className="text-preset_4"
                        type="text"
                        id="name"
                        {...register("name")}
                    />
                    {errors.name && (
                        <span className="text-end text-preset_5 text-grey-500">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="grid gap-[.4rem]">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className="text-preset_4"
                        type="email"
                        id="email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <span className="text-end text-preset_5 text-grey-500">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="relative grid gap-[.4rem]">
                    <Label htmlFor="password">Create Password</Label>
                    <Input
                        className="text-preset_4"
                        type={show_password ? "password" : "text"}
                        id="password"
                        {...register("password")}
                    />
                    <button
                        type="button"
                        aria-label="Show password"
                        className="absolute right-[2rem] top-[3rem]"
                        onClick={() => setShowPassword(!show_password)}
                    >
                        <IconShowPassword />
                    </button>
                    {errors.password && (
                        <span className="text-end text-preset_5 text-grey-500">
                            {errors.password.message}
                        </span>
                    )}
                </div>
            </div>

            <Button type="submit" size="full">
                Create Account
            </Button>

            <div className="text-center text-preset_4 text-grey-500">
                Already have an account?{" "}
                <Link
                    className="text-preset_4_bold text-gray-900 underline"
                    href="/login"
                >
                    Login
                </Link>
            </div>
        </form>
    );
};

export default RegisterPage;
