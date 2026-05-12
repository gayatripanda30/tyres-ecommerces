import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import hero1 from "../../assets/image6.jpg";
import hero2 from "../../assets/image3.jpg";
import hero3 from "../../assets/hero1.jpg";

const slides = [
  {
    img: hero1,
    title: "Drive Beyond Limits",
    subtitle: "Engineered for performance, built for every road",
  },
  {
    img: hero2,
    title: "Mega Savings Week",
    subtitle: "Save up to ₹1500 on top tyre brands today",
  },
  {
    img: hero3,
    title: "Grip That You Can Trust",
    subtitle: "Safety, control & comfort in every journey",
  },
];

const ProductHero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // ✅ added

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[440px] overflow-hidden sm:min-h-[560px]">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt=""
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Overlay Card */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">

        <div className="w-full max-w-2xl p-12 text-center text-white border shadow-2xl bg-white/10 backdrop-blur-md rounded-2xl border-white/40">

          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            {slides[current].title}
          </h1>

          <p className="mb-6 text-gray-200 md:text-lg">
            {slides[current].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">

            {/* Shop Now */}
            <button
              onClick={() => navigate("/tyres")}
              className="px-6 py-2 font-semibold text-black transition bg-yellow-400 rounded-lg hover:bg-yellow-300"
            >
              Shop Now
            </button>

            {/* ✅ View Offers Button */}
            <button
              onClick={() => navigate("/special-offers")}
              className="px-6 py-2 font-semibold transition border border-white rounded-lg hover:bg-white hover:text-black"
            >
              View Offers
            </button>

          </div>

        </div>
      </div>

      {/* Dots */}
      <div className="absolute z-10 flex justify-center w-full gap-2 bottom-5">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              i === current ? "bg-yellow-400" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductHero;
