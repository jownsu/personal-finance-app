import MobileNav from "../_components/MobileNav";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen flex-col bg-light_grey">
            {children}
            <MobileNav />
        </main>
    );
}
