import { useState } from "react";
import Navbar from "../../components/layout/Navbar";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Submit
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

    // Reset form
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="py-16 text-center text-white bg-gradient-to-r from-gray-800 to-gray-600">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-200">
          We are here to help you with your tyre needs
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="px-6 py-12 bg-gray-100">
        <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2">

          {/* FORM */}
          <div className="p-8 bg-white shadow rounded-xl">
            <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-yellow-400"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-yellow-400"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-yellow-400"
              />

              {/* BUTTON */}
              <button className="w-full py-3 font-semibold text-black bg-yellow-500 rounded hover:bg-yellow-400">
                Send Message
              </button>

            </form>
          </div>

          {/* CONTACT INFO + MAP */}
          <div className="space-y-6">

            {/* ADDRESS */}
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="mb-4 text-xl font-semibold">Contact Details</h3>

              <p className="mb-2">
                📍 <strong>Address:</strong> Brahmapur, Odisha, India
              </p>

              <p className="mb-2">
                📞 <strong>Phone:</strong> +91 9876543210
              </p>

              <p className="mb-2">
                📧 <strong>Email:</strong> support@tyreshop.com
              </p>
            </div>

            {/* MAP */}
            <div className="overflow-hidden shadow rounded-xl">
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
    </>
  );
};

export default Contact;