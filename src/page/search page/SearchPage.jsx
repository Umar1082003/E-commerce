import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Products from "../../components/slideProducts/Products";

// import Products from "./Products";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function SearchPage() {
  const [result, setResult] = useState([])
  
  const query = new URLSearchParams(useLocation().search).get("query");
  console.log(useLocation().search);
  console.log(query);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResult(data.products || []);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResult();
  }, [query]);
  console.log(result);
  
  return (
    <div className="slideProducts slide">
      <div className="container">
        <div className="topSlide">
          <h2>{`result search: "${query}"`}</h2>
        </div>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {result.map((item) => (
            <SwiperSlide>
              <Products data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SearchPage
