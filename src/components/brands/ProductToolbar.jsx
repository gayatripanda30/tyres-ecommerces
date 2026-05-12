const ProductToolbar = ({ filteredTyresCount, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col items-stretch justify-between gap-4 p-4 mb-8 bg-white border-2 border-gray-200 shadow-md sm:p-6 md:flex-row md:items-center rounded-2xl">
      <div className="text-lg font-bold text-gray-800">
        <span className="text-2xl text-green-600">{filteredTyresCount}</span> Products Found
      </div>

      <div className="flex flex-col w-full gap-2 sm:flex-row sm:items-center md:w-auto">
        <span className="font-semibold text-gray-700">Sort By:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-3 font-semibold transition bg-white border-2 border-gray-300 cursor-pointer md:w-auto rounded-xl focus:outline-none focus:border-green-600 hover:border-green-400"
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
