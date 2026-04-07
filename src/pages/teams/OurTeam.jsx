import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
// 👉 Your hero image
import heroImg from "../../assets/image6.jpg";

// 👉 Team data
const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    desc: "Leads the company with a vision to deliver quality automotive solutions.",
    img: "https://via.placeholder.com/150", // replace with actual image
  },
  {
    name: "Priya Das",
    role: "Operations Manager",
    desc: "Ensures smooth operations and customer satisfaction across services.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Amit Kumar",
    role: "Technical Head",
    desc: "Expert in tyre technology and installation processes.",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Neha Verma",
    role: "Customer Support Lead",
    desc: "Dedicated to providing excellent customer experience.",
    img: "https://via.placeholder.com/150",
  },
];

const OurTeam = () => {
  // Separate CEO from other members
  const ceo = teamMembers.find((member) => member.role.includes("CEO"));
  const otherMembers = teamMembers.filter((member) => !member.role.includes("CEO"));

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* 🔹 Hero Section */}
      <div
        className="relative flex items-center justify-center text-center bg-center bg-cover h-96"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold">Meet Our Team</h1>
          <p className="mt-3 text-lg">The people behind our success</p>
        </div>
      </div>

      {/* 🔹 CEO Section */}
      {ceo && (
        <div className="relative z-10 max-w-2xl px-5 py-16 mx-auto -mt-16 text-center bg-white shadow-md rounded-xl">
          <img
            src={ceo.img}
            alt={ceo.name}
            className="object-cover w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
          />
          <h2 className="text-2xl font-bold">{ceo.name}</h2>
          <p className="mb-2 font-semibold text-green-500">{ceo.role}</p>
          <p className="text-gray-600">{ceo.desc}</p>
        </div>
      )}

      {/* 🔹 Team Grid */}
      <div className="grid max-w-6xl gap-8 px-6 py-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {otherMembers.map((member, index) => (
          <div
            key={index}
            className="p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-xl"
          >
            <img
              src={member.img}
              alt={member.name}
              className="object-cover w-24 h-24 mx-auto mb-4 rounded-full shadow-md"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="mb-2 font-medium text-green-500">{member.role}</p>
            <p className="text-sm text-gray-600">{member.desc}</p>
          </div>
        ))}
      </div>

      {/* 🔹 CTA Section */}
      <div className="py-16 text-center text-white bg-green-500">
        <h2 className="mb-3 text-3xl font-bold">Want to Work With Us?</h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Join our growing team and build your career with us. We value passion, dedication, and innovation.
        </p>
        <button className="px-8 py-3 text-lg font-semibold text-green-500 transition bg-white rounded-full hover:bg-gray-100">
          View Careers
        </button>
      </div>

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default OurTeam;