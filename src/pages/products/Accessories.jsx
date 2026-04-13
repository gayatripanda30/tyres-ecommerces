import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../components/context/useCart";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductHero from "../../components/tyres/ProductHero";
import FilterSidebar from "../../components/tyres/FilterSidebar";
import ProductGrid from "../../components/tyres/ProductGrid";
import ProductModal from "../../components/tyres/ProductModal";
import OfferBanner from "../../components/tyres/OfferBanner";
import { HiArrowLeft } from "react-icons/hi";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";

// ✅ CORRECT IMPORT
import { loadExcelData } from "../../utils/excelLoader";

const Accessories = () => {
  const { addToCart } = useCart();

  const [accessories, setAccessories] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(9000);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  // ✅ FIXED useEffect
  useEffect(() => {
    loadExcelData().then((data) => {
      const formatted = (data.accessories || []).map((item, index) => ({
        id: index,
        ...item,
        price: Number(item.price),
        discount: Number(item.discount) || 0,
        image: `/images/${item.image}`,
      }));

      setAccessories(formatted);
    });
  }, []);

  // ✅ FILTER
  const filtered = accessories.filter(
    (item) =>
      item.price >= minPrice &&
      item.price <= maxPrice &&
      (!selectedBrand || item.brand === selectedBrand) &&
      (!selectedType || item.type === selectedType)
  );

  const brands = [...new Set(accessories.map((item) => item.brand))];
  const types = [...new Set(accessories.map((item) => item.type))];

  const handleAddToCart = (item) => {
    for (let i = 0; i < quantity; i++) addToCart(item);
    setQuantity(1);
    setSelectedAccessory(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="px-6 py-3 bg-white border-b">
        <Link to="/products" className="flex items-center gap-2 text-blue-600">
          <HiArrowLeft /> Back to Products
        </Link>
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
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            brands={brands}
            tyreTypes={types}
          />

          <ProductGrid
            filteredTyres={filtered}
            onAddToCart={addToCart}
            onSelectTyre={(item) => {
              setSelectedAccessory(item);
              setQuantity(1);
            }}
          />
        </div>
      </div>

      {selectedAccessory && (
        <ProductModal
          selectedTyre={selectedAccessory}
          quantity={quantity}
          setQuantity={setQuantity}
          onClose={() => setSelectedAccessory(null)}
          onAddToCart={() => handleAddToCart(selectedAccessory)}
          onBuyNow={() => handleAddToCart(selectedAccessory)}
        />
      )}

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Accessories;