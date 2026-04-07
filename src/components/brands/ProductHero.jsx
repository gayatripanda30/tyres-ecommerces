import React from "react";

const ProductHero = ({ title, subtitle, imageSrc }) => {
  return (
    <div
     className="relative flex items-center justify-center w-full bg-center bg-cover h-96 md:h-80 lg:h-96"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Overlay Card */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="px-8 py-12 space-y-6 text-center text-white border shadow-2xl bg-white/1 backdrop-blur-md rounded-2xl border-white/20">
          {/* Title */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-green-100 sm:text-xl md:text-2xl">
            {subtitle || "Experience Superior Performance & Safety"}
          </p>

          {/* Stats */}
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row sm:gap-8">
            <div className="flex items-center justify-center gap-2">
              {/*<span className="text-2xl">⭐</span>*/}
              <span className="text-base font-semibold">4.6/5 Rated</span>
            </div>

            <div className="flex items-center justify-center gap-2">
    
              <span className="text-base font-semibold">
                50K+ Happy Customers
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>
  );
};
export default ProductHero;