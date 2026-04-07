import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { HiCheckCircle, HiArrowLeft } from "react-icons/hi";
import heroImg from "../../assets/hero3.png";
import serviceImg from "../../assets/services2.png";

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
                 <h1 className="text-4xl font-bold">Wheel Balancing</h1>
                 <p className="mt-2 text-blue-100">
                   Professional balancing service for optimal vehicle performance
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

            {/* Right Side - Info */}
            <div data-aos="fade-left">
              <h2 className="mb-6 text-3xl font-bold">What is Wheel Balancing?</h2>
              <p className="mb-6 leading-relaxed text-gray-700">
                Wheel balancing is the process of equalizing the weight distribution around the wheel and tyre assembly. Unbalanced wheels cause vibrations that can affect driving comfort, increase fuel consumption, and damage suspension components over time.
              </p>

              <h3 className="mb-4 text-2xl font-bold">Key Benefits</h3>
              <ul className="mb-8 space-y-3">
                {[
                  "Eliminates steering wheel vibration",
                  "Smoother ride quality",
                  "Extended tyre lifespan",
                  "Better fuel economy",
                  "Reduced suspension wear",
                  "Quieter driving experience",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="flex-shrink-0 mt-1 text-green-500" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 border-l-4 border-blue-900 rounded-lg bg-blue-50">
                <h4 className="mb-2 font-bold text-blue-900">⏱️ Service Duration</h4>
                <p className="text-blue-800">Approximately 20-30 minutes</p>

                <h4 className="mt-4 mb-2 font-bold text-blue-900"> Price : </h4>
                <p className="text-2xl font-bold text-blue-800">₹299</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of Imbalance */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Signs Your Wheels Need Balancing</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: "📳", title: "Steering wheel vibration", desc: "Especially at certain speeds" },
              { icon: "🔊", title: "Humming or thumping noise", desc: "Coming from the wheels" },
              { icon: "🚘", title: "Vehicle bounces after braking", desc: "Sign of imbalance" },
              { icon: "💨", title: "Uneven fuel consumption", desc: "Imbalance increases drag" },
              { icon: "👀", title: "Uneven wear patterns", desc: "On tyre surface" },
              { icon: "⚡", title: "Handling feels unstable", desc: "Especially during turns" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 transition bg-gray-100 border-l-4 border-blue-900 rounded-xl hover:shadow-md w-[70%] mx-auto">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Our Balancing Process</h2>

          <div className="grid gap-6 md:grid-cols-4 ">
            {[
              { step: 1, title: "Wheel Removal", desc: "Remove wheels from vehicle" },
              { step: 2, title: "Cleaning", desc: "Clean wheels thoroughly" },
              { step: 3, title: "Machine Balancing", desc: "Use precision equipment" },
              { step: 4, title: "Installation", desc: "Reinstall balanced wheels" },
            ].map((item, idx) => (
              <div key={idx} className="relative ">
                <div className="p-6 text-center bg-white border-t-4 border-blue-900 rounded-full shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-lg font-bold text-white bg-blue-900 rounded-full">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {idx < 3 && <div className="absolute hidden w-4 h-1 bg-blue-900 md:block top-1/2 -right-5"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-white bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl px-4 mx-auto text-center" data-aos="zoom-in">
          <h2 className="mb-4 text-3xl font-bold">Get Your Wheels Balanced Today</h2>
          <p className="mb-6 text-lg">Experience a smoother, quieter ride with professional balancing</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 font-bold text-black transition bg-white rounded-full hover:bg-gray-100"
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

export default WheelBalancing;
