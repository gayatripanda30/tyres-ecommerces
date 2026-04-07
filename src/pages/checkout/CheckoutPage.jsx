import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const deliveryCharge = subtotal > 5000 ? 0 : 99;
  const total = subtotal + deliveryCharge;

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="px-4 py-10 lg:px-12">
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          
          {/* LEFT SIDE */}
          <div className="space-y-6 lg:col-span-2">

            {/* Address Section */}
            <div className="p-6 bg-white shadow rounded-xl">
              <h2 className="mb-4 text-xl font-bold">Shipping Address</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <input className="input" placeholder="Full Name" />
                <input className="input" placeholder="Phone Number" />
                <input className="input md:col-span-2" placeholder="Address Line" />
                <input className="input" placeholder="City" />
                <input className="input" placeholder="State" />
                <input className="input" placeholder="Pincode" />
              </div>
            </div>

            {/* Payment Section */}
<div className="p-6 bg-white shadow rounded-xl">
  <h2 className="mb-4 text-xl font-bold">Payment Method</h2>

  <div className="space-y-4">
    
    {/* COD */}
    <button
      onClick={() => setPaymentMethod("cod")}
      className={`w-full p-4 border-2 rounded-xl text-left transition ${
        paymentMethod === "cod"
          ? "border-indigo-900 bg-indigo-50"
          : "border-gray-300 hover:border-indigo-400"
      }`}
    >
      <p className="font-bold">Cash on Delivery</p>
      <p className="text-sm text-gray-500">
        Pay when product is delivered
      </p>
    </button>

    {/* Card */}
    <button
      onClick={() => setPaymentMethod("card")}
      className={`w-full p-4 border-2 rounded-xl text-left transition ${
        paymentMethod === "card"
          ? "border-indigo-900 bg-indigo-50"
          : "border-gray-300 hover:border-indigo-400"
      }`}
    >
      <p className="font-bold">Credit / Debit Card</p>
      <p className="text-sm text-gray-500">
        Visa, MasterCard, RuPay supported
      </p>
    </button>

    {/* UPI */}
    <button
      onClick={() => setPaymentMethod("upi")}
      className={`w-full p-4 border-2 rounded-xl text-left transition ${
        paymentMethod === "upi"
          ? "border-indigo-900 bg-indigo-50"
          : "border-gray-300 hover:border-indigo-400"
      }`}
    >
      <p className="font-bold">UPI / Wallet</p>
      <p className="text-sm text-gray-500">
        Pay via Google Pay, PhonePe, Paytm
      </p>
    </button>

    {/* EMI */}
    <button
      onClick={() => setPaymentMethod("emi")}
      className={`w-full p-4 border-2 rounded-xl text-left transition ${
        paymentMethod === "emi"
          ? "border-indigo-900 bg-indigo-50"
          : "border-gray-300 hover:border-indigo-400"
      }`}
    >
      <p className="font-bold">EMI (No Cost)</p>
      <p className="text-sm text-gray-500">
        Easy monthly installments available
      </p>
    </button>

  </div>
</div>
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="h-fit">
            <div className="sticky p-6 bg-white shadow-lg rounded-xl top-6">
              <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

              {/* Items */}
              <div className="pr-2 space-y-3 overflow-y-auto max-h-60">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>
                      ₹{(item.price * item.quantity).toFixed(0)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="pt-4 mt-4 space-y-2 border-t">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                  </span>
                </div>

                <div className="flex justify-between pt-3 text-lg font-bold border-t">
                  <span>Total</span>
                  <span className="text-blue-900">
                    ₹{total.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Place Order */}
              <button
                onClick={handlePlaceOrder}
                className="w-[50%] py-4 mt-6 text-lg font-bold  text-white bg-blue-900 rounded-full hover:bg-blue-800"
              >
                Place Order
              </button>

              <button
                onClick={() => navigate(-1)}
                className="w-[50%] py-4 mt-6 text-lg font-bold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppChatbot />

      {/* Reusable Input Style */}
      <style>
        {`
          .input {
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            width: 100%;
            outline: none;
          }
          .input:focus {
            border-color: #16a34a;
          }
        `}
      </style>
    </div>
  );
};

export default CheckoutPage;