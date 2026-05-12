import { HiX, HiCheckCircle, HiTruck, HiShieldCheck, HiCreditCard, HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { allTyres } from "../../data/allTyres";
import { bikeBatteries } from "../../data/lubricants";
import { accessories } from "../../data/accessories";

const ProductModal = ({
  selectedTyre,
  quantity,
  setQuantity,
  paymentMethod,
  deliveryOption,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  if (!selectedTyre) return null;

  const basePrice = selectedTyre.price * (1 - selectedTyre.discount / 100);

  let paymentDiscount = 0;

  if (paymentMethod === "upi") {
    paymentDiscount = basePrice * 0.05;
  } else if (paymentMethod === "emi") {
    paymentDiscount = basePrice * 0.07;
  }

  let couponDiscount = 0;
  if (appliedCoupon === "SAVE10") {
    couponDiscount = basePrice * 0.1;
  } else if (appliedCoupon === "FLAT200") {
    couponDiscount = 200;
  }

  const totalPrice = (
    (basePrice - paymentDiscount - couponDiscount) * quantity +
    (deliveryOption === "express" ? 29 : 0)
  ).toFixed(0);

  const stock = selectedTyre.stock || 5;

  const handleBuyNow = () => {
    onBuyNow();
    navigate("/checkout", {
      state: { cartItems: [{ ...selectedTyre, quantity }] },
    });
  };

  const applyCoupon = () => {
    if (coupon === "SAVE10" || coupon === "FLAT200") {
      setAppliedCoupon(coupon);
    } else {
      alert("Invalid Coupon");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black bg-opacity-70 sm:p-4">
      <div className="relative w-full max-w-5xl overflow-y-auto bg-white shadow-2xl rounded-2xl sm:rounded-3xl max-h-[95vh]">

        {/* HEADER */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-3 p-4 border-b sm:p-6 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-green-600 uppercase">Product Details</p>
            <h2 className="text-lg font-bold break-words sm:text-2xl">{selectedTyre.name}</h2>

            {/* ⭐ NEW: Rating */}
            <div className="flex items-center gap-1 mt-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className={i < (selectedTyre.rating || 4) ? "fill-current" : "text-gray-300"} />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({selectedTyre.reviews || 120} reviews)
              </span>
            </div>
          </div>

          <button onClick={onClose}>
            <HiX size={24} />
          </button>
        </div>

        <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-2 lg:p-8">

          {/* LEFT */}
          <div>
            {stock <= 5 && (
              <p className="mb-3 text-sm font-bold text-red-500">
                ⚡ Only {stock} items left!
              </p>
            )}

            <div className="flex items-center justify-center p-5 mb-6 bg-gray-100 sm:p-10 rounded-2xl">
              <img src={selectedTyre.image} className="object-contain w-full h-52 sm:h-72" />
            </div>

            {/* ✅ NEW: PRODUCT DETAILS */}
            <div className="mb-6 space-y-2 text-sm text-gray-700">
              <p><strong>Brand:</strong> {selectedTyre.brand}</p>
              <p><strong>Type:</strong> {selectedTyre.type}</p>
              <p><strong>Stock:</strong> {stock} available</p>
            </div>

            <div className="p-4 space-y-3 bg-green-50 rounded-xl">
              <div className="flex gap-2"><HiCheckCircle /> Warranty Included</div>
              <div className="flex gap-2"><HiShieldCheck /> Genuine Product</div>
              <div className="flex gap-2"><HiTruck /> Free Installation</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col">

            <div className="p-6 mb-6 bg-green-50 rounded-2xl">
              <h2 className="text-3xl font-bold text-green-600 sm:text-4xl">₹{totalPrice}</h2>
              <p className="text-sm text-gray-500">
                Base: ₹{basePrice.toFixed(0)} × {quantity}
              </p>

              {/* ✅ NEW: PAYMENT OFFERS */}
              <div className="mt-4 space-y-2 text-sm">
                <p className="font-bold text-gray-700">💳 Payment Offers</p>
                <p>• UPI: 5% instant discount</p>
                <p>• Credit Card: 10% cashback</p>
                <p>• EMI: 7% discount</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-bold">🎟 Apply Coupon</label>
              <div className="flex flex-col gap-2 mt-2 sm:flex-row">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 p-2 border rounded-lg"
                  placeholder="Enter code"
                />
                <button onClick={applyCoupon} className="px-4 py-2 text-white bg-blue-900 rounded-full">
                  Apply
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-bold">Quantity</label>
              <div className="flex gap-3 mt-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

           <div className="space-y-3">

  {/* ✅ ROW BUTTONS */}
  <div className="flex flex-col gap-3 sm:flex-row">
    <button
      onClick={() => onAddToCart(selectedTyre)}
      className="w-full py-3 font-semibold text-white transition bg-blue-900 rounded-full sm:w-1/2 hover:bg-blue-700"
    >
      Add to Cart
    </button>

    <button
      onClick={handleBuyNow}
      className="w-full py-3 font-semibold text-black transition bg-gray-300 rounded-full sm:w-1/2 hover:bg-gray-300"
    >
      Buy Now
    </button>
  </div>

  {/* ✅ CONTINUE SHOPPING */}
  <button
    onClick={onClose}
    className="w-full py-3 font-semibold text-black transition border rounded-full sm:w-auto sm:px-8 hover:bg-gray-200"
  >
    Continue Shopping
  </button>

</div>
          </div>
        </div>

        {/* RECOMMENDATIONS (UNCHANGED) */}
        <div className="p-6 border-t">
          <h3 className="mb-4 font-bold">You may also like</h3>

          {(() => {
            let allProducts = [];

            if (allTyres.some(item => item.id === selectedTyre.id)) {
              allProducts = allTyres;
            } else if (bikeBatteries.some(item => item.id === selectedTyre.id)) {
              allProducts = bikeBatteries;
            } else if (accessories.some(item => item.id === selectedTyre.id)) {
              allProducts = accessories;
            }

            const relatedProducts = allProducts
              .filter(item => item.id !== selectedTyre.id)
              .slice(0, 4);

            return (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map(item => (
                  <div
                    key={item.id}
                    className="p-3 border cursor-pointer rounded-xl hover:shadow-md"
                    onClick={() => window.location.reload()}
                  >
                    <img
                      src={item.image}
                      className="object-contain h-24 mx-auto mb-2"
                    />
                    <p className="text-sm font-semibold line-clamp-2">
                      {item.name}
                    </p>
                    <p className="font-bold text-green-600">
                      ₹{(item.price * (1 - item.discount / 100)).toFixed(0)}
                    </p>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>

      </div>
    </div>
  );
};

export default ProductModal;
