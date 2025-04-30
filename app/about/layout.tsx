import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'works | nola',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
