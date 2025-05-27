import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProducts from "../../components/slideProducts/SlideProducts";
import LoadingHomePage from "../../components/loadingPage/LoadingHomePage";
import PageTransition from "../../components/pageTransition";

const categories = [
  { name: "smartphones" },
  { name: "laptops" },
  { name: "tablets" },
  { name: "sunglasses" },
  { name: "mobile-accessories" },
  { name: "sports-accessories" },
];
console.log(categories.findIndex((obj) => obj.name === "sunglasses"));


function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category.name}`
            );
            const data = await res.json();

            return { [category.name]: data.products };
          })
        );
        const productsData = Object.assign({}, ...result);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <PageTransition>
      <div>
        <HeroSlider />

        {loading
          ? categories.map((category) => (
              <LoadingHomePage
                key={categories.findIndex((obj) => obj.name === category.name)}
              />
            ))
          : categories.map((category) => (
              <SlideProducts
                key={category.name}
                data={products[category.name]}
                title={category.name.replace("-", " ")}
              />
            ))}
      </div>
    </PageTransition>
  );
}

export default Home;
