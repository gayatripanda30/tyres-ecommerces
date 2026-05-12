import { useState } from "react";
import * as XLSX from "xlsx";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import image2 from "../../assets/image2.png";

const CONTACT_MESSAGES_KEY = "contactMessages";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    setForm({ ...form, [name]: value });
  };

  // ✅ Email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const downloadMessagesExcel = (messages) => {
    const worksheet = XLSX.utils.json_to_sheet(messages);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Contact Messages");
    XLSX.writeFile(workbook, "contact-messages.xlsx");
  };

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

    const savedMessages = JSON.parse(
      localStorage.getItem(CONTACT_MESSAGES_KEY) || "[]"
    );

    const newMessage = {
      Name: form.name.trim(),
      Email: form.email.trim(),
      Message: form.message.trim(),
      Date: new Date().toLocaleString(),
    };

    const updatedMessages = [...savedMessages, newMessage];

    localStorage.setItem(CONTACT_MESSAGES_KEY, JSON.stringify(updatedMessages));
    downloadMessagesExcel(updatedMessages);

    alert("Message saved in frontend and Excel file downloaded!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      
      <div
        className="relative py-16 text-white sm:py-20"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex max-w-6xl px-4 mx-auto sm:justify-end">
          <div className="w-full max-w-md p-5 text-left sm:p-6 sm:text-right backdrop-blur-md rounded-xl">
            <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
            <p className="mt-2 text-gray-200">
              We are here to help you with your tyre needs
            </p>
          </div>
        </div>
      </div>

    
      <div className="flex-grow px-4 py-10 bg-gray-100 sm:px-6 sm:py-12">
        <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2">

         
          <div className="p-5 bg-white shadow-lg sm:p-8 rounded-2xl">
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button className="w-full px-6 py-3 font-semibold text-white bg-blue-900 rounded-full sm:w-auto hover:bg-blue-800">
                Send Message
              </button>

            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="p-5 break-words bg-white shadow-lg sm:p-6 rounded-2xl">
              <h3 className="mb-4 text-xl font-semibold">Contact Details</h3>

              <p className="mb-3">
                📍 <strong>Address:</strong> Bhubaneswar, Odisha, India
              </p>

              <p className="mb-3">
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919876543210"
                  className="text-blue-600 hover:underline"
                >
                  +91 9876543210
                </a>
              </p>

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

            {/* MAP */}
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
      </div>

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Contact;
