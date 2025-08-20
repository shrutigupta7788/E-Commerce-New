import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import { Rating } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";

const CartItems = (Props) => {
  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setCartItems] = useState(Props.size);
  const openSize = Boolean(sizeanchorEl);

  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(Props.qty);
  const openQty = Boolean(qtyanchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setCartItems(value);
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };

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

        <div className="flex items-center gap-4 !mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] !py-1 !px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize}
              <GoTriangleDown />
            </span>

            <Menu
              id="size-menu"
              anchorEl={sizeanchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
            </Menu>
          </div>

          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] !py-1 !px-2 rounded-md cursor-pointer"
              onClick={handleClickQty}
            >
              Qty: {selectedQty}
              <GoTriangleDown />
            </span>

            <Menu
              id="size-menu"
              anchorEl={qtyanchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
              <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
              <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
              <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
              <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
            </Menu>
          </div>
        </div>

        <div className="flex items-center gap-4 !mt-2">
          <span className="price text-[14px] font-[600]">$58.00</span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            $58.00
          </span>
          <span className="price text-[#ff5252] text-[14px] font-[600]">
            55% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
