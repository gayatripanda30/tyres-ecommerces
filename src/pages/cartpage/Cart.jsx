import { useCart } from "../../components/context/useCart";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-white rounded shadow"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} className="h-16" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(i)}
                  className="px-3 py-1 text-white bg-red-500 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2 className="mt-6 text-xl font-bold">
            Total: ${total}
          </h2>
        </>
      )}
    </div>
  );
};

export default Cart;