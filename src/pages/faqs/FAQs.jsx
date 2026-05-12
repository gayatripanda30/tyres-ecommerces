import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { HiChevronDown, HiSearch, HiMail, HiPhone } from "react-icons/hi";

// 👉 Add your custom hero image here
import heroImg from "../../assets/image9.jpg";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const allFAQs = [
    {
      category: "Ordering & Shipping",
      questions: [
        {
          q: "How do I place an order?",
          a: "Simply browse our tyres, select the product, choose quantity, and click 'Buy Now' or 'Add to Cart'. Enter your shipping and payment details and confirm your order.",
        },
        {
          q: "Can I track my order?",
          a: "Yes! You'll receive a tracking number via email once your order ships. Track your package in real-time.",
        },
        {
          q: "Is shipping free?",
          a: "Standard shipping is FREE. Express shipping is $29 for faster delivery.",
        },
      ],
    },
    {
      category: "Products",
      questions: [
        {
          q: "What tyres do you offer?",
          a: "We offer premium tyres from Pirelli, Michelin, and Bridgestone: All-Season, Performance, Comfort, Off-Road, and Eco-friendly.",
        },
        {
          q: "Are your tyres new?",
          a: "All our tyres are brand new from authorized distributors with manufacturer warranty.",
        },
      ],
    },
    {
      category: "Payment & Security",
      questions: [
        {
          q: "Is my payment information secure?",
          a: "Yes! We use 256-bit SSL encryption and PCI-DSS compliant third-party providers. Payment details are never stored on our servers.",
        },
      ],
    },
  ];

  const filteredFAQs = allFAQs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  const displayFAQs = searchTerm ? filteredFAQs : allFAQs;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center text-center bg-center bg-cover h-72 sm:h-96"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl font-black text-white sm:text-5xl md:text-6xl animate-slideInLeft">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-lg text-green-100 md:text-xl animate-slideInRight">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-4xl px-4 py-10 mx-auto sm:px-6 sm:py-12">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <HiSearch className="absolute text-gray-400 left-4 top-4" size={24} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-12 pr-4 text-lg border-2 border-green-300 rounded-xl focus:outline-none focus:border-green-600"
            />
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-gray-600">
              Found {displayFAQs.reduce((count, cat) => count + cat.questions.length, 0)} result(s) for "{searchTerm}"
            </p>
          )}
        </div>

        {/* FAQs by Category */}
        <div className="space-y-12">
          {displayFAQs.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="pb-4 mb-6 text-2xl font-bold text-green-700 border-b-4 border-green-200 sm:text-3xl">
                📌 {category.category}
              </h2>

              <div className="space-y-3">
                {category.questions.map((faq, qIdx) => {
                  const globalIdx = `${catIdx}-${qIdx}`;
                  const isExpanded = expandedIndex === globalIdx;

                  return (
                    <div
                      key={globalIdx}
                      className="overflow-hidden transition-all duration-300 bg-white border-2 border-gray-200 shadow-md rounded-xl hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIdx)}
                        className={`w-full flex items-center justify-between p-4 sm:p-6 transition-all duration-300 ${
                          isExpanded
                            ? "bg-green-600 text-white"
                            : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-base font-bold text-left sm:text-lg">{faq.q}</span>
                        <HiChevronDown
                          size={24}
                          className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="p-6 bg-white border-t-2 border-gray-200 animate-fadeIn">
                          <p className="leading-relaxed text-gray-700">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {displayFAQs.length === 0 && (
          <div className="py-12 text-center">
            <p className="mb-4 text-2xl font-bold text-gray-800">No results found</p>
            <p className="mb-6 text-gray-600">Try different keywords or browse all categories</p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-8 py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Still Have Questions Section */}
        <div className="p-5 mt-12 border-2 border-blue-300 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
          <h3 className="mb-4 text-2xl font-bold text-blue-800">Still have questions?</h3>
          <p className="mb-6 text-gray-700">
            Didn't find the answer you're looking for? Our customer support team is here to help!
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href="mailto:support@tyrecommerce.com"
              className="flex items-center justify-center gap-2 px-6 py-3 font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <HiMail size={20} /> Email Support
            </a>
            <a
              href="tel:+18001234567"
              className="flex items-center justify-center gap-2 px-6 py-3 font-bold text-white transition-all bg-green-600 rounded-lg hover:bg-green-700"
            >
              <HiPhone size={20} /> Call Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppChatbot/>
    </div>
  );
};

export default FAQs;
