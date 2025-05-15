import Footer from "@/(components)/shared/footer/footer";
import Navber from "@/(components)/shared/navber/naber";
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
