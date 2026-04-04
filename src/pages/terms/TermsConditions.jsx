import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { HiChevronDown } from "react-icons/hi";

const TermsConditions = () => {
  const [expandedSection, setExpandedSection] = useState(0);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? -1 : index);
  };

  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to make any modifications to the Website and these Terms and Conditions at any time and for any reason.",
    },
    {
      title: "2. Product Information & Availability",
      content:
        "We strive to provide accurate product descriptions and availability information. However, we do not warrant that product descriptions, pricing, or other content of this Website is accurate, complete, reliable, current, or error-free. If a product offered by Tyre E-commerce is not as described, or if you are otherwise unsatisfied with your purchase, your sole remedy is to return the product within 30 days for a full refund.",
    },
    {
      title: "3. Pricing & Availability",
      content:
        "All prices are subject to change without notice. We reserve the right to limit quantities and to discontinue any product. Products are subject to availability, and we reserve the right to discontinue any product at any time. We reserve the right to refuse service to anyone for any reason at any time.",
    },
    {
      title: "4. Order Acceptance",
      content:
        "We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.",
    },
    {
      title: "5. User Accounts",
      content:
        "If you create an account on this Website, you are responsible for maintaining the confidentiality of your account information and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "In no event shall Tyre E-commerce, nor our directors, employees, or agents, be liable to you or any third party for any direct, indirect, special, incidental, punitive, or consequential damages arising from or relating to your use of the Website, even if we have been advised of the possibility of such damages.",
    },
    {
      title: "7. Indemnification",
      content:
        "You agree to indemnify and hold harmless Tyre E-commerce and our officers, directors, employees, and agents from and against any and all claims, damages, losses, costs, and expenses arising from your use of this Website or your breach of these Terms and Conditions.",
    },
    {
      title: "8. Return & Refund Policy",
      content:
        "Products may be returned within 30 days of purchase in original condition. Tyres showing signs of wear or use cannot be returned. Refunds will be processed within 5-7 business days of return verification. Shipping costs are non-refundable unless the product was defective or damaged.",
    },
    {
      title: "9. Warranty Disclaimer",
      content:
        "This Website is provided on an 'AS IS' and 'AS AVAILABLE' basis. Tyre E-commerce makes no representations or warranties of any kind, express or implied, as to the operation of this Website or the information, content, or materials included on this Website.",
    },
    {
      title: "10. Governing Law",
      content:
        "These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Tyre E-commerce operates, and you irrevocably submit to the exclusive jurisdiction of the courts located in that location.",
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
            Terms & Conditions
          </h1>
          <p className="text-lg text-green-100 md:text-xl animate-slideInRight">
            Please read our terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-12 mx-auto max-w-4xl">
        <div className="mb-10 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
          <p className="text-gray-700">
            <span className="font-bold text-blue-600">Last Updated:</span> March 31, 2026
          </p>
          <p className="mt-2 text-sm text-gray-600">
            These terms and conditions apply to your use of the Tyre E-commerce website and services. By accessing this website, you agree to be bound by these terms.
          </p>
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
                    ? "bg-green-600 text-white"
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
          <h3 className="mb-4 text-2xl font-bold text-green-800">Questions About Our Terms?</h3>
          <p className="mb-4 text-gray-700">
            If you have any questions or concerns regarding our Terms and Conditions, please contact our customer support team:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-bold">Email:</span> support@tyrecommerce.com
            </p>
            <p>
              <span className="font-bold">Phone:</span> +1 (800) 123-4567
            </p>
            <p>
              <span className="font-bold">Hours:</span> Monday - Friday, 9 AM - 6 PM EST
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsConditions;
