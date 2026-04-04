import { useState } from "react";
import { useCart } from "../../components/context/useCart";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// ✅ Import Product Components
import ProductHero from "../../components/tyres/ProductHero";
import FilterSidebar from "../../components/tyres/FilterSidebar";

import ProductGrid from "../../components/tyres/ProductGrid";
import ProductModal from "../../components/tyres/ProductModal";
import OfferBanner from "../../components/tyres/OfferBanner";

// ✅ Import Tyres Data from Data Folder
import { allTyres } from "../../data/allTyres";

const TyresPage = () => {
  const { addToCart } = useCart();
  const [maxPrice, setMaxPrice] = useState(1200);
  const [minPrice, setMinPrice] = useState(100);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [sortBy, setSortBy] = useState("popular");
  const [selectedTyre, setSelectedTyre] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  // ✅ Filter Logic
  let filteredTyres = allTyres.filter(
    (tyre) =>
      tyre.price >= minPrice &&
      tyre.price <= maxPrice &&
      (!selectedBrand || tyre.brand === selectedBrand) &&
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

  // ✅ Get unique brands and types
  const brands = [...new Set(allTyres.map(t => t.brand))];
  const types = [...new Set(allTyres.map(t => t.type))];

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
        {/* Hero Section */}
        <ProductHero title="All Tyres" />

        {/* Main Container */}
        <div className="px-6 py-12 mx-auto max-w-7xl">
          {/* Offer Banner */}
          <OfferBanner />

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
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              tyreTypes={types}
              brands={brands}
            />

            {/* RIGHT CONTENT - Products */}
            <div className="md:col-span-3 lg:col-span-4">
            
             

              {/* Products Grid */}
              <ProductGrid
                filteredTyres={filteredTyres}
                onSelectTyre={(tyre) => {
                  setSelectedTyre(tyre);
                  setQuantity(1);
                }}
              />
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

export default TyresPage;
