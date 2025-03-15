import type { Metadata } from "next";
import { Anek_Gurmukhi } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const anek = Anek_Gurmukhi({
  subsets: ["gurmukhi"],
  display: "swap",
  variable: "--font-anek-gurmukhi",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anek.variable} antialiased pt-20`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
