import React from "react";
import "./Sources.css";
import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";

export default Sources;
function Sources() {
  return (
    <div>
      <Search />
      <div className="sources-header-container">
        <Header text="Najlepsze źródła białka" />
        <button className="sort-btn">Sortuj według</button>
      </div>
      <CategoryBtn />
    </div>
  );
}

function Search() {
  const [searched, setSearched] = useState("");
  const handleInputChange = (event) => {
    setSearched(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Szukana fraza: ${searched}`);
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
function CategoryBtn() {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const allCategories = [
    "Warzywa",
    "Owoce",
    "Orzechy, pestki, nasiona",
    "Zboża",
    "Nabiał",
    "Mięso",
    "Ryby",
    "Przekąski, słodycze",
  ];

  const dropdownRef = useRef(null); // Referencja do kontenera listy rozwijanej

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
    if (categories.includes(category)) {
      removeCategory(category);
    } else {
      setCategories([...categories, category]);
    }
  };

  const removeCategory = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div key={category} className="selected-category">
          <span style={{ paddingRight: 10 + "px" }}> {category}</span>
          <button
            className="close-button"
            onClick={() => removeCategory(category)}
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
