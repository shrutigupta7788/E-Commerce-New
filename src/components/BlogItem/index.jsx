import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const BlogItem = () => {
  return (
    <div className="bolgItem group">
      <div className="imgWrapper !w-full overflow-hidden !rounded-xl cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="blog image"
        />


        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] rounded-md p-1 text-[11px] font-[500] gap-1">
        <IoMdTime className="text-[16px]"/>5 APRIL, 2023
        </span>
      </div>

        <div className="info py-4">  
        <h2 className="text-[15px] font-[600] text-black"><Link to={"/"} className="link">sustainable living through cutting-edge prefabricated homes</Link></h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] !mb-4">Give2 lady of they such they sure it. Me contained explained my education. Vulgar as hearts by ...</p>
        <Link className="link font-[500] !text-[14px] flex items-center gap-1">Read More <IoIosArrowForward/></Link>
        </div>


    </div>
  );
};

export default BlogItem;
