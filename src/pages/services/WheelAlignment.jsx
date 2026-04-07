import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { HiCheckCircle, HiArrowLeft } from "react-icons/hi";

// 👉 ADD YOUR IMAGES
import heroImg from "../../assets/hero3.png";
import serviceImg from "../../assets/services1.png";

const WheelAlignment = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* 🔥 HERO WITH IMAGE */}
      <section
        className="relative py-16 text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center max-w-6xl gap-4 px-4 mx-auto" data-aos="fade-down">
          
          <Link to="/services" className="p-2 transition rounded-full bg-white/20 hover:bg-white/30">
            <HiArrowLeft size={24} />
          </Link>

          <div>
            <h1 className="text-4xl font-bold">Wheel Alignment</h1>
            <p className="mt-2 text-blue-100">
              Professional alignment service for optimal vehicle performance
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 MAIN CONTENT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">

            {/* ✅ LEFT SIDE IMAGE */}
            <div data-aos="fade-right">
              <div className="overflow-hidden bg-white shadow-lg rounded-2xl group">

                <img
                  src={serviceImg}
                  alt="Wheel Alignment"
                  className="object-cover w-full h-[400px] transition duration-500 group-hover:scale-105"
                />

              </div>
            </div>

            {/* ✅ RIGHT SIDE CONTENT */}
            <div data-aos="fade-left">
              <h2 className="mb-6 text-3xl font-bold">
                What is Wheel Alignment?
              </h2>

              <p className="mb-6 leading-relaxed text-gray-700">
                Wheel alignment is the process of adjusting your vehicle's suspension to ensure all four wheels are perfectly aligned. This improves handling, extends tyre life, and enhances fuel efficiency.
              </p>

              <h3 className="mb-4 text-2xl font-bold">
                Key Benefits
              </h3>

              <ul className="mb-8 space-y-3">
                {[
                  "Improved vehicle handling and safety",
                  "Extended tyre lifespan",
                  "Better fuel economy",
                  "Reduced steering vibration",
                  "Smooth driving experience",
                  "Lower maintenance costs",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="mt-1 text-green-500" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* INFO BOX */}
              <div className="p-6 border-l-4 border-blue-900 rounded-lg bg-blue-50">
                <h4 className="mb-2 font-bold text-blue-900">
                  ⏱️ Service Duration
                </h4>
                <p className="text-blue-800">
                  30 - 45 minutes
                </p>

                <h4 className="mt-4 mb-2 font-bold text-blue-900">
                   Price: 
                </h4>
                <p className="text-2xl font-bold text-blue-800">
                  ₹399
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 WHEN TO ALIGN */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center">
            When Should You Get Wheel Alignment?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: "🛣️", title: "After potholes", desc: "Road damage affects alignment" },
              { icon: "⚠️", title: "Car pulls one side", desc: "Sign of misalignment" },
              { icon: "📊", title: "Uneven tyre wear", desc: "Indicates alignment issues" },
              { icon: "🔄", title: "After repairs", desc: "Needed after suspension work" },
              { icon: "📅", title: "Every 6 months", desc: "Regular check recommended" },
              { icon: "🚗", title: "Unstable driving", desc: "During high speed or turns" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 transition bg-gray-100 border-l-4 border-blue-900 rounded-xl hover:shadow-md w-[70%] mx-auto"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-1 font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-12 text-center text-white bg-gradient-to-r from-gray-800 to-gray-900">
        <h2 className="mb-4 text-3xl font-bold">
          Book Your Wheel Alignment Today
        </h2>

        <p className="mb-6 text-lg">
          Ensure perfect alignment for better performance and safety
        </p>

        <Link
          to="/contact"
          className="px-8 py-3 font-bold text-black bg-white rounded-full hover:bg-gray-100"
        >
          Schedule Service
        </Link>
      </section>

      <Footer />
      <WhatsAppChatbot />
    </>
    
  );
};

export default WheelAlignment;