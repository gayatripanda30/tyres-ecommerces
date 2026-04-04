import { Link } from "react-router-dom";

import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";
import brand7 from "../../assets/brand7.png";
import bgImg from "../../assets/image.png";


const brands = [
  { img: brand1, name: "MRF", slug: "mrf" },
  { img: brand2, name: "Apollo", slug: "apollo" },
  { img: brand3, name: "CEAT", slug: "ceat" },
  { img: brand4, name: "JK", slug: "jk" },
  { img: brand5, name: "TVS", slug: "tvs" },
  { img: brand6, name: "Michelin", slug: "michelin" },
  { img: brand7, name: "Pirelli", slug: "pirelli" },
];

const BrandSection = () => {
  return (
    <div
      className="relative w-full py-20 bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .slide-in-left { animation: slideInLeft 0.8s ease-out; }
        .slide-in-right { animation: slideInRight 0.8s ease-out; }
        .brand-logo-hover:hover { animation: bounce-slow 0.6s ease-in-out; }
      `}</style>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-between px-8 md:flex-row md:px-16">
        
        {/* LEFT TEXT */}
        <div className="max-w-md mb-10 text-white md:mb-0 slide-in-left">
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Brands In Spotlight
          </h2>
          <p className="text-gray-300">
            Convenience Delivered at Doorstep!
          </p>
        </div>

        {/* RIGHT ROUND LOGOS */}
        <div className="flex flex-wrap justify-center gap-6 slide-in-right">
          {brands.map((brand, i) => (
            <Link
              key={i}
              to={`/brand/${brand.slug}`}   
              className="flex items-center justify-center w-20 h-20 transition bg-white rounded-full shadow-lg hover:scale-110 brand-logo-hover"
              style={{animationDelay: `${i * 0.1}s`}}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="object-contain h-14 w-14"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;