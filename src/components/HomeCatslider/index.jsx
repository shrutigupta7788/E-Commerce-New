// 

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";

const HomeCatslider = () => {
  return (
    <div className="homeCatslider pt-4 !py-8 ">
      <div className="container">
        <Swiper
          slidesPerView={6}
          navigation={true}
          spaceBetween={10}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1753475034183_1000013786.png"
                  className="w-[60px] transition-all"
                />
                <h1 className="text-[15px] font-[500] mt-3">Fashion</h1>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"}>
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
                  className="w-[60px] transition-all"
                />
                <h1 className="text-[15px] font-[500] mt-3">Electronics</h1>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"}>
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
                  className="w-[60px] transition-all"
                />
                <h1 className="text-[15px] font-[500] mt-3">Bags</h1>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"}>
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[60px] transition-all"
                />
                <h1 className="text-[15px] font-[500] mt-3">Footwear</h1>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"}>
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
                  className="w-[60px] transition-all"
                />
                <h1 className="text-[15px] font-[500] mt-3">Groceries</h1>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"}>
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
                  className="w-[60px] transition-all"
                />
                <h1 className="text-[15px] font-[500] mt-3">Beauty</h1>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"}>
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661105893_well.png"
                  className="w-[60px] transition-all"
                />
                <h1 className="text-[15px] font-[500] mt-3">Wellness</h1>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"/"}>
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1749273446706_jw.png"
                  className="w-[60px] transition-all"
                />
                <h1 className="text-[15px] font-[500] mt-3">Jewellery</h1>
              </div>
            </Link>
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatslider;
