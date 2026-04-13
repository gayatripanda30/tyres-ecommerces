import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../components/context/useCart";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductHero from "../../components/tyres/ProductHero";
import ProductGrid from "../../components/tyres/ProductGrid";
import ProductModal from "../../components/tyres/ProductModal";
import OfferBanner from "../../components/tyres/OfferBanner";
import { HiArrowLeft } from "react-icons/hi";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";

// ✅ FIXED IMPORT
import { loadExcelData } from "../../utils/excelLoader";

const Batteries = () => {
  const { addToCart } = useCart();

  const [batteries, setBatteries] = useState([]);
  const [selectedBattery, setSelectedBattery] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    loadExcelData().then((data) => {
      console.log("Batteries Data:", data.batteries); // debug

      const formatted = (data.batteries || []).map((item, index) => ({
        id: index,
        ...item,
        price: Number(item.price),
        discount: Number(item.discount) || 0,
        image: `/images/${item.image}`,
      }));

      setBatteries(formatted);
    });
  }, []);

  const handleAddMultiple = (item) => {
    for (let i = 0; i < quantity; i++) addToCart(item);
    setQuantity(1);
    setSelectedBattery(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* 🔙 BACK */}
      <div className="px-6 py-3 bg-white border-b">
        <Link to="/products" className="flex items-center gap-2 text-blue-600">
          <HiArrowLeft /> Back to Products
        </Link>
      </div>

      <ProductHero title="Car Batteries" />

      <div className="flex-1 px-6 py-12 mx-auto max-w-7xl">
        <OfferBanner />

        <ProductGrid
          filteredTyres={batteries}
          onAddToCart={(item) => addToCart(item)}
          onSelectTyre={(item) => {
            setSelectedBattery(item);
            setQuantity(1);
          }}
        />
      </div>

      {selectedBattery && (
        <ProductModal
          selectedTyre={selectedBattery}
          quantity={quantity}
          setQuantity={setQuantity}
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