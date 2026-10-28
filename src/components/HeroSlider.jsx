import banner1 from "../assets/Modern Ecommerce Product Showcase.png";
function HeroSlider() {
  return (
      <div className="hero-slider">
            <img className="hero-banner" src={banner1} alt="ecommerce_Hero" loading="lazy" />
      </div>
  );
}

export default HeroSlider;