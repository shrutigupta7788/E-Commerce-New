import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation ,Autoplay} from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider pt-4 py-5 ">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation,Autoplay]}

          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          className="sliderHome "
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg"
                alt=" Banner Slider "
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
                alt=" Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="	https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                alt=" Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg"
                alt=" Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
                alt=" Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg"
                alt=" Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg"
                alt=" Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                alt=" Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg"
                alt=" Banner Slider"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
