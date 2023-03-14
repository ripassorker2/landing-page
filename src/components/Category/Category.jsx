import React from "react";
import { BsChevronRight } from "react-icons/bs";
import image2 from "../../assets/flags/Vector (2).png";
import image3 from "../../assets/flags/Vector (3).png";
import image4 from "../../assets/flags/Vector 4.png";
import image5 from "../../assets/flags/Vector (5).png";
import image6 from "../../assets/flags/Vector 4 (1).png";
import image7 from "../../assets/flags/Vector 4 (2).png";
import image8 from "../../assets/flags/Vector 4 (3).png";
import image9 from "../../assets/flags/Vector 4.png";
import image10 from "../../assets/flags/Vector.png";

import name1 from "../../assets/name/image 1 (1).png";
import name2 from "../../assets/name/image 1 (10).png";
import name3 from "../../assets/name/image 1 (11).png";
import name4 from "../../assets/name/image 1 (2).png";
import name5 from "../../assets/name/image 1 (3).png";
import name6 from "../../assets/name/image 1 (4).png";
import name7 from "../../assets/name/image 1 (5).png";
import name8 from "../../assets/name/image 1 (6).png";
import name9 from "../../assets/name/image 1 (8).png";
import name10 from "../../assets/name/image 1 (9).png";
import name11 from "../../assets/name/image 1.png";

const Category = () => {
   return (
      <div className="lg:mt-28 md:mt20 mt-12" data-aos="fade-up" id="category">
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
            <div className=" p-3">
               <div>
                  <div className="flex justify-between font-semibold mb-3">
                     <h3>🔥 Trending</h3>
                     <p className="text-secondary inline-flex items-center">
                        More <BsChevronRight className="ml-1" />{" "}
                     </p>
                  </div>
                  <div className="grid grid-cols-3 place-content-center text-black mb-2">
                     <h3>Name</h3>
                     <h3>Price</h3>
                     <h3>Chart</h3>
                  </div>
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300">
                  <div className="inline-flex">
                     <img src={name1} className="h-5" alt="" /> Bitcoin
                  </div>
                  <h3>
                     <span className="text-green font-bold">+</span> $4.89334
                  </h3>
                  <img src={image10} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name2} className="h-5" alt="" /> Ethereum
                  </div>
                  <h3>
                     <span className="text-red font-bold">-</span> 2.9334
                  </h3>
                  <img src={image4} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name3} className="h-5" alt="" /> Solana
                  </div>
                  <h3>+ $0,1572</h3>
                  <img src={image3} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name4} className="h-5" alt="" /> Dogecoin
                  </div>
                  <h3> $3,480.65</h3>
                  <img src={image6} alt="" />
               </div>
            </div>
            <div className=" p-3">
               <div>
                  <div className="flex justify-between font-semibold mb-3">
                     <h3>🚀 Top Gainers</h3>
                     <p className="text-secondary inline-flex items-center">
                        More <BsChevronRight className="ml-1" />{" "}
                     </p>
                  </div>
                  <div className="grid grid-cols-3 place-content-center text-black mb-2">
                     <h3>Name</h3>
                     <h3>Price</h3>
                     <h3>Chart</h3>
                  </div>
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300">
                  <div className="inline-flex">
                     <img src={name5} className="h-5" alt="" /> PAPPAY
                  </div>
                  <h3>
                     <span className="text-green font-bold">+</span> $4.89334
                  </h3>
                  <img src={image2} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name6} className="h-5" alt="" /> Bitcoin Asia
                  </div>
                  <h3>
                     <span className="text-red font-bold">-</span> 2.9334
                  </h3>
                  <img src={image5} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name7} className="h-5" alt="" /> MoonRock
                  </div>
                  <h3>+ $0,1572</h3>
                  <img src={image4} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name8} className="h-5" alt="" /> NinjaFloki
                  </div>
                  <h3> $3,480.65</h3>
                  <img src={image7} alt="" />
               </div>
            </div>
            <div className=" p-3">
               <div>
                  <div className="flex justify-between font-semibold mb-3">
                     <h3>💎 Recently Added</h3>
                     <p className="text-secondary inline-flex items-center">
                        More <BsChevronRight className="ml-1" />{" "}
                     </p>
                  </div>
                  <div className="grid grid-cols-3 place-content-center text-black mb-2">
                     <h3>Name</h3>
                     <h3>Price</h3>
                     <h3>Chart</h3>
                  </div>
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300">
                  <div className="inline-flex">
                     <img src={name9} className="h-5" alt="" /> Metacraft
                  </div>
                  <h3>
                     <span className="text-green font-bold">+</span> $4.89334
                  </h3>
                  <img src={image9} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name10} className="h-5" alt="" /> Frog
                  </div>
                  <h3>
                     {" "}
                     <span className="text-red font-bold">-</span> 2.9334
                  </h3>
                  <img src={image8} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name11} className="h-5" alt="" /> Musk Doge
                  </div>
                  <h3>+ $0,1572</h3>
                  <img src={image9} alt="" />
               </div>
               <div className="grid grid-cols-3 place-content-center text-gray border-b pb-2 border-slate-300 mt-2">
                  <div className="inline-flex">
                     <img src={name5} className="h-5" alt="" /> 2Share
                  </div>
                  <h3> $3,480.65</h3>
                  <img src={image6} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Category;
