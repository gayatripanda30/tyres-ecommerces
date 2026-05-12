import React from "react";
import { useNavigate } from "react-router-dom";

import tyre from "../../assets/tyre.jpg";
import alloy from "../../assets/lubricant1.png";
import battery from "../../assets/battery.jpg";
import accessories from "../../assets/accessories.jpg";

const collections = [
  {
    title: " Tyres",
    img: tyre,
    link: "/tyres",
  },
  {
  title: "Lubricants",
  img: alloy,
  link: "/products/lubricants", // ✅ correct
},
  {
    title: " Batteries",
    img: battery,
   link: "/products/batteries",
  },
  {
    title: "Accessories",
    img: accessories,
    link: "/products/accessories",
  },
];

const FeaturedCollection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-14 bg-gray-200 sm:px-6 sm:py-16">

      {/* 🔥 Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          Featured Collection
        </h2>
        <p className="mt-2 text-gray-600">
          Get your carts ready!
        </p>
      </div>

      {/* 🔥 Grid */}
      <div className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

        {collections.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.link)}
            className="relative overflow-hidden transition duration-500 shadow-md cursor-pointer rounded-xl group hover:shadow-2xl"
          >
            {/* 🔹 Image */}
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-64 transition duration-500 transform sm:h-[300px] group-hover:scale-110"
            />

            {/* 🔹 Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* 🔹 Title (Animated) */}
            <h3 className="absolute px-3 text-lg font-semibold text-center text-white transition duration-500 transform -translate-x-1/2 bottom-6 left-1/2 md:text-xl sm:translate-y-6 sm:opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              {item.title}
            </h3>

            {/* 🔹 Optional Glow Effect */}
            <div className="absolute inset-0 transition border-2 border-transparent group-hover:border-white/30 rounded-xl"></div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturedCollection;
