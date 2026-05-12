import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiClock, HiTrendingUp } from "react-icons/hi";
import { FaFire, FaBoxOpen, FaCrown } from "react-icons/fa";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";

// ✅ HERO IMAGES
import hero1 from "../../assets/image8.jpg";
import hero2 from "../../assets/image5.jpg";
import hero3 from "../../assets/image4.jpg";

// ✅ CARD IMAGES
import michelin from "../../assets/offer4.png";
import pirelli from "../../assets/offer5.png";
import bridgestone from "../../assets/image7.jpg";

const SpecialOffers = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("all");
  const heroImages = [hero1, hero2, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Special Offers Data
  const specialOffers = [
    {
      id: 1,
      type: "flash-sale",
      brand: "Michelin",
      title: "Pilot Sport 4S",
      originalPrice: 1050,
      discountedPrice: 819,
      discount: 22,
      image: michelin,
      icon: <FaFire className="text-red-500" />,
      description: "Premium performance tyre",
      validity: "Until April 7",
    },
    {
      id: 2,
      type: "bundle",
      brand: "Pirelli",
      title: "Buy 4 Get Installation Free",
      originalPrice: 2000,
      discountedPrice: 1680,
      discount: 16,
      image: pirelli,
      icon: <FaBoxOpen className="text-blue-500" />,
      description: "Free installation included",
      validity: "Until April 30",
    },
    {
      id: 3,
      type: "seasonal",
      brand: "Bridgestone",
      title: "Spring Sale",
      originalPrice: 1500,
      discountedPrice: 1185,
      discount: 21,
      image: bridgestone,
      icon: <FaCrown className="text-yellow-500" />,
      description: "Best for all seasons",
      validity: "Until May 15",
    },
  ];

  const filteredOffers =
    selectedTab === "all"
      ? specialOffers
      : specialOffers.filter((o) => o.type === selectedTab);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

{/* HERO SECTION */}
<div className="relative h-[220px] md:h-[400px] overflow-hidden">
  {heroImages.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        currentSlide === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={img}
        alt="hero"
        className="object-cover w-full h-full"
      />
    </div>
  ))}


        {/* Overlay Card */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="w-full max-w-3xl p-5 text-center border shadow-lg sm:w-[80%] md:w-[60%] lg:w-[50%] sm:p-8 lg:p-10 bg-white/20 backdrop-blur-sm rounded-2xl border-white/10">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Special Offers
            </h1>
            <p className="mb-6 text-sm text-gray-200 sm:text-lg md:text-xl">
              Best deals on premium tyres – grab them before they are gone!
            </p>

         
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-3 px-4 my-8">
        {["all", "flash-sale", "bundle", "seasonal"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              selectedTab === tab
                ? "bg-blue-900 text-white"
                : "bg-gray-100 border-2 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {tab.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* OFFER CARDS */}
      <div className="grid gap-8 px-4 mx-auto sm:px-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {filteredOffers.map((offer) => (
          <div
            key={offer.id}
            className="overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="object-cover w-full h-56 md:h-64"
              />
              <div className="absolute px-3 py-1 text-white bg-red-900 rounded-full top-3 left-3">
                -{offer.discount}%
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                {offer.icon}
                <span className="text-sm font-bold text-gray-500">
                  {offer.brand}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-bold">{offer.title}</h3>
              <p className="mb-3 text-sm text-gray-600">{offer.description}</p>

              {/* Price */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-black">
                  ₹{offer.discountedPrice}
                </span>
                <span className="text-gray-400 line-through">
                  ₹{offer.originalPrice}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                <HiClock /> {offer.validity}
              </div>

              <button
                onClick={() => navigate("/tyres")}
                className="w-full px-5 py-2 font-bold text-white transition bg-blue-900 rounded-full sm:w-auto hover:bg-blue-800"
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TERMS & CONDITIONS */}
      <div className="w-[calc(100%-2rem)] max-w-3xl px-5 py-4 mx-auto mt-12 bg-yellow-50 rounded-xl">
        <h3 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
          <HiTrendingUp /> Terms & Conditions
        </h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>✓ Offers valid while stock lasts</li>
          <li>✓ Cannot combine offers</li>
          <li>✓ 2-year warranty included</li>
        </ul>
      </div>

      <Footer />
      <WhatsAppChatbot/>
    </div>
  );
};

export default SpecialOffers;
