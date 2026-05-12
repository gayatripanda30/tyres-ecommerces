import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const [openProducts, setOpenProducts] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const dropdownRef = useRef();

  // ✅ CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenProducts(false);
        setOpenServices(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const products = [
    { id: 1, name: "Michelin Car Tyre", path: "/tyres" },
    { id: 2, name: "Apollo Bike Tyre", path: "/tyres" },
    { id: 3, name: "Amaron Car Battery", path: "/products/batteries" },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (active) =>
    `relative px-3 py-2 text-sm font-semibold transition ${
      active
        ? "text-yellow-600 after:w-full"
        : "text-gray-800 hover:text-yellow-600"
    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <>
      {/* ✅ FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-[999] bg-white shadow overflow-visible">

        <div className="flex items-center justify-between gap-3 px-4 py-4 overflow-visible sm:px-6 md:px-10">

          {/* Logo */}
          <h1 className="text-xl font-bold tracking-wider uppercase cursor-pointer sm:text-2xl font-oswald">
  Tyreonix
</h1>

          {/* Desktop Menu */}
          <div
            className="items-center hidden gap-6 overflow-visible md:flex"
            ref={dropdownRef}
          >
            <Link to="/" className={navLinkClass(isActive("/"))}>
              Home
            </Link>

            {/* PRODUCTS */}
            <div className="relative flex items-center">
              <button
                onClick={() => navigate("/products")}
                className={navLinkClass(location.pathname.startsWith("/products"))}
              >
                Products
              </button>

              <button
                onClick={() => {
                  setOpenProducts(!openProducts);
                  setOpenServices(false);
                }}
                className="p-2 text-gray-600 hover:text-yellow-600"
              >
                <FiChevronDown />
              </button>

              {openProducts && (
                <div className="absolute left-0 top-full mt-2 z-[9999] min-w-[220px] bg-white border shadow-xl rounded-xl">
                  <Link onClick={() => setOpenProducts(false)} to="/products" className="block px-4 py-3 hover:text-yellow-600">
                    All Products
                  </Link>
                  <Link onClick={() => setOpenProducts(false)} to="/tyres" className="block px-4 py-3 hover:text-yellow-600">
                    Tyres
                  </Link>
                  <Link onClick={() => setOpenProducts(false)} to="/products/batteries" className="block px-4 py-3 hover:text-yellow-600">
                    Batteries
                  </Link>
                  <Link onClick={() => setOpenProducts(false)} to="/products/lubricants" className="block px-4 py-3 hover:text-yellow-600">
                    Lubricants
                  </Link>
                  <Link onClick={() => setOpenProducts(false)} to="/products/accessories" className="block px-4 py-3 hover:text-yellow-600">
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div className="relative flex items-center">
              <button
                onClick={() => navigate("/services")}
                className={navLinkClass(location.pathname.startsWith("/services"))}
              >
                Services
              </button>

              <button
                onClick={() => {
                  setOpenServices(!openServices);
                  setOpenProducts(false);
                }}
                className="p-2 text-gray-600 hover:text-yellow-600"
              >
                <FiChevronDown />
              </button>

              {openServices && (
                <div className="absolute right-0 top-full mt-2 z-[9999] min-w-[220px] bg-white border shadow-xl rounded-xl">
                  <Link onClick={() => setOpenServices(false)} to="/services" className="block px-4 py-3 hover:text-yellow-600">
                    All Services
                  </Link>
                  <Link onClick={() => setOpenServices(false)} to="/services/wheel-alignment" className="block px-4 py-3 hover:text-yellow-600">
                    Wheel Alignment
                  </Link>
                  <Link onClick={() => setOpenServices(false)} to="/services/wheel-balancing" className="block px-4 py-3 hover:text-yellow-600">
                    Wheel Balancing
                  </Link>
                  <Link onClick={() => setOpenServices(false)} to="/services/tyre-changes" className="block px-4 py-3 hover:text-yellow-600">
                    Tyre Changes
                  </Link>
                  <Link onClick={() => setOpenServices(false)} to="/services/pollution-testing" className="block px-4 py-3 hover:text-yellow-600">
                    Pollution Testing
                  </Link>
                  <Link onClick={() => setOpenServices(false)} to="/services/general-services" className="block px-4 py-3 hover:text-yellow-600">
                    General Services
                  </Link>
                </div>
              )}
            </div>

            <Link to="/special-offers" className={navLinkClass(isActive("/special-offers"))}>
              Special Offers
            </Link>

            <Link to="/contact" className={navLinkClass(isActive("/contact"))}>
              Contact
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
            <div className="relative hidden md:block">
              <div className="flex items-center gap-2 px-4 py-2 border rounded-full bg-gray-50 focus-within:border-yellow-500">
                <FiSearch />
                <input
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowResults(true);
                  }}
                  placeholder="Search products..."
                  className="w-48 text-sm bg-transparent outline-none"
                />
              </div>

              {showResults && searchQuery && (
                <div className="absolute left-0 top-full mt-2 z-[9999] w-full bg-white border shadow-lg rounded-xl">
                  {filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        navigate(item.path);
                        setSearchQuery("");
                        setShowResults(false);
                      }}
                      className="px-4 py-3 cursor-pointer hover:text-yellow-600"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CART */}
            <Link to="/cart" className="text-sm font-semibold whitespace-nowrap sm:text-base hover:text-yellow-600">
              Cart ({cart.length})
            </Link>

            {/* MOBILE */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-2xl md:hidden"
            >
              {mobileMenu ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="px-4 pb-4 bg-white border-t md:hidden">
            <Link onClick={() => setMobileMenu(false)} to="/" className="block py-2 font-semibold">Home</Link>
            <Link onClick={() => setMobileMenu(false)} to="/products" className="block py-2 font-semibold">Products</Link>
            <Link onClick={() => setMobileMenu(false)} to="/tyres" className="block py-2 pl-4 text-sm text-gray-700">Tyres</Link>
            <Link onClick={() => setMobileMenu(false)} to="/products/batteries" className="block py-2 pl-4 text-sm text-gray-700">Batteries</Link>
            <Link onClick={() => setMobileMenu(false)} to="/products/lubricants" className="block py-2 pl-4 text-sm text-gray-700">Lubricants</Link>
            <Link onClick={() => setMobileMenu(false)} to="/products/accessories" className="block py-2 pl-4 text-sm text-gray-700">Accessories</Link>
            <Link onClick={() => setMobileMenu(false)} to="/services" className="block py-2 font-semibold">Services</Link>
            <Link onClick={() => setMobileMenu(false)} to="/special-offers" className="block py-2 font-semibold">Special Offers</Link>
            <Link onClick={() => setMobileMenu(false)} to="/contact" className="block py-2 font-semibold">Contact</Link>
          </div>
        )}
      </div>

      {/* ✅ ADD SPACING BELOW NAVBAR */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Navbar;
