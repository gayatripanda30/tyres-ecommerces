import { HiX, HiCheckCircle, HiTruck, HiShieldCheck, HiCreditCard } from "react-icons/hi";

const ProductModal = ({
  selectedTyre,
  quantity,
  setQuantity,
  paymentMethod,
  setPaymentMethod,
  deliveryOption,
  setDeliveryOption,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!selectedTyre) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
          <div>
            <p className="text-sm font-semibold tracking-widest text-green-600 uppercase">Product Details</p>
            <h2 className="mt-1 text-2xl font-bold text-gray-800">{selectedTyre.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 transition bg-white border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <HiX size={24} />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 p-8 md:grid-cols-2">
          {/* LEFT: Product Image & Info */}
          <div>
            {selectedTyre.badge && (
              <div className="mb-4">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-xs font-bold text-white ${
                    selectedTyre.badge === "Best Seller"
                      ? "bg-red-500"
                      : selectedTyre.badge === "Premium"
                      ? "bg-purple-500"
                      : selectedTyre.badge === "New"
                      ? "bg-blue-500"
                      : "bg-orange-500"
                  }`}
                >
                  {selectedTyre.badge === "Best Seller" && "⭐ BEST SELLER"}
                  {selectedTyre.badge === "Premium" && "✨ PREMIUM TIER"}
                  {selectedTyre.badge === "New" && "🆕 NEW ARRIVAL"}
                  {selectedTyre.badge === "Trending" && "🔥 TRENDING NOW"}
                </span>
              </div>
            )}

            <div className="flex items-center justify-center p-10 mb-8 border-2 border-gray-200 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 rounded-2xl">
              <img src={selectedTyre.image} alt={selectedTyre.name} className="object-contain w-full h-80" />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 text-center border border-gray-200 bg-gray-50 rounded-xl">
                <p className="mb-1 text-xs font-semibold text-gray-600 uppercase">Brand</p>
                <p className="text-lg font-bold text-gray-800 capitalize">{selectedTyre.brand}</p>
              </div>
              <div className="p-4 text-center border border-gray-200 bg-gray-50 rounded-xl">
                <p className="mb-1 text-xs font-semibold text-gray-600 uppercase">Type</p>
                <p className="text-lg font-bold text-gray-800">{selectedTyre.type}</p>
              </div>
              <div className="p-4 text-center border border-yellow-200 bg-yellow-50 rounded-xl">
                <p className="mb-1 text-xs font-semibold text-gray-600 uppercase">Rating</p>
                <div className="text-xl text-yellow-500">{"★".repeat(Math.floor(selectedTyre.rating))}</div>
              </div>
            </div>

            <div className="p-4 space-y-3 border border-green-200 bg-green-50 rounded-xl">
              <div className="flex items-center gap-3">
                <HiCheckCircle className="flex-shrink-0 text-green-600" size={20} />
                <span className="text-sm font-semibold text-gray-800">2-Year Warranty Included</span>
              </div>
              <div className="flex items-center gap-3">
                <HiShieldCheck className="flex-shrink-0 text-green-600" size={20} />
                <span className="text-sm font-semibold text-gray-800">100% Genuine &amp; Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <HiTruck className="flex-shrink-0 text-green-600" size={20} />
                <span className="text-sm font-semibold text-gray-800">Free Installation Service</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Price, Options & Purchase */}
          <div className="flex flex-col">
            {/* Price Section */}
            <div className="p-6 mb-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-bold text-green-600">
                  ${(selectedTyre.price * (1 - selectedTyre.discount / 100)).toFixed(0)}
                </span>
                {selectedTyre.discount > 0 && (
                  <span className="text-2xl text-gray-400 line-through">
                    ${selectedTyre.price}
                  </span>
                )}
              </div>
              {selectedTyre.discount > 0 && (
                <p className="text-lg font-semibold text-green-700">
                  Save ${(selectedTyre.price * selectedTyre.discount / 100).toFixed(0)} ({selectedTyre.discount}% OFF)
                </p>
              )}
              <p className="mt-2 text-sm text-gray-600">{selectedTyre.reviews.toLocaleString()} customers love this product</p>
            </div>

            {/* Description */}
            <p className="mb-6 font-medium leading-relaxed text-gray-700">{selectedTyre.description}</p>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block mb-3 text-sm font-bold text-gray-800">Select Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex items-center justify-center w-12 h-12 text-xl font-bold text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="flex-1 px-4 py-3 text-lg font-bold text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex items-center justify-center w-12 h-12 text-xl font-bold text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="mb-6">
              <label className="block mb-3 text-sm font-bold text-gray-800">📦 Delivery Option</label>
              <div className="space-y-2">
                <button
                  onClick={() => setDeliveryOption("standard")}
                  className={`w-full p-4 border-2 rounded-lg text-left transition ${
                    deliveryOption === "standard"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  <p className="font-bold text-gray-800">Standard Delivery - FREE</p>
                  <p className="text-sm text-gray-600">5-7 business days</p>
                </button>
                <button
                  onClick={() => setDeliveryOption("express")}
                  className={`w-full p-4 border-2 rounded-lg text-left transition ${
                    deliveryOption === "express"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                >
                  <p className="font-bold text-gray-800">Express Delivery - $29</p>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </button>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-8">
              <label className="block mb-3 text-sm font-bold text-gray-800">💳 Payment Method</label>
              <div className="space-y-2">
                <button
                  onClick={() => setPaymentMethod("credit-card")}
                  className={`w-full p-4 border-2 rounded-lg text-left transition flex items-center gap-3 ${
                    paymentMethod === "credit-card"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  <HiCreditCard size={20} className={paymentMethod === "credit-card" ? "text-green-600" : "text-gray-600"} />
                  <div>
                    <p className="font-bold text-gray-800">Credit / Debit Card</p>
                    <p className="text-xs text-gray-600">Visa, Mastercard, AmEx</p>
                  </div>
                </button>
                <button
                  onClick={() => setPaymentMethod("upi")}
                  className={`w-full p-4 border-2 rounded-lg text-left transition flex items-center gap-3 ${
                    paymentMethod === "upi"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                >
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-bold text-gray-800">UPI / Digital Wallet</p>
                    <p className="text-xs text-gray-600">Google Pay, Apple Pay</p>
                  </div>
                </button>
                <button
                  onClick={() => setPaymentMethod("emi")}
                  className={`w-full p-4 border-2 rounded-lg text-left transition flex items-center gap-3 ${
                    paymentMethod === "emi"
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-300 hover:border-purple-400"
                  }`}
                >
                  <span className="text-2xl">🏦</span>
                  <div>
                    <p className="font-bold text-gray-800">EMI (No Interest)</p>
                    <p className="text-xs text-gray-600">Flexible payment plan</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Price Summary */}
            <div className="p-5 mb-6 space-y-3 border border-gray-200 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Subtotal ({quantity} item{quantity > 1 ? "s" : ""}):</span>
                <span className="font-bold text-gray-800">
                  ${(selectedTyre.price * (1 - selectedTyre.discount / 100) * quantity).toFixed(0)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Delivery:</span>
                <span className="font-bold text-gray-800">{deliveryOption === "standard" ? "FREE" : "$29"}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-300">
                <span className="text-lg font-bold text-gray-800">Total Amount:</span>
                <span className="text-3xl font-bold text-green-600">
                  ${(
                    selectedTyre.price * (1 - selectedTyre.discount / 100) * quantity +
                    (deliveryOption === "express" ? 29 : 0)
                  ).toFixed(0)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={onAddToCart}
                className="w-full px-6 py-4 text-lg font-bold text-white transition transform shadow-lg bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 hover:scale-105 active:scale-95"
              >
                🛒 Add to Cart
              </button>
              <button
                onClick={onBuyNow}
                className="w-full px-6 py-4 text-lg font-bold text-white transition transform shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105 active:scale-95"
              >
                💳 Buy Now
              </button>
              <button
                onClick={onClose}
                className="w-full px-6 py-4 text-lg font-bold text-gray-800 transition bg-gray-200 rounded-xl hover:bg-gray-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
