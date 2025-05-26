"use client";
import React, { useState } from "react";
interface DataType {
  name: string;
  profession: string;
  title: string;
  des: string;
}
const data: DataType[] = [
  {
    name: "Ashik",
    profession: "developer",
    title: "E-commerce",
    des: "Increase your online business with Alzaf expert E-commerce solutions. Boost sales, optimize customer experience & expand market reach. Shop smarter!",
  },
  {
    name: "Hridoy",
    profession: "Graphics",
    title: "Web Design",
    des: "Increase your online business with Alzaf expert E-commerce solutions. Boost sales, optimize customer experience & expand market reach. Shop smarter!",
  },
  {
    name: "Monir",
    profession: "Designer",
    title: "E-commerce",
    des: "Increase your online business with Alzaf expert E-commerce solutions. Boost sales, optimize customer experience & expand market reach. Shop smarter!",
  },
];
const Testimonial = () => {
  const [items, setItems] = useState(data[0]);

  return (
    <div>
      <div className="flex gap-3.5 justify-center items-center mt-5">
        {data?.map((item, id: number) => (
          <div
            onClick={() => setItems(item)}
            key={id}
            className={`shadow-2xl p-5 rounded ${
              items.name === item.name && "bg-amber-400 text-white"
            }`}
          >
            <p>{item.name}</p>
            <p>{item.profession}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center w-3/6 mx-auto">
        <p>{items.title}</p>
        <p>{items.des}</p>
      </div>
    </div>
  );
};

export default Testimonial;
