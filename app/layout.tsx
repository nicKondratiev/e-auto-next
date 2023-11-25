import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex justify-center bg-gray-200 py-5`}
      >
        <div className="flex w-full flex-col items-center gap-4 px-20">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
