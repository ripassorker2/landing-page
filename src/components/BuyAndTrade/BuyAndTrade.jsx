import React from "react";
import img from "../../assets/hero image/Group 35.png";
import PrimaryButton from "../button/PrimaryButton";
import star from "../../assets/particles/Star 2.png";
import blue from "../../assets/particles/Ellipse 8.png";
import purple from "../../assets/particles/Ellipse 10.png";
import flag from "../../assets/other/Ellipse 13.png";
import coin from "../../assets/other/image 1.png";
import { AiOutlineDown } from "react-icons/ai";

const BuyAndTrade = () => {
   return (
      <div
         className="md:flex justify-between items-center lg:mt-28 md:mt20 mt-12"
         id="purchase"
      >
         <div className="relative lg:mr-12 md:w-[60%] ">
            <img src={img} alt="" />
            <img
               src={blue}
               className="max-h-8 absolute top-32 left-[8%]"
               alt=""
            />
            <img
               src={purple}
               className="max-h-8 absolute top-60 right-[6%]"
               alt=""
            />
         </div>
         <div className=" relative md:w-[60%] ">
            <div className="md:max-w-[90%]">
               <p className="font-bold lg:text-[36px] md:text-[28px] text-[22px] pb-2 lg:leading-10 md:leading-8">
                  Buy & trade on the
                  <span className="text-primary"> original crypto</span>{" "}
                  exchange.
               </p>

               <p>
                  Buy now and get 40% extra bonus Minimum pre-sale amount 25
                  Crypto Coin. We accept BTC crypto-currency
               </p>
               <div className="mt-3">
                  <div className="grid grid-cols-5 ">
                     <div className="border border-secondary rounded-lg lg:px-4 px-2 lg:py-3 py-1.5 flex justify-between items-center col-span-3">
                        <p className="border-r lg:pr-4 pr-2 text-primary lg:font-semibold">
                           Amount{" "}
                        </p>
                        <input
                           type="text"
                           className=" focus:outline-none rounded-lg  w-full ml-3 lg:px-4 px-2 lg:py-3 py-1.5 "
                           placeholder="Enter amount..."
                        />
                        <p className="text-gray hidden lg:block">34533</p>
                     </div>
                     <div className="col-span-2 inline-flex justify-center items-center border border-secondary rounded-lg lg:px-4 px-2 lg:py-3 py-1.5 ml-3">
                        USD <img src={flag} className="mx-3" alt="" />{" "}
                        <AiOutlineDown size={21} />
                     </div>
                  </div>
                  <div className="grid grid-cols-5 mt-4">
                     <div className="border border-secondary rounded-lg lg:px-4 px-2 lg:py-3 py-1.5 flex justify-between items-center col-span-3">
                        <p
                           className="border-r lg:pr-4 pr-2 text-primary lg
                     :font-semibold"
                        >
                           Amount{" "}
                        </p>
                        <input
                           type="text"
                           className=" focus:outline-none rounded-lg  w-full ml-3 px-4 py-2 "
                           placeholder="Enter amount..."
                        />
                        <p className="text-gray hidden lg:block">0.44533</p>
                     </div>
                     <div className="col-span-2 inline-flex justify-center items-center border border-secondary rounded-lg lg:px-4 px-2 lg:py-3 py-1.5  ml-3">
                        USD <img src={coin} className="mx-3" alt="" />{" "}
                        <AiOutlineDown size={21} />
                     </div>
                  </div>
               </div>
               <PrimaryButton text={"Buy Now"} classes={"w-full mt-4 py-2.5"} />
            </div>
            <img
               src={star}
               className="max-h-8 hidden md:block absolute -bottom-12 right-48"
               alt=""
            />
         </div>
      </div>
   );
};

export default BuyAndTrade;
