import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-3">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              SHOP BY CATEGORIES
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold " />
            </Button>
          </div>

          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                          Men
                        </Button>
                      </Link>

                      <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                                T-Shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                                Footware
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                                watch
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                                Pents
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                          Boys
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                          Girls
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    {" "}
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Footware
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_2 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free Internation Delivery
            </p>
          </div>
        </div>
      </nav>
      {/* category panel component */}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
