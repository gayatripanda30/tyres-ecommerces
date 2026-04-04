import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TyresPage from "./pages/tyres/tyrespage";
import Contact from "./pages/contact/Contact";
import CartPage from "./pages/cartpage/CartPage";
import OurTeam from "./pages/teams/OurTeam";
import BrandPage from "./pages/brands/brandpage";

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
import CarBatteries from "./pages/products/CarBatteries";
import BikeBatteries from "./pages/products/BikeBatteries";
import Accessories from "./pages/products/Accessories"; 

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
          <Route path="/products/car-batteries" element={<CarBatteries />} />
          <Route path="/products/bike-batteries" element={<BikeBatteries />} />
          <Route path="/products/accessories" element={<Accessories />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;