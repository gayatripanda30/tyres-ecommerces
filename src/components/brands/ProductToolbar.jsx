const ProductToolbar = ({ filteredTyresCount, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 p-6 mb-8 bg-white border-2 border-gray-200 shadow-md md:flex-row rounded-2xl">
      <div className="text-lg font-bold text-gray-800">
        <span className="text-2xl text-green-600">{filteredTyresCount}</span> Products Found
      </div>

      <div className="flex items-center w-full gap-3 md:w-auto">
        <span className="font-semibold text-gray-700">Sort By:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-5 py-3 font-semibold transition bg-white border-2 border-gray-300 cursor-pointer rounded-xl focus:outline-none focus:border-green-600 hover:border-green-400"
        >
          <option value="popular">🏆 Most Popular</option>
          <option value="price-low">📉 Price: Low to High</option>
          <option value="price-high">📈 Price: High to Low</option>
          <option value="rating">⭐ Top Rated</option>
          <option value="reviews">💬 Most Reviews</option>
        </select>
      </div>
    </div>
  );
};

export default ProductToolbar;
