import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import image2 from "../../assets/image2.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handle input change with validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name → allow only letters & spaces
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    setForm({ ...form, [name]: value });
  };

  // ✅ Email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!isValidEmail(form.email)) {
      alert("Please enter a valid email");
      return;
    }

    alert("✅ Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

       {/* 🔥 HERO SECTION (RIGHT SIDE TEXT) */}
      <div
        className="relative py-20 text-white"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex justify-end max-w-6xl px-4 mx-auto">
          <div className="max-w-md p-6 text-right backdrop-blur-md rounded-xl">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-gray-200">
              We are here to help you with your tyre needs
            </p>
          </div>
        </div>
      </div>


      {/* ✅ MAIN SECTION */}
      <div className="px-6 py-12 bg-gray-100">
        <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2">

          {/* ✅ FORM */}
          <div className="p-8 bg-white shadow-lg rounded-2xl">
            <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name "
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email "
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* BUTTON */}
              <button className="w-[40%] py-3 font-semibold text-white transition bg-blue-900 rounded-full hover:bg-blue-800">
                Send Message
              </button>

            </form>
          </div>

          {/* ✅ CONTACT INFO */}
          <div className="space-y-6">

            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <h3 className="mb-4 text-xl font-semibold">Contact Details</h3>

              <p className="mb-3">
                📍 <strong>Address:</strong> Brahmapur, Odisha, India
              </p>

              {/* ✅ Click to call */}
              <p className="mb-3">
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919876543210"
                  className="text-blue-600 hover:underline"
                >
                  +91 9876543210
                </a>
              </p>

              {/* ✅ Click to open mail */}
              <p className="mb-3">
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@tyreshop.com"
                  className="text-blue-600 hover:underline"
                >
                  support@tyreshop.com
                </a>
              </p>
            </div>

            {/* ✅ MAP */}
            <div className="overflow-hidden shadow-lg rounded-2xl">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Brahmapur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[300px]"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
         <Footer />
      <WhatsAppChatbot />
      </div>
    </>
  );
};

export default Contact;