import "./globals.css";

import { AuthProvider } from "../app/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
