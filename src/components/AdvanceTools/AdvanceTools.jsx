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
      <div
         className="sm:flex  justify-between items-center lg:mt-28 md:mt20 mt-12"
         id="Tools"
      >
         <div className="relative  mb-7 block sm:hidden">
            <img src={img} className="!w-[700px]" alt="" />
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
         <div className=" relative lg:w-[60%] md:w-[70%] ">
            <div className="lg:max-w-[90%]">
               <p className="font-bold lg:text-[36px] md:text-[28px] text-[22px] pb-2 lg:leading-10 md:leading-8">
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
            <div className="flex  md:flex-row flex-col md:mt-3">
               <PrimaryButton
                  text={"Get Started"}
                  classes={"md:mr-5 md:mt-0 mt-3"}
               />
               <SecondaryBottom
                  text={"Get Our App"}
                  classes={" md:mt-0 mt-3"}
               />
            </div>
            <img
               src={star}
               className="max-h-8 absolute -bottom-3 right-48"
               alt=""
            />
         </div>
         <div className="relative  hidden sm:block">
            <img src={img} className="!w-[700px]" alt="" />
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
