import * as React from "react";
import { cn } from "@/app/_utils/helpers";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "placeholder:text-muted-foreground flex h-[4.5rem] w-full rounded-[.8rem] border border-beige-500 px-[2rem] file:border-0 file:bg-transparent focus-visible:border focus-visible:border-gray-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
