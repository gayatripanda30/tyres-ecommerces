import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiCheckCircle, HiArrowLeft } from "react-icons/hi";

const GeneralServices = () => {
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
            <h1 className="text-4xl font-bold">General Services</h1>
            <p className="text-blue-100 mt-2">Comprehensive vehicle maintenance and care</p>
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
                <div className="text-8xl text-center mb-4">🔧</div>
                <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-8 h-80 flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <p className="text-gray-600 font-semibold">Complete Vehicle Care</p>
                    <p className="text-sm text-gray-500 mt-2">Professional inspection and maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">What are General Services?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our comprehensive general services include thorough vehicle inspection, preventive maintenance, cleaning, and expert advice to keep your vehicle in optimal condition. We diagnose potential issues before they become major problems.
              </p>

              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete vehicle inspection",
                  "Battery and electrical check",
                  "Brake system inspection",
                  "Under-carriage wash and cleanup",
                  "Engine health assessment",
                  "Professional recommendations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h4 className="font-bold text-blue-900 mb-2">⏱️ Service Duration</h4>
                <p className="text-blue-800">Approximately 60-90 minutes</p>

                <h4 className="font-bold text-blue-900 mb-2 mt-4">💰 Price</h4>
                <p className="text-blue-800 text-2xl font-bold">₹499</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our General Services Include</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🔍",
                title: "Vehicle Inspection",
                desc: "Comprehensive check of all vehicle components",
              },
              {
                icon: "⚡",
                title: "Battery Check",
                desc: "Test battery health and connections",
              },
              {
                icon: "🛢️",
                title: "Fluid Level Check",
                desc: "Engine oil, coolant, and brake fluid levels",
              },
              {
                icon: "🚗",
                title: "Brake Inspection",
                desc: "Check brake pads, rotors, and system",
              },
              {
                icon: "💨",
                title: "Air Filter Check",
                desc: "Inspect and replace if needed",
              },
              {
                icon: "🧼",
                title: "Wash & Clean",
                desc: "Complete vehicle exterior and undercarriage wash",
              },
              {
                icon: "🛞",
                title: "Tyre Pressure Check",
                desc: "Ensure proper inflation for safety",
              },
              {
                icon: "💧",
                title: "Wiper Inspection",
                desc: "Check wipers and replace if worn",
              },
              {
                icon: "🔧",
                title: "Light Check",
                desc: "Test all headlights and indicators",
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Frequency */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended Service Schedule</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "🔷 Basic Service",
                interval: "Every 3 months",
                includes: [
                  "Vehicle inspection",
                  "Fluid check",
                  "Battery test",
                  "Cleaning",
                ],
              },
              {
                title: "🔶 Standard Service",
                interval: "Every 6 months",
                includes: [
                  "Complete inspection",
                  "Brake check",
                  "Tyre check",
                  "Engine assessment",
                ],
              },
              {
                title: "🔴 Premium Service",
                interval: "Every 12 months",
                includes: [
                  "Full diagnostics",
                  "Component replacement",
                  "Deep cleaning",
                  "Performance tuning",
                ],
              },
            ].map((schedule, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-2">{schedule.title}</h3>
                <p className="text-lg text-green-600 font-semibold mb-6">{schedule.interval}</p>

                <h4 className="font-bold mb-3">Includes:</h4>
                <ul className="space-y-2">
                  {schedule.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Service */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">When Should You Get General Service?</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "⏱️",
                title: "Scheduled Maintenance",
                desc: "Follow manufacturer's recommended service intervals",
              },
              {
                icon: "🔊",
                title: "Strange Noises",
                desc: "Any unusual sounds from the engine or undercarriage",
              },
              {
                icon: "⚠️",
                title: "Warning Lights",
                desc: "Dashboard warning indicators active",
              },
              {
                icon: "💨",
                title: "Performance Drop",
                desc: "Reduced fuel efficiency or power",
              },
              {
                icon: "👃",
                title: "Unusual Smells",
                desc: "Burning or strange odors from vehicle",
              },
              {
                icon: "⛽",
                title: "After Long Trips",
                desc: "Service before or after highway travel",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-600">
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
          <h2 className="text-3xl font-bold mb-4">Schedule Your General Service Today</h2>
          <p className="text-lg mb-6">Keep your vehicle in perfect condition with our comprehensive maintenance</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Book Service
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GeneralServices;
