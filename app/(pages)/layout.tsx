import NavigationBar from "../_components/NavigationBar";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-light_grey flex min-h-screen flex-col lg:flex-row-reverse lg:gap-[4rem] pb-[5.2rem]">
            <div className="flex-1">{children}</div>
            <NavigationBar />
        </main>
    );
}
