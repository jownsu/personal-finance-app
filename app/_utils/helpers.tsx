import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatToUsd = (value: number) => {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
};

export const randomId = () => {
    return Math.ceil(Math.random() * 9999999);
}