import React from "react";
import "./loadingPage.css";

function LoadingHomePage() {
  return (
    <div className="slideLoadingPage slide">
      <div className="container">
        <div className="topSlide">
          <h2 className="skeltion"></h2>
          <p className="skeltion"></p>
        </div>

        {[...Array(4)].map((_, i) => (
          <div className="parent-products" key={i}>
            <div className="product">
              <div className="img skeltion"></div>
              <h3 className="skeltion"></h3>
              <p className="skeltion"></p>

              <div className="stars">
                <span className="skeltion"></span>
                <span className="skeltion"></span>
                <span className="skeltion"></span>
                <span className="skeltion"></span>
                <span className="skeltion"></span>
              </div>

              <p className="price skeltion"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingHomePage;
