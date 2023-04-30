import React from "react";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={`min-h-screen bg-background`}>
        <Navbar />
        <main>
          <div className="container">{children}</div>
        </main>
      </div>
    </>
  );
}
