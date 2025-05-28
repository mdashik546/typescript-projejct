"use client";
import Footer from "@/components/(custom)/shared/footer/footer";
import Navber from "@/components/(custom)/shared/navber/naber";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const GolbalLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isLogin = pathname.includes("/login");
  return (
    <div>
      {!isLogin && <Navber />}
      {children}
      {!isLogin && <Footer />}
    </div>
  );
};

export default GolbalLayout;
