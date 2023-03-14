import React, { useState } from "react";
import PrimaryButton from "../button/PrimaryButton";
import star from "../../assets/particles/Star 2.png";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <>
         <div class=" py-5 mx-auto sm:max-w-xl md:max-w-full  sticky top-0 z-50">
            <div class="relative flex items-center justify-between">
               <div className="relative">
                  <h2 className="font-extrabold lg:text-[32px] md:text-[28px] text-[22px] ">
                     <span className="bg-primary rounded-md text-white px-1 ">
                        N
                     </span>
                     EFA
                  </h2>
                  <img
                     src={star}
                     className="absolute top-1 -right-3 h-4"
                     alt=""
                  />
               </div>
               <ul class=" items-center hidden space-x-8 lg:flex">
                  <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                     <a href="#category">Category</a>
                  </li>
                  <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                     <a href="#purchase">Purchase</a>
                  </li>
                  <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                     <a href="#Partner">Partner</a>
                  </li>
                  <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                     <a href="#Tools">Tools</a>
                  </li>
                  <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                     <a href="#faq">FAQ</a>
                  </li>
                  <li>
                     <PrimaryButton text={"Login"} />
                  </li>
               </ul>
               <div class="lg:hidden">
                  <button
                     aria-label="Open Menu"
                     title="Open Menu"
                     class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                     onClick={() => setIsMenuOpen(true)}
                  >
                     <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                           fill="currentColor"
                           d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        />
                        <path
                           fill="currentColor"
                           d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        />
                        <path
                           fill="currentColor"
                           d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        />
                     </svg>
                  </button>
                  {isMenuOpen && (
                     <div class="absolute top-0 left-0 w-full z-50">
                        <div class="p-5 bg-white border border-primary rounded z-50 shadow-sm">
                           <div class="flex items-center justify-between mb-4">
                              <div className="relative">
                                 <h2 className="font-extrabold lg:text-[32px] md:text-[28px] text-[22px] ">
                                    <span className="bg-primary rounded-md text-white px-1 ">
                                       N
                                    </span>
                                    EFA
                                 </h2>
                                 <img
                                    src={star}
                                    className="absolute top-1 -right-3 h-4"
                                    alt=""
                                 />
                              </div>
                              <div>
                                 <button
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    onClick={() => setIsMenuOpen(false)}
                                 >
                                    <svg
                                       class="w-5 text-gray-600"
                                       viewBox="0 0 24 24"
                                    >
                                       <path
                                          fill="currentColor"
                                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                       />
                                    </svg>
                                 </button>
                              </div>
                           </div>
                           <nav>
                              <ul class="space-y-4 text-center ">
                                 <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                                    Portfolio
                                 </li>
                                 <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                                    Products
                                 </li>
                                 <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                                    Exchanges
                                 </li>
                                 <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                                    Crytocurrency
                                 </li>
                                 <li>
                                    <PrimaryButton
                                       text={"Login"}
                                       classes={" w-full"}
                                    />
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default Navbar;
