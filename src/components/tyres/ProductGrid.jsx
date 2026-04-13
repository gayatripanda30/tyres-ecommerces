import { useState } from "react";

const ProductGrid = ({ filteredTyres = [], onSelectTyre, onAddToCart }) => {

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const handleAdd = (item) => {
    onAddToCart(item);

    setToastMsg(`${item.name} added to cart 🛒`);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="md:col-span-3 lg:col-span-4">

      {/* ✅ TOAST */}
      {showToast && (
        <div className="fixed z-[2000] px-6 py-3 text-black bg-gray-300 shadow-lg top-6 right-6 rounded-full">
          {toastMsg}
        </div>
      )}

      {/* ✅ SAFETY CHECK */}
      {filteredTyres && filteredTyres.length > 0 ? (

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

          {filteredTyres.map((item) => {

            // ✅ SAFE VALUES (Excel friendly)
            const price = Number(item.price) || 0;
            const discount = Number(item.discount) || 0;

            const finalPrice = discount
              ? Math.round(price * (1 - discount / 100))
              : price;

            return (
              <div
                key={item.id}
                onClick={() => onSelectTyre(item)}
                className="relative flex flex-col w-full max-w-[320px] mx-auto bg-white border rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              >

                {/* Discount */}
                {discount > 0 && (
                  <div className="absolute px-3 py-1 text-xs font-bold text-white bg-gray-900 rounded-full top-3 right-3">
                    {discount}% OFF
                  </div>
                )}

                {/* Warranty */}
                {item.warranty && (
                  <div className="absolute text-center top-3 left-3">
                    <div className="text-xs font-bold text-black">
                      {item.warranty.split(" ")[0]}
                    </div>
                    <div className="text-[10px] text-gray-600">MONTH</div>
                    <div className="text-[10px] font-semibold">WARRANTY</div>
                  </div>
                )}

                {/* Image */}
                <div className="flex items-center justify-center h-48 p-4 bg-gray-50 rounded-t-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain h-32 transition duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/assets/default.png"; // fallback image
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4">

                  <h3 className="text-base font-bold text-blue-900 line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Price Section */}
                  <p className="mt-1 text-sm font-semibold text-black">
                    MRP - ₹{price}
                  </p>

                  <hr className="my-2" />

                  <div className="space-y-1 text-sm text-black">
                    {item.warranty && <p>• Warranty: {item.warranty}</p>}
                    {item.capacity && <p>• Capacity: {item.capacity}</p>}
                    {item.type && <p>• Type: {item.type}</p>}

                    <p className="font-semibold text-green-700">
                      • Price: ₹{finalPrice}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTyre(item);
                      }}
                      className="flex-1 py-2 text-sm font-semibold text-white bg-blue-900 rounded-full hover:bg-gray-200 hover:text-black"
                    >
                      Buy Now
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdd(item);
                      }}
                      className="flex-1 py-2 text-sm font-semibold text-black bg-gray-200 rounded-full hover:bg-blue-900 hover:text-white"
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
          <h2 className="text-2xl font-bold text-gray-700">
            No products found 😢
          </h2>

          {/* DEBUG HELP */}
          <p className="mt-2 text-sm text-gray-500">
            Check Excel data / filters
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;