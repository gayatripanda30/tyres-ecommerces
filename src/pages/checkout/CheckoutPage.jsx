import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const [upi, setUpi] = useState("");

  // ✅ Safety check
  if (!cartItems.length) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-bold">
        Your cart is empty
      </div>
    );
  }

  // ✅ Price calc
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 5000 ? 0 : 99;
  const total = subtotal + delivery;

  // ✅ Validation
  const validate = () => {
    if (Object.values(address).some((v) => !v)) {
      alert("Fill all address fields");
      return false;
    }

    if (paymentMethod === "card") {
      if (Object.values(card).some((v) => !v)) {
        alert("Fill card details");
        return false;
      }
    }

    if (paymentMethod === "upi" && !upi) {
      alert("Enter UPI ID");
      return false;
    }

    return true;
  };

  const placeOrder = () => {
    if (!validate()) return;
    alert("🎉 Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="grid gap-6 px-4 py-8 mx-auto sm:py-10 max-w-7xl lg:grid-cols-3 lg:gap-8">

        {/* LEFT */}
        <div className="space-y-6 lg:col-span-2">

          {/* ADDRESS */}
          <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="mb-4 text-lg font-bold">Delivery Address</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <input className="input" placeholder="Full Name"
                onChange={(e)=>setAddress({...address,name:e.target.value})}/>
              <input className="input" placeholder="Phone"
                onChange={(e)=>setAddress({...address,phone:e.target.value})}/>
              <input className="input md:col-span-2" placeholder="Address"
                onChange={(e)=>setAddress({...address,address:e.target.value})}/>
              <input className="input" placeholder="City"
                onChange={(e)=>setAddress({...address,city:e.target.value})}/>
              <input className="input" placeholder="State"
                onChange={(e)=>setAddress({...address,state:e.target.value})}/>
              <input className="input" placeholder="Pincode"
                onChange={(e)=>setAddress({...address,pincode:e.target.value})}/>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="mb-4 text-lg font-bold">Payment Options</h2>

            <div className="space-y-3">

              {["cod","card","upi"].map((m)=>(
                <div key={m}
                  onClick={()=>setPaymentMethod(m)}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    paymentMethod===m
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  {m.toUpperCase()}
                </div>
              ))}

              {/* CARD FORM */}
              {paymentMethod==="card" && (
                <div className="mt-3 space-y-3">
                  <input className="input" placeholder="Card Name"
                    onChange={(e)=>setCard({...card,name:e.target.value})}/>
                  <input className="input" placeholder="Card Number"
                    onChange={(e)=>setCard({...card,number:e.target.value})}/>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input className="input" placeholder="MM/YY"
                      onChange={(e)=>setCard({...card,expiry:e.target.value})}/>
                    <input className="input" placeholder="CVV"
                      onChange={(e)=>setCard({...card,cvv:e.target.value})}/>
                  </div>
                </div>
              )}

              {/* UPI */}
              {paymentMethod==="upi" && (
                <input className="mt-3 input"
                  placeholder="example@upi"
                  onChange={(e)=>setUpi(e.target.value)}
                />
              )}

            </div>
          </div>

        </div>

        {/* RIGHT - AMAZON STYLE SUMMARY */}
        <div className="sticky p-6 bg-white shadow rounded-xl h-fit top-6">

          <h2 className="mb-4 text-lg font-bold">Order Summary</h2>

          {/* ITEMS */}
          <div className="space-y-3 overflow-y-auto max-h-60">
            {cartItems.map((item, i)=>(
              <div key={i} className="flex justify-between text-sm">
                <span>{item.name}  {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* PRICE */}
          <div className="pt-4 mt-4 space-y-2 border-t">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{delivery===0 ? "FREE" : `₹${delivery}`}</span>
            </div>

            <div className="flex justify-between pt-3 text-lg font-bold border-t">
              <span>Total</span>
              <span className="text-green-600">₹{total}</span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={placeOrder}
            className="w-full px-6 py-3 mt-6 font-bold text-white bg-blue-900 rounded-full sm:w-auto hover:bg-blue-800"
          >
            Place Order
          </button>

        </div>
      </div>

      <Footer />

      <style>
        {`
        .input {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          width: 100%;
        }
        `}
      </style>
    </div>
  );
};

export default CheckoutPage;
