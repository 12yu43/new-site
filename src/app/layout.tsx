import type { Metadata } from "next";
import "./globals.css";
import { Tinos, Merriweather } from 'next/font/google';
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "The Executive Headlines - Top business magazine & news headlines sources",
  description: "Top business magazine & news headlines sources",
};

const tinosFont = Tinos({ weight: ['400', '700'], subsets: ['latin'] });
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${tinosFont.className} font-sans antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
