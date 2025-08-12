import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export const ProductZoom = () => {


    const [slideIndex, setSliderIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();


    const goto = (index) => {
        setSliderIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
          zoomSliderBig.current.swiper.slideTo(index);
    }


  return (
    <>
      <div className="flex !gap-3">
        <div className="slider w-[20%]">
          <Swiper
          ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={5}
            navigation={true}
            spaceBetween={0}
            modules={[Navigation]}
            className="zoomProductSliderThumbs !h-[498px] !overflow-hidden"
          >
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-100' : 'opacity-30'}`} onClick={() =>goto(0)} >
                <img
                  src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex  === 1 ? 'opacity-100' : 'opacity-30'}`}onClick={() =>goto(1)}>
                <img
                  src="https://serviceapi.spicezgold.com/download/1753711304616_zoom_1-1677748187.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
                <img
                  src=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-100' : 'opacity-30'}`} onClick={() =>goto(2)}>
                <img
                  src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            

          </Swiper>
        </div>
        <div className="zoomContainer w-[80%] !h-[454px] !overflow-hidden !rounded-xl" >
          <Swiper  ref={zoomSliderBig} slidesPerView={1} navigation={false} spaceBetween={0}>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://serviceapi.spicezgold.com/download/1753711304616_zoom_1-1677748187.jpg"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
                }
              />
            </SwiperSlide>


          </Swiper>
        </div>
      </div>
    </>
  );
};
