import React from "react";
import Navbar from "./Navbar/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen bg-background ${inter.variable} font-sans`}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
