import React, { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "../../components/Badge";
import { FaAngleUp } from "react-icons/fa6";

const Orders = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(false);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else {
      setIsOpenOrderdProduct(index);
    }
  };

  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="!shadow-md !rounded-md bg-white">
            <div className="!py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="!mt-0">
                There are <span className="font-bold text-[#ff5252]">2</span>{" "}
                Orders
              </p>

              <div class="relative overflow-x-auto !mt-5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="!px-6 !py-3 ">
                        &nbsp;
                      </th>
                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Order id
                      </th>
                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        payment Id
                      </th>

                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Address
                      </th>

                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Pincode
                      </th>

                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Total Amount
                      </th>

                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Email
                      </th>

                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        User Id
                      </th>

                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Order Status
                      </th>
                      <th scope="col" class="!px-6 !py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="!px-6 !py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(0)}
                        >
                          {isOpenOrderdProduct === 0 ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td class="!px-6 !py-4 font-[500] ">
                        <span className="text-[#ff5252]">
                          68a1c5d5228db479bbc9319e
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500] ">
                        <span className="text-[#ff5252]">
                          pay_R6OauvluZP3KgN
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        shruti Gupta
                      </td>
                      <td class="!px-6 !py-4 font-[500] ">1234567891</td>
                      <td class="!px-6 !py-4 font-[500]">
                        <span className="block w-[400px]">
                          {" "}
                          102 B Wing Lazrus Apartment Goddev Vilage Mumbai Thane
                          Maharashtra India{" "}
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500]">400615</td>
                      <td class="!px-6 !py-4 font-[500] ">1000</td>
                      <td class="!px-6 !py-4 font-[500]">sss@gmail.com</td>
                      <td class="!px-6 !py-4 font-[500] ">
                        <span className="text-[#ff5252]">
                          689ce652228db479bbc47bf8
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500] ">
                        <Badge status="pending" />
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        2025-08-17
                      </td>
                    </tr>

                    {isOpenOrderdProduct === 0 && (
                      <tr>
                        <td className=" !pl-20" colSpan={"6"}>
                          <div class="relative overflow-x-auto ">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Products id
                                  </th>
                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Products Title
                                  </th>

                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>

                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Sab Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                  <td class="!px-6 !py-4 font-[500]">
                                    <span className="text-gray-600">
                                      68a1c5d5228db479bbc9319e
                                    </span>
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">
                                    Women Wide Leg High-Rise Light Fade
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">
                                    <img
                                      src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
                                      className="w-[50px] h-[50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                                    2
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">1234</td>
                                  <td class="!px-6 !py-4 font-[500]">1234</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                  <td class="!px-6 !py-4 font-[500]">
                                    <span className="text-gray-600">
                                      68a1c5d5228db479bbc9319e
                                    </span>
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">
                                    Women Wide Leg High-Rise Light Fade
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">
                                    <img
                                      src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
                                      className="w-[50px] h-[50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                                    2
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">1234</td>
                                  <td class="!px-6 !py-4 font-[500]">1234</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="!px-6 !py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(1)}
                        >
                          {isOpenOrderdProduct === 1 ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td class="!px-6 !py-4 font-[500] ">
                        <span className="text-[#ff5252]">
                          68a1c5d5228db479bbc9319e
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500] ">
                        <span className="text-[#ff5252]">
                          pay_R6OauvluZP3KgN
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        shruti Gupta
                      </td>
                      <td class="!px-6 !py-4 font-[500] ">1234567891</td>
                      <td class="!px-6 !py-4 font-[500]">
                        <span className="block w-[400px]">
                          {" "}
                          102 B Wing Lazrus Apartment Goddev Vilage Mumbai Thane
                          Maharashtra India{" "}
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500]">400615</td>
                      <td class="!px-6 !py-4 font-[500] ">1000</td>
                      <td class="!px-6 !py-4 font-[500]">sss@gmail.com</td>
                      <td class="!px-6 !py-4 font-[500] ">
                        <span className="text-[#ff5252]">
                          689ce652228db479bbc47bf8
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500] ">
                        <Badge status="pending" />
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        2025-08-17
                      </td>
                    </tr>

                    {isOpenOrderdProduct === 1 && (
                      <tr>
                        <td className=" !pl-20" colSpan={"6"}>
                          <div class="relative overflow-x-auto ">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Products id
                                  </th>
                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Products Title
                                  </th>

                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>

                                  <th
                                    scope="col"
                                    class="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Sab Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                  <td class="!px-6 !py-4 font-[500]">
                                    <span className="text-gray-600">
                                      68a1c5d5228db479bbc9319e
                                    </span>
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">
                                    Women Wide Leg High-Rise Light Fade
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">
                                    <img
                                      src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
                                      className="w-[50px] h-[50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                                    2
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">1234</td>
                                  <td class="!px-6 !py-4 font-[500]">1234</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                  <td class="!px-6 !py-4 font-[500]">
                                    <span className="text-gray-600">
                                      68a1c5d5228db479bbc9319e
                                    </span>
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">
                                    Women Wide Leg High-Rise Light Fade
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">
                                    <img
                                      src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
                                      className="w-[50px] h-[50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                                    2
                                  </td>
                                  <td class="!px-6 !py-4 font-[500] ">1234</td>
                                  <td class="!px-6 !py-4 font-[500]">1234</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
