import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Lenis from "@/components/Lenis";

const inter = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hillaryours",
  description: "Hillary Abigail official fanbase",
  keywords: [
    "lily",
    "jkt48",
    "hillary",
    "abigail",
    "hillaryours",
    "fanbase",
    "fjkt48",
  ],
  authors: {
    name: "Muhammad Fadhil Kholaf",
    url: "https://fadhilkholaf.my.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary-lavender">
      <body className={inter.className}>
        <Grain />
        <Navbar />
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
