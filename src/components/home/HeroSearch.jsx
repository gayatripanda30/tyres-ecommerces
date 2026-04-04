import { useState } from "react";
import heroImg from "../../assets/image.png";

const HeroSearch = () => {
  const [filters, setFilters] = useState({
    width: "",
    height: "",
    rim: "",
  });

  return (
    <div className="relative w-full h-[500px]">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .fade-in-up-delay-1 { animation: fadeInUp 0.8s ease-out 0.2s backwards; }
        .fade-in-up-delay-2 { animation: fadeInUp 0.8s ease-out 0.4s backwards; }
        .slide-in-bottom { animation: fadeInUp 0.8s ease-out 0.6s backwards; }
      `}</style>
      {/* Background */}
      <img
        src={heroImg}
        alt="hero"
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-10">
        <div className="max-w-xl text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl fade-in-up">
            Buy tyres online in  <br />New Zealand.
            <br />
            Fit locally.Done.
          </h1>
          <p className="fade-in-up-delay-1">Enter your Rego, vehicle model, or tyre size.
Pick a tyre and choose a fitting station or home delivery.</p>

     {/* Search Box */}
<div className="p-5 text-black bg-white border shadow-lg rounded-xl fade-in-up-delay-2">

  <div className="flex flex-col gap-3 mb-3 md:flex-row">

    <select
      className="w-full p-3 text-black bg-white border rounded"
      onChange={(e) =>
        setFilters({ ...filters, width: e.target.value })
      }
    >
      <option className="text-gray-500">Width</option>
      <option>175</option>
      <option>185</option>
      <option>195</option>
    </select>

    <select
      className="w-full p-3 text-black bg-white border rounded"
      onChange={(e) =>
        setFilters({ ...filters, height: e.target.value })
      }
    >
      <option className="text-gray-500">Height</option>
      <option>55</option>
      <option>60</option>
      <option>65</option>
    </select>

    <select
      className="w-full p-3 text-black bg-white border rounded"
      onChange={(e) =>
        setFilters({ ...filters, rim: e.target.value })
      }
    >
      <option className="text-gray-500">Rim Size</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
    </select>

    <button className="px-6 py-3 font-semibold text-black bg-orange-600 rounded-full hover:bg-orange-700">
      Search
    </button>

  </div>

  <p className="text-sm text-gray-600">
    Select different rear tyre size if needed
  </p>
</div>
        </div>
      </div>

      {/* Bottom Steps */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] flex justify-around py-4 text-sm text-white bg-orange-600 md:text-base rounded-t-xl slide-in-bottom">
        <span>1. SELECT YOUR TYRES</span>
        <span>2. SELECT INSTALLER</span>
        <span>3. ORDER & PAY ONLINE</span>
        <span>4. WE INSTALL YOUR TYRES</span>
      </div>
    </div>
  );
};

export default HeroSearch;