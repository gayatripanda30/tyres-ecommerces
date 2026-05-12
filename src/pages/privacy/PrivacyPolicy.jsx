import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiChevronDown } from "react-icons/hi";
import { HiShieldCheck, HiLockClosed, HiOutlineSwitchHorizontal } from "react-icons/hi";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
// 👉 Your custom hero image
import heroImg from "../../assets/image9.jpg";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(-1);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? -1 : index);
  };

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information about you in various ways when you use our website and services. This includes personal information such as your name, email address, phone number, billing address, and shipping address. We also collect payment information (processed securely by third-party providers), browsing history, device information, IP address, and cookies. When you create an account, we store your preferences and order history for personalized service.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to process your orders, deliver products and services, send order confirmations and updates, respond to your inquiries and customer service requests, send promotional emails (with your consent), improve our website and user experience, analyze website traffic and usage patterns, prevent fraudulent transactions, comply with legal obligations, and maintain account security.",
    },
    {
      title: "3. Information Sharing & Disclosure",
      content:
        "We do not sell, trade, or rent your personal information to third parties. However, we may share information with trusted service providers who assist us in operating our website and conducting business, including payment processors, shipping partners, and customer service providers. These partners are contractually obligated to use your information only as necessary to provide services to us. We may also disclose information when required by law or to protect our rights and safety.",
    },
    {
      title: "4. Data Security",
      content:
        "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, or destruction. We use SSL encryption for all transactions, secure databases with firewalls, regular security audits, and limited employee access to personal data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "5. Cookies & Tracking Technologies",
      content:
        "We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, analyze website usage, and serve personalized advertisements. You can control cookie settings through your browser, but disabling cookies may impact website functionality. We use Google Analytics to understand user behavior and Google Ads for targeted marketing.",
    },
    {
      title: "6. Your Privacy Rights",
      content:
        "You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us. You can unsubscribe from marketing emails by clicking the unsubscribe link in any email or updating your preferences. You have the right to opt-out of cookies and tracking. You can request a copy of all personal data we hold about you.",
    },
    {
      title: "7. Third-Party Links",
      content:
        "Our website may contain links to third-party websites and services that are not operated by us. This Privacy Policy applies only to our website, and we are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any external sites before providing personal information.",
    },
    {
      title: "8. Children's Privacy",
      content:
        "Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly. Parents who believe their child's information was collected should contact us immediately.",
    },
    {
      title: "9. International Data Transfers",
      content:
        "Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your country. By providing information to us, you consent to the transfer of your information to countries outside your country of residence.",
    },
    {
      title: "10. Policy Updates",
      content:
        "We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the last updated date and posting the revised policy on our website. Your continued use of the website after changes constitute your acceptance of the updated Privacy Policy.",
    },
  ];

  const highlights = [
    { icon: <HiLockClosed className="w-8 h-8 text-green-600" />, title: "Secure", desc: "SSL encrypted transactions" },
    { icon: <HiShieldCheck className="w-8 h-8 text-green-600" />, title: "Protected", desc: "Advanced data security" },
    { icon: <HiOutlineSwitchHorizontal className="w-8 h-8 text-green-600" />, title: "Control", desc: "Your data, your choice" },
  ];

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
          <h1 className="text-4xl font-black text-white sm:text-5xl md:text-6xl">Privacy Policy</h1>
          <p className="mt-3 text-lg text-green-100 md:text-xl">
            Your privacy is important to us. Learn how we protect your data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl px-4 py-10 mx-auto sm:px-6 sm:py-12">
        {/* Last Updated */}
        <div className="p-5 mb-10 border-l-4 border-purple-600 rounded-lg sm:p-8 bg-purple-50">
          <p className="text-gray-700">
            <span className="font-bold text-purple-600">Last Updated:</span> March 31, 2026
          </p>
          <p className="mt-2 text-sm text-gray-600">
            This Privacy Policy describes how Tyre E-commerce collects, uses, and protects your personal information when you use our website and services.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid gap-4 mb-12 md:grid-cols-3">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="p-6 transition-all bg-white border-2 border-green-200 rounded-lg shadow-md hover:shadow-lg">
              <div className="mb-2">{highlight.icon}</div>
              <h4 className="mb-1 font-bold text-green-700">{highlight.title}</h4>
              <p className="text-sm text-gray-600">{highlight.desc}</p>
            </div>
          ))}
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white border-2 border-gray-200 shadow-md rounded-xl hover:shadow-lg"
            >
              <button
                onClick={() => toggleSection(index)}
                className={`w-full flex items-center justify-between p-4 sm:p-6 transition-all duration-300 ${
                  expandedSection === index
                    ? "bg-purple-600 text-white"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span className="text-base font-bold text-left sm:text-lg">{section.title}</span>
                <HiChevronDown
                  size={24}
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    expandedSection === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedSection === index && (
                <div className="p-6 bg-white border-t-2 border-gray-200 animate-fadeIn">
                  <p className="leading-relaxed text-gray-700">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="p-5 mt-12 border-2 border-green-200 sm:p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
          <h3 className="mb-4 text-2xl font-bold text-green-800">Privacy Questions?</h3>
          <p className="mb-4 text-gray-700">
            If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:privacy@tyrecommerce.com"
                className="text-green-600 underline transition hover:text-green-700"
              >
                privacy@tyrecommerce.com
              </a>
            </p>
            <p>
              <span className="font-bold">Phone:</span>{" "}
              <a
                href="tel:+18001234567"
                className="text-green-600 underline transition hover:text-green-700"
              >
                +1 (800) 123-4567
              </a>
            </p>
            <p>
              <span className="font-bold">Data Protection Officer Email:</span>{" "}
              <a
                href="mailto:dpo@tyrecommerce.com"
                className="text-green-600 underline transition hover:text-green-700"
              >
                dpo@tyrecommerce.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppChatbot/>
    </div>
  );
};

export default PrivacyPolicy;
