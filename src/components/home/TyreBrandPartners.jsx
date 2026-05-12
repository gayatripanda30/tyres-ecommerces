import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

import bgImg from "../../assets/image.png";

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/products.xlsx")
      .then((response) => response.arrayBuffer())
      .then((data) => {

        // Read Excel file
        const workbook = XLSX.read(data, { type: "array" });

        // Read ONLY "Brands" sheet
        const worksheet = workbook.Sheets["Brands"];

        // Convert sheet to JSON
        const excelData = XLSX.utils.sheet_to_json(worksheet);

        // Add image path
        const formattedData = excelData.map((item) => ({
          ...item,
          img: `/images/${item.image}`,
        }));

        setBrands(formattedData);
      })
      .catch((error) => {
        console.error("Excel Load Error:", error);
      });
  }, []);

  return (
    <div
      className="relative w-full py-20 bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .brand-logo-hover:hover {
          animation: bounce-slow 0.6s ease-in-out;
        }
      `}</style>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-between gap-8 px-4 sm:px-8 md:flex-row md:px-16">

        {/* LEFT */}
        <div className="max-w-md text-center text-white md:text-left slide-in-left">
          <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Brands In Spotlight
          </h2>

          <p className="text-gray-300">
            Convenience Delivered at Doorstep!
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 slide-in-right">

          {brands.map((brand, i) => (
            <Link
              key={i}
              to={`/brand/${brand.slug}`}
              className="flex items-center justify-center w-16 h-16 transition duration-300 bg-white rounded-full shadow-lg sm:w-20 sm:h-20 hover:scale-110 brand-logo-hover"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="object-contain w-10 h-10 sm:h-14 sm:w-14"
              />
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BrandSection;
