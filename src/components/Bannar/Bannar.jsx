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
      <div className="md:flex justify-between items-center">
         <div className=" relative ">
            <div>
               <p className="text-xs text-primary">SIGN UP TODAY</p>
               <div className="text-[55px] font-bold leading-[60px]">
                  <p> The World’s</p>{" "}
                  <p className="text-blue">Fastest Growing</p>
                  <p>Crypto Web App</p>
               </div>
               <p className="pt-2">
                  Buy and sell 200+ cryptocurrencies with 20+ flat currencies
                  using bank transfers or your credit/debit card.
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
            <img
               src={blue}
               className="max-h-8 absolute  top-0 right-20"
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

export default Bannar;
