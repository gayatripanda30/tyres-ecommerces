import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiCheckCircle, HiClock, HiUsers, HiSparkles } from "react-icons/hi";

const Services = () => {
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
      description: "Professional wheel alignment service to ensure proper tyre positioning and enhance fuel efficiency.",
      icon: "⚙️",
      path: "/services/wheel-alignment",
      features: ["Precision alignment", "Extended tyre life", "Improved handling", "Better fuel economy"],
      price: "₹399",
    },
    {
      id: 2,
      name: "Wheel Balancing",
      description: "Expert wheel balancing to reduce vibration and ensure smooth driving experience on all roads.",
      icon: "⚖️",
      path: "/services/wheel-balancing",
      features: ["Vibration reduction", "Even tyre wear", "Smooth ride", "Extended tyre life"],
      price: "₹299",
    },
    {
      id: 3,
      name: "Tyre Changes",
      description: "Quick and efficient tyre replacement service by certified technicians with quality assurance.",
      icon: "🛞",
      path: "/services/tyre-changes",
      features: ["Quick service", "Expert installation", "Multiple brands", "Disposal included"],
      price: "₹599",
    },
    {
      id: 4,
      name: "Pollution Testing",
      description: "Certified pollution control testing (PUC) to ensure your vehicle meets environmental standards.",
      icon: "🌍",
      path: "/services/pollution-testing",
      features: ["Certified testing", "Quick results", "Valid certification", "Eco-friendly"],
      price: "₹150",
    },
    {
      id: 5,
      name: "General Services",
      description: "Comprehensive vehicle maintenance including inspection, cleaning, and preventive care.",
      icon: "🔧",
      path: "/services/general-services",
      features: ["Vehicle inspection", "Cleaning service", "Preventive care", "Expert advice"],
      price: "₹499",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center" data-aos="fade-down">
          <h1 className="text-5xl font-bold mb-4">Professional Vehicle Services</h1>
          <p className="text-xl text-blue-100">Complete care for your tyres and vehicle at your doorstep</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={service.path}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl border-2 border-gray-200 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <HiCheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition group-hover:translate-x-1">
                      Learn More →
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
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <HiSparkles size={40} />, title: "Quality Service", desc: "Expert technicians with years of experience" },
              { icon: <HiClock size={40} />, title: "Quick Service", desc: "Fast turnaround without compromising quality" },
              { icon: <HiUsers size={40} />, title: "Professional Team", desc: "Certified and trained professionals" },
              { icon: <HiCheckCircle size={40} />, title: "Guaranteed Work", desc: "100% satisfaction guaranteed" },
            ].map((item, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Service Your Vehicle?</h2>
          <p className="text-lg mb-6">Book your appointment today and get professional service at your doorstep</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
