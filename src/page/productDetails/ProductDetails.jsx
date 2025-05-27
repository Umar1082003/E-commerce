import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./ProductDetails.css";
import SlideProducts from "../../components/slideProducts/SlideProducts";
import LoadingDetailsProduct from "../../components/loadingPage/LoadingDetailsProduct";
import LoadingHomePage from "../../components/loadingPage/LoadingHomePage";
import ProductInfo from "./ProductInfo";
import ProductImages from "./ProductImages";
import PageTransition from "../../components/pageTransition";

function ProductDetails() {
  const { id } = useParams();
  // States
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [productCategory, setProductCategory] = useState([]);
  const [secoundLoading, setSecoundLoading] = useState(true);
  
  // Fetch product details using the id from the URL
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  // fetch the slider products
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setProductCategory(data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setSecoundLoading(false));
  }, [product?.category]);

  if (loading) {
    return <LoadingDetailsProduct />;
  }
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <PageTransition key={id}>
      <div className="product-details-page">
        <div className="product-details container">
          <ProductImages product={product} />
          <ProductInfo product={product} />
        </div>

        {/* ************* */}
        {secoundLoading ? (
          <LoadingHomePage />
        ) : (
          <SlideProducts
            key={product.id}
            data={productCategory}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </PageTransition>
  );
}

export default ProductDetails;