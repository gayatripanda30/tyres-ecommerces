import { useState } from "react";

const FilterSidebar = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  selectedType,
  setSelectedType,
  tyreTypes,
  selectedBrand,
  setSelectedBrand,
  brands,
  selectedLoad,
  setSelectedLoad,
  loadIndexes,
  selectedSpeed,
  setSelectedSpeed,
  speedRatings,
}) => {
  const [openSection, setOpenSection] = useState("brand");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleReset = () => {
    setMinPrice(100);
    setMaxPrice(1200);
    setSelectedType(null);
    setSelectedBrand(null);
    setSelectedLoad([]);
    setSelectedSpeed([]);
  };

  return (
    <div className="w-full max-w-[240px] md:w-72  p-4 rounded-lg">
      <h2 className="mb-4 text-2xl font-bold">Filters</h2>

      {/* ===== TYPE FILTER ===== */}
      <div className="py-3 border-b">
        <div
          onClick={() => toggleSection("type")}
          className="flex justify-between cursor-pointer"
        >
          <h3 className="font-semibold text-blue-600">Tyre Type</h3>
          <span>{openSection === "type" ? "▲" : "▼"}</span>
        </div>

        {openSection === "type" && (
          <div className="mt-2 space-y-2">
            <label className="block">
              <input
                type="radio"
                checked={selectedType === null}
                onChange={() => setSelectedType(null)}
                className="mr-2"
              />
              All Types
            </label>

            {tyreTypes?.map((type) => (
              <label key={type} className="block">
                <input
                  type="radio"
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ===== LOAD INDEX ===== */}
      <div className="py-3 border-b">
        <div
          onClick={() => toggleSection("load")}
          className="flex justify-between cursor-pointer"
        >
          <h3 className="font-semibold text-blue-600">Load Index</h3>
          <span>{openSection === "load" ? "▲" : "▼"}</span>
        </div>

        {openSection === "load" && (
          <div className="mt-2 space-y-2">
            {loadIndexes?.map((item) => (
              <label key={item.value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedLoad.includes(item.value)}
                  onChange={() => {
                    if (selectedLoad.includes(item.value)) {
                      setSelectedLoad(
                        selectedLoad.filter((v) => v !== item.value)
                      );
                    } else {
                      setSelectedLoad([...selectedLoad, item.value]);
                    }
                  }}
                />
                {item.value} ({item.count})
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ===== SPEED RATING ===== */}
      <div className="py-3 border-b">
        <div
          onClick={() => toggleSection("speed")}
          className="flex justify-between cursor-pointer"
        >
          <h3 className="font-semibold text-blue-600">Speed Rating</h3>
          <span>{openSection === "speed" ? "▲" : "▼"}</span>
        </div>

        {openSection === "speed" && (
          <div className="mt-2 space-y-2">
            {speedRatings?.map((item) => (
              <label key={item.value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedSpeed.includes(item.value)}
                  onChange={() => {
                    if (selectedSpeed.includes(item.value)) {
                      setSelectedSpeed(
                        selectedSpeed.filter((v) => v !== item.value)
                      );
                    } else {
                      setSelectedSpeed([...selectedSpeed, item.value]);
                    }
                  }}
                />
                {item.value} ({item.count})
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ===== PRICE FILTER ===== */}
      <div className="py-3 border-b">
        <div
          onClick={() => toggleSection("price")}
          className="flex justify-between cursor-pointer"
        >
          <h3 className="font-semibold text-blue-600">Price Range</h3>
          <span>{openSection === "price" ? "▲" : "▼"}</span>
        </div>

        {openSection === "price" && (
          <div className="mt-3 space-y-3">
            <div>
              <p className="text-sm">Min: ₹{minPrice}</p>
              <input
                type="range"
                min="100"
                max="1200"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <p className="text-sm">Max: ₹{maxPrice}</p>
              <input
                type="range"
                min="100"
                max="1200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* ===== RESET BUTTON ===== */}
      <button
        onClick={handleReset}
        className="w-full py-2 mt-5 text-white transition bg-blue-600 rounded hover:bg-blue-700"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;