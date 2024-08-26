import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "../components/ProductCard";

const products = [
  {
    title: "SmartWatch Pro Max",
    discount: "15%",
    price: 4500,
    ratings: 4.5,
  },
  {
    title: "FitTracker Elite",
    discount: "20%",
    price: 3200,
    ratings: 4.3,
  },
  {
    title: "TechTime Advanced",
    discount: "10%",
    price: 4999,
    ratings: 4.7,
  },
  {
    title: "HealthWave Plus",
    discount: "18%",
    price: 3800,
    ratings: 4.4,
  },
  {
    title: "ActiveLife SmartFit",
    discount: "25%",
    price: 2800,
    ratings: 4.1,
  },
  {
    title: "PulseSync Pro",
    discount: "12%",
    price: 4200,
    ratings: 4.6,
  },
  {
    title: "ChronoFit Pro",
    discount: "22%",
    price: 3500,
    ratings: 4.2,
  },
  {
    title: "MoveTech Ultra",
    discount: "30%",
    price: 1500,
    ratings: 4.0,
  },
  {
    title: "VitaPulse X",
    discount: "17%",
    price: 4000,
    ratings: 4.5,
  },
  {
    title: "SmartTime Explorer",
    discount: "28%",
    price: 2900,
    ratings: 4.3,
  },
];

function Products() {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [isSortMenuVisible, setIsSortMenuVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  
  const sortMenuRef = useRef(null);

  const handleSortClick = () => {
    setIsSortMenuVisible(!isSortMenuVisible);
  };

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
    setIsSortMenuVisible(false);
  };

  const handleClickOutside = (event) => {
    if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
      setIsSortMenuVisible(false);
      setIsFilterModalVisible(false);
    }
  };

  useEffect(() => {
    if (isSortMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortMenuVisible]);


  const handleFilterClick = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  const closeFilterModal = () => {
    setIsFilterModalVisible(false);
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 1000]);
    setSelectedFeatures([]);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };

  const handleFeatureChange = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange([0, value]);
  };

  return (
    <>


      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="h-16 flex items-center p-5 px-14 justify-between">

        <div className="relative" ref={sortMenuRef}>
            <button
              className="bg-white rounded-lg py-2 px-4 border-2 border-gray-200 hover:bg-gray-50 transition"
              onClick={handleSortClick}
            >
              Sort By
            </button>

            {/* Sort Dropdown Menu */}
            {isSortMenuVisible && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionClick("Price: Low to High")}
                >
                  Price: Low to High
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionClick("Price: High to Low")}
                >
                  Price: High to Low
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionClick("Ratings: High to Low")}
                >
                  Ratings: High to Low
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionClick("Ratings: Low to High")}
                >
                  Ratings: Low to High
                </li>
              </ul>
            )}
          </div>

          <div className="relative text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 w-96 px-4 pr-10 rounded-lg text-md focus:outline-slate-400"
              type="text"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-2 hover:scale-95 transition"
            >
              <IoIosSearch size="24" />
            </button>
          </div>
          <div className="relative">
            <button
              className="bg-white rounded-lg py-2 px-4 border-2 border-gray-200 hover:bg-gray-50 transition"
              onClick={handleFilterClick}
            >
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      {isFilterModalVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-30">
          <div className="bg-white overflow-auto over p-8 rounded-lg shadow-lg w-1/3 h-3/4">
            {/* Clear All and Close Buttons */}
            <div className="flex justify-between mb-5">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={handleClearFilters}
              >
                Clear All
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={closeFilterModal}
              >
                Close
              </button>
            </div>
            <h2 className="text-lg font-semibold mb-4">Filter Options</h2>


            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="text-md font-medium mb-2">Brand</h3>
              <div className="flex flex-col gap-2">
                {["Apple", "Samsung", "Garmin", "Fitbit", "Amazfit"].map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="form-checkbox"
                    />
                    <span className="ml-2">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="text-md font-medium mb-2">Color</h3>
              <div className="flex flex-col gap-2">
                {["Black", "Silver", "Gold", "Rose Gold", "Blue"].map((color) => (
                  <label key={color} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorChange(color)}
                      className="form-checkbox"
                    />
                    <span className="ml-2">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
              <h3 className="text-md font-medium mb-2">Size</h3>
              <div className="flex flex-col gap-2">
                {["38mm", "40mm", "42mm", "44mm"].map((size) => (
                  <label key={size} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                      className="form-checkbox"
                    />
                    <span className="ml-2">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="text-md font-medium mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm mt-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>

            {/* Features Filter */}
            <div className="mb-6">
              <h3 className="text-md font-medium mb-2">Features</h3>
              <div className="flex flex-col gap-2">
                {["GPS", "Heart Rate Monitor", "Water Resistant", "Sleep Tracking", "Bluetooth"].map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => handleFeatureChange(feature)}
                      className="form-checkbox"
                    />
                    <span className="ml-2">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      )}

      {/* Product Feed */}
      <main className="h-full p-12 flex flex-col gap-6 justify-center">
        <ul className="flex flex-wrap justify-evenly gap-10 list-none max-w-fit">
          {products.map((product, index) => (
            <li key={index}>
              <ProductCard
                title={product.title}
                discount={product.discount}
                price={product.price}
                ratings={product.ratings}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Products;
