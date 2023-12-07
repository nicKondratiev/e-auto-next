import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "../app/Providers";

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
      <body className="h-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
