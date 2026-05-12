import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { HiCheckCircle, HiArrowLeft } from "react-icons/hi";

import heroImg from "../../assets/hero3.png";
import serviceImg from "../../assets/services3.png";

// ✅ Import brand logos
import ceat from "../../assets/brand3.png";
import apollo from "../../assets/brand2.png";
import michelin from "../../assets/brand6.png";
import mrf from "../../assets/brand1.png";
import jk from "../../assets/brand4.png";

const TyreChanges = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // ✅ Brand data
  const brands = [
    { name: "CEAT", logo: ceat },
    { name: "Apollo", logo: apollo },
    { name: "Michelin", logo: michelin },
    { name: "MRF", logo: mrf },
    { name: "JK Tyre", logo: jk },
  ];

  return (
    <>
      <Navbar />

      {/* 🔥 HERO */}
      <section
        className="relative py-16 text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center max-w-6xl gap-4 px-4 mx-auto" data-aos="fade-down">
          <Link to="/services" className="p-2 transition rounded-full bg-white/20 hover:bg-white/30">
            <HiArrowLeft size={24} />
          </Link>

          <div>
            <h1 className="text-4xl font-bold">Tyre Changes</h1>
            <p className="mt-2 text-blue-100">
              Quick and professional tyre replacement service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">

            {/* LEFT IMAGE */}
            <div data-aos="fade-right">
              <div className="overflow-hidden bg-white shadow-lg rounded-2xl group">
                <img
                  src={serviceImg}
                  alt="Wheel Alignment"
                  className="object-cover w-full h-64 sm:h-80 lg:h-[400px] transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div data-aos="fade-left">
              <h2 className="mb-6 text-3xl font-bold">Why Replace Your Tyres?</h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Worn out or damaged tyres compromise your vehicle's safety,
                handling, and fuel efficiency.
              </p>

              <h3 className="mb-4 text-2xl font-bold">What's Included</h3>

              <ul className="mb-8 space-y-3">
                {[
                  "Tyre removal and replacement",
                  "Wheel balancing included",
                  "Professional installation",
                  "Safe disposal of old tyres",
                  "All major brands available",
                  "Warranty coverage",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="mt-1 text-green-500" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 border-l-4 border-blue-900 rounded-lg bg-blue-50">
                <h4 className="mb-2 font-bold text-blue-900">⏱️ Service Duration</h4>
                <p>45–60 minutes</p>

                <h4 className="mt-4 mb-2 font-bold text-blue-900"> Price : </h4>
                <p className="text-2xl font-bold text-blue-800">
                  ₹599 <span className="text-lg">(+ tyre cost)</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ✅ BRAND LOGO SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center">
            Available Tyre Brands
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 transition duration-500 bg-white border-t-4 border-blue-900 rounded-full shadow-md hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="object-contain h-12 mb-2 transition duration-300 "
                />
                <p className="text-sm font-semibold text-gray-600">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Signs of Worn Tyres */} 
     <section className="py-16 bg-gray-50"> 
      <div className="max-w-6xl px-4 mx-auto">
         <h2 className="mb-8 text-3xl font-bold text-center">Signs Your Tyres Need Replacement</h2> 
         <div className="grid gap-6 md:grid-cols-2">
           {[
             { icon: "📏", title: "Tread depth below 1.6mm", desc: "Minimum legal requirement" },
             { icon: "🔍", title: "Visible wear indicators", desc: "Bars flush with tread" },
             { icon: "🌪️", title: "Sidewall damage or bulges", desc: "Dangerous to drive" },
             { icon: "🩹", title: "Multiple patches needed", desc: "Time for replacement" },
             { icon: "🔊", title: "Excessive noise while driving", desc: "Sign of wear" },
             { icon: "💨", title: "Frequent air loss", desc: "Tyre integrity compromised" },
           ].map((item, idx) => (
             <div key={idx} className="w-full p-6 mx-auto bg-white border-l-4 border-blue-900 shadow-md rounded-xl sm:w-[85%] lg:w-[70%]">
               <div className="mb-3 text-3xl">{item.icon}</div>
               <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
               <p className="text-gray-600">{item.desc}</p>
             </div>
           ))} 
           </div> 
           </div> 
           </section>

      {/* CTA */}
      <section className="py-12 text-white bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Replace Your Tyres Today</h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 font-bold text-black bg-white rounded-full"
          >
            Schedule Service
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppChatbot />
    </>
  );
};

export default TyreChanges;
