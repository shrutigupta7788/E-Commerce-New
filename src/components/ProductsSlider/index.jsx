import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper/modules";
import ProductItem from '../ProductItem';

 const ProductsSlider = (Props) => {
  return (
     <div className='productsSlider !py-3'>
    <Swiper
              slidesPerView={Props.items}
              navigation={true}
              spaceBetween={10}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProductItem/>
              </SwiperSlide>

              <SwiperSlide>
                <ProductItem/>
              </SwiperSlide>

              <SwiperSlide>
                <ProductItem/>
              </SwiperSlide>

              <SwiperSlide>
                <ProductItem/>
              </SwiperSlide>

              <SwiperSlide>
                <ProductItem/>
              </SwiperSlide>

              <SwiperSlide>
                <ProductItem/>
              </SwiperSlide>

              <SwiperSlide>
                <ProductItem/>
              </SwiperSlide>

              <SwiperSlide>
                <ProductItem/>
              </SwiperSlide>
              
              </Swiper>
    </div>
  )
}

export default ProductsSlider