import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper/modules";
import BannerBoxV2 from '../BannerBoxV2';

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
                <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg '} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBoxV2 info="right" image={'https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg'} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBoxV2 info="right" image={'https://serviceapi.spicezgold.com/download/1753859360822_1737020916820_New_Project_52.jpg'} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg'} link={'/'}/>
            </SwiperSlide>

             <SwiperSlide>
                <BannerBoxV2 info="right" image={'https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg'} link={'/'}/>
            </SwiperSlide>
          </Swiper>
  </div>
  )
}

export default AdsBannerSlider
