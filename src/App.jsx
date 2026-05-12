import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TyresPage from "./pages/tyres/tyrespage";
import Contact from "./pages/contact/Contact";
import CartPage from "./pages/cartpage/CartPage";
import OurTeam from "./pages/teams/OurTeam";
import BrandPage from "./pages/brands/brandpage";
import CheckoutPage from "./pages/checkout/CheckoutPage";

// ✅ Import new pages
import TermsConditions from "./pages/terms/TermsConditions";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import FAQs from "./pages/faqs/FAQs";
import SpecialOffers from "./pages/offers/SpecialOffers";

// ✅ Import Services pages
import Services from "./pages/services/Services";
import WheelAlignment from "./pages/services/WheelAlignment";
import WheelBalancing from "./pages/services/WheelBalancing";
import TyreChanges from "./pages/services/TyreChanges";
import PollutionTesting from "./pages/services/PollutionTesting";
import GeneralServices from "./pages/services/GeneralServices";

// ✅ Import Products pages
import Products from "./pages/products/Products";
import Batteries from "./pages/products/Batteries";
import Lubricants from "./pages/products/Lubricants";
import Accessories from "./pages/products/Accessories"; 

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tyres" element={<TyresPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/brand/:brandName" element={<BrandPage />} />

          {/* ✅ New routes for info pages */}
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/special-offers" element={<SpecialOffers />} />

          {/* ✅ Services routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/wheel-alignment" element={<WheelAlignment />} />
          <Route path="/services/wheel-balancing" element={<WheelBalancing />} />
          <Route path="/services/tyre-changes" element={<TyreChanges />} />
          <Route path="/services/pollution-testing" element={<PollutionTesting />} />
          <Route path="/services/general-services" element={<GeneralServices />} />

          {/* ✅ Products routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/batteries" element={<Batteries />} />
          <Route path="/products/lubricants" element={<Lubricants />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
