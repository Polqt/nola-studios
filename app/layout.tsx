import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/inter';

export const metadata: Metadata = {
  title: "home | nola",
  description: "home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
