import { useState, useEffect } from "react";
import { useCart } from "../../components/context/useCart";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";

import ProductHero from "../../components/tyres/ProductHero";
import FilterSidebar from "../../components/tyres/FilterSidebar";
import ProductGrid from "../../components/tyres/ProductGrid";
import ProductModal from "../../components/tyres/ProductModal";
import OfferBanner from "../../components/tyres/OfferBanner";

// ✅ FIXED IMPORT
import { loadExcelData } from "../../utils/excelLoader";

const TyresPage = () => {
  const { addToCart } = useCart();

  const [allTyres, setAllTyres] = useState([]);

  const [maxPrice, setMaxPrice] = useState(1200);
  const [minPrice, setMinPrice] = useState(100);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const [selectedTyre, setSelectedTyre] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  // ✅ LOAD EXCEL DATA
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadExcelData();

      console.log("🔥 TYRES DATA:", data.tyres); // DEBUG

      const formatted = data.tyres.map((item) => ({
        ...item,
        price: Number(item.price),
        discount: Number(item.discount) || 0,
        rating: Number(item.rating) || 0,
        reviews: Number(item.reviews) || 0,
        image: `/images/${item.image}`, // 👈 IMPORTANT
      }));

      setAllTyres(formatted);
    };

    fetchData();
  }, []);

  // ✅ FILTER LOGIC
  let filtered = allTyres.filter(
    (t) =>
      Number(t.price) >= minPrice &&
      Number(t.price) <= maxPrice &&
      (!selectedBrand || t.brand === selectedBrand) &&
      (!selectedType || t.type === selectedType)
  );

  // ✅ UNIQUE VALUES
  const brands = [...new Set(allTyres.map((t) => t.brand))];
  const types = [...new Set(allTyres.map((t) => t.type))];

  // ✅ ADD TO CART
  const handleAddToCart = (item) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(item);
    }
    setQuantity(1);
    setSelectedTyre(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO */}
      <ProductHero title="All Tyres" />

      <div className="px-6 py-12 mx-auto max-w-7xl">
        <OfferBanner />

        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">

          {/* SIDEBAR */}
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

          {/* PRODUCTS */}
          <div className="md:col-span-3 lg:col-span-4">
            <ProductGrid
              filteredTyres={filtered}
              onAddToCart={(item) => addToCart(item)} // ✅ FIXED
              onSelectTyre={(item) => {
                setSelectedTyre(item);
                setQuantity(1);
              }}
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedTyre && (
        <ProductModal
          selectedTyre={selectedTyre}
          quantity={quantity}
          setQuantity={setQuantity}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          deliveryOption={deliveryOption}
          setDeliveryOption={setDeliveryOption}
          onClose={() => setSelectedTyre(null)}
          onAddToCart={() => handleAddToCart(selectedTyre)}
          onBuyNow={() => handleAddToCart(selectedTyre)}
        />
      )}

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default TyresPage;