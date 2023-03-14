import React from "react";
import img from "../../assets/hero image/09 2.png";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryBottom from "../button/SecondaryBottom";
import star from "../../assets/particles/Star 2.png";
import yelow from "../../assets/particles/Ellipse 9.png";
import purple from "../../assets/particles/Ellipse 10.png";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const AdvanceTools = () => {
   return (
      <div className="md:flex justify-between items-center">
         <div className=" relative md:w-[60%] ">
            <div className="md:max-w-[90%]">
               <p className="font-bold text-[36px] pb-2 ">
                  Advanced <span className="text-primary">Trading</span> Tools
               </p>
               <p className="text-[18px] font-semibold py-2">
                  <MdOutlineSubdirectoryArrowRight className="bg-primary mr-2 text-white p-0.5 rounded-full inline-block" />
                  Professional Access, Non-stop Availability
               </p>
               <p>
                  We provide premium access to crypto trading for both
                  individuals and institutions through high liquidity, reliable
                  order execution and constant uptime.
               </p>
               <p className="text-[18px] font-semibold py-2">
                  <MdOutlineSubdirectoryArrowRight className="bg-primary mr-2 text-white p-0.5 rounded-full inline-block" />{" "}
                  A Range of Powerful Apis
               </p>
               <p>
                  Set up your own trading interface or deploy your algorithmic
                  strategy with our high-performance FIX and HTTP APIs. Connect
                  to our WebSocket for real-time data streaming.
               </p>
               <p className="text-[18px] font-semibold py-2">
                  <MdOutlineSubdirectoryArrowRight className="bg-primary mr-2 text-white p-0.5 rounded-full inline-block" />{" "}
                  Customer Support
               </p>
               <p>
                  Premium 24/7 support available to all customers worldwide by
                  phone or email. Dedicated account managers for partners.
               </p>
            </div>
            <div className="flex mt-3">
               <PrimaryButton text={"Get Started"} classes={"mr-5"} />
               <SecondaryBottom text={"Get Our App"} />
            </div>
            <img
               src={star}
               className="max-h-8 absolute -bottom-3 right-48"
               alt=""
            />
         </div>
         <div className="relative">
            <img src={img} alt="" />
            <img
               src={yelow}
               className="max-h-8 absolute top-32 right-[65%]"
               alt=""
            />
            <img
               src={purple}
               className="max-h-8 absolute top-60 right-[6%]"
               alt=""
            />
         </div>
      </div>
   );
};

export default AdvanceTools;
