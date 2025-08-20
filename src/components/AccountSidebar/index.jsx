import { Button } from "@mui/material";
import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const AccountSidebar = () => {
  return (
   <div className="card bg-white !shadow-md rounded-md sticky top-[10px]">
            <div className="w-full !p-5 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px]  overflow-hidden !mb-4 relative !rounded-full group">
                <img
                  src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                  className="w-full h-full object-cover !rounded-full"
                />

                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                  <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0"
                  />
                </div>
              </div>

              <h3>Rakesh shrama</h3>
              <h3 className="text-[13px] font-[500]">SSSS@gmail.com</h3>
            </div>

            <ul className="list-none !pb-5 bg-[#f1f1f1] myAccountTabs">
              <li className="w-full">
                <NavLink
                  to={"/my-account"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !p-2 !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2  !capitalize">
                    <FaRegUser className="text-[15px]" />
                    My Profile
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to={"/my-list"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !p-2  !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2  !capitalize">
                    <IoMdHeartEmpty className="text-[17px]" />
                    My List
                  </Button>
                </NavLink>
              </li>

              <li className="w-full">
                <NavLink
                  to={"/my-orders"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !p-2  !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2  !capitalize">
                    <IoBagCheckOutline className="text-[17px]" />
                    My Orders
                  </Button>
                </NavLink>
              </li>

              <li className="w-full">
                <Button className="w-full !p-2  !text-left !px-5 !justify-start !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2  !capitalize">
                  <IoIosLogOut className="text-[18px]" />
                  Logout
                </Button>
              </li>
            </ul>
          </div>
  )
}

export default AccountSidebar