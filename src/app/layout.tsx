import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className}>
    
      <body >
        <div><Navbar/></div>{children}<Footer/></body>
      
      </html>
  );
}






