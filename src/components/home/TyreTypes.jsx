import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import tyre1 from "../../assets/tyre1.png";
import tyre2 from "../../assets/tyre2.png";
import tyre3 from "../../assets/tyre3.png";
import tyre4 from "../../assets/tyre4.png";
import tyre5 from "../../assets/tyre5.png";
import tyre6 from "../../assets/tyre6.png";
import tyre7 from "../../assets/tyre7.png";
import tyre8 from "../../assets/tyre8.png";
import tyre9 from "../../assets/tyre9.png";
import tyre10 from "../../assets/tyre10.png";
import tyre11 from "../../assets/tyre11.png";
import tyre12 from "../../assets/tyre12.png";

import pirelli from "../../assets/brand7.png";
import michelin from "../../assets/brand6.png";
import apollo from "../../assets/brand2.png";
import mrf from "../../assets/brand1.png";
import ceat from "../../assets/brand3.png";

const tyres = [
  { name: "SCORPION VERDE AS", brand: "pirelli", image: tyre1, brandLogo: pirelli, rating: 4.6, reviews: 1733, price: 334 },
  { name: "DUELER HP SPORT", brand: "apollo", image: tyre2, brandLogo: apollo, rating: 4.6, reviews: 1792, price: 325 },
  { name: "PILOT SPORT 4 S", brand: "michelin", image: tyre3, brandLogo: michelin, rating: 4.8, reviews: 5931, price: 960 },
  { name: "CINTURATO P7", brand: "mrf", image: tyre4, brandLogo: mrf, rating: 4.6, reviews: 3323, price: 334 },
  { name: "LATITUDE SPORT 3", brand: "ceat", image: tyre5, brandLogo: ceat, rating: 4.5, reviews: 1700, price: 350 },
  { name: "DUELER AT 697 OWL", brand: "pirelli", image: tyre6, brandLogo: pirelli, rating: 4.3, reviews: 1300, price: 310 },
  { name: "DYNAPRO HP2 RA33", brand: "michelin", image: tyre7, brandLogo: michelin, rating: 4.7, reviews: 2200, price: 870 },
  { name: "SCORPION AT PLUS", brand: "apollo", image: tyre8, brandLogo: apollo, rating: 4.1, reviews: 800, price: 260 },
  { name: "DYNAPRO HP2 RA33", brand: "mrf", image: tyre9, brandLogo: mrf, rating: 4.6, reviews: 1400, price: 390 },
  { name: "SCORPION AT PLUS", brand: "pirelli", image: tyre10, brandLogo: pirelli, rating: 4.2, reviews: 1000, price: 300 },
  { name: "ECOPIA EP 500", brand: "ceat", image: tyre11, brandLogo: ceat, rating: 4.9, reviews: 3000, price: 1100 },
  { name: "POTENZA ADRENALIN RE003", brand: "mrf", image: tyre12, brandLogo: mrf, rating: 4.3, reviews: 900, price: 280 },
];

const TyreTypes = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // ✅ ADDED
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 > tyres.length - cardsToShow ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? tyres.length - cardsToShow : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 > tyres.length - cardsToShow ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsToShow, index]);

  return (
    <section className="px-4 bg-gray-100 sm:px-6 py-14">
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .fade-in-down { animation: fadeInDown 0.8s ease-out; }
        .scale-in { animation: scaleIn 0.6s ease-out; }
      `}</style>

      <h2 className="mb-10 text-3xl font-bold text-center text-gray-800 sm:text-4xl fade-in-down">
        Our Popular 4x4 Tyres
      </h2>

      <div className="relative mx-auto overflow-hidden max-w-7xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / cardsToShow)}%)`,
          }}
        >
          {tyres.map((tyre, i) => (
            <div
              key={i}
              className="flex-shrink-0 p-3 scale-in"
              style={{
                width: `${100 / cardsToShow}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* ✅ CLICK ADDED HERE */}
              <div
                onClick={() => navigate(`/brand/${tyre.brand}`)}
                className="overflow-hidden transition duration-300 bg-white shadow-md cursor-pointer rounded-2xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              >

                <div className="flex justify-end p-3">
                  <img
                    src={tyre.brandLogo}
                    alt="brand"
                    className="object-contain h-6"
                  />
                </div>

                <div className="flex justify-center px-6 pb-4">
                  <img
                    src={tyre.image}
                    alt={tyre.name}
                    className="object-contain h-36"
                  />
                </div>

                <div className="px-5 pb-5">
                  <h3 className="font-semibold text-gray-800">
                    {tyre.name}
                  </h3>

                  <div className="mt-1 text-yellow-500">
                    {"★".repeat(Math.floor(tyre.rating))}
                    {"☆".repeat(5 - Math.floor(tyre.rating))}
                  </div>

                  <p className="text-sm text-gray-500">
                    {tyre.rating}/5 ({tyre.reviews} reviews)
                  </p>
                </div>

                <div className="flex items-center justify-between px-5 py-4 border-t bg-gray-50">
                  <div>
                    <p className="text-sm text-gray-500">From</p>
                    <p className="text-lg font-bold text-gray-800">
                      ${tyre.price} ea
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button onClick={prevSlide} className="absolute left-0 px-4 py-2 -translate-y-1/2 bg-yellow-400 rounded-md shadow top-1/2 hover:bg-yellow-500">
          ←
        </button>

        <button onClick={nextSlide} className="absolute right-0 px-4 py-2 -translate-y-1/2 bg-yellow-400 rounded-md shadow top-1/2 hover:bg-yellow-500">
          →
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: tyres.length - cardsToShow + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TyreTypes;
