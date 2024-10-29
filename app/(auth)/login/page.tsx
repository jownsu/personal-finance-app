"use client";

/* REACT */
import Link from "next/link";
import { useState } from "react";

/* COMPONENTS */
import Button from "@/app/_components/ui/Button";
import { Input } from "@/app/_components/ui/Input";
import { Label } from "@/app/_components/ui/Label";

/* PLUGINS */
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/* SCHEMA */
import { login_schema, LoginSchema } from "@/app/_schema/auth.schema";

/* ICONS */
import IconShowPassword from "@/public/images/icon-show-password.svg";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginSchema>({
        resolver: zodResolver(login_schema)
    });

    const [show_password, setShowPassword] = useState(true);

    const onSubmit: SubmitHandler<LoginSchema> = (data) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full max-w-[56rem] flex-col gap-[3.2rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem]"
        >
            <h1 className="text-preset_1">Login</h1>
            <div className="grid gap-[1.6rem]">
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
                    <Label htmlFor="password">Password</Label>
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
                        <span className="text-right text-preset_5 text-grey-500">
                            {errors.password.message}
                        </span>
                    )}
                </div>
            </div>

            <Button type="submit" size="full">
                Login
            </Button>

            <div className="text-center text-preset_4 text-grey-500">
                Need to create an account?{" "}
                <Link
                    className="text-preset_4_bold text-gray-900 underline"
                    href="/register"
                >
                    Sign Up
                </Link>
            </div>
        </form>
    );
};

export default LoginPage;
