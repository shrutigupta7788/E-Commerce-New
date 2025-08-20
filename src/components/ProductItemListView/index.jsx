import React, { useContext } from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from "../../App";

const ProductItem = () => {

  const context = useContext(MyContext)
  return (
    <div className="productItem !shadow-lg overflow-hidden !border-0 relative border-[rgba(0,0,0,0.1)] flex items-center">
      <div className="imgWrapper w-[25%]  overflow-hidden relative !rounded-lg">
        <div className="img h-[300px] overflow-hidden">
          {/* <Link> */}
          <img
            src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"
            className="w-full "
          />

          <img
            src="https://rukminim2.flixcart.com/image/612/612/l4oi4cw0/sari/0/i/z/free-starwalk-52-by-wearing-our-new-amazing-product-you-look-original-imagfgxn7zjcafdy.jpeg?q=70"
            className="w-full transition-all duration-700 !absolute top-0 left-0 opacity-0 hover:opacity-100  hover:scale-105"
          />
          {/* </Link> */}
        </div>
      </div>

      <span className="discount flex !items-center !absolute !top-[10px] !left-[10px] !z-50 !bg-[#ff5252] !text-white !rounded-lg !p-1 !text-[12px] !font-[500]">
        10%
      </span>

      <div className="actions absolute top-[-150px] left-56 z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300">
        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252]  hover:text-white group" onClick={()=>context.setOpenProductDetailsModel(true)}>
          <MdZoomOutMap className="text-[18px] !text-black group-hover:!text-white hover:!text-white" />
        </Button>

        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252]  hover:text-white group">
          <IoGitCompareOutline className="text-[18px] !text-black group-hover:!text-white hover:!text-white" />
        </Button>

        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252]  hover:text-white group">
          <FaRegHeart className="text-[18px] !text-black group-hover:!text-white hover:!text-white" />
        </Button>
      </div>

      <div className="info !p-3 !py-5 !px-8 !w-[75%]">
        <h6 className="text-[15px] !font-[400]">
          <Link to={"/"} className="link transition-all">
            All about you
          </Link>
        </h6>
        <h3 className="text-[18px] title !mt-3 font-[500] !mb-3 text-[#000]">
          <Link to={"/"} className="link transition-all">
            Embroidered Satin Saree Embroidered Satin Saree
          </Link>
        </h3>

        <p className="text-[14px] !mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="price text-[#ff5252] text-[15px] font-[600]">
            $58.00
          </span>
        </div>

        <div className="!mt-3">
          <Button className="btn-org flex gap-2">
            <MdOutlineShoppingCart className="text-[20px]" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
