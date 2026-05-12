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

// ✅ FIXED IMPORT
import { loadExcelData } from "../../utils/excelLoader";

const Lubricants = () => {
  const { addToCart } = useCart();

  const [lubricants, setLubricants] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  // ✅ LOAD EXCEL
  useEffect(() => {
    loadExcelData().then((data) => {
      console.log("Lubricants Data:", data.lubricants);

      const formatted = (data.lubricants || []).map((item, index) => ({
        id: index,
        ...item,
        price: Number(item.price),
        discount: Number(item.discount) || 0,
        image: `/images/${item.image}`,
      }));

      setLubricants(formatted);
    });
  }, []);

  // ✅ FILTER
  const filtered = lubricants.filter(
    (item) =>
      item.price >= minPrice &&
      item.price <= maxPrice &&
      (!selectedBrand || item.brand === selectedBrand) &&
      (!selectedType || item.type === selectedType)
  );

  const brands = [...new Set(lubricants.map((item) => item.brand))];
  const types = [...new Set(lubricants.map((item) => item.type))];

  // ✅ ADD TO CART
  const handleAddToCart = (item) => {
    for (let i = 0; i < quantity; i++) addToCart(item);
    setQuantity(1);
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* BACK */}
      <div className="px-6 py-3 bg-white border-b">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/products"
            className="flex items-center gap-2 font-semibold text-blue-600"
          >
            <HiArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </div>

      <ProductHero title="Lubricants" />

      <div className="w-full px-4 py-10 mx-auto sm:px-6 sm:py-12 max-w-7xl">
        <OfferBanner />

        <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-8">
          {/* FILTER */}
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

          {/* PRODUCTS */}
          <ProductGrid
            filteredTyres={filtered}
            onAddToCart={(item) => addToCart(item)}
            onSelectTyre={(item) => {
              setSelectedItem(item);
              setQuantity(1);
            }}
          />
        </div>
      </div>

      {/* MODAL */}
      {selectedItem && (
        <ProductModal
          selectedTyre={selectedItem}
          quantity={quantity}
          setQuantity={setQuantity}
          onClose={() => setSelectedItem(null)}
          onAddToCart={() => handleAddToCart(selectedItem)}
          onBuyNow={() => handleAddToCart(selectedItem)}
        />
      )}

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Lubricants;
