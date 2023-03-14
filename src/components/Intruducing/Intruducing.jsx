import React from "react";
import img from "../../assets/hero image/NEFA_-_Cryptocurrency_Web_App__Community____Figma-removebg-preview.png";
import SecondaryBottom from "../button/SecondaryBottom";
import star from "../../assets/particles/Star 2.png";
import blue from "../../assets/particles/Ellipse 8.png";
import purple from "../../assets/particles/Ellipse 10.png";
import { MdOutlineRoundaboutRight } from "react-icons/md";

const Intruducing = () => {
   return (
      <div className="md:flex justify-between items-center lg:mt-28 md:mt20 mt-12">
         <div className="relative md:w-[70%] ">
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
            <div className="">
               <p className="font-bold text-[36px] pb-2 ">
                  Introducing the
                  <span className="text-primary"> NEFA </span> <br /> Credit
                  Card
               </p>

               <p>
                  Subject to cardholder and rewards terms which will be
                  available at application.
               </p>
               <p className="text-[16px]  py-1 pt-2">
                  <MdOutlineRoundaboutRight className="bg-primary mr-2 text-white p-0.5 rounded-full inline-block" />{" "}
                  Up to 3% back on purchases
               </p>

               <p className="text-[16px]  py-1">
                  <MdOutlineRoundaboutRight className="bg-primary mr-2 text-white p-0.5 rounded-full inline-block" />{" "}
                  Earn rewards in bitcoin or any crypto on NEFA
               </p>
               <p className="text-[16px]  py-1">
                  <MdOutlineRoundaboutRight className="bg-primary mr-2 text-white p-0.5 rounded-full inline-block" />{" "}
                  No annual fee
               </p>
               <p className="text-[16px]  py-1">
                  <MdOutlineRoundaboutRight className="bg-primary mr-2 text-white p-0.5 rounded-full inline-block" />{" "}
                  A Range of Powerful Apis
               </p>
            </div>
            <div className="flex mt-3">
               <SecondaryBottom text={"Join With Us"} />
            </div>
            <img
               src={star}
               className="max-h-8 absolute -bottom-3 right-48"
               alt=""
            />
         </div>
      </div>
   );
};

export default Intruducing;
