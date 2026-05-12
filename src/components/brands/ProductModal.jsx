import {
  HiX,
  HiCheckCircle,
  HiTruck,
  HiShieldCheck,
  HiCreditCard,
  HiStar,
} from "react-icons/hi";
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
  setPaymentMethod,
  deliveryOption,
  setDeliveryOption,
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

  if (paymentMethod === "upi") paymentDiscount = basePrice * 0.05;
  else if (paymentMethod === "emi") paymentDiscount = basePrice * 0.07;

  let couponDiscount = 0;
  if (appliedCoupon === "SAVE10") couponDiscount = basePrice * 0.1;
  else if (appliedCoupon === "FLAT200") couponDiscount = 200;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/70 sm:p-4">
      <div className="w-full max-w-6xl overflow-y-auto bg-white shadow-2xl rounded-2xl sm:rounded-3xl max-h-[95vh]">

        {/* HEADER */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-3 p-4 border-b sm:p-6 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-green-600 uppercase">
              Product Details
            </p>
            <h2 className="text-lg font-bold break-words sm:text-2xl">{selectedTyre.name}</h2>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <HiStar
                  key={i}
                  className={
                    i < (selectedTyre.rating || 4)
                      ? "fill-current"
                      : "text-gray-300"
                  }
                />
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

        {/* CONTENT */}
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

            {/* Product Info */}
            <div className="grid grid-cols-1 gap-3 mb-6 text-center sm:grid-cols-3 sm:gap-4">
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500">Brand</p>
                <p className="font-bold">{selectedTyre.brand}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500">Type</p>
                <p className="font-bold">{selectedTyre.type}</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-xl">
                <p className="text-xs text-gray-500">Stock</p>
                <p className="font-bold">{stock}</p>
              </div>
            </div>

            {/* Features */}
            <div className="p-4 space-y-3 bg-green-50 rounded-xl">
              <div className="flex gap-2"><HiCheckCircle /> Warranty Included</div>
              <div className="flex gap-2"><HiShieldCheck /> Genuine Product</div>
              <div className="flex gap-2"><HiTruck /> Free Installation</div>
            </div>
          </div>

          {/* RIGHT */}
          <div>

            {/* PRICE */}
            <div className="p-6 mb-6 bg-green-50 rounded-2xl">
              <h2 className="text-3xl font-bold text-green-600 sm:text-4xl">
                ₹{totalPrice}
              </h2>
              <p className="text-sm text-gray-500">
                Base: ₹{basePrice.toFixed(0)} × {quantity}
              </p>

              <div className="mt-3 space-y-1 text-sm">
                <p>💳 UPI: 5% OFF</p>
                <p>💳 Card: 10% Cashback</p>
                <p>💳 EMI: 7% OFF</p>
              </div>
            </div>

            {/* COUPON */}
            <div className="mb-6">
              <label className="text-sm font-bold">Apply Coupon</label>
              <div className="flex flex-col gap-2 mt-2 sm:flex-row">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 p-2 border rounded-lg"
                  placeholder="Enter code"
                />
                <button
                  onClick={applyCoupon}
                  className="px-4 py-2 text-white bg-blue-900 rounded-full"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-6">
              <label className="text-sm font-bold">Quantity</label>
              <div className="flex gap-3 mt-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* DELIVERY */}
            <div className="mb-6">
              <label className="text-sm font-bold">Delivery</label>
              <div className="mt-2 space-y-2">
                <button
                  onClick={() => setDeliveryOption("standard")}
                  className={`w-full p-3 border rounded-full ${
                    deliveryOption === "standard"
                      ? "border-green-600 bg-green-50"
                      : ""
                  }`}
                >
                  Standard (FREE)
                </button>
                <button
                  onClick={() => setDeliveryOption("express")}
                  className={`w-full p-3 border rounded-full ${
                    deliveryOption === "express"
                      ? "border-blue-600 bg-blue-50"
                      : ""
                  }`}
                >
                  Express (₹29)
                </button>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="mb-6">
              <label className="text-sm font-bold">Payment</label>
              <div className="mt-2 space-y-2">
                <button onClick={() => setPaymentMethod("credit-card")} className="flex w-full gap-2 p-3 border rounded-full sm:w-auto">
                  <HiCreditCard /> Card
                </button>
                <button onClick={() => setPaymentMethod("upi")} className="w-full p-3 border rounded-full sm:w-auto">
                  UPI
                </button>
                <button onClick={() => setPaymentMethod("emi")} className="w-full p-3 border rounded-full sm:w-auto">
                  EMI
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => onAddToCart(selectedTyre)}
                  className="w-full py-3 text-white bg-blue-900 rounded-full sm:w-1/2"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full py-3 bg-gray-300 rounded-full sm:w-1/2"
                >
                  Buy Now
                </button>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 border-2 rounded-full sm:w-auto sm:px-8"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="p-6 border-t">
          <h3 className="mb-4 font-bold">You may also like</h3>

          {(() => {
            let allProducts = [];

            if (allTyres.some(i => i.id === selectedTyre.id)) allProducts = allTyres;
            else if (bikeBatteries.some(i => i.id === selectedTyre.id)) allProducts = bikeBatteries;
            else if (accessories.some(i => i.id === selectedTyre.id)) allProducts = accessories;

            return (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {allProducts
                  .filter(i => i.id !== selectedTyre.id)
                  .slice(0, 4)
                  .map(item => (
                    <div key={item.id} className="p-3 border rounded-xl">
                      <img src={item.image} className="h-24 mx-auto" />
                      <p className="text-sm font-semibold">{item.name}</p>
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
