import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 👉 Import your own images here
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
      title: "Doorstep Convenience",
      desc: "Our mobile vans reach your home or office for tyre installation.",
      img: img1,
    },
    {
      title: "Widest Selection",
      desc: "Choose from top brands like CEAT, Apollo, Bridgestone.",
      img: img2,
      reverse: true,
      overlay: true,
    },
    {
      title: "Expert Service",
      desc: "Professional technicians ensure smooth installation.",
      img: img3,
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges with multiple payment options.",
      img: img4,
      reverse: true,
      overlay: true,
    },
  ];

  return (
    <div className="bg-gray-100">

      {/* 🔹 Floating Animation Style */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* 🔹 HERO */}
      <div
        className="relative px-6 py-24 text-center text-white bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604147706283-d7119b5b8222')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10" data-aos="fade-up">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            About TyreShop
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Delivering quality tyres and reliable services to keep you moving safely.
          </p>
        </div>
      </div>

      {/* 🔥 TITLE */}
      <h2
        className="mt-16 mb-10 text-3xl font-bold text-center"
        data-aos="fade-up"
      >
        Here's what sets us apart
      </h2>

      {/* 🔹 SECTIONS */}
      {sections.map((item, index) => (
        <div
          key={index}
          className="my-16"
          data-aos={item.reverse ? "fade-left" : "fade-right"}
        >
          <div className="grid items-center md:grid-cols-2">

            {/* TEXT */}
            <div
              className={`p-10 flex items-center justify-center ${
                item.overlay
                  ? "bg-black/70 text-white"
                  : "bg-yellow-50"
              } ${item.reverse ? "md:order-2" : ""}`}
            >
              <div className="max-w-md">
                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                <p className={`${item.overlay ? "text-gray-200" : "text-gray-600"}`}>
                  {item.desc}
                </p>
              </div>
            </div>

            {/* IMAGE WITH SHAPE + 3D */}
            <div
              className={`flex items-center justify-center h-[300px] md:h-[420px] ${
                item.reverse ? "md:order-1" : ""
              }`}
            >
              <div className="relative group float">

                {/* Glow */}
                <div className="absolute inset-0 transition bg-green-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50"></div>

                {/* Image Shape */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="relative z-10 w-[280px] h-[280px] md:w-[320px] md:h-[320px] object-cover 
                  rounded-[60%_40%_30%_70%/60%_30%_70%_40%] 
                  shadow-2xl transform 
                  group-hover:scale-110 group-hover:rotate-3 
                  transition duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      ))}

      {/* 🔹 CTA */}
      <div className="px-6 py-16 text-center" data-aos="zoom-in">
        <h2 className="mb-4 text-2xl font-bold">
          Ready to Find the Perfect Tyres?
        </h2>
        <p className="mb-6 text-gray-600">
          Browse our collection and get started today.
        </p>

        <a
          href="/products"
          className="px-6 py-3 text-white transition bg-green-500 rounded hover:bg-green-600"
        >
          Explore Products
        </a>
      </div>

    </div>
  );
};

export default About;