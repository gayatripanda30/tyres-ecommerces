import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "8260692810"; // Replace with your WhatsApp number with country code

  const handleSend = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed z-50 flex items-center justify-center w-14 h-14 text-white transition-all bg-green-600 rounded-full shadow-lg sm:w-16 sm:h-16 bottom-4 right-4 sm:bottom-6 sm:right-6 hover:bg-green-700"
        >
          <FaWhatsapp size={28} />
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed z-50 flex flex-col overflow-hidden bg-white shadow-xl bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 sm:w-80 rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-green-600">
            <h3 className="font-semibold text-white">Chat with us</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FaTimes />
            </button>
          </div>

          {/* Messages / Info */}
          <div className="flex-1 px-4 py-3 overflow-y-auto text-sm text-gray-700">
            <p>Hi! 👋 How can we help you with tyres today?</p>
          </div>

          {/* Input */}
          <div className="flex px-4 py-3 border-t border-gray-200">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 ml-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChatbot;
