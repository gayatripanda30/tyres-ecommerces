import { useEffect, useState } from "react";

// 👉 Replace these with your own images (put in /assets)
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/brand3.png";

const slides = [
  {
    img: hero1,
  },
  {
    img: hero2,
    title: "Unbeatable Deals",
    subtitle: "Flat ₹1000 OFF on premium tyres",
  },
  {
    img: hero3,
    title: "Performance Meets Comfort",
    subtitle: "Upgrade your ride today",
  },
];

const ProductHero = () => {
  const [current, setCurrent] = useState(0);

  // 👉 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      
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

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
          {slides[current].title}
        </h1>

        <p className="text-lg md:text-xl mb-6 text-gray-200 animate-fadeIn delay-200">
          {slides[current].subtitle}
        </p>

        <div className="flex gap-4 animate-fadeIn delay-300">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
            Shop Now
          </button>

          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
            View Deals
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-10">
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