import React from 'react'


function ProductImages({product}) {
  return (
      <div className="product-images">
                <img id="mainImg" src={product.images[0]} alt={product.title} />
                {product.images.map((image, index) => (
                  <img
                    className={index === 0 ? "small-img active" : "small-img"}
                    onClick={(el) => {
                      document.getElementById("mainImg").src = image;
                      document.querySelectorAll(".small-img").forEach((img) => {
                        img.classList.remove("active");
                      });
                      el.target.classList.add("active");
                    }}
                    {...document.querySelectorAll(".small-img").forEach((img) => {
                      img.classList.remove("active");
                    })}
                    key={index}
                    src={image}
                    alt={product.title}
                  />
                ))}
              </div>
  )
}

export default ProductImages
