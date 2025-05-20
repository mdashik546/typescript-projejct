import Footer from "@/components/(custom)/shared/footer/footer";
import Navber from "@/components/(custom)/shared/navber/naber";
import React, { ReactNode } from "react";

const GolbalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navber />
      {children}
      <Footer />
    </>
  );
};

export default GolbalLayout;
