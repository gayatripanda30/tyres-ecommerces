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
import { accessories } from "../../data/accessories";
import { HiArrowLeft } from "react-icons/hi";

const Accessories = () => {
  const { addToCart } = useCart();
  const [maxPrice, setMaxPrice] = useState(9000);
  const [minPrice, setMinPrice] = useState(500);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  // Filter Logic
  let filteredAccessories = accessories.filter(
    (acc) =>
      acc.price >= minPrice &&
      acc.price <= maxPrice &&
      (!selectedBrand || acc.brand === selectedBrand) &&
      (!selectedType || acc.type === selectedType)
  );

  const brands = [...new Set(accessories.map((acc) => acc.brand))];
  const types = [...new Set(accessories.map((acc) => acc.type))];

  const handleAddToCart = (accessory) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(accessory);
    }
    setQuantity(1);
    setSelectedAccessory(null);
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

        <ProductHero title="Accessories" />

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
                filteredTyres={filteredAccessories}
                onSelectTyre={(accessory) => {
                  setSelectedAccessory(accessory);
                  setQuantity(1);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedAccessory && (
        <ProductModal
          selectedTyre={selectedAccessory}
          quantity={quantity}
          setQuantity={setQuantity}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          deliveryOption={deliveryOption}
          setDeliveryOption={setDeliveryOption}
          onClose={() => setSelectedAccessory(null)}
          onAddToCart={() => handleAddToCart(selectedAccessory)}
          onBuyNow={() => {
            handleAddToCart(selectedAccessory);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default Accessories;
