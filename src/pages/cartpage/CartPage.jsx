import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { useCart } from "../../components/context/useCart";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // ✅ FIXED subtotal with quantity
  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
    0
  );

  // ✅ FIXED navigation (IMPORTANT)
  const handleCheckout = () => {
    if (cart.length === 0) return;

    navigate("/checkout", {
      state: {
        cartItems: cart,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* HERO */}
          <section className="overflow-hidden rounded-2xl sm:rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 sm:p-8 text-white shadow-2xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Your Cart is Ready for Checkout
                </h1>
                <p className="mt-4 text-slate-300">
                  Review your items and proceed securely to checkout.
                </p>
              </div>

              <div className="px-6 py-5 text-right rounded-3xl bg-white/10">
                <p className="text-sm text-slate-300">Items</p>
                <p className="text-4xl font-bold">{cart.length}</p>
              </div>
            </div>
          </section>

          <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">

            {/* LEFT */}
            <section className="space-y-6">
              {cart.length === 0 ? (
                <div className="p-12 text-center bg-white shadow rounded-2xl">
                  <h2 className="text-2xl font-bold">Cart is Empty</h2>
                  <Link
                    to="/products"
                    className="inline-block px-6 py-3 mt-6 text-white bg-black rounded-full"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="p-6 bg-white shadow rounded-2xl">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-center min-w-0 gap-4">
                        <img
                          src={item.image}
                          alt=""
                          className="object-contain w-20 h-20"
                        />

                        <div className="min-w-0">
                          <h3 className="font-bold break-words">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.brand}</p>

                          {/* ✅ SHOW QUANTITY */}
                          <p className="mt-1 text-sm">
                            Qty: {item.quantity || 1}
                          </p>
                        </div>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-lg font-bold">
                          ₹{(item.price * (item.quantity || 1)).toFixed(0)}
                        </p>

                        <button
                          onClick={() => removeFromCart(index)}
                          className="mt-2 text-red-600"
                        >
                          Remove
                        </button>
                      </div>

                    </div>
                  </div>
                ))
              )}
            </section>

            {/* RIGHT */}
            <aside className="sticky p-6 bg-white shadow rounded-2xl h-fit top-6">
              <h2 className="text-lg font-bold">Order Summary</h2>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between pt-3 mt-3 text-lg font-bold border-t">
                  <span>Total</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
              </div>

              <button
                disabled={cart.length === 0}
                onClick={handleCheckout}
                className="w-full py-3 mt-6 font-bold text-white bg-blue-900 rounded-full hover:bg-blue-800"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block mt-4 text-sm text-center"
              >
                Continue Shopping
              </Link>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default CartPage;
