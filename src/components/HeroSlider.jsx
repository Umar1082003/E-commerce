import banner1 from "../assets/Modern Ecommerce Product Showcase.png";
// import banner1 from "../assets/HT.png";

// import "../page/home/home.css";
function HeroSlider() {
  return (
      <div className="hero-slider">
        {/* <div className="container"> */}
            {/* <div className="content">
              <h3>
                Shop anytime, <br /> anywhere
              </h3>
              <p>Shopping With Us</p>
            </div> */}
            <img className="hero-banner" src={banner1} alt="ecommerce_Hero" loading="lazy" />
        {/* </div> */}
      </div>
  );
}

export default HeroSlider;