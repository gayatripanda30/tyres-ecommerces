import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../components/context/useCart";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// ✅ Import Product Components
import FilterSidebar from "../../components/brands/FilterSidebar";
import ProductToolbar from "../../components/brands/ProductToolbar";
import ProductGrid from "../../components/brands/ProductGrid";
import ProductModal from "../../components/brands/ProductModal";


// ✅ Import Tyres Data from Data Folder
import { allTyres } from "../../data/allTyres";

// ✅ Import Brand Images
import heroImg from "../../assets/image.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";
import brand7 from "../../assets/brand7.png";
import bg1 from "../../assets/bg1.jpg";

const BrandPage = () => {
  const { brandName } = useParams();
  const { addToCart } = useCart();

  const normalizedBrand = brandName ? brandName.toLowerCase().replace(/-/g, " ") : "";

  const brandTitleMap = {
    mrf: "MRF",
    apollo: "Apollo",
    ceat: "CEAT",
    jk: "JK",
    tvs: "TVS",
    michelin: "Michelin",
    pirelli: "Pirelli",
    bridgestone: "Bridgestone",
  };

  const brandImageMap = {
    mrf: brand1,
    apollo: brand2,
    ceat: brand3,
    jk: brand4,
    tvs: brand5,
    michelin: brand6,
    pirelli: brand7,
    bridgestone: heroImg, // Default fallback
  };

  const pageBrandTitle = brandTitleMap[normalizedBrand] ||
    normalizedBrand
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const brandImage = brandImageMap[normalizedBrand] || heroImg;

  const [maxPrice, setMaxPrice] = useState(1200);
  const [minPrice, setMinPrice] = useState(100);
  const [selectedType, setSelectedType] = useState(null);
  const [sortBy, setSortBy] = useState("popular");
  const [selectedTyre, setSelectedTyre] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  // ✅ Filter Logic
  let filteredTyres = allTyres.filter(
    (tyre) =>
      tyre.brand.toLowerCase() === normalizedBrand &&
      tyre.price >= minPrice &&
      tyre.price <= maxPrice &&
      (!selectedType || tyre.type === selectedType)
  );

  // ✅ Sort Logic
  if (sortBy === "price-low") {
    filteredTyres = [...filteredTyres].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredTyres = [...filteredTyres].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredTyres = [...filteredTyres].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "reviews") {
    filteredTyres = [...filteredTyres].sort((a, b) => b.reviews - a.reviews);
  }

  // ✅ Get unique types from all tyres for this brand
  const allBrandTyres = allTyres.filter(
    (t) => t.brand.toLowerCase() === normalizedBrand
  );
  const tyreTypes = [...new Set(allBrandTyres.map((tyre) => tyre.type))];

  const handleAddToCart = (tyre) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(tyre);
    }
    setQuantity(1);
    setSelectedTyre(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Custom Brand Hero Section */}
        <div className="relative py-20 overflow-hidden text-white ">
          <style>{`
            @keyframes slideInLeft {
              from { opacity: 0; transform: translateX(-40px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(40px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .slide-in-left { animation: slideInLeft 0.8s ease-out; }
            .slide-in-right { animation: slideInRight 0.8s ease-out; }
          `}</style>

          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={bg1}
              alt="Hero background"
              className="object-cover w-full h-full opacity-30"
            />
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 bg-white rounded-full -right-32 w-96 h-96 mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bg-white rounded-full -bottom-32 -left-32 w-96 h-96 mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative px-6 mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex-1 slide-in-left">
                <p className="mb-2 text-sm font-bold tracking-widest text-green-100 uppercase">Premium Tyre Collection</p>
                <h1 className="mb-4 font-black tracking-tight capitalize text-7xl">
                  {pageBrandTitle}
                </h1>
                <p className="mb-8 text-2xl leading-relaxed text-green-100">
                  Shop all {pageBrandTitle} tyres - Experience Superior Performance & Safety
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">⭐</span>
                    <span className="text-lg font-semibold">4.6/5 Rated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🚗</span>
                    <span className="text-lg font-semibold">50K+ Happy Customers</span>
                  </div>
                </div>
              </div>

              {/* Brand Logo Display */}
              <div className="flex-col items-center justify-center hidden lg:flex slide-in-right">
                <div className="p-8 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
                  <img
                    src={brandImage}
                    alt={`${pageBrandTitle} logo`}
                    className="object-contain w-32 h-32 filter brightness-0 invert"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-green-100">Official {pageBrandTitle} Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Container */}
        <div className="px-6 py-12 mx-auto max-w-7xl">

          {/* Main Grid: Sidebar + Products */}
          <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* LEFT SIDEBAR - Filters */}
            <FilterSidebar
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              tyreTypes={tyreTypes}
            />

            {/* RIGHT CONTENT - Products */}
            <div className="md:col-span-3 lg:col-span-4">
              {/* Toolbar */}
              <ProductToolbar
                filteredTyresCount={filteredTyres.length}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />

              {filteredTyres.length === 0 ? (
                <div className="p-8 mb-8 text-center bg-white shadow-md rounded-3xl">
                  <h2 className="mb-2 text-2xl font-semibold">No tyres found for {pageBrandTitle}</h2>
                  <p className="text-gray-600">
                    We don't have tyres listed for this brand yet. Please choose another brand or browse our full catalogue.
                  </p>
                </div>
              ) : (
                <ProductGrid
                  filteredTyres={filteredTyres}
                  onSelectTyre={(tyre) => {
                    setSelectedTyre(tyre);
                    setQuantity(1);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        selectedTyre={selectedTyre}
        quantity={quantity}
        setQuantity={setQuantity}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        deliveryOption={deliveryOption}
        setDeliveryOption={setDeliveryOption}
        onClose={() => setSelectedTyre(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={() => {
          handleAddToCart(selectedTyre);
          alert("Proceeding to checkout...");
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BrandPage;
