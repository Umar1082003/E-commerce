import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import SlideProducts from '../../components/slideProducts/SlideProducts';

function SearchPage() {
  const [result, setResult] = useState([])
  
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
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
    <SlideProducts title={`Search Results for "${query}"`} data={result} />
  );
}

export default SearchPage;
