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
      <div className="md:flex justify-between items-center mt-10">
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
      </div>
   );
};

export default IndustryLead;
