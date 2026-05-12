import React from "react";
import { Link } from "react-router-dom";
import useExcelData from "../../hooks/useExcelData";
import bgImg from "../../assets/image.png";
import "./TyreBrandPartners.css";

const TyreBrandPartners = () => {
  const { data: brands, loading, error } = useExcelData(
    "/products.xlsx",
    "Brands",
    (item) => ({
      ...item,
      img: `/images/${item.image}`,
    })
  );

  if (loading) {
    return (
      <div className="relative w-full py-20 bg-center bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex items-center justify-center text-white">
          <div className="text-xl">Loading tyre brands...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full py-20 bg-center bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex items-center justify-center text-white">
          <div className="text-xl">Failed to load brands: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full py-20 bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-between px-8 md:flex-row md:px-16">

        {/* LEFT */}
        <div className="max-w-md mb-10 text-white md:mb-0 slide-in-left">
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Brands In Spotlight
          </h2>

          <p className="text-gray-300">
            Convenience Delivered at Doorstep!
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap justify-center gap-6 slide-in-right">

          {brands.map((brand, i) => (
            <Link
              key={brand.slug || i} // Use slug if available, else index
              to={`/brand/${brand.slug}`}
              className="flex items-center justify-center w-20 h-20 transition duration-300 bg-white rounded-full shadow-lg hover:scale-110 brand-logo-hover"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="object-contain h-14 w-14"
                onError={(e) => {
                  e.target.src = "/images/default-brand.png"; // Fallback image
                }}
              />
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TyreBrandPartners;