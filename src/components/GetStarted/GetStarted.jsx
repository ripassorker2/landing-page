import React from "react";
import img1 from "../../assets/get startted/06 1.png";
import img2 from "../../assets/get startted/07 1.png";
import img3 from "../../assets/get startted/15 2.png";
import line from "../../assets/get startted/Line 14.png";

const GetStarted = () => {
   return (
      <div
         className="lg:mt-28 md:mt20 mt-12 bg-slate-100 p-7 rounded-md  relative"
         data-aos="fade-up"
      >
         <div className="text-center">
            <h3 className="text-[25px] font-bold text-black ">
               Get started in just a few minutes
            </h3>
         </div>
         <div className="flex justify-center items-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
               <div className="rounded-md flex flex-col justify-center items-center">
                  <img src={img3} className="h-40 w-48 " alt="" />
                  <div className="text-center  md:w-[80%]">
                     <h3 className="font-semibold pb-1 text-black">Sign Up</h3>
                     <p className="text-gray">
                        Buy Bitcoin or Ethereum, then securely store it in your
                        Wallet or send it on easily to friends
                     </p>
                  </div>
               </div>
               <div className="rounded-md flex flex-col justify-center items-center">
                  <img src={img2} className="h-40 w-48 " alt="" />
                  <div className="text-center md:w-[80%] mx-auto">
                     <h3 className="font-semibold pb-1 text-black">Found</h3>
                     <p className="text-gray ">
                        Choose your preferred payment method such as bank
                        transfer or credit card to top up your NEFA Wallet
                     </p>
                  </div>
               </div>
               <div className="rounded-md flex flex-col justify-center items-center">
                  <img src={img1} className="h-40 w-48 " alt="" />
                  <div className="text-center md:w-[80%] mx-auto">
                     <h3 className="font-semibold pb-1 text-black">
                        Buy Crypto
                     </h3>
                     <p className="text-gray ">
                        Sign up for your free NEFA Wallet on web, iOS or Android
                        and follow our easy process to set up your profiles
                     </p>
                  </div>
               </div>
            </div>
            <img
               className="absolute  hidden lg:inline-block left-[60%] top-[45%]"
               src={line}
               alt=""
            />
            <img
               className="absolute hidden lg:inline-block right-[60%] top-[45%]"
               src={line}
               alt=""
            />
         </div>
      </div>
   );
};

export default GetStarted;
