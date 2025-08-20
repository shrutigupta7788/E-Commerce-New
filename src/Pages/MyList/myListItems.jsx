import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Rating } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";

const MyListItems = (Props) => {
  

  return (
    <div className="cartItem w-full !p-3 flex items-center gap-4 !pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] !overflow-hidden">
        <Link to={"/productDetails"} className="group ">
          <img
            src="https://serviceapi.spicezgold.com/download/1742446046526_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-blue-25-l-product-images-orvmjkuqezq-p607379380-0-202401161039.jpg"
            className="w-full group-hover:scale-105 transition-all rounded-md"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />

        <span className="text-[13px]">FLORES </span>
        <h3 className="text-[15px]">
          <Link className="link">
            FLORES Stylish Fashion Backpack For Girls and boys
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        

        <div className="flex items-center gap-4 !mt-2 !mb-2">
          <span className="price text-[14px] font-[600]">$58.00</span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            $58.00
          </span>
          <span className="price text-[#ff5252] text-[14px] font-[600]">
            55% OFF
          </span>
        </div>

        

        <Button className="btn-org  btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItems;
