import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiCheckCircle, HiArrowLeft } from "react-icons/hi";

const TyreChanges = () => {
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

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-4" data-aos="fade-down">
          <Link to="/services" className="hover:bg-blue-700 p-2 rounded-full transition">
            <HiArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="text-4xl font-bold">Tyre Changes</h1>
            <p className="text-blue-100 mt-2">Quick and professional tyre replacement service</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left Side - Image */}
            <div data-aos="fade-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-8xl text-center mb-4">🛞</div>
                <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-8 h-80 flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <p className="text-gray-600 font-semibold">Professional Tyre Installation</p>
                    <p className="text-sm text-gray-500 mt-2">Expert technicians with quality guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">Why Replace Your Tyres?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Worn out or damaged tyres compromise your vehicle's safety, handling, and fuel efficiency. Our professional tyre replacement service includes removal of old tyres, proper installation of new ones, and safe disposal of old tyres.
              </p>

              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Tyre removal and replacement",
                  "Wheel balancing included",
                  "Professional installation",
                  "Safe disposal of old tyres",
                  "All major brands available",
                  "Warranty coverage",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h4 className="font-bold text-blue-900 mb-2">⏱️ Service Duration</h4>
                <p className="text-blue-800">Approximately 45-60 minutes</p>

                <h4 className="font-bold text-blue-900 mb-2 mt-4">💰 Price</h4>
                <p className="text-blue-800 text-2xl font-bold">₹599 <span className="text-lg">(+ tyre cost)</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Available */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Available Tyre Brands</h2>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              "🏆 CEAT",
              "🚗 Apollo",
              "🌉 Bridgestone",
              "⭐ MRF",
              "🔥 JK Tyre",
            ].map((brand, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl text-center border border-gray-200">
                <p className="text-lg font-bold text-gray-800">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs of Worn Tyres */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Signs Your Tyres Need Replacement</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: "📏", title: "Tread depth below 1.6mm", desc: "Minimum legal requirement" },
              { icon: "🔍", title: "Visible wear indicators", desc: "Bars flush with tread" },
              { icon: "🌪️", title: "Sidewall damage or bulges", desc: "Dangerous to drive" },
              { icon: "🩹", title: "Multiple patches needed", desc: "Time for replacement" },
              { icon: "🔊", title: "Excessive noise while driving", desc: "Sign of wear" },
              { icon: "💨", title: "Frequent air loss", desc: "Tyre integrity compromised" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-l-4 border-orange-600 shadow-md">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Replace Your Tyres Today</h2>
          <p className="text-lg mb-6">Get new tyres with professional installation and complete peace of mind</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Schedule Service
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TyreChanges;
