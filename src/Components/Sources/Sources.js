import React from "react";
import "./Sources.css";
import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";
import productsData from "../../data.json";
import { Link } from "react-router-dom";

export default Sources;
function Sources({ macro }) {
  const [sortBy, setSortBy] = useState("energy");
  const [searched, setSearched] = useState("");
  const headerTextMap = {
    protein: "Najlepsze źródła białka",
    fat: "Najlepsze źródła tłuszczu",
    carbohydrates: "Najlepsze źródła węglowodanów",
  };
  const headerText = headerTextMap[macro];
  const handleSearch = (query) => {
    setSearched(query);
  };
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="sources-header-container">
        <Header text={headerText} />
        <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <Products macro={macro} sortBy={sortBy} searched={searched} />
    </div>
  );
}

function Search({ onSearch }) {
  const [searched, setSearched] = useState("");

  const handleInputChange = (event) => {
    setSearched(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searched);
  };

  return (
    <div className="search-div">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searched}
          onChange={handleInputChange}
          placeholder="Wyszukaj produkt"
          aria-label="Wyszukiwarka" // dodatkowy atrybut dla dostępności
        />
      </form>
    </div>
  );
}

function SortOptions({ sortBy, setSortBy }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="sort-container">
      <button className="sort-btn" onClick={toggleDropdown}>
        Sortuj według
      </button>
      {dropdownOpen && (
        <div className="sort-dropdown-list">
          <ul className="sort-dropdown">
            <li
              className={sortBy === "grams" ? "selected" : ""}
              onClick={() => handleSortChange("grams")}
            >
              Zawartość w gramach
            </li>
            <li
              className={sortBy === "energy" ? "selected" : ""}
              onClick={() => handleSortChange("energy")}
            >
              Procent energii
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function Products({ macro, sortBy, searched }) {
  const [products, setProducts] = useState(productsData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const caloriesPerGram = {
    protein: 4,
    fat: 9,
    carbohydrates: 4,
  };

  const filterProductsByCategory = (products) => {
    if (selectedCategories.length === 0) {
      return products;
    }
    return products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  };

  const filterProductsBySearch = (products) => {
    if (!searched) {
      return products;
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searched.toLowerCase())
    );
  };

  const calculateEnergyPercentage = (product, macro) => {
    const totalCalories =
      product.protein * caloriesPerGram.protein +
      product.fat * caloriesPerGram.fat +
      product.carbohydrates * caloriesPerGram.carbohydrates;
    const macroCalories = product[macro] * caloriesPerGram[macro];
    return (macroCalories / totalCalories) * 100;
  };

  const sortProducts = (products, macro, sortBy) => {
    if (sortBy === "grams") {
      return [...products].sort((a, b) => b[macro] - a[macro]);
    } else {
      return [...products].sort(
        (a, b) =>
          calculateEnergyPercentage(b, macro) -
          calculateEnergyPercentage(a, macro)
      );
    }
  };

  useEffect(() => {
    let filteredProducts = filterProductsByCategory(productsData);
    filteredProducts = filterProductsBySearch(filteredProducts);
    let sortedProducts = sortProducts(filteredProducts, macro, sortBy);
    setProducts(sortedProducts);
    setCurrentPage(1); // Reset to first page on filter change
  }, [selectedCategories, macro, sortBy, searched]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <CategoryBtn setSelectedCategories={setSelectedCategories} />
      {currentProducts.map((product) => (
        <div className="product" key={product.name}>
          <Link to={`/product/${product.name}`}>
            <h3>{product.name}</h3>
          </Link>
          <div className="product-values">
            <p>{product.energy} kcal</p>
            <p>B {product.protein}g</p>
            <p>T {product.fat}g</p>
            <p>W {product.carbohydrates}g</p>
          </div>
        </div>
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  const pageNumbers = [];

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 3);

  if (endPage - startPage < 3) {
    startPage = Math.max(1, endPage - 3);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => handlePageChange(1)}>
        &laquo;
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={number === currentPage ? "active" : ""}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &gt;
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
      >
        &raquo;
      </button>
    </div>
  );
}

function CategoryBtn({ setSelectedCategories }) {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const allCategories = [
    "Warzywa",
    "Owoce",
    "Orzechy, pestki, nasiona",
    "Produkty zbożowe",
    "Pieczywo",
    "Nabiał",
    "Mięso",
    "Ryby",
    "Przekąski, słodycze",
    "Napoje",
    "Dania gotowe",
    "Dodatki i inne",
  ];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelectOrRemove = (category) => {
    let updatedCategories;
    if (categories.includes(category)) {
      updatedCategories = categories.filter((cat) => cat !== category);
    } else {
      updatedCategories = [...categories, category];
    }
    setCategories(updatedCategories);
    setSelectedCategories(updatedCategories);
    setDropdownOpen(false);
  };

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div key={category} className="selected-category">
          <span style={{ paddingRight: 10 + "px" }}> {category}</span>
          <button
            className="close-button"
            onClick={() => handleCategorySelectOrRemove(category)}
          >
            X
          </button>
        </div>
      ))}
      <div ref={dropdownRef}>
        <button className="dropdown-button" onClick={toggleDropdown}>
          + Kategoria
        </button>
        {dropdownOpen && (
          <div className="categories-dropdown-list">
            <ul className="categories-dropdown">
              {allCategories.map((category) => (
                <li
                  key={category}
                  className={`category-list-item ${
                    categories.includes(category) ? "selected" : ""
                  }`}
                  onClick={() => handleCategorySelectOrRemove(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
