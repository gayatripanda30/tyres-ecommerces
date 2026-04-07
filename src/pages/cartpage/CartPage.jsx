import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";
import { useCart } from "../../components/context/useCart";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  // ✅ Add this function to navigate to the checkout page
  const handleCheckout = () => {
    navigate("/checkout"); // Make sure /checkout route exists in App.jsx
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-2xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
               
                <h1 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                  Your Cart is Ready for Checkout
                </h1>
                <p className="mt-4 text-base text-slate-300">
                  Review your premium battery selections, manage items, and complete the order with confidence.
                </p>
              </div>

              <div className="px-6 py-5 text-right rounded-3xl bg-white/10 backdrop-blur-xl ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-300">
                  Items in cart
                </p>
                <p className="mt-3 text-4xl font-bold text-white">{cart.length}</p>
              </div>
            </div>
          </section>

          <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <section className="space-y-6">
              {cart.length === 0 ? (
                <div className="rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-lg">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Cart Empty</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-900">No items in your cart yet</h2>
                  <p className="mt-3 text-slate-600">
                    Add premium batteries to your cart to get the best deals and fast checkout.
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex px-6 py-3 mt-8 text-sm font-semibold text-white rounded-full shadow-lg bg-slate-900 hover:bg-slate-800"
                  >
                    Shop Batteries
                  </Link>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
                    >
                      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-24 h-24 overflow-hidden rounded-3xl bg-slate-100">
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="object-contain h-full" />
                            ) : (
                              <div className="text-sm text-slate-500">No image</div>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                              {item.brand || "Battery"}
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-slate-900">{item.name}</h3>
                            <p className="mt-2 text-sm text-slate-600">{item.description || "Premium car battery"}</p>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-3 text-left md:items-end">
                          <span className="text-xl font-bold text-slate-900">₹{Number(item.price || 0).toFixed(0)}</span>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="px-4 py-2 text-sm font-semibold text-white transition bg-red-600 rounded-full hover:bg-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <aside className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Order Summary</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xl font-semibold text-slate-900">
                    <span>Total</span>
                    <span>₹{subtotal.toFixed(0)}</span>
                  </div>
                </div>
              </div>

              <button
                disabled={cart.length === 0}
                onClick={handleCheckout} // ✅ Now fixed
                className="w-full px-6 py-4 mt-8 text-base font-semibold text-white transition rounded-full bg-slate-900 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="inline-flex justify-center w-full px-6 py-3 mt-4 text-sm font-semibold transition bg-white border rounded-full border-slate-200 text-slate-900 hover:bg-slate-50"
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