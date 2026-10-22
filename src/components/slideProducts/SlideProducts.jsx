import Products from './Products'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import TopSlide from "./TopSlide";

import './slideProducts.css'
function SlideProducts({ title, query, data }) {
  
  
  return (
    <div className="slideProducts slide">
      <div className="container">
        <TopSlide title={title} query={query}/>

        <Swiper
          slidesPerView={4}
          // spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Products data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProducts
