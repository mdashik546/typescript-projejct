"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddEditModal from "./_form/form";
import { NavberDailog } from "./_dialog";
import { Switch } from "@/components/ui/switch";
import { useContext } from "react";
import { ThemeContext } from "@/app/_theme/theme-context";

const Navber = () => {
  const pathname = usePathname();
  const { toggleTheme, isDarkMode }: any = useContext(ThemeContext);
  const data = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Info",
      link: "/info",
    },
  ];
  return (
    <div
      className={`flex items-center justify-between  p-3 ${
        isDarkMode ? "bg-orange-500" : "bg-blue-200"
      }`}
    >
      <h2 className="text-2xl font-semibold">Logo</h2>
      <ul className="flex gap-6">
        {data?.map((item) => (
          <li
            key={item.title}
            className={`${
              pathname === item.link ? "text-red-500 active" : ""
            } navber`}
          >
            <Link href={item?.link}> {item?.title} </Link>
          </li>
        ))}
      </ul>
      {/* <NavberDailog buttonText="Login">
        <AddEditModal/>
      </NavberDailog> */}
      <div className="flex items-center gap-3">
        <Link href={"/login"}>Login</Link>
        <Switch onClick={toggleTheme} />
      </div>
    </div>
  );
};

export default Navber;
