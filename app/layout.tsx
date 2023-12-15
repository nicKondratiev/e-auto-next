import "./globals.css";

import { AuthProvider } from "../app/Providers";

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
