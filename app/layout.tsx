import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laracamp - Home",
  description: "Next JS APP - Laracamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}
