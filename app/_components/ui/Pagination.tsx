import * as React from "react";

import { cn } from "@/app/_utils/helpers";
import LeftIcon from "@/public/images/icon-caret-left.svg";
import RightIcon from "@/public/images/icon-caret-right.svg";
import EllipsisIcon from "@/public/images/icon-ellipsis.svg";
import { ButtonProps } from "./Button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
    />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn("flex flex-row items-center gap-[.8rem]", className)}
        {...props}
    />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationLink = ({
    className,
    isActive,
    ...props
}: PaginationLinkProps) => (
    <button
        aria-current={isActive ? "page" : undefined}
        className={cn(
            "grid size-[4rem] place-items-center rounded-[.8rem] border border-beige-500 !text-preset_4 text-grey-900",
            {
                "bg-grey-900 text-white": isActive
            },
            className
        )}
        {...props}
    />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="default"
        className={cn("mr-[.35rem] w-[4.8rem] flex items-center justify-center md:justify-between md:w-[9.5rem] md:px-[1.6rem]", className)}
        {...props}
    >
        <LeftIcon className="size-[1rem] fill-grey-500" /> <span className="hidden md:block text-grey-900 text-preset_4">Prev</span>
    </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to next page"
        size="default"
        className={cn("ml-[.35rem] w-[4.8rem] flex items-center justify-center md:justify-between md:w-[9.5rem] md:px-[1.6rem]", className)}
        {...props}
    >
        <span className="hidden md:block text-grey-900 text-preset_4">Next</span><RightIcon className="size-[1rem] fill-grey-500" />
    </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
    className,
    ...props
}: React.ComponentProps<"span">) => (
    <span
        aria-hidden
        className={cn(
            "flex size-[4rem] items-end justify-center rounded-[.8rem] border border-beige-500 pb-[.5rem]",
            className
        )}
        {...props}
    >
        <EllipsisIcon className="size-[1.6rem]" />
        <span className="sr-only">More pages</span>
    </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
};
