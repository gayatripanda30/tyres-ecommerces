import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();
  const [openProducts, setOpenProducts] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openMobileTyres, setOpenMobileTyres] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isProductPage = location.pathname.startsWith("/products") || location.pathname === "/tyres";
  const isServicePage = location.pathname.startsWith("/services");
  const isHomePage = location.pathname === "/";
  const isSpecialPage = location.pathname.startsWith("/special-offers");
  const isContactPage = location.pathname.startsWith("/contact");

  const toggleButtonClass = (active) =>
    `flex items-center gap-1 rounded-md px-3 py-2 text-sm transition duration-150 ${
      active
        ? "bg-orange-50 text-orange-600 font-semibold"
        : "text-gray-700 hover:bg-gray-100 hover:text-orange-600"
    }`;

  const navLinkClass = (active) =>
    `font-medium rounded-md px-3 py-2 text-sm transition duration-150 ${
      active ? "bg-orange-50 text-orange-600 font-semibold" : "text-gray-700 hover:bg-gray-100 hover:text-orange-600"
    }`;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Add custom search handling here later
    setSearchQuery("");
    setOpenMobileSearch(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow overflow-visible">
      
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 md:px-10 min-w-0 overflow-visible">
        <h1 className="text-xl font-bold">TYROOLA</h1>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-6 md:flex flex-wrap min-w-0">
          <Link to="/" className={navLinkClass(isHomePage)}>
            Home
          </Link>

          {/* Dropdown */}
          <div className="relative min-w-max overflow-visible">
            <button
              onClick={() => {
                setOpenProducts(!openProducts);
                setOpenServices(false);
              }}
              className={toggleButtonClass(openProducts || isProductPage)}
            >
              Products
              <FiChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown Menu */}
            {openProducts && (
              <div className="absolute left-0 top-full z-[60] mt-2 min-w-[16rem] overflow-hidden bg-white rounded-xl border border-gray-200 shadow-xl">
                <Link onClick={() => setOpenProducts(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100 font-semibold border-b" to="/products">
                  All Products
                </Link>
                <Link onClick={() => setOpenProducts(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/tyres">
                  🛞 Tyres
                </Link>
                <Link onClick={() => setOpenProducts(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/products/car-batteries">
                  🔋 Car Batteries
                </Link>
                <Link onClick={() => setOpenProducts(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/products/bike-batteries">
                  ⚡ Bike Batteries
                </Link>
                <Link onClick={() => setOpenProducts(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/products/accessories">
                  🎯 Accessories
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown */}
          <div className="relative min-w-max overflow-visible">
            <Link
              to="/services"
              onClick={() => {
                setOpenServices(false);
                setOpenProducts(false);
              }}
              className={toggleButtonClass(openServices || isServicePage)}
            >
              Services
            </Link>

            {/* Simple dropdown toggle without full dropdown menu */}
            <div className="relative">
              <button
                onClick={() => {
                  setOpenServices(!openServices);
                  setOpenProducts(false);
                }}
                className="absolute right-0 top-0 p-2 text-gray-700 hover:text-orange-600"
              >
                <FiChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              {openServices && (
                <div className="absolute right-0 top-full z-[60] mt-2 min-w-[16rem] overflow-hidden bg-white rounded-xl border border-gray-200 shadow-xl">
                  <Link onClick={() => setOpenServices(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/services">
                    All Services
                  </Link>
                  <div className="border-t border-gray-200"></div>
                  <Link onClick={() => setOpenServices(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/services/wheel-alignment">
                    Wheel Alignment
                  </Link>
                  <Link onClick={() => setOpenServices(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/services/wheel-balancing">
                    Wheel Balancing
                  </Link>
                  <Link onClick={() => setOpenServices(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/services/tyre-changes">
                    Tyre Changes
                  </Link>
                  <Link onClick={() => setOpenServices(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/services/pollution-testing">
                    Pollution Testing
                  </Link>
                  <Link onClick={() => setOpenServices(false)} className="block px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100" to="/services/general-services">
                    General Services
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Link to="/special-offers" className={navLinkClass(isSpecialPage)}>
            Special Offers
          </Link>

          <Link to="/contact" className={navLinkClass(isContactPage)}>
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center gap-4 min-w-0">
          <form onSubmit={handleSearchSubmit} className="items-center hidden gap-2 px-3 py-1 border border-gray-200 rounded-full bg-gray-50 md:flex min-w-0">
            <FiSearch className="text-gray-500" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tyres, batteries..."
              className="w-40 text-sm bg-transparent outline-none placeholder:text-gray-400"
            />
            <button type="submit" className="px-3 py-1 text-sm font-semibold text-white bg-orange-600 rounded-full hover:bg-orange-700">
              Search
            </button>
          </form>

          <button
            className="block text-xl text-gray-600 md:hidden"
            onClick={() => {
              setMobileMenu(true);
              setOpenMobileSearch((prev) => !prev);
            }}
            aria-label="Open mobile search"
          >
            <FiSearch />
          </button>

          <Link to="/cart" className="font-medium">
            Cart ({cart.length})
          </Link>

          {/* Mobile Toggle */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMobileMenu((prev) => {
              if (prev) setOpenMobileSearch(false);
              return !prev;
            })}
          >
            {mobileMenu ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="px-6 pb-4 bg-white md:hidden overflow-visible">
          {openMobileSearch ? (
            <form onSubmit={handleSearchSubmit} className="mb-4 flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
              <FiSearch className="text-gray-500" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tyres, batteries..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <button type="submit" className="rounded-full bg-orange-600 px-3 py-1 text-sm font-semibold text-white hover:bg-orange-700">
                Go
              </button>
            </form>
          ) : (
            <button
              onClick={() => setOpenMobileSearch(true)}
              className="mb-4 flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-700 hover:border-orange-400 hover:text-orange-600"
            >
              <FiSearch /> Search the store
            </button>
          )}

          <Link to="/" className="block py-2">Home</Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setOpenMobileTyres(!openMobileTyres)}
              className={`flex items-center justify-between w-full py-2 transition ${openMobileTyres || isProductPage ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-600"}`}
            >
              Tyres ▾
            </button>

            {openMobileTyres && (
              <div className="pl-4">
                <Link className="block py-2" to="/products/car-tyres">Car Tyres</Link>
                <Link className="block py-2" to="/products/bike-tyres">Bike Tyres</Link>
                <Link className="block py-2" to="/products/alloy-wheels">Alloy Wheels</Link>
                <Link className="block py-2" to="/products/car-batteries">Car Batteries</Link>
                <Link className="block py-2" to="/products/bike-batteries">Bike Batteries</Link>
                <Link className="block py-2" to="/products/accessories">Accessories</Link>
                <Link className="block py-2" to="/products/wheel-covers">Wheel Covers</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;