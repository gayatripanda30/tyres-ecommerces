import { useState } from "react";

const ProductGrid = ({ filteredTyres, onSelectTyre, onAddToCart }) => {

  // ✅ Toast State
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // ✅ Handle Add To Cart
  const handleAdd = (tyre) => {
    onAddToCart(tyre);

    setToastMsg(`${tyre.name} added to cart 🛒`);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="md:col-span-3 lg:col-span-4">

      {/* ✅ TOAST POPUP */}
      {showToast && (
        <div className="fixed z-[2000] left-4 right-4 px-4 py-3 text-sm text-center text-black transition bg-gray-300 shadow-lg sm:left-auto sm:right-6 top-6 rounded-full animate-fadeIn">
          {toastMsg}
        </div>
      )}

      {filteredTyres.length > 0 ? (

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {filteredTyres.map((tyre) => {
            const finalPrice = (tyre.price * (1 - tyre.discount / 100)).toFixed(0);

            return (
              <div
                key={tyre.id}
                onClick={() => onSelectTyre(tyre)}
                className="relative flex flex-col w-full max-w-[320px] mx-auto bg-white border rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              >

                {/* Discount */}
                {tyre.discount > 0 && (
                  <div className="absolute px-2 py-1 text-[10px] sm:text-xs font-bold text-white bg-gray-900 rounded-full top-3 right-3">
                    {tyre.discount}% OFF
                  </div>
                )}

                {/* Warranty */}
                {tyre.warranty && (
                  <div className="absolute max-w-[70px] text-center top-3 left-3">
                    <div className="text-xs font-bold text-black">
                      {tyre.warranty.split(" ")[0]}
                    </div>
                    <div className="text-[10px] text-gray-600">MONTH</div>
                    <div className="text-[10px] font-semibold">WARRANTY</div>
                  </div>
                )}

                {/* Image */}
                <div className="flex items-center justify-center h-48 p-4 bg-gray-50 rounded-t-2xl">
                  <img
                    src={tyre.image}
                    alt={tyre.name}
                    className="object-contain h-32 transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4">

                  <h3 className="text-base font-bold text-blue-900 line-clamp-2">
                    {tyre.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-black">
                    MRP - ₹{tyre.price}
                  </p>

                  <hr className="my-2" />

                  <div className="space-y-1 text-sm text-black">
                    {tyre.warranty && <p>• Warranty: {tyre.warranty}</p>}
                    {tyre.capacity && <p>• Capacity: {tyre.capacity}</p>}
                    <p>• Price: ₹{finalPrice}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 mt-4 sm:flex-row">

                    {/* Buy Now */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTyre(tyre);
                      }}
                      className="flex-1 px-3 py-2 text-sm font-semibold text-white bg-blue-900 rounded-full hover:bg-gray-200 hover:text-black"
                    >
                      Buy Now
                    </button>

                    {/* ✅ Add Cart with Toast */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdd(tyre);
                      }}
                      className="flex-1 px-3 py-2 text-sm font-semibold text-black bg-gray-200 rounded-full hover:bg-blue-900 hover:text-white"
                    >
                      Add Cart
                    </button>

                  </div>
                </div>
              </div>
            );
          })}

        </div>

      ) : (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold">No products found</h2>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
