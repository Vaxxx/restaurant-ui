import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VAX Eatery",
  description: "A spot to ignite your buds",
  // designed with the help of lama video
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
         <QueryProvider>
             <div>
                 <Notification />
                 <Navbar />
                 {children}
                 <Footer />
             </div>
         </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
