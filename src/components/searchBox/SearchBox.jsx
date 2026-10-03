import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./searchBox.css";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchText.trim())}`);
    }
    setSuggestions([]);
  }

  useEffect(() => {
    if (!searchText.trim()) {
      return setSuggestions([]);
    } else {
      const fetchSuggestion = async () => {
        try {
          const res = await fetch(
            `https://dummyjson.com/products/search?q=${searchText}`,
          );
          const data = await res.json();
          setSuggestions(data.products?.slice(0, 5) ?? []);
        } catch (error) {
          console.log(error);
          setSuggestions([]);
        } finally {
          setLoading(false)
        }
      };

      const handleFetchSuggFunc = setTimeout(() => {
        fetchSuggestion();
      }, 300);

      return () => clearTimeout(handleFetchSuggFunc);
    }
  }, [searchText]);

  useEffect(() => {
    setSuggestions([]);
  }, [location.pathname]);

  return (
    <div className="searchBox-container">
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      <div>
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {loading ? <p>loading...</p> : suggestions.map((item, index) => (
              <li key={item.id}>
                <Link to={`/products/${item.id}`}>
                    <span>{index + 1}-</span>
                    <img src={item.thumbnail} alt={item.title} />
                    <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBox;