import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className}>
      <body>
        <div>
          <Navbar2 />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
