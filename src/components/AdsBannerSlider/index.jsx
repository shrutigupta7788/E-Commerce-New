import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper/modules";
import BannerBox from '../BannerBox';

 const AdsBannerSlider = (Props) => {
  return (
  <div className='py-5 w-full'>
   <Swiper
            slidesPerView={Props.items}
            navigation={true}
            spaceBetween={10}
            modules={[Navigation]}
            className="smlBtn "
          >
            <SwiperSlide>
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp"} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBox img={"https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp"} link={'/'}/>
            </SwiperSlide>
          </Swiper>
  </div>
  )
}

export default AdsBannerSlider
