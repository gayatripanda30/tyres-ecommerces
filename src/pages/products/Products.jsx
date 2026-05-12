import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { HiCheckCircle, HiTruck, HiShieldCheck, HiSparkles } from "react-icons/hi";

// ✅ IMAGES
import heroImg from "../../assets/image6.jpg";
import tyreImg from "../../assets/tyre.jpg";
import carBatteryImg from "../../assets/battery.jpg";
import bikeBatteryImg from "../../assets/battery.jpg";
import accessoriesImg from "../../assets/accessories.jpg";

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
      description: "Premium tyres with superior grip and durability.",
      path: "/tyres",
      image: tyreImg,
      features: ["All weather", "Warranty", "Free fitting", "Top brands"],
      products: "500+",
    },
    {
      id: 2,
      name: " Batteries",
      description: "High-performance batteries with long lifespan.",
      path: "/products/batteries",
      image: carBatteryImg,
      features: ["Heavy duty", "Quick charge", "Warranty", "Delivery"],
      products: "200+",
    },
    {
      id: 3,
      name: "Bike Batteries",
      description: "Compact and powerful batteries for bikes.",
      path: "/products/bike-batteries",
      image: bikeBatteryImg,
      features: ["Lightweight", "Durable", "Affordable", "Reliable"],
      products: "150+",
    },
    {
      id: 4,
      name: "Accessories",
      description: "Complete range of automotive accessories.",
      path: "/products/accessories",
      image: accessoriesImg,
      features: ["Best brands", "Quality", "Affordable", "Expert help"],
      products: "300+",
    },
  ];

  return (
    <>
      <Navbar />

      {/* 🔥 HERO SECTION (INCREASED HEIGHT) */}
      <section
        className="relative flex min-h-[520px] items-center justify-center text-white sm:min-h-[620px]"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl px-4 text-center" data-aos="zoom-in">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Premium Auto Products
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Discover top-quality tyres, batteries, and accessories for your vehicle
          </p>

          {/* CTA */}
          <Link
            to="/tyres"
            className="inline-block px-8 py-3 mt-6 font-semibold text-black transition bg-yellow-400 rounded-lg hover:bg-yellow-300"
          >
            Explore Now →
          </Link>
        </div>
      </section>

      {/* 🔥 PRODUCTS GRID (3D CARD EFFECT) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center sm:text-4xl">Shop by Category</h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Link
                key={product.id}
                to={product.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="overflow-hidden transition-all duration-500 transform bg-white shadow-xl group rounded-2xl hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="absolute text-white bottom-4 left-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-sm">{product.products} Products</p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="mb-4 text-sm text-gray-600">
                    {product.description}
                  </p>

                  <ul className="mb-4 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <HiCheckCircle className="text-green-500" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full px-4 py-2 font-semibold text-white transition bg-green-700 rounded-full hover:bg-green-800">
                    Shop Now →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 WHY CHOOSE US (3D GLASS CARDS) */}
      <section className="py-20 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center sm:text-4xl mb-14">Why Choose Us ?</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <HiSparkles size={40} />, title: "Premium Quality", desc: "Certified products only" },
              { icon: <HiCheckCircle size={40} />, title: "Best Prices", desc: "Affordable & competitive" },
              { icon: <HiTruck size={40} />, title: "Fast Delivery", desc: "Quick doorstep delivery" },
              { icon: <HiShieldCheck size={40} />, title: "Warranty", desc: "Guaranteed products" },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="p-8 text-center transition-all duration-500 transform border shadow-xl bg-white/60 backdrop-blur-lg rounded-2xl hover:-translate-y-4 hover:shadow-2xl border-white/40"
              >
                <div className="flex justify-center mb-4 text-green-600">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-12 text-white bg-gradient-to-r from-blue-400 to-green-900">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Upgrade Your Vehicle Today</h2>
          <p className="mb-6">Find the best tyres and accessories now</p>
          <Link
            to="/tyres"
            className="inline-block px-8 py-3 font-bold text-black bg-white rounded-full hover:bg-gray-100"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppChatbot />
    </>
  );
};

export default Products;
