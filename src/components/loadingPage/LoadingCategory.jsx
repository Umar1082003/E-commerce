import "./loadingPage.css";
function Category() {
  return (
    <div className="categories">
      <div className="container">
        <div className="topSlide">
          <h2 className="skeltion"></h2>
        </div>
        <div className="categorys-section">
          {[...Array(7)].map((_, i) => (
            <div className="category skeltion" key={i}>
              <span className="skeltion"></span>
              <h3 className="skeltion"></h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category