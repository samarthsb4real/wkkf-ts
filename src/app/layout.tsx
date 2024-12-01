import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className}>
      <Head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></Head>
      <body>
        <div>
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
