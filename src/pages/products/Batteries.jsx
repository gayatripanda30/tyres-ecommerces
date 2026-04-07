import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../components/context/useCart";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductHero from "../../components/tyres/ProductHero";
import ProductGrid from "../../components/tyres/ProductGrid";
import ProductModal from "../../components/tyres/ProductModal";
import OfferBanner from "../../components/tyres/OfferBanner";
import { Batteries as batteriesData } from "../../data/batteries";
import { HiArrowLeft } from "react-icons/hi";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";

const Batteries = () => {
  const { addToCart } = useCart();

  const [selectedBattery, setSelectedBattery] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  // 🛒 Add single item
  const handleAddToCart = (battery) => {
    addToCart(battery);
  };

  // ⚡ Buy Now / Add multiple
  const handleAddMultiple = (battery) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(battery);
    }
    setQuantity(1);
    setSelectedBattery(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* 🔙 BACK BUTTON */}
      <div className="px-6 py-3 bg-white border-b">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/products"
            className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            <HiArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </div>

      {/* 🎯 HERO */}
      <ProductHero title="Car Batteries" />

      {/* 📦 CONTENT */}
      <div className="flex-1 px-6 py-12 mx-auto max-w-7xl">
        <OfferBanner />

        <div className="mt-10">
          <ProductGrid
  filteredTyres={batteriesData}
  onAddToCart={(battery) => addToCart(battery)}   // ✅ REQUIRED
  onSelectTyre={(battery) => {
    setSelectedBattery(battery);
    setQuantity(1);
  }}
/>
        </div>
      </div>

      {/* 🔍 MODAL */}
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
          onAddToCart={() => handleAddMultiple(selectedBattery)}
          onBuyNow={() => handleAddMultiple(selectedBattery)}
        />
      )}

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Batteries;