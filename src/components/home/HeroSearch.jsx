//import { useState, useEffect } from "react";
//import hero1 from "../../assets/image.png";
//import hero2 from "../../assets/image16.jpg";
//import hero3 from "../../assets/image14.jpg";

{/*const HeroSearch = () => {
  const [filters, setFilters] = useState({
    width: "",
    height: "",
    rim: "",
  });

  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] overflow-hidden">

      {/* Background Images 
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay 
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content 
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <div className="max-w-xl space-y-4 text-white">

          {/* Heading (Reduced Size) 
          <h1 className="text-2xl font-bold leading-snug md:text-4xl lg:text-5xl">
            Buy Premium Tyres Online in India
            <br />
            <span className="text-yellow-400">
              Fast Delivery. Easy Installation.
            </span>
          </h1>

          {/* Subtext 
          <p className="text-sm text-gray-200 md:text-base">
            Find the perfect tyres for your car or bike. Compare top brands,
            choose nearby fitment or doorstep service.
          </p>

          {/* Search Card 
          <div className="p-5 text-black bg-white shadow-xl rounded-xl">

            <div className="flex flex-col gap-3 md:flex-row">

              <select
                className="w-full p-2 text-sm border rounded-full focus:ring-2 focus:ring-yellow-400"
                onChange={(e) =>
                  setFilters({ ...filters, width: e.target.value })
                }
              >
                <option>Width</option>
                <option>175</option>
                <option>185</option>
                <option>195</option>
              </select>

              <select
                className="w-full p-2 text-sm border rounded-full focus:ring-2 focus:ring-yellow-400"
                onChange={(e) =>
                  setFilters({ ...filters, height: e.target.value })
                }
              >
                <option>Height</option>
                <option>55</option>
                <option>60</option>
                <option>65</option>
              </select>

              <select
                className="w-full p-2 text-sm border rounded-full focus:ring-2 focus:ring-yellow-400"
                onChange={(e) =>
                  setFilters({ ...filters, rim: e.target.value })
                }
              >
                <option>Rim Size</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
              </select>

              <button className="px-5 py-2 text-sm font-semibold text-black transition bg-yellow-400 rounded-full hover:bg-yellow-300">
                Search
              </button>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Enter tyre size or choose vehicle model
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Steps *
      <div className="absolute bottom-0 left-1/2 w-[92%] md:w-[75%] transform -translate-x-1/2 flex flex-wrap justify-between gap-2 px-3 py-3 text-[10px] text-center text-white bg-yellow-500 md:text-xs rounded-t-lg">
        <span>1. SELECT TYRE SIZE</span>
        <span>2. CHOOSE BRAND</span>
        <span>3. BOOK FITMENT</span>
        <span>4. PAY & INSTALL</span>
      </div>

      {/* Dots 
      <div className="absolute flex gap-2 -translate-x-1/2 bottom-16 left-1/2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === current ? "bg-yellow-400" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSearch;*/}


import { useState, useEffect } from "react";
import hero1 from "../../assets/image.png";
import hero2 from "../../assets/image16.jpg";
import hero3 from "../../assets/image14.jpg";

const HeroSearch = () => {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[520px] overflow-hidden sm:h-[460px] lg:h-[420px]">

      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-4 pb-20 sm:px-6 md:px-16">
        <div className="max-w-xl space-y-4 text-white">

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            Buy Premium Tyres Online in India
            <br />
            <span className="text-yellow-400">
              Fast Delivery. Easy Installation.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm text-gray-200 md:text-base">
            Find the perfect tyres for your car or bike. Compare top brands,
            choose nearby fitment or doorstep service.
          </p>

        </div>
      </div>

      {/* Bottom Steps */}
      <div className="absolute bottom-0 left-1/2 w-[94%] md:w-[75%] transform -translate-x-1/2 grid grid-cols-2 sm:grid-cols-4 gap-2 px-3 py-3 text-[10px] sm:text-xs text-center text-white bg-yellow-600 rounded-t-lg">
        <span>1. SELECT TYRE SIZE</span>
        <span>2. CHOOSE BRAND</span>
        <span>3. BOOK FITMENT</span>
        <span>4. PAY & INSTALL</span>
      </div>

      {/* Dots */}
      <div className="absolute flex gap-2 -translate-x-1/2 bottom-20 sm:bottom-16 left-1/2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === current ? "bg-yellow-400" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSearch;
