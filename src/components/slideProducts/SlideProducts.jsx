import React from "react";

import './SlideProducts.css'
import Products from './Products'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function SlideProducts({ title, data }) {
  console.log(data);
  
  return (
    <div className="slideProducts slide">
      <div className="container">
        <div className="topSlide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            error suscipit aut dolorem laborum qui.
          </p>
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
        {data.map((item) => (
          console.log(item.stock),
          <SwiperSlide>
            <Products data={item} />
          </SwiperSlide>
        ))}

        </Swiper>
      </div>
    </div>
  );
}

export default SlideProducts
