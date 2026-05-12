// src/pages/brands/BrandPage.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../components/context/useCart";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";

// Components
import FilterSidebar from "../../components/brands/FilterSidebar";
import ProductToolbar from "../../components/brands/ProductToolbar";
import ProductGrid from "../../components/brands/ProductGrid";
import ProductModal from "../../components/brands/ProductModal";
import ProductHero from "../../components/brands/ProductHero";

// Data
import { allTyres } from "../../data/allTyres";

import bg1 from "../../assets/image12.jpg";

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

  const pageBrandTitle = brandTitleMap[normalizedBrand] ||
    normalizedBrand
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const [maxPrice, setMaxPrice] = useState(1200);
  const [minPrice, setMinPrice] = useState(100);
  const [selectedType, setSelectedType] = useState(null);
  const [sortBy, setSortBy] = useState("popular");
  const [selectedTyre, setSelectedTyre] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  // Filter tyres
  let filteredTyres = allTyres.filter(
    (tyre) =>
      tyre.brand.toLowerCase() === normalizedBrand &&
      tyre.price >= minPrice &&
      tyre.price <= maxPrice &&
      (!selectedType || tyre.type === selectedType)
  );

  // Sorting
  if (sortBy === "price-low") filteredTyres = [...filteredTyres].sort((a, b) => a.price - b.price);
  else if (sortBy === "price-high") filteredTyres = [...filteredTyres].sort((a, b) => b.price - a.price);
  else if (sortBy === "rating") filteredTyres = [...filteredTyres].sort((a, b) => b.rating - a.rating);
  else if (sortBy === "reviews") filteredTyres = [...filteredTyres].sort((a, b) => b.reviews - a.reviews);

  const allBrandTyres = allTyres.filter(t => t.brand.toLowerCase() === normalizedBrand);
  const tyreTypes = [...new Set(allBrandTyres.map(t => t.type))];

  const handleAddToCart = (tyre) => {
    for (let i = 0; i < quantity; i++) addToCart(tyre);
    setQuantity(1);
    setSelectedTyre(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section with Overlay Card */}
      <ProductHero
        title={pageBrandTitle}
        subtitle={`Shop all ${pageBrandTitle} tyres - Experience Superior Performance & Safety`}
        imageSrc={bg1}
      />

      {/* Main Content */}
      <div className="w-full px-4 py-10 mx-auto sm:px-6 sm:py-12 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-8">
          <FilterSidebar
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            tyreTypes={tyreTypes}
          />

          <div className="min-w-0">
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

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default BrandPage;
