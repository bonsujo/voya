import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";


const playfair = Playfair_Display ({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export const metadata: Metadata = {
  title: "Voya",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
