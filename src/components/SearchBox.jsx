import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchText.trim())}`);
    }
    setSuggestions([])
  }

  useEffect(() => {
    if (!searchText.trim()) {
      return setSuggestions([])
    }else{
      const fetchSuggestion = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchText}`
        );
        const data = await res.json();
        setSuggestions(data.products.slice(0, 5) || []);
        // console.log(data);
      } catch (error) {
        console.log(error);
        setSuggestions([]);
      }
    };
    
    const handleFetchSuggFunc = setTimeout(() => {
      fetchSuggestion();
    }, 300);

    return () => clearTimeout(handleFetchSuggFunc);
    }

  }, [searchText]);
  console.log(suggestions);

  useEffect(() => {
    setSuggestions([]);
  }, [location])


  return (
    <div className="searchBox-contianer">
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <Link to={`/products/${item.id}`}>
              <li key={item.id}>
                <span>{index + 1}-</span>
                <img src={item.thumbnail} alt={item.title} />
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
