import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { HiCheckCircle, HiArrowLeft } from "react-icons/hi";
import heroImg from "../../assets/hero3.png";
import serviceImg from "../../assets/services4.png";

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
            <h1 className="text-4xl font-bold">Pollution Testing (PUC)</h1>
            <p className="mt-2 text-blue-100">Certified pollution control testing for emission compliance</p>
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
            {/* Right Side - Info */}
            <div data-aos="fade-left">
              <h2 className="mb-6 text-3xl font-bold">What is Pollution Testing?</h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Pollution control (PUC) testing is a mandatory certification process that checks if your vehicle's emissions comply with environmental standards set by the government. It ensures your vehicle is not polluting the air excessively and is safe for the environment.
              </p>

              <h3 className="mb-4 text-2xl font-bold">Key Benefits</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Government approved certification",
                  "Mandatory for vehicle registration",
                  "Quick testing process (5-10 minutes)",
                  "Valid certificate provided",
                  "Helps reduce air pollution",
                  "Protects your vehicle's health",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="flex-shrink-0 mt-1 text-green-500" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 border-l-4 border-blue-900 rounded bg-blue-50">
                <h4 className="mb-2 font-bold text-blue-900">⏱️ Service Duration</h4>
                <p className="text-blue-800">Approximately 10-15 minutes</p>

                <h4 className="mt-4 mb-2 font-bold text-blue-900">Price : </h4>
                <p className="text-2xl font-bold text-blue-800">₹150</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">What We Test</h2>

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
              <div key={idx} className="p-6 text-center border-t-4 border-blue-900 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                <div className="mb-4 text-5xl">{test.icon}</div>
                <h3 className="mb-2 text-lg font-bold">{test.title}</h3>
                <p className="text-gray-600">{test.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Validity */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Certificate Information</h2>

          <div className="max-w-3xl p-8 mx-auto border-t-4 border-blue-900 shadow-lg bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-center">
                <div className="mb-4 text-4xl text-green-600">📜</div>
                <h3 className="mb-2 text-lg font-bold">Certificate Validity</h3>
                <p className="text-2xl font-bold text-gray-800">6 Months</p>
              </div>

              <div className="text-center">
                <div className="mb-4 text-4xl text-blue-600">✓</div>
                <h3 className="mb-2 text-lg font-bold">Valid For</h3>
                <p className="text-gray-600">
                  Official vehicle documents and RTO registration renewal
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-200">
              <h4 className="mb-4 text-lg font-bold">Required Documents</h4>
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
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Tips to Pass PUC Test</h2>

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
              <div key={idx} className="p-6 border-l-4 border-blue-900 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl w-[70%] mx-auto">
                <div className="mb-3 text-3xl">{tip.icon}</div>
                <h3 className="mb-2 text-lg font-bold">{tip.title}</h3>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-white bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl px-4 mx-auto text-center" data-aos="zoom-in">
          <h2 className="mb-4 text-3xl font-bold">Get Your PUC Certificate Today</h2>
          <p className="mb-6 text-lg">Quick, reliable, and certified pollution testing for your vehicle</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 font-bold text-black transition bg-white rounded-full hover:bg-gray-100"
          >
            Schedule Testing
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppChatbot />
    </>
  );
};

export default PollutionTesting;
