const ProductGrid = ({ filteredTyres, onSelectTyre }) => {
  return (
    <div className="md:col-span-3 lg:col-span-4">
      {/* Products Grid */}
      {filteredTyres.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTyres.map((tyre) => (
            <div
              key={tyre.id}
              className="relative flex flex-col overflow-hidden transition duration-300 transform bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:border-green-400"
              onClick={() => onSelectTyre(tyre)}
            >
              {/* Badge */}
              {tyre.badge && (
                <div className="absolute z-10 top-4 right-4">
                  {tyre.badge === "Best Seller" && (
                    <span className="px-4 py-2 text-xs font-bold text-white bg-red-500 rounded-full">
                      ⭐ BEST SELLER
                    </span>
                  )}
                  {tyre.badge === "Premium" && (
                    <span className="px-4 py-2 text-xs font-bold text-white bg-purple-500 rounded-full">
                      ✨ PREMIUM
                    </span>
                  )}
                  {tyre.badge === "New" && (
                    <span className="px-4 py-2 text-xs font-bold text-white bg-blue-500 rounded-full">
                      🆕 NEW
                    </span>
                  )}
                  {tyre.badge === "Trending" && (
                    <span className="px-4 py-2 text-xs font-bold text-white bg-orange-500 rounded-full">
                      🔥 TRENDING
                    </span>
                  )}
                </div>
              )}

              {/* Discount Badge */}
              {tyre.discount > 0 && (
                <div className="absolute z-10 px-3 py-1 text-sm font-bold text-white bg-green-500 rounded-full top-4 left-4">
                  -{tyre.discount}%
                </div>
              )}

              {/* Image */}
              <div className="flex items-center justify-center h-56 p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={tyre.image}
                  alt={tyre.name}
                  className="object-contain w-48 h-48"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 py-4">
                <p className="mb-2 text-sm font-semibold tracking-wider text-green-600 uppercase">
                  {tyre.type}
                </p>
                <h3 className="mb-3 text-lg font-bold text-gray-800 line-clamp-2">
                  {tyre.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-yellow-500">
                    {"★".repeat(Math.floor(tyre.rating))}
                    {"☆".repeat(5 - Math.floor(tyre.rating))}
                  </div>
                  <span className="text-xs text-gray-600">
                    ({tyre.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price Section */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-green-600">
                      ${(tyre.price * (1 - tyre.discount / 100)).toFixed(0)}
                    </span>
                    {tyre.discount > 0 && (
                      <span className="text-lg text-gray-400 line-through">
                        ${tyre.price}
                      </span>
                    )}
                  </div>
                  {tyre.discount > 0 && (
                    <p className="mt-1 text-sm text-gray-600">
                      Save ${(tyre.price * tyre.discount / 100).toFixed(0)} - Limited offer
                    </p>
                  )}
                </div>
              </div>

              {/* Button */}
              <div className="px-6 pb-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTyre(tyre);
                  }}
                  className="w-full py-3 font-bold text-white transition duration-200 bg-green-600 rounded-xl hover:bg-green-700 active:scale-95"
                >
                  View &amp; Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="mb-4 text-6xl">😔</div>
          <p className="mb-2 text-2xl font-bold text-gray-800">No tyres found</p>
          <p className="mb-6 text-gray-600">Try adjusting your filters or price range</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
