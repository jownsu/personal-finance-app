import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import AuthProvider from "./_providers/AuthProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const public_sans = Public_Sans({
    subsets: ["latin"],
    variable: "--font-public",
    weight: ["400", "700"]
});

export const metadata: Metadata = {
    title: "Personal finance App",
    description: "Personal finance app"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon-32x32.png" sizes="any" />
            <body className={public_sans.className}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
