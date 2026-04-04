import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiCheckCircle, HiArrowLeft } from "react-icons/hi";

const WheelBalancing = () => {
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
            <h1 className="text-4xl font-bold">Wheel Balancing</h1>
            <p className="text-blue-100 mt-2">Expert balancing service for smooth ride and extended tyre life</p>
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
                <div className="text-8xl text-center mb-4">⚖️</div>
                <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-8 h-80 flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <p className="text-gray-600 font-semibold">Precision Balancing Equipment</p>
                    <p className="text-sm text-gray-500 mt-2">Advanced technology for perfect balance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">What is Wheel Balancing?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wheel balancing is the process of equalizing the weight distribution around the wheel and tyre assembly. Unbalanced wheels cause vibrations that can affect driving comfort, increase fuel consumption, and damage suspension components over time.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Eliminates steering wheel vibration",
                  "Smoother ride quality",
                  "Extended tyre lifespan",
                  "Better fuel economy",
                  "Reduced suspension wear",
                  "Quieter driving experience",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h4 className="font-bold text-blue-900 mb-2">⏱️ Service Duration</h4>
                <p className="text-blue-800">Approximately 20-30 minutes</p>

                <h4 className="font-bold text-blue-900 mb-2 mt-4">💰 Price</h4>
                <p className="text-blue-800 text-2xl font-bold">₹299</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of Imbalance */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Signs Your Wheels Need Balancing</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: "📳", title: "Steering wheel vibration", desc: "Especially at certain speeds" },
              { icon: "🔊", title: "Humming or thumping noise", desc: "Coming from the wheels" },
              { icon: "🚘", title: "Vehicle bounces after braking", desc: "Sign of imbalance" },
              { icon: "💨", title: "Uneven fuel consumption", desc: "Imbalance increases drag" },
              { icon: "👀", title: "Uneven wear patterns", desc: "On tyre surface" },
              { icon: "⚡", title: "Handling feels unstable", desc: "Especially during turns" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-600">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Balancing Process</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: 1, title: "Wheel Removal", desc: "Remove wheels from vehicle" },
              { step: 2, title: "Cleaning", desc: "Clean wheels thoroughly" },
              { step: 3, title: "Machine Balancing", desc: "Use precision equipment" },
              { step: 4, title: "Installation", desc: "Reinstall balanced wheels" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-blue-600"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Get Your Wheels Balanced Today</h2>
          <p className="text-lg mb-6">Experience a smoother, quieter ride with professional balancing</p>
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

export default WheelBalancing;
