"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddEditModal from "./_form/form";
import { NavberDailog } from "./_dialog";

const Navber = () => {
  const pathname = usePathname();

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
    <div className="flex items-center justify-between m-2">
      <h2 className="text-2xl font-semibold">Logo</h2>
      <ul className="flex gap-6">
        {data?.map((item) => (
          <li
            key={item.title}
            className={pathname === item.link ? "text-red-500" : ""}
          >
            <Link href={item?.link}> {item?.title} </Link>
          </li>
        ))}
      </ul>
      <NavberDailog buttonText="Login">
        <AddEditModal/>
      </NavberDailog>
    </div>
  );
};

export default Navber;
