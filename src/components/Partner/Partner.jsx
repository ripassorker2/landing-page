import React from "react";
import img1 from "../../assets/partners/image 2.png";
import img2 from "../../assets/partners/image 3.png";
import img3 from "../../assets/partners/image 4.png";
import img4 from "../../assets/partners/image 5.png";

const Partner = () => {
   return (
      <div className="mt-10 bg-slate-100 p-4 rounded-md">
         <div className="text-center">
            <h3 className="text-[25px] font-bold text-black ">
               Trusted Partners Worldwide
            </h3>
            <p className="text-gray pt-1 ">
               We're partners with countless major organisations around the
               globe
            </p>
         </div>
         <div className="flex justify-center items-center">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
         </div>
      </div>
   );
};

export default Partner;
