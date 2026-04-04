import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../components/context/useCart";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductHero from "../../components/tyres/ProductHero";
import FilterSidebar from "../../components/tyres/FilterSidebar";
import ProductGrid from "../../components/tyres/ProductGrid";
import ProductModal from "../../components/tyres/ProductModal";
import OfferBanner from "../../components/tyres/OfferBanner";
import { bikeBatteries } from "../../data/bikeBatteries";
import { HiArrowLeft } from "react-icons/hi";

const BikeBatteries = () => {
  const { addToCart } = useCart();
  const [maxPrice, setMaxPrice] = useState(2500);
  const [minPrice, setMinPrice] = useState(1000);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedBattery, setSelectedBattery] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  // Filter Logic
  let filteredBatteries = bikeBatteries.filter(
    (battery) =>
      battery.price >= minPrice &&
      battery.price <= maxPrice &&
      (!selectedBrand || battery.brand === selectedBrand) &&
      (!selectedType || battery.type === selectedType)
  );

  const brands = [...new Set(bikeBatteries.map((b) => b.brand))];
  const types = [...new Set(bikeBatteries.map((b) => b.type))];

  const handleAddToCart = (battery) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(battery);
    }
    setQuantity(1);
    setSelectedBattery(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white px-6 py-3 border-b">
          <div className="max-w-7xl mx-auto">
            <Link to="/products" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              <HiArrowLeft size={18} />
              Back to Products
            </Link>
          </div>
        </div>

        <ProductHero title="Bike Batteries" />

        <div className="px-6 py-12 mx-auto max-w-7xl">
          <OfferBanner />

          <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
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

            <div className="md:col-span-3 lg:col-span-4">
              <ProductGrid
                filteredTyres={filteredBatteries}
                onSelectTyre={(battery) => {
                  setSelectedBattery(battery);
                  setQuantity(1);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedBattery && (
        <ProductModal
          selectedTyre={selectedBattery}
          quantity={quantity}
          setQuantity={setQuantity}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          deliveryOption={deliveryOption}
          setDeliveryOption={setDeliveryOption}
          onClose={() => setSelectedBattery(null)}
          onAddToCart={() => handleAddToCart(selectedBattery)}
          onBuyNow={() => {
            handleAddToCart(selectedBattery);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default BikeBatteries;
