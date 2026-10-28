import { useLocation } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./slideProducts.css";

function TopSlide({ title, query }) {
  const location = useLocation();
  return (
    <div>
        <div className="topSlide">
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2>{title}</h2>
            {location.pathname === `/${title}` || title === "Categories" || location.search === `?query=${query}` ? (
              ""
            ) : (
              <div>
                <a href={`/E-commerce/${title}`} className="vap">
                  View All
                </a>
                <FaLongArrowAltRight size={10} fill="#B9DFA4" />
              </div>
            )}
          </div>
        </div>
    </div>
  );
}

export default TopSlide;
