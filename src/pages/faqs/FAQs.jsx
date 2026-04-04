import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiChevronDown, HiSearch } from "react-icons/hi";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const allFAQs = [
    // Ordering & Shipping
    {
      category: "Ordering & Shipping",
      questions: [
        {
          q: "How do I place an order?",
          a: "Simply browse our tyres, select the product you want, choose quantity, and click 'Buy Now' or 'Add to Cart'. Enter your shipping and payment details on checkout and confirm your order.",
        },
        {
          q: "What are the shipping options available?",
          a: "We offer Standard Delivery (FREE, 5-7 business days) and Express Delivery ($29, 2-3 business days). Select your preferred option during checkout.",
        },
        {
          q: "Do you ship internationally?",
          a: "Currently, we ship within the United States only. We are working on expanding our international shipping. Check back soon!",
        },
        {
          q: "Can I track my order?",
          a: "Yes! You'll receive a tracking number via email once your order ships. You can use this number to track your package in real-time.",
        },
        {
          q: "Is shipping free?",
          a: "Standard shipping is FREE. Express shipping is $29 for faster delivery. Free shipping applies to all orders regardless of amount.",
        },
      ],
    },
    // Products
    {
      category: "Products",
      questions: [
        {
          q: "How do I know which tyre is right for me?",
          a: "Check your vehicle's owner manual for the recommended tyre size and type. You can also visit a professional to get your vehicle's specifications. Our product pages include detailed descriptions to help you choose.",
        },
        {
          q: "What tyres do you offer?",
          a: "We offer premium tyres from three leading brands: Pirelli, Michelin, and Bridgestone. Our collection includes All-Season, Performance, Comfort, Off-Road, and Eco-friendly tyres.",
        },
        {
          q: "Are your tyres new or used?",
          a: "All our tyres are brand new and genuine. We only stock products from authorized distributors with full manufacturer warranty.",
        },
        {
          q: "Do you offer bulk discounts?",
          a: "Yes! Contact our sales team at sales@tyrecommerce.com for bulk orders (4+ sets). We offer special pricing for fleet purchases.",
        },
        {
          q: "What warranty is included?",
          a: "All tyres come with a 2-year manufacturer's warranty covering defects and workmanship. This does not cover wear and tear from normal use.",
        },
      ],
    },
    // Payment & Security
    {
      category: "Payment & Security",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Credit Cards (Visa, Mastercard, American Express), UPI, Digital Wallets (Google Pay, Apple Pay), and EMI options (0% interest for 3, 6, or 12 months).",
        },
        {
          q: "Is my payment information secure?",
          a: "Yes! We use 256-bit SSL encryption for all transactions. Your payment details are processed by PCI-DSS compliant third-party providers and are never stored on our servers.",
        },
        {
          q: "Can I save my payment details?",
          a: "You can choose to save your payment method for faster future purchases. Your details remain secure and encrypted.",
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! We offer EMI options through our partners with 0% interest for 3, 6, or 12 months on purchases over $500.",
        },
        {
          q: "What if a payment fails?",
          a: "If your payment fails, you'll receive an error message. Your card will not be charged. Please try again with a different payment method.",
        },
      ],
    },
    // Returns & Refunds
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day hassle-free return policy. Tyres must be in original condition, unused, and uninstalled. Tyres showing signs of wear cannot be returned.",
        },
        {
          q: "How do I initiate a return?",
          a: "Log into your account, go to Order History, select the product, and click 'Return Item'. Follow the instructions to print a return label. Ship the item back to us with the label.",
        },
        {
          q: "How long does refund processing take?",
          a: "Once we receive and verify your return, refunds are processed within 5-7 business days. The amount will be credited to your original payment method.",
        },
        {
          q: "Are shipping costs refundable?",
          a: "Outgoing shipping costs are non-refundable. However, we cover the return shipping cost if the product is defective or damaged.",
        },
        {
          q: "Can I exchange a product instead of returning it?",
          a: "Yes! You can exchange tyres for the same product in different sizes or for a different product. Exchanges are processed within 3-5 business days.",
        },
      ],
    },
    // Installation & Service
    {
      category: "Installation & Service",
      questions: [
        {
          q: "Do you offer installation service?",
          a: "Yes! Free professional installation is available at our partner service centers nationwide. Schedule an appointment during checkout.",
        },
        {
          q: "Where can I get my tyres installed?",
          a: "You can get them installed at any authorized Michelin, Pirelli, or Bridgestone service center, or at our network of partner mechanics.",
        },
        {
          q: "What is included in the installation service?",
          a: "Installation includes mounting, balancing, valve replacement, wheel alignment check, and disposal of old tyres (if applicable).",
        },
        {
          q: "Can I install tyres myself?",
          a: "While you can self-install, we recommend professional installation to ensure proper mounting, balancing, and wheel alignment.",
        },
        {
          q: "Do you offer tire repair services?",
          a: "We don't offer repair services, but we can direct you to trusted repair partners in your area.",
        },
      ],
    },
    // Account & General
    {
      category: "Account & General",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click 'Register' on the top right corner, enter your email and create a password. You'll receive a verification email. Verify and you're all set!",
        },
        {
          q: "Do I need an account to make a purchase?",
          a: "No, you can checkout as a guest. However, creating an account allows you to track orders, save preferences, and earn loyalty rewards.",
        },
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page, enter your email, and follow the reset instructions sent to your inbox.",
        },
        {
          q: "Do you have a loyalty program?",
          a: "Yes! Every purchase earns you loyalty points that can be redeemed for discounts on future orders. Create an account to start earning.",
        },
        {
          q: "How do I contact customer support?",
          a: "Email us at support@tyrecommerce.com, call 1-800-123-4567, or use the live chat on our website. We're available Mon-Fri, 9 AM - 6 PM EST.",
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
      <div className="relative py-16 overflow-hidden text-white bg-gradient-to-r from-green-600 via-green-700 to-emerald-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 bg-white rounded-full -right-32 w-96 h-96 mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bg-white rounded-full -bottom-32 -left-32 w-96 h-96 mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative px-6 mx-auto max-w-7xl">
          <h1 className="mb-4 text-5xl font-black tracking-tight md:text-6xl animate-slideInLeft">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-green-100 md:text-xl animate-slideInRight">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-12 mx-auto max-w-4xl w-full">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <HiSearch className="absolute left-4 top-4 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-green-300 rounded-xl focus:outline-none focus:border-green-600"
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
              <h2 className="mb-6 text-3xl font-bold text-green-700 pb-4 border-b-4 border-green-200">
                📌 {category.category}
              </h2>

              <div className="space-y-3">
                {category.questions.map((faq, qIdx) => {
                  const globalIdx = `${catIdx}-${qIdx}`;
                  const isExpanded = expandedIndex === globalIdx;

                  return (
                    <div
                      key={globalIdx}
                      className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIdx)}
                        className={`w-full flex items-center justify-between p-6 transition-all duration-300 ${
                          isExpanded
                            ? "bg-green-600 text-white"
                            : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-lg font-bold text-left">{faq.q}</span>
                        <HiChevronDown
                          size={24}
                          className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="p-6 border-t-2 border-gray-200 bg-white animate-fadeIn">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
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
          <div className="text-center py-12">
            <p className="mb-4 text-2xl font-bold text-gray-800">No results found</p>
            <p className="text-gray-600 mb-6">Try different keywords or browse all categories</p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-8 py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Still Have Questions Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-300">
          <h3 className="mb-4 text-2xl font-bold text-blue-800">Still have questions?</h3>
          <p className="mb-6 text-gray-700">
            Didn't find the answer you're looking for? Our customer support team is here to help!
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href="mailto:support@tyrecommerce.com"
              className="px-6 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-center transition-all"
            >
              📧 Email Support
            </a>
            <a
              href="/contact"
              className="px-6 py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 text-center transition-all"
            >
              💬 Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;
