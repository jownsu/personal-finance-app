import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import AuthProvider from "./_providers/AuthProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const instrument_sans = Instrument_Sans({ subsets: ["latin"] });

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
            <body className={instrument_sans.className}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
