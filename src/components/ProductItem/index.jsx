import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";

import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem !shadow-lg overflow-hidden !border-0 border-[rgba(0,0,0,0.1)] ">
      <div className="imgWrapper w-[100%]  overflow-hidden relative">
        
          <div className="img h-[220px] overflow-hidden">
            {/* <Link> */}
            <img
              src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
              className="w-full "
            />

            <img
              src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              className="w-full transition-all duration-700 !absolute top-0 left-0 opacity-0 hover:opacity-100  hover:scale-105"
            />
                {/* </Link> */}
          </div>
        
      </div>

      <span className="discount flex !items-center !absolute !top-[10px] !left-[10px] !z-50 !bg-[#ff5252] !text-white !rounded-lg !p-1 !text-[12px] !font-[500]">
        10%
      </span>

      <div className="actions absolute top-[-150px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300">
        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252]  hover:text-white group">
          <MdZoomOutMap className="text-[18px] !text-black group-hover:!text-white hover:!text-white" />
        </Button>

        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252]  hover:text-white group">
          <IoGitCompareOutline className="text-[18px] !text-black group-hover:!text-white hover:!text-white" />
        </Button>

        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252]  hover:text-white group">
          <FaRegHeart className="text-[18px] !text-black group-hover:!text-white hover:!text-white" />
        </Button>
      </div>

      <div className="info !p-3 !py-5 ">
        <h6 className="text-[13px]">
          <Link to={"/"} className="link transition-all">
            All about you
          </Link>
        </h6>
        <h3 className="text-[13px] title !mt-1 font-[500] !mb-1 text-[#000]">
          <Link to={"/"} className="link transition-all">
            Embroidered Satin Saree Embroidered Satin Saree
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="price text-[#ff5252] text-[15px] font-[600]">
            $58.00
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
