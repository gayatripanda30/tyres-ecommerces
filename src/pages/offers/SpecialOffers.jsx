import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiClock, HiTrendingUp, HiGift, HiSparkles } from "react-icons/hi";

const SpecialOffers = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("all");

  const specialOffers = [
    {
      id: 1,
      type: "flash-sale",
      brand: "Michelin",
      title: "PILOT SPORT 4S - Ultimate Sports Car Tyre",
      originalPrice: 1050,
      discountedPrice: 819,
      discount: 22,
      image: "🚗",
      description: "Premium performance with exceptional handling",
      validity: "Until April 7, 2026",
      badge: "🔥 FLASH SALE",
      timeLeft: "5",
    },
    {
      id: 2,
      type: "bundle",
      brand: "Pirelli",
      title: "Buy 4 Tyres - Get Installation FREE",
      originalPrice: 2000,
      discountedPrice: 1680,
      discount: 16,
      image: "⚙️",
      description: "Free professional installation at partner service centers",
      validity: "Until April 30, 2026",
      badge: "🎁 BUNDLE OFFER",
      included: "Mounting, Balancing, Wheel Alignment Check",
    },
    {
      id: 3,
      type: "seasonal",
      brand: "Bridgestone",
      title: "Spring Tyre Sale - All Season Collection",
      originalPrice: 1500,
      discountedPrice: 1185,
      discount: 21,
      image: "🌱",
      description: "Perfect for spring and summer driving",
      validity: "Until May 15, 2026",
      badge: "🌿 SEASONAL DEAL",
    },
    {
      id: 4,
      type: "loyalty",
      brand: "Pirelli + Michelin",
      title: "Loyalty Rewards - Earn 20% Extra Points",
      originalPrice: "Points",
      discountedPrice: "20% Bonus",
      discount: 20,
      image: "⭐",
      description: "Redeem on your next purchase",
      validity: "Ongoing",
      badge: "👑 LOYALTY EXCLUSIVE",
      requirement: "For registered members",
    },
    {
      id: 5,
      type: "new-launch",
      brand: "Bridgestone",
      title: "ECOPIA EP500 - Eco-Friendly Tyres",
      originalPrice: 550,
      discountedPrice: 451,
      discount: 18,
      image: "🌍",
      description: "Fuel-efficient & environmentally conscious",
      validity: "Until May 31, 2026",
      badge: "✨ NEW LAUNCH",
    },
    {
      id: 6,
      type: "bulk",
      brand: "All Brands",
      title: "Bulk Order Discount - Buy More, Save More",
      originalPrice: "Variable",
      discountedPrice: "Up to 25%",
      discount: 25,
      image: "📦",
      description: "4+ sets: 10% | 8+ sets: 18% | 12+ sets: 25%",
      validity: "Ongoing",
      badge: "💼 FLEET DEAL",
      requirement: "Minimum 4 sets required",
    },
  ];

  const filteredOffers = selectedTab === "all" ? specialOffers : specialOffers.filter((offer) => offer.type === selectedTab);

  const tabs = [
    { id: "all", label: "All Offers", icon: "🎯" },
    { id: "flash-sale", label: "Flash Sales", icon: "🔥" },
    { id: "bundle", label: "Bundles", icon: "📦" },
    { id: "loyalty", label: "Loyalty", icon: "👑" },
    { id: "bulk", label: "Bulk Orders", icon: "💼" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden text-white bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 bg-white rounded-full -right-32 w-96 h-96 mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bg-white rounded-full -bottom-32 -left-32 w-96 h-96 mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        <div className="relative px-6 mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl animate-bounce">🎉</span>
            <h1 className="text-5xl font-black tracking-tight md:text-6xl animate-slideInLeft">
              Special Offers
            </h1>
            <span className="text-5xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              🎊
            </span>
          </div>
          <p className="text-lg text-yellow-100 md:text-xl animate-slideInRight">
            Incredible deals on premium tyres. Save big on every purchase!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full px-6 py-12 mx-auto max-w-7xl">
        {/* Stats Section */}
        <div className="grid gap-4 mb-12 md:grid-cols-4">
          {[
            { icon: "🔥", title: "Flash Offers", value: "Up to 25% OFF" },
            { icon: "⏰", title: "Limited Time", value: "Until End of Month" },
            { icon: "🚚", title: "Free Shipping", value: "On All Orders" },
            { icon: "✅", title: "2-Year", value: "Warranty Included" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 transition-all bg-white border-2 border-yellow-300 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-2 text-3xl">{stat.icon}</div>
              <h4 className="mb-1 font-bold text-gray-800">{stat.title}</h4>
              <p className="text-sm font-bold text-orange-600">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-bold rounded-lg transition-all whitespace-nowrap ${
                  selectedTab === tab.id
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-800 border-2 border-gray-300 hover:border-orange-400"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredOffers.map((offer, idx) => (
            <div
              key={offer.id}
              className="relative overflow-hidden transition-all duration-300 bg-white border-2 border-gray-200 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Badge */}
              <div className="absolute z-10 top-4 right-4">
                <span className="inline-block px-4 py-2 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-red-500 to-orange-500">
                  {offer.badge}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative flex items-center justify-center h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
                <div className="transition-transform duration-300 text-8xl group-hover:scale-110">
                  {offer.image}
                </div>
                {offer.discount > 0 && (
                  <div className="absolute px-4 py-2 text-lg font-bold text-white bg-red-600 rounded-lg bottom-4 left-4">
                    -{offer.discount}%
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="mb-2 text-xs font-bold tracking-widest text-orange-600 uppercase">
                  {offer.brand}
                </p>
                <h3 className="mb-2 text-lg font-bold text-gray-800 line-clamp-2">
                  {offer.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {offer.description}
                </p>

                {/* Price Section */}
                {typeof offer.originalPrice === "number" && (
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-green-600">
                      ${offer.discountedPrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${offer.originalPrice}
                    </span>
                  </div>
                )}

                {typeof offer.originalPrice !== "number" && (
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-green-600">
                      {offer.discountedPrice}
                    </p>
                    <p className="text-sm text-gray-600">{offer.originalPrice}</p>
                  </div>
                )}

                {/* Additional Info */}
                {offer.included && (
                  <p className="p-2 mb-4 text-xs font-semibold text-blue-600 rounded bg-blue-50">
                    ✓ {offer.included}
                  </p>
                )}

                {offer.requirement && (
                  <p className="p-2 mb-4 text-xs font-semibold text-purple-600 rounded bg-purple-50">
                    📍 {offer.requirement}
                  </p>
                )}

                {/* Validity */}
                <div className="flex items-center gap-2 mb-4 text-xs text-gray-600">
                  <HiClock size={16} />
                  {offer.validity}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => navigate("/tyres")}
                  className="w-full py-3 font-bold text-white transition-all bg-gradient-to-r from-red-600 to-orange-600 rounded-xl hover:from-red-700 hover:to-orange-700 hover:shadow-lg active:scale-95"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How to Redeem Section */}
        <div className="p-8 mb-12 border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
          <h2 className="flex items-center gap-2 mb-8 text-3xl font-bold text-green-800">
            <HiSparkles size={32} /> How to Get These Deals?
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "1", title: "Browse", desc: "Explore our special offers" },
              { step: "2", title: "Select", desc: "Choose your preferred tyres" },
              { step: "3", title: "Checkout", desc: "Add to cart and proceed" },
              { step: "4", title: "Enjoy", desc: "Receive and save!" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white border-2 border-green-200 shadow-md rounded-xl">
                <div className="mb-2 text-4xl font-bold text-green-600">{item.step}</div>
                <h4 className="mb-1 font-bold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conditions Section */}
        <div className="p-8 border-2 border-yellow-300 bg-yellow-50 rounded-xl">
          <h3 className="flex items-center gap-2 mb-4 text-2xl font-bold text-yellow-800">
            <HiTrendingUp size={28} /> Terms & Conditions
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Offers valid while stocks last</li>
            <li>✓ Discounts cannot be combined with other offers</li>
            <li>✓ Bulk discounts require minimum order quantities</li>
            <li>✓ Free installation applicable at authorized centers</li>
            <li>✓ All products come with 2-year manufacturer warranty</li>
            <li>✓ 30-day hassle-free return policy applies to all purchases</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialOffers;
