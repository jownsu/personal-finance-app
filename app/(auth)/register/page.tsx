/* REACT */
import Link from "next/link";

/* COMPONENTS */
import Button from "@/app/_components/ui/Button";
import { Input } from "@/app/_components/ui/Input";
import { Label } from "@/app/_components/ui/Label";

/* ICON */
import IconShowPassword from "@/public/images/icon-show-password.svg";

const RegisterPage = () => {
    return (
        <form className="flex w-full max-w-[56rem] flex-col gap-[3.2rem] rounded-[1.2rem] bg-white px-[2rem] py-[2.4rem] md:p-[3.2rem]">
            <h1 className="text-preset_1">Sign Up</h1>
            <div className="grid gap-[1.6rem]">
                <div className="grid gap-[.4rem]">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" />
                </div>
                <div className="grid gap-[.4rem]">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" />
                </div>
                <div className="relative grid gap-[.4rem]">
                    <Label htmlFor="password">Create Password</Label>
                    <Input type="password" id="password" />
                    <button
                        type="button"
                        aria-label="Show password"
                        className="absolute right-[2rem] top-[3rem]"
                    >
                        <IconShowPassword />
                    </button>
                    <span className="text-end text-preset_5 text-grey-500">
                        Passwords must be at least 8 characters
                    </span>
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
