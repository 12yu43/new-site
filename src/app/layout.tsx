import type { Metadata } from "next";
import "./globals.css";
import { Tinos } from 'next/font/google'
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "The Executive Headlines - Top business magazine & news headlines sources",
  description: "Top business magazine & news headlines sources",
};
const font = Tinos({ weight: ['400', '700'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        < link rel="icon" href="/favi.jpg" sizes="any" />
      </head>
      <body
        className={` ${font.className} font-sans  antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
