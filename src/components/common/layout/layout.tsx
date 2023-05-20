import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface PropsLayout {
  children: React.ReactNode;
  logoColor?: string;
}

export default function Layout({ children, logoColor }: PropsLayout) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
