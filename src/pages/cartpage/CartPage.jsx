import Navbar from "../../components/layout/Navbar";
import { useCart } from "../../components/context/useCart";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <>
      <Navbar />

      <div className="p-10">
        <h2 className="mb-4 text-2xl font-bold">Your Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} className="p-4 mb-2 border">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CartPage;