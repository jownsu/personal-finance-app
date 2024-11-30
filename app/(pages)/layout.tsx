import NavigationBar from "../_components/NavigationBar";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-light_grey flex h-screen min-h-screen flex-col pb-[5.2rem] lg:flex-row-reverse lg:gap-[4rem] lg:pb-0">
            <div className="h-full flex-1 md:overflow-auto">{children}</div>
            <NavigationBar />
        </main>
    );
}
