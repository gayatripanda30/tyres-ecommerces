import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiCheckCircle, HiArrowLeft } from "react-icons/hi";

const PollutionTesting = () => {
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
            <h1 className="text-4xl font-bold">Pollution Testing (PUC)</h1>
            <p className="text-blue-100 mt-2">Certified pollution control testing for emission compliance</p>
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
                <div className="text-8xl text-center mb-4">🌍</div>
                <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-8 h-80 flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <p className="text-gray-600 font-semibold">Certified PUC Testing</p>
                    <p className="text-sm text-gray-500 mt-2">Government approved testing center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">What is Pollution Testing?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Pollution control (PUC) testing is a mandatory certification process that checks if your vehicle's emissions comply with environmental standards set by the government. It ensures your vehicle is not polluting the air excessively and is safe for the environment.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Government approved certification",
                  "Mandatory for vehicle registration",
                  "Quick testing process (5-10 minutes)",
                  "Valid certificate provided",
                  "Helps reduce air pollution",
                  "Protects your vehicle's health",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h4 className="font-bold text-blue-900 mb-2">⏱️ Service Duration</h4>
                <p className="text-blue-800">Approximately 10-15 minutes</p>

                <h4 className="font-bold text-blue-900 mb-2 mt-4">💰 Price</h4>
                <p className="text-blue-800 text-2xl font-bold">₹150</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Test</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Carbon Monoxide (CO)",
                desc: "Harmful gas produced by incomplete combustion",
                icon: "☠️",
              },
              {
                title: "Hydrocarbons (HC)",
                desc: "Unburnt fuel vapors in exhaust",
                icon: "🌫️",
              },
              {
                title: "Nitrogen Oxides (NOx)",
                desc: "Gases that contribute to smog",
                icon: "⚡",
              },
            ].map((test, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 text-center">
                <div className="text-5xl mb-4">{test.icon}</div>
                <h3 className="font-bold text-lg mb-2">{test.title}</h3>
                <p className="text-gray-600">{test.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Validity */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Certificate Information</h2>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-2 border-green-200">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-4">📜</div>
                <h3 className="font-bold text-lg mb-2">Certificate Validity</h3>
                <p className="text-2xl font-bold text-gray-800">6 Months</p>
              </div>

              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-4">✓</div>
                <h3 className="font-bold text-lg mb-2">Valid For</h3>
                <p className="text-gray-600">
                  Official vehicle documents and RTO registration renewal
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-lg mb-4">Required Documents</h4>
              <ul className="space-y-2">
                {[
                  "Vehicle registration certificate",
                  "Insurance document",
                  "ID proof of owner",
                  "Vehicle for inspection",
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for PUC Pass */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tips to Pass PUC Test</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "🔧",
                title: "Regular Maintenance",
                desc: "Keep your vehicle well-maintained and serviced",
              },
              {
                icon: "⛽",
                title: "Quality Fuel",
                desc: "Use good quality fuel and certified petrol pumps",
              },
              {
                icon: "🛞",
                title: "Replace Air Filter",
                desc: "Ensure air filter is clean and functional",
              },
              {
                icon: "⚙️",
                title: "Engine Tuning",
                desc: "Get engine timing checked by experts",
              },
              {
                icon: "🔌",
                title: "Spark Plugs",
                desc: "Replace spark plugs if needed",
              },
              {
                icon: "📊",
                title: "Regular Check-ups",
                desc: "Test your emissions periodically",
              },
            ].map((tip, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border-l-4 border-green-600">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Get Your PUC Certificate Today</h2>
          <p className="text-lg mb-6">Quick, reliable, and certified pollution testing for your vehicle</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Schedule Testing
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PollutionTesting;
