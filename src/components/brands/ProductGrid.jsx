import React from "react";
import useToast from "../../hooks/useToast";
import Toast from "../shared/Toast";
import { calculateFinalPrice, formatPrice } from "../../utils/tyreUtils";

/**
 * ProductGrid component for displaying a grid of tyre products.
 * @param {Array} filteredTyres - Array of filtered tyre objects.
 * @param {Function} onSelectTyre - Callback when a tyre is selected.
 * @param {Function} onAddToCart - Callback when a tyre is added to cart.
 */
const ProductGrid = ({ filteredTyres, onSelectTyre, onAddToCart }) => {
  const { showToast, toastMessage, triggerToast } = useToast();

  /**
   * Handles adding a tyre to the cart and shows a toast notification.
   * @param {object} tyre - The tyre object to add.
   */
  const handleAdd = (tyre) => {
    onAddToCart(tyre);
    triggerToast(`${tyre.name} added to cart 🛒`);
  };

  return (
    <div className="md:col-span-3 lg:col-span-4">
      {/* Toast Notification */}
      <Toast show={showToast} message={toastMessage} />

      {filteredTyres.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredTyres.map((tyre) => {
            const finalPrice = calculateFinalPrice(tyre.price, tyre.discount);

            return (
              <div
                key={tyre.id}
                onClick={() => onSelectTyre(tyre)}
                className="relative flex flex-col w-full max-w-[320px] mx-auto bg-white border rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer tyre-card"
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
                    className="object-contain h-32 transition duration-500 hover:scale-105 hover:rotate-12"
                    onError={(e) => {
                      e.target.src = "/images/default-tyre.png"; // Fallback image
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-base font-bold text-blue-900 line-clamp-2">
                    {tyre.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-black">
                    MRP - {formatPrice(tyre.price)}
                  </p>

                  <hr className="my-2" />

                  <div className="space-y-1 text-sm text-black">
                    {tyre.warranty && <p>• Warranty: {tyre.warranty}</p>}
                    {tyre.capacity && <p>• Capacity: {tyre.capacity}</p>}
                    <p>• Price: {formatPrice(finalPrice)}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 mt-4 sm:flex-row">
                    {/* Buy Now */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTyre(tyre);
                      }}
                      className="flex-1 px-3 py-2 text-sm font-semibold text-white bg-blue-900 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
                    >
                      Buy Now
                    </button>

                    {/* Add Cart */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdd(tyre);
                      }}
                      className="flex-1 px-3 py-2 text-sm font-semibold text-black bg-gray-200 rounded-full hover:bg-blue-900 hover:text-white transition-colors"
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
          <p className="text-gray-600 mt-2">Try adjusting your filters or search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
