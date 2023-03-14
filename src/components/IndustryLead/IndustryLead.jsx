import React from "react";
import img from "../../assets/hero image/11 2.png";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryBottom from "../button/SecondaryBottom";
import star from "../../assets/particles/Star 2.png";
import blue from "../../assets/particles/Ellipse 8.png";
import purple from "../../assets/particles/Ellipse 10.png";
import { MdOutlineRoundaboutRight } from "react-icons/md";

const IndustryLead = () => {
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
         <div className=" relative lg:w-[60%] md:w-[80%] ">
            <div className="md:max-w-[90%]">
               <p className="font-bold lg:text-[36px] md:text-[28px] text-[22px] pb-2 lg:leading-10 md:leading-8 ">
                  Industry-leading
                  <span className="text-primary"> security </span> from day one
               </p>
               <p className="text-[18px] font-semibold py-2">
                  <MdOutlineRoundaboutRight className="bg-primary text-white p-0.5 rounded-full inline-block" />{" "}
                  Safety, security and compliance
               </p>
               <p>
                  NEFA is a licensed New York trust company that undergoes
                  regular bank exams and is subject to the cybersecurity audits
                  conducted by the New York Department of Financial Services.
                  Learn more about our commitment to security.
               </p>
               <p className="text-[18px] font-semibold py-2">
                  <MdOutlineRoundaboutRight className="bg-primary text-white p-0.5 rounded-full inline-block" />{" "}
                  Hardware security keys
               </p>
               <p>
                  With NEFA you can secure your account with a hardware security
                  key via WebAuthn.
               </p>
               <p className="text-[18px] font-semibold py-2">
                  <MdOutlineRoundaboutRight className="bg-primary text-white p-0.5 rounded-full inline-block" />{" "}
                  SOC Certifications
               </p>
               <p>
                  NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the
                  world’s first cryptocurrency exchange and custodian to
                  complete these exams.
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
      </div>
   );
};

export default IndustryLead;
