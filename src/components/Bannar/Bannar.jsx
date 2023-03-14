import React from "react";
import img from "../../assets/hero image/12 1.png";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryBottom from "../button/SecondaryBottom";
import star from "../../assets/particles/Star 2.png";
import blue from "../../assets/particles/Ellipse 8.png";
import yelow from "../../assets/particles/Ellipse 9.png";
import purple from "../../assets/particles/Ellipse 10.png";

const Bannar = () => {
   return (
      <div className="md:flex justify-between items-center md:flex-row-reverse">
         <div className="relative">
            <img src={img} alt="" />
            <img
               src={yelow}
               className="max-h-8 absolute lg:top-32 md:top-12 top-2 right-[65%]"
               alt=""
            />
            <img
               src={purple}
               className="max-h-8 absolute top-60 right-[6%]"
               alt=""
            />
         </div>
         <div className=" relative ">
            <div>
               <p className="text-xs text-primary">SIGN UP TODAY</p>
               <div className="lg:text-[55px] md:text-[34px] text-[26px] font-bold lg:leading-[60px] md:leading-[50px] leading-[35px]">
                  <p> The World’s</p>{" "}
                  <p className="text-blue">Fastest Growing</p>
                  <p>Crypto Web App</p>
               </div>
               <p className="pt-2">
                  Buy and sell 200+ cryptocurrencies with 20+ flat currencies
                  using bank transfers or your credit/debit card.
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
               className="max-h-8 absolute lg:-bottom-3 bottom-8 lg:right-48 -right-3"
               alt=""
            />
            <img
               src={blue}
               className="max-h-8 absolute  lg:top-0 -top-10 right-20"
               alt=""
            />
         </div>
      </div>
   );
};

export default Bannar;
