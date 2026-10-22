import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SlideProducts from "../../components/slideProducts/SlideProducts";
import NotFound from "../../components/notFound/NotFound";

function SearchPage() {
  const [result, setResult] = useState([]);

  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setResult(data.products || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResult();
  }, [query]);
  console.log(result);

  return (
    <>
    {result.length === 0 ? (
      <NotFound />
    ) : (
      <SlideProducts
      title={`Search Results for "${query}"`}
      query={query}
      data={result}
      />
    )}
    </>
  );
}

export default SearchPage;
