import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "../../components/layout/Navbar";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot"; 
import Footer from "../../components/layout/Footer";


// 👉 Your images
import heroImg from "../../assets/image6.jpg";
import img1 from "../../assets/aboutimg1.png";
import img2 from "../../assets/aboutimg2.png";
import img3 from "../../assets/aboutimg3.png";
import img4 from "../../assets/aboutimg4.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sections = [
  {
    title: "Seamless Convenience",
    desc: "Experience unmatched convenience with our mobile tyre units that bring professional services directly to your home, office, or any location you prefer. No more waiting in long queues or rearranging your day — our team arrives fully equipped to handle installations, repairs, and routine maintenance efficiently. We prioritize punctuality, ensuring your vehicle is ready quickly so you can continue with your schedule stress-free.",
    img: img1,
  },
  {
    title: "Premium Selection",
    desc: "We offer an extensive collection of tyres sourced from the world's leading brands, catering to every vehicle type from compact cars to heavy-duty trucks. Our selection ensures superior performance, durability, and safety, allowing you to make informed choices based on your driving style, road conditions, and budget. With us, you gain access to high-quality tyres that deliver long-lasting reliability and enhanced driving comfort.",
    img: img2,
    reverse: true,
  },
  {
    title: "Expert Technicians",
    desc: "Our team of certified and highly trained technicians brings precision and expertise to every service. From professional installations to thorough inspections and maintenance, we follow best practices and industry standards to ensure your vehicle operates at peak performance. Trust our experts to identify potential issues before they become problems, providing peace of mind and enhancing the longevity of your tyres and overall vehicle safety.",
    img: img3,
  },
  {
    title: "Transparent & Trustworthy",
    desc: "We believe in honesty and integrity in every interaction. Our transparent pricing ensures there are no hidden costs, and we offer multiple convenient payment options for your ease. Every service is carried out with full accountability, and our team communicates clearly about work performed, recommendations, and timelines. When you choose us, you choose a partner committed to reliability, fairness, and building lasting trust with our clients.",
    img: img4,
    reverse: true,
  },
];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-50">
      <Navbar />

      {/* 🔥 HERO SECTION */}
      <div
        className="relative flex items-center justify-center min-h-[440px] text-center text-white sm:min-h-[560px]"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="relative z-10 px-6" data-aos="fade-up">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            About TyreShop
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Premium tyres and expert automotive services delivered with trust, quality, and innovation.
          </p>
        </div>
      </div>

      {/* 🔥 TITLE */}
      <h2 className="px-4 mt-16 text-3xl font-bold text-center sm:mt-20 sm:text-4xl" data-aos="fade-up">
        Our Commitment to Excellence
      </h2>

      {/* 🔥 SECTIONS */}
      {sections.map((item, index) => (
        <div
          key={index}
          className="max-w-6xl px-4 mx-auto my-10 sm:px-6"
          data-aos={item.reverse ? "fade-left" : "fade-right"}
        >
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* TEXT */}
            <div className={`${item.reverse ? "md:order-2" : ""}`}>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-lg leading-relaxed text-gray-700">{item.desc}</p>
            </div>

            {/* 🔥 IMAGE DESIGN (Screenshot Style) */}
            <div className={`flex justify-center ${item.reverse ? "md:order-1" : ""}`}>
              <div className="relative w-full max-w-[600px] hover:-translate-y-2 transition-all duration-500">
                {/* Blue Offset Background */}
                <div className="absolute -bottom-3 -left-3 w-full h-full bg-blue-900 rounded-[40px] z-0"></div>

                {/* Main Image */}
                <div className="relative z-10 p-2 bg-gray-200 rounded-[40px] shadow-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[240px] sm:h-[300px] md:h-[350px] object-cover rounded-[30px] transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}

      {/* 🔥 CTA SECTION */}
      <div
        className="px-6 py-20 text-center text-white bg-gradient-to-r from-green-500 to-green-600"
        data-aos="zoom-in"
      >
        <h2 className="mb-4 text-3xl font-bold">
          Experience Premium Tyres & Services
        </h2>
        <p className="mb-6 text-lg text-gray-100">
          Explore our carefully curated tyre collection and enjoy professional automotive services designed for your safety and comfort.
        </p>

        <a
          href="/products"
          className="px-8 py-3 font-semibold text-green-600 transition bg-white rounded-full shadow-lg hover:bg-gray-100"
        >
          Explore Products
        </a>
      </div>

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default About;
