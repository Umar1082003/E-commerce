import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageTransition from "../../components/PageTransition";
import ProductsList from "../../components/slideProducts/ProductsList";

function CategoryPage() {
  const { category } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data.products);
      });
  }, [category]);

  return (
    <PageTransition>
      <ProductsList items={categoryProducts} title={category} />
    </PageTransition>
  );
}

export default CategoryPage;
