import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryBottom from "../button/SecondaryBottom";
import star from "../../assets/particles/Star 2.png";

const Navbar = () => {
   return (
      <div className="flex justify-between items-center h-[80px] sticky top-0 bg-[rgb(248, 251, 253)] z-50">
         <div className="relative">
            <h2 className="font-extrabold text-[32px] ">
               {" "}
               <span className="bg-primary rounded-md text-white px-1 ">N</span>
               EFA
            </h2>
            <img src={star} className="absolute top-1 -right-3 h-4" alt="" />
         </div>
         <div className="flex items-center">
            <div>
               <ul className="flex items-center">
                  <li className="mr-4 text-[18px] font-[500] text-black hover:text-secondary duration-500 ">
                     NFT
                  </li>
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
               </ul>
            </div>
            <div className="flex items-center">
               <div className="mr-3">
                  <SecondaryBottom text={"Login"} />
               </div>

               <div>
                  <PrimaryButton text={"Resister"} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
