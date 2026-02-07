import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

import "./globals.css";
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"]
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Book Store",
  description: "Book store project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
