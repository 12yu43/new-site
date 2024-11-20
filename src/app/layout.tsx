import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "The Executive Headlines - Top business magazine & news headlines sources",
  description: "Top business magazine & news headlines sources",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
