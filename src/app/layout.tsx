import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className}>
    
      <body ><Navbar/>{children}<Footer/></body>
      
      </html>
  );
}






