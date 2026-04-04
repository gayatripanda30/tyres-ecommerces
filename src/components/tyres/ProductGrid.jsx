const ProductGrid = ({ filteredTyres, onSelectTyre }) => {
  return (
    <div className="md:col-span-3 lg:col-span-4">
      {filteredTyres.length > 0 ? (

        /* ✅ GRID */
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

          {filteredTyres.map((tyre) => (
            <div
              key={tyre.id}
              onClick={() => onSelectTyre(tyre)}
              className="relative flex flex-col h-[420px] w-full max-w-[320px] mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 cursor-pointer group"
            >

              {/* 🔥 Badges */}
              <div className="absolute z-10 flex flex-col gap-2 top-3 left-3">
                {tyre.discount > 0 && (
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                    -{tyre.discount}%
                  </span>
                )}
                {tyre.badge && (
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-black rounded-full">
                    {tyre.badge}
                  </span>
                )}
              </div>

              {/* 🔍 Image (Fixed Height) */}
              <div className="flex items-center justify-center overflow-hidden h-44 bg-gray-50 rounded-t-2xl">
                <img
                  src={tyre.image}
                  alt={tyre.name}
                  className="object-contain transition-transform duration-500 w-36 h-36 group-hover:scale-110"
                />
              </div>

              {/* 📦 Content */}
              <div className="flex flex-col flex-1 p-4">

                {/* Type */}
                <p className="mb-1 text-xs font-semibold uppercase text-black/70">
                  {tyre.type}
                </p>

                {/* Name (Fixed height) */}
                <h3 className="text-sm font-bold text-black line-clamp-2 h-[40px]">
                  {tyre.name}
                </h3>

                {/* ⭐ Rating */}
                <div className="flex items-center gap-1 mt-2 text-sm">
                  <span className="text-yellow-500">
                    {"★".repeat(Math.floor(tyre.rating))}
                    {"☆".repeat(5 - Math.floor(tyre.rating))}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({tyre.reviews})
                  </span>
                </div>

                {/* 💰 Price */}
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-black">
                      ₹{(tyre.price * (1 - tyre.discount / 100)).toFixed(0)}
                    </span>

                    {tyre.discount > 0 && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{tyre.price}
                      </span>
                    )}
                  </div>

                  {tyre.discount > 0 && (
                    <p className="text-xs text-gray-500">
                      Save ₹{(tyre.price * tyre.discount / 100).toFixed(0)}
                    </p>
                  )}
                </div>

                {/* 👉 Push buttons to bottom */}
                <div className="pt-3 mt-auto">

                  {/* 🛒 Buttons */}
                  <div className="flex gap-2">
                    
                    {/* 🟡 Buy Now */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTyre(tyre);
                      }}
                      className="flex-1 py-2 text-sm font-semibold text-black transition bg-yellow-400 rounded-lg hover:bg-yellow-500"
                    >
                      Buy Now
                    </button>

                    {/* ⚪ View */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTyre(tyre);
                      }}
                      className="flex-1 py-2 text-sm font-semibold text-black transition bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      View
                    </button>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      ) : (

        /* ❌ EMPTY STATE */
        <div className="py-20 text-center">
          <div className="mb-4 text-7xl">🚫</div>
          <h2 className="text-2xl font-bold text-black">
            No tyres found
          </h2>
          <p className="mt-2 mb-6 text-gray-500">
            Try adjusting your filters
          </p>

          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;