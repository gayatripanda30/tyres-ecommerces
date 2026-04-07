import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { HiCheckCircle, HiClock, HiUsers, HiSparkles } from "react-icons/hi";
import image2 from "../../assets/image2.png";
import alignImg from "../../assets/services1.png";
import balanceImg from "../../assets/services2.png";
import tyreImg from "../../assets/services3.png";
import pollutionImg from "../../assets/services4.png";
import generalImg from "../../assets/services5.png";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const services = [
    {
      id: 1,
      name: "Wheel Alignment",
      description: "Ensure perfect tyre alignment for better control and fuel efficiency.",
    
      image: alignImg,
      rating: 4,
      path: "/services/wheel-alignment",
      features: ["Precision alignment", "Extended tyre life", "Better handling"],
      price: "₹399",
    },
    {
      id: 2,
      name: "Wheel Balancing",
      description: "Smooth driving with vibration-free wheels.",
    
      image: balanceImg,
      rating: 4,
      path: "/services/wheel-balancing",
      features: ["Even tyre wear", "Smooth ride", "Less vibration"],
      price: "₹299",
    },
    {
      id: 3,
      name: "Tyre Changes",
      description: "Fast tyre replacement by experts.",
      
      image: tyreImg,
      rating: 5,
      path: "/services/tyre-changes",
      features: ["Quick install", "Expert service", "All brands"],
      price: "₹599",
    },
    {
      id: 4,
      name: "Pollution Testing",
      description: "Certified PUC testing for your vehicle.",
    
      image: pollutionImg,
      rating: 4,
      path: "/services/pollution-testing",
      features: ["Quick results", "Valid certificate"],
      price: "₹150",
    },
    {
      id: 5,
      name: "General Services",
      description: "Complete vehicle maintenance solutions.",
      
      image: generalImg,
      rating: 5,
      path: "/services/general-services",
      features: ["Inspection", "Cleaning", "Maintenance"],
      price: "₹499",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="relative py-16 text-white"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-6xl px-4 mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold">
            Expert Tyre Service
          </h1>
          <p className="text-lg text-gray-200">
            From installation to maintenance, we’ve got you covered
          </p>
        </div>
      </section>

      {/* 🔥 SERVICES GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">
            Our Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={service.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative overflow-hidden transition bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                  />

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* TEXT */}
                  <div className="absolute text-white bottom-4 left-4">
                    <h3 className="text-xl font-bold">
                      {service.name}
                    </h3>

                    <div className="text-sm text-yellow-400">
                      {"★".repeat(service.rating)}
                      {"☆".repeat(5 - service.rating)}
                    </div>
                  </div>

                  {/* ICON */}
                  <div className="absolute text-3xl text-white top-3 right-3">
                    {service.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="mb-4 text-sm text-gray-600">
                    {service.description}
                  </p>

                  <ul className="mb-4 space-y-1">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <HiCheckCircle className="text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-green-600">
                      {service.price}
                    </span>

                    <div className="flex gap-2">
                      {/* Learn */}
                      <button className="px-3 py-2 text-white bg-blue-600 rounded-lg">
                        Learn
                      </button>

                      {/* ✅ Book Now → Contact Page */}
                      <button
                        onClick={(e) => {
                          e.preventDefault(); // stop Link navigation
                          navigate("/contact");
                        }}
                        className="px-3 py-2 font-semibold bg-yellow-400 rounded-lg hover:bg-yellow-500"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 bg-blue-400/10 blur-xl group-hover:opacity-100"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            {[
              { icon: <HiSparkles size={28} />, title: "Quality Service", desc: "Expert technicians" },
              { icon: <HiClock size={28} />, title: "Fast Service", desc: "Quick turnaround" },
              { icon: <HiUsers size={28} />, title: "Professional Team", desc: "Certified experts" },
              { icon: <HiCheckCircle size={28} />, title: "Guaranteed Work", desc: "100% satisfaction" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 text-center transition bg-gray-100 border-l-4 border-blue-600 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                {/* ✅ Centered Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 text-blue-600 bg-blue-100 rounded-full">
                    {item.icon}
                  </div>
                </div>

                <h3 className="mb-2 font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center text-white bg-gradient-to-r from-blue-600 to-blue-800">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Service Your Vehicle?
        </h2>

        <Link
          to="/contact"
          className="inline-block px-8 py-3 font-bold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
        >
          Book Now
        </Link>
      </section>

      <Footer />
      <WhatsAppChatbot />
    </>
  );
};

export default Services;