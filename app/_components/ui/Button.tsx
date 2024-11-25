import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../_utils/helpers";

interface Props
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof btnVariants> {
            asChild?: boolean;
        }

export const btnVariants = cva(
    "h-[5.3rem] rounded-[.8rem] disabled:opacity-25 font-semibold duration-200 px-[2.7rem] text-preset_4_bold",
    {
        variants: {
            variant: {
                default: "bg-gray-900 text-white hover:bg-grey-500",
                secondary: "bg-beige-100 text-gray-900 hover:bg-white hover:outline hover:outline-1 hover:outline-beige-500",
            },
            size: {
                default: "w-fit",
                full: "w-full"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

const Button = forwardRef<HTMLButtonElement, Props>(
    ({ className, size, variant, asChild = false, ...rest }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(btnVariants({ variant, size, className }))}
                {...rest}
            />
        );
    }
);
Button.displayName = "Button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof btnVariants> {
  asChild?: boolean
}

export default Button;
