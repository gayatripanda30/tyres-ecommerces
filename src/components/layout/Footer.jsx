import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaYoutube, FaGlobe } from "react-icons/fa";
import footerBg from "../../assets/image1.png";

// 👉 Payment logos
import visaLogo from "../../assets/visa.png";
import mastercardLogo from "../../assets/mastercard.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubscribe = () => {
    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="text-white bg-black">

      {/* 🔹 Newsletter Section */}
      <div
        className="relative px-6 py-16 bg-center bg-cover"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="max-w-xl p-8 mx-auto shadow-lg rounded-xl bg-black/70 backdrop-blur-md">
          <h2 className="mb-2 text-2xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mb-5 text-gray-300">
            Get exclusive offers, updates, and latest deals directly in your inbox.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 text-black rounded outline-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
            />
            <button
              onClick={handleSubscribe}
              className={`px-6 py-3 rounded font-medium transition ${
                status === "success" ? "bg-green-600" : "bg-green-500 hover:bg-green-600"
              }`}
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Subscribing..."
                : status === "success"
                ? "Subscribed ✓"
                : "Subscribe"}
            </button>
          </div>

          {/* ✅ Messages */}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-400">
              Please enter a valid email address
            </p>
          )}

          {status === "success" && (
            <p className="mt-3 text-sm text-green-400">🎉 Successfully subscribed!</p>
          )}
        </div>
      </div>

      {/* 🔹 Footer Links */}
      <div className="grid grid-cols-1 gap-10 px-8 py-12 text-sm md:grid-cols-4">
        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold tracking-wide text-green-400">COMPANY</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/ourteam" className="hover:text-white">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/tyres" className="hover:text-white">Tyres</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="mb-4 font-semibold tracking-wide text-green-400">CUSTOMER SERVICE</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/terms-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/special-offers" className="hover:text-white">Special Offers</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold tracking-wide text-green-400">CONNECT WITH US</h3>
          <p className="flex items-center gap-2 text-gray-300">
            <HiPhone size={20} /> <a href="tel:+1800555" className="hover:text-white">Toll-Free: 800 555</a>
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <HiMail size={20} /> <a href="mailto:info@tyreshop.com" className="hover:text-white">info@tyreshop.com</a>
          </p>

          <div className="flex gap-4 mt-4 text-xl text-gray-300">
            <a href="https://google.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaGlobe /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="mb-4 font-semibold tracking-wide text-green-400">PAYMENT METHODS</h3>
          <div className="flex items-center gap-3 ">
            <img src={visaLogo} alt="Visa" className="object-contain h-12" />
<img src={mastercardLogo} alt="MasterCard" className="object-contain h-12" />
          </div>
        </div>
      </div>

      {/* 🔹 Bottom */}
      <div className="py-4 text-sm text-center text-gray-500 border-t border-gray-700">
        © 2026 TyreShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;