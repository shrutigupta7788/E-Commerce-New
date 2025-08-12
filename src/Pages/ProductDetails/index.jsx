import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { ProductZoom } from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { QtyBox } from "../../components/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider";

export const ProductDetails = () => {
  const [ProductActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleBreadcrumbClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };

  return (
    <>
      <div className="!py-5 ">
        <div className="container">
          <div role="presentation" onClick={handleBreadcrumbClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                to="/"
                className="link transition"
              >
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                to="/fashion"
                className="link transition"
              >
                Fashion
              </Link>

              <Link
                underline="hover"
                color="inherit"
                className="link transition"
              >
                Cropped Satin Bomber Jacket
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <section className="bg-white !py-5">
        <div className="container flex !gap-8 items-center">
          <div className="productZoomContainer w-[40%] ">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] !pr-10 !pl-10">
            <h1 className="text-[24px] font-[600] !mb-2">
              Mandarin collar printed anarkali kurta
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">
                Brands :{" "}
                <span className="font-[500] text-black opacity-75">
                  ftDiva{" "}
                </span>
              </span>

              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review(5)</span>
            </div>
            <div className="flex items-center gap-4 !mt-4">
              <span className="oldPrice line-through text-gray-500 !text-[20px] font-[500]">
                $58.00
              </span>
              <span className="price text-[#ff5252] !text-[20px] font-[600]">
                $58.00
              </span>

              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>

            <p className="!mt-3 !pr-10 !mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size:</span>
              <div className="actions flex items-center gap-1">
                <Button
                  className={`${
                    ProductActionIndex === 0 ? "!bg-[#ff5252] !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    ProductActionIndex === 1 ? "!bg-[#ff5252] !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    ProductActionIndex === 2 ? "!bg-[#ff5252] !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    ProductActionIndex === 3 ? "!bg-[#ff5252] !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="text-[14px] !mt-5 !mb-2 text-[#000]">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center gap-4 !py-4">
              <div className="qtyBoxWrapper w-[70px]">
                <QtyBox />
              </div>

              <Button className="btn-org flex !gap-2">
                <MdOutlineShoppingCart className="text-[22px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 !mt-4">
              <span className="flex items-center !gap-2 text-[15px] link cursor-pointer font-[500]">
                <FaRegHeart className="text-[18px]" />
                Add to Wishlist
              </span>

              <span className="flex items-center !gap-2 text-[15px] link cursor-pointer font-[500]">
                <IoGitCompareOutline className="text-[18px]" />
                Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className="container !pt-10 ">
          <div className="flex items-center !gap-8 !mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviwes (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="!shadow-md !w-full !px-5 !py-8 rounded-md">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h4>Lightweight Design</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <h4>Free Shiping & Return</h4>

              <p>
                we offer free shipping for products on order above 50$ and offer
                free delivery for all order in US
              </p>

              <h4>Money Back Guarantee</h4>

              <p>
                we guarantee our products and you couldget back all you money
                anytime you want in 30 days.
              </p>

              <h4>Online Support</h4>

              <p>
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="!shadow-md !w-full !px-5 !py-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="!px-6 !py-3 ">
                        Stand Up
                      </th>
                      <th scope="col" class="!px-6 !py-3">
                        Folded(w/o wheels)
                      </th>
                      <th scope="col" class="!px-6 !py-3">
                        Folded(w/ wheels)
                      </th>
                      <th scope="col" class="!px-6 !py-3">
                        Door Pass Throght
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="!px-6 !py-4 font-[500]">
                        35*Lx24*Wx37*-45*H(front to back wheel){" "}
                      </td>
                      <td class="!px-6 !py-4 font-[500]">25*Lx1805*Wx16.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">32.5*Lx24*Wx18.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">24</td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="!px-6 !py-4 font-[500]">
                        35*Lx24*Wx37*-45*H(front to back wheel){" "}
                      </td>
                      <td class="!px-6 !py-4 font-[500]">25*Lx1805*Wx16.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">32.5*Lx24*Wx18.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">24</td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="!px-6 !py-4 font-[500]">
                        35*Lx24*Wx37*-45*H(front to back wheel){" "}
                      </td>
                      <td class="!px-6 !py-4 font-[500]">25*Lx1805*Wx16.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">32.5*Lx24*Wx18.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">24</td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="!px-6 !py-4 font-[500]">
                        35*Lx24*Wx37*-45*H(front to back wheel){" "}
                      </td>
                      <td class="!px-6 !py-4 font-[500]">25*Lx1805*Wx16.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">32.5*Lx24*Wx18.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">24</td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="!px-6 !py-4 font-[500]">
                        35*Lx24*Wx37*-45*H(front to back wheel){" "}
                      </td>
                      <td class="!px-6 !py-4 font-[500]">25*Lx1805*Wx16.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">32.5*Lx24*Wx18.5*H</td>
                      <td class="!px-6 !py-4 font-[500]">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="!shadow-md !w-[80%] !px-5 !py-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answers</h2>
                <div className="reviewScroll !w-full !max-h-[300px] !overflow-y-scroll !overflow-x-hidden !mt-5 !pr-5">
                  <div className="review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info !w-[60%] flex items-center !gap-3">
                      <div className="img w-[80px] h-[80px] !overflow-hidden !rounded-full">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Shruti Gupta</h4>
                        <h5 className="text-[13px] !mb-0">2025-08-12</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info !w-[60%] flex items-center !gap-3">
                      <div className="img w-[80px] h-[80px] !overflow-hidden !rounded-full">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Shruti Gupta</h4>
                        <h5 className="text-[13px] !mb-0">2025-08-12</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info !w-[60%] flex items-center !gap-3">
                      <div className="img w-[80px] h-[80px] !overflow-hidden !rounded-full">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Shruti Gupta</h4>
                        <h5 className="text-[13px] !mb-0">2025-08-12</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info !w-[60%] flex items-center !gap-3">
                      <div className="img w-[80px] h-[80px] !overflow-hidden !rounded-full">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Shruti Gupta</h4>
                        <h5 className="text-[13px] !mb-0">2025-08-12</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info !w-[60%] flex items-center !gap-3">
                      <div className="img w-[80px] h-[80px] !overflow-hidden !rounded-full">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Shruti Gupta</h4>
                        <h5 className="text-[13px] !mb-0">2025-08-12</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info !w-[60%] flex items-center !gap-3">
                      <div className="img w-[80px] h-[80px] !overflow-hidden !rounded-full">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Shruti Gupta</h4>
                        <h5 className="text-[13px] !mb-0">2025-08-12</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] !p-4 rounded-md">
                  <h2 className="text-[18px] ">Add a review</h2>

                     <br /> 
                    <from  className="w-full !mt-10">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      className="w-full !mb-5"
                      multiline
                      rows={5}
                    />

                <br />
                     <Rating
                name="size-small"
                defaultValue={4}
              
              
              />


<div className="flex items-center !mt-5">
            <Button className="btn-org">Submit Review</Button>
</div>
                  </from>
                  
                </div>
              </div>
            </div>
          )}
        </div>


        <div className="container !pt-8">
 <h2 className="text-[20px] font-[600] !pb-0">Related Products</h2>
          <ProductsSlider items={6} />
        </div>
      </section>


    </>
  );
};
