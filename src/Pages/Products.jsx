import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import ProductCard from "../components/ProductCard";
import { IoClose } from "react-icons/io5";
import { products } from "../data";
import { Link } from "react-router-dom";

function Products() {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([500, 10000]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [isSortMenuVisible, setIsSortMenuVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedFilterOption, setSelectedFilterOption] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // No of products per page

  const sortMenuRef = useRef(null);

  const handleChange = (values) => {
    setPriceRange(values);
  };

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

  const handleFilterTypeClick = (option) => {
    setSelectedFilterOption(option);
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

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* bar */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="h-auto flex flex-col md:flex-row items-center p-5 lg:px-14 justify-between">
          <div className="relative" ref={sortMenuRef}>
            {/* Sort */}
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

          {/* Search Bar */}
          <div className="relative text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 w-32 sm:w-64 lg:w-96 px-4 pr-10 rounded-lg text-md focus:outline-slate-400"
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

          {/* Filter */}
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
        <div className="fixed inset-0 bg-gray-500 bg-opacity-70 flex items-center justify-center z-30">
          <div className="relative bg-white flex rounded-lg shadow-lg w-5/6 h-3/4 lg:w-1/2 lg:h-2/3">
            {/* Side Menu */}
            <div className="w-1/4 bg-gray-100 rounded-s-lg">
              <h1 className="text-2xl p-4 font-bold border-b-2">Filter</h1>
              <ul className="flex flex-col text-sm md:text-base">
                <li
                  className={`cursor-pointer p-2 ps-4 w-full hover:bg-gray-300 ${
                    selectedFilterOption === 1
                      ? " bg-blue-500 font-bold text-white hover:bg-blue-500"
                      : ""
                  }`}
                  onClick={() => handleFilterTypeClick(1)}
                >
                  Brand
                </li>
                <li
                  className={`cursor-pointer p-2 ps-4 w-full hover:bg-gray-300 ${
                    selectedFilterOption === 2
                      ? "bg-blue-500 font-bold text-white hover:bg-blue-500"
                      : ""
                  }`}
                  onClick={() => handleFilterTypeClick(2)}
                >
                  Color
                </li>
                <li
                  className={`cursor-pointer p-2 ps-4 w-full hover:bg-gray-300 ${
                    selectedFilterOption === 3
                      ? "bg-blue-500 font-bold text-white hover:bg-blue-500"
                      : ""
                  }`}
                  onClick={() => handleFilterTypeClick(3)}
                >
                  Size
                </li>
                <li
                  className={`cursor-pointer p-2 ps-4 w-full hover:bg-gray-300 ${
                    selectedFilterOption === 4
                      ? "bg-blue-500 font-bold text-white hover:bg-blue-500"
                      : ""
                  }`}
                  onClick={() => handleFilterTypeClick(4)}
                >
                  Price Range
                </li>
                <li
                  className={`cursor-pointer p-2 ps-4 w-full hover:bg-gray-300 ${
                    selectedFilterOption === 5
                      ? "bg-blue-500 font-bold text-white hover:bg-blue-500"
                      : ""
                  }`}
                  onClick={() => handleFilterTypeClick(5)}
                >
                  Features
                </li>
              </ul>
            </div>

            {/* Close & Clear Buttons */}
            <IoClose
              onClick={closeFilterModal}
              size="24"
              className="cursor-pointer absolute right-4 top-4 hover:shadow-md rounded-sm hover:scale-110 hover:bg-red-500 hover:text-white ease-in-out duration-100"
            />
            <button
              className="absolute px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 bottom-5 right-5 hover:scale-105 hover:-translate-y-[0.1rem] ease-in duration-100"
              onClick={handleClearFilters}
            >
              Clear All
            </button>

            {/* Filter Options */}
            <div className="w-3/4 p-8 pt-4">
              {/* Brand Filter */}
              {selectedFilterOption === 1 && (
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-6">Brand</h3>
                  <div className="flex flex-col gap-2">
                    {["Apple", "Samsung", "Garmin", "Fitbit", "Amazfit"].map(
                      (brand) => (
                        <label key={brand} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                            className="form-checkbox"
                          />
                          <span className="ml-2">{brand}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Color Filter */}
              {selectedFilterOption === 2 && (
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-6">Color</h3>
                  <div className="flex flex-col gap-2">
                    {["Black", "Silver", "Gold", "Rose Gold", "Blue"].map(
                      (color) => (
                        <label key={color} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedColors.includes(color)}
                            onChange={() => handleColorChange(color)}
                            className="form-checkbox"
                          />
                          <span className="ml-2">{color}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Size Filter */}
              {selectedFilterOption === 3 && (
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-6">Size</h3>
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
              )}

              {/* Price Range Filter */}
              {selectedFilterOption === 4 && (
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-6">Price Range</h3>
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
              )}

              {/* Features Filter */}
              {selectedFilterOption === 5 && (
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-6">Features</h3>
                  <div className="flex flex-col gap-2">
                    {[
                      "GPS",
                      "Heart Rate Monitor",
                      "Water Resistant",
                      "Sleep Tracking",
                      "Bluetooth",
                    ].map((feature) => (
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
              )}
            </div>
          </div>
        </div>
      )}

      {/* Products */}
      <div className="p-5 lg:px-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <Link to="/product-details">
          <ProductCard
            title={product.title}
            discount={product.discount}
            price={product.price}
            ratings={product.ratings}
          />
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center py-8">
        <button
          className="cursor-pointer hover:bg-gray-100 mx-2 px-2 py-2 rounded-l-lg"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack size="24" />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              index + 1 === currentPage
                ? "bg-blue-500 text-white"
                : "bg-white border border-gray-300 hover:bg-gray-50"
            }  rounded-lg mx-1`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="cursor-pointer hover:bg-gray-100 mx-2 px-2 py-2 rounded-r-lg"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward size="24" />
        </button>
      </div>
    </>
  );
}

export default Products;
