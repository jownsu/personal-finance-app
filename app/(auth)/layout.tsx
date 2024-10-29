import Illustration from "@/public/images/illustration-authentication.svg";
import FinanceLogo from "@/public/images/logo-large.svg";

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="md:bg-light_grey h-full lg:flex">
            <nav className="flex justify-center rounded-b-[.8rem] bg-grey-900 py-[2.4rem] lg:hidden">
                <FinanceLogo className="h-[2.5rem] w-[12.1rem]" />
            </nav>
            <aside className="hidden basis-[60rem] flex-col p-[2rem] lg:flex">
                <div className="relative flex h-full w-full flex-col justify-between rounded-[.8rem] bg-grey-900 p-[4rem]">
                    <FinanceLogo className="relative z-50 h-[2.5rem] w-[12.1rem]" />

                    <div className="z-50 grid gap-[2.4rem] text-white">
                        <h2 className="text-preset_1">
                            Keep track of your money and save for your future
                        </h2>
                        <p className="text-preset_4">
                            Personal finance app puts you in control of your
                            spending. Track transactions, set budgets, and add
                            to savings pots easily.
                        </p>
                    </div>
                    <Illustration className="absolute left-0 top-0 z-10 h-full w-full" />
                </div>
            </aside>
            <div className="flex h-full items-center justify-center px-[1.6rem] lg:flex-1">
                {children}
            </div>
        </main>
    );
}
