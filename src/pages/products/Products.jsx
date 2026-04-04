import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiCheckCircle, HiTruck, HiShieldCheck, HiSparkles } from "react-icons/hi";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Car Tyres",
      description: "Premium quality car tyres from top brands with superior grip and durability.",
      icon: "🛞",
      path: "/tyres",
      features: ["All weather tyres", "Extended warranty", "Free installation", "Multiple brands"],
      image: "🚗",
      products: "500+",
    },
    {
      id: 2,
      name: "Car Batteries",
      description: "High-performance car batteries with long lifespan and reliable power backup.",
      icon: "🔋",
      path: "/products/car-batteries",
      features: ["Heavy duty", "Quick charging", "Warranty included", "Free delivery"],
      image: "🔧",
      products: "200+",
    },
    {
      id: 3,
      name: "Bike Batteries",
      description: "Lightweight bike batteries designed for optimal performance and longevity.",
      icon: "⚡",
      path: "/products/bike-batteries",
      features: ["Light weight", "Compact design", "Corrosion resistant", "Best price"],
      image: "🏍️",
      products: "150+",
    },
    {
      id: 4,
      name: "Accessories",
      description: "Complete range of automotive accessories for comfort and safety.",
      icon: "🎯",
      path: "/products/accessories",
      features: ["Quality products", "Best brands", "Competitve prices", "Expert advice"],
      image: "🛠️",
      products: "300+",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center" data-aos="fade-down">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-green-100">Everything you need for your vehicle - tyres, batteries, and accessories</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Link
                key={product.id}
                to={product.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl border-2 border-gray-200 shadow-md hover:shadow-2xl hover:border-green-500 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="text-7xl text-center mb-4 group-hover:scale-110 transition-transform">{product.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition text-center">
                    {product.name}
                  </h3>

                  {/* Product Count */}
                  <p className="text-center text-green-600 font-semibold mb-4">{product.products} Products</p>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm text-center">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <HiCheckCircle className="text-green-500 flex-shrink-0" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition group-hover:translate-y-[-2px]">
                      Shop Now →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Shop With Us</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <HiSparkles size={40} />, title: "Quality Products", desc: "Original and certified products only" },
              { icon: <HiCheckCircle size={40} />, title: "Best Prices", desc: "Competitive rates with great discounts" },
              { icon: <HiTruck size={40} />, title: "Fast Delivery", desc: "Quick shipping to your doorstep" },
              { icon: <HiShieldCheck size={40} />, title: "Warranty", desc: "Full warranty on all products" },
            ].map((item, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100} className="text-center">
                <div className="text-green-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Top Categories</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div data-aos="fade-right" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-600">
              <h3 className="text-3xl font-bold mb-4">🛞 Premium Tyres</h3>
              <p className="text-gray-700 mb-4">Explore our extensive collection of car tyres from world-renowned brands. Perfect for all road conditions and weather.</p>
              <Link to="/tyres" className="text-blue-600 font-bold hover:underline">
                Browse Tyres →
              </Link>
            </div>

            <div data-aos="fade-left" className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-l-4 border-yellow-600">
              <h3 className="text-3xl font-bold mb-4">🔋 Batteries & Accessories</h3>
              <p className="text-gray-700 mb-4">Complete range of car and bike batteries plus premium automotive accessories for every need.</p>
              <Link to="/products/car-batteries" className="text-yellow-600 font-bold hover:underline">
                Explore More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Start Shopping Today</h2>
          <p className="text-lg mb-6">Find the best products for your vehicle at unbeatable prices</p>
          <Link
            to="/tyres"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
