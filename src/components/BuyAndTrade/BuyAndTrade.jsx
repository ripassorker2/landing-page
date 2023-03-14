import React from "react";
import img from "../../assets/hero image/Group 35.png";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryBottom from "../button/SecondaryBottom";
import star from "../../assets/particles/Star 2.png";
import blue from "../../assets/particles/Ellipse 8.png";
import purple from "../../assets/particles/Ellipse 10.png";
import flag from "../../assets/other/Ellipse 13.png";
import coin from "../../assets/other/image 1.png";
import { AiOutlineDown } from "react-icons/ai";

const BuyAndTrade = () => {
   return (
      <div className="md:flex justify-between items-center lg:mt-28 md:mt20 mt-12">
         <div className="relative md:mr-12 ">
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
               <p className="font-bold text-[36px] pb-2 ">
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
                     <div className="border border-secondary rounded-lg px-4 py-3 flex justify-between items-center col-span-3">
                        <p className="border-r pr-4 text-primary font-semibold">
                           Amount{" "}
                        </p>
                        <input
                           type="text"
                           className=" focus:outline-none rounded-lg  w-full ml-3 px-4 py-2 "
                           placeholder="Enter amount..."
                        />
                        <p className="text-gray">34533</p>
                     </div>
                     <div className="col-span-2 inline-flex justify-center items-center border border-secondary rounded-lg px-4 py-3 ml-3">
                        USD <img src={flag} className="mx-3" alt="" />{" "}
                        <AiOutlineDown size={21} />
                     </div>
                  </div>
                  <div className="grid grid-cols-5 mt-4">
                     <div className="border border-secondary rounded-lg px-4 py-3 flex justify-between items-center col-span-3">
                        <p className="border-r pr-4 text-primary font-semibold">
                           Amount{" "}
                        </p>
                        <input
                           type="text"
                           className=" focus:outline-none rounded-lg  w-full ml-3 px-4 py-2 "
                           placeholder="Enter amount..."
                        />
                        <p className="text-gray">0.44533</p>
                     </div>
                     <div className="col-span-2 inline-flex justify-center items-center border border-secondary rounded-lg px-4 py-3 ml-3">
                        USD <img src={coin} className="mx-3" alt="" />{" "}
                        <AiOutlineDown size={21} />
                     </div>
                  </div>
               </div>
               <PrimaryButton text={"Buy Now"} classes={"w-full mt-4 py-2.5"} />
            </div>
            <img
               src={star}
               className="max-h-8 absolute -bottom-12 right-48"
               alt=""
            />
         </div>
      </div>
   );
};

export default BuyAndTrade;
