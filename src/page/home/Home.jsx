import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProducts from "../../components/slideProducts/SlideProducts";
import LoadingHomePage from "../../components/loadingPage/LoadingHomePage";
import LoadingCategoryList from "../../components/loadingPage/Category";
import PageTransition from "../../components/pageTransition";
import CategoryList from "../../components/Categories/Category";



const categories = [
  { name: "category" },
  { name: "smartphones" },
  { name: "laptops" },
  { name: "tablets" },
  { name: "sunglasses" },
  { name: "mobile-accessories" },
  { name: "sports-accessories" },
];


function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category.name}`,
            );
            const data = await res.json();

            return { [category.name]: data.products };
          }),
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
          ? categories.map((category) =>
              category.name === "category" ? (
                <LoadingCategoryList
                  key={categories.findIndex(
                    (obj) => obj.name === category.name,
                  )}
                />
              ) : (
                <LoadingHomePage
                  key={categories.findIndex(
                    (obj) => obj.name === category.name,
                  )}
                />
              ),
            )
          : categories.map((category) =>
              category.name === "category" ? (
                <CategoryList key={category.name} />
              ) : (
                <SlideProducts
                  key={category.name}
                  data={products[category.name]}
                  title={category.name.replace("-", " ")}
                />
              ),
            )}
      </div>
    </PageTransition>
  );
}

export default Home;
