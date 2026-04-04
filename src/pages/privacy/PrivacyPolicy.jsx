import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiChevronDown } from "react-icons/hi";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(0);

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
            Privacy Policy
          </h1>
          <p className="text-lg text-green-100 md:text-xl animate-slideInRight">
            Your privacy is important to us. Learn how we protect your data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-12 mx-auto max-w-4xl">
        <div className="mb-10 p-8 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
          <p className="text-gray-700">
            <span className="font-bold text-purple-600">Last Updated:</span> March 31, 2026
          </p>
          <p className="mt-2 text-sm text-gray-600">
            This Privacy Policy describes how Tyre E-commerce collects, uses, and protects your personal information when you use our website and services.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid gap-4 mb-12 md:grid-cols-3">
          {[
            { icon: "🔒", title: "Secure", desc: "SSL encrypted transactions" },
            { icon: "🛡️", title: "Protected", desc: "Advanced data security" },
            { icon: "✋", title: "Control", desc: "Your data, your choice" },
          ].map((highlight, idx) => (
            <div key={idx} className="p-6 bg-white border-2 border-green-200 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{highlight.icon}</div>
              <h4 className="font-bold text-green-700 mb-1">{highlight.title}</h4>
              <p className="text-sm text-gray-600">{highlight.desc}</p>
            </div>
          ))}
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
            >
              <button
                onClick={() => toggleSection(index)}
                className={`w-full flex items-center justify-between p-6 transition-all duration-300 ${
                  expandedSection === index
                    ? "bg-purple-600 text-white"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg font-bold text-left">{section.title}</span>
                <HiChevronDown
                  size={24}
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    expandedSection === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedSection === index && (
                <div className="p-6 border-t-2 border-gray-200 bg-white animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
          <h3 className="mb-4 text-2xl font-bold text-green-800">Privacy Questions?</h3>
          <p className="mb-4 text-gray-700">
            If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-bold">Email:</span> privacy@tyrecommerce.com
            </p>
            <p>
              <span className="font-bold">Data Protection Officer:</span> dpo@tyrecommerce.com
            </p>
            <p>
              <span className="font-bold">Response Time:</span> Within 5 business days
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
