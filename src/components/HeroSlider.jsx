import SearchBox from "./searchBox/SearchBox";

import "../page/home/Home.css";

import banner1 from "../img/Main-bg.webp";

function HeroSlider() {
  return (
    <>
      <div className="hero-slider">
        <div className="container">
            <div className="content">
              <h3>
                Shop anytime, <br /> anywhere
              </h3>
              <p>Shopping With Us</p>
              <SearchBox />
            </div>
            <img className="hero-banner" src={banner1} alt="banner_Hero1" loading="lazy" />
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
