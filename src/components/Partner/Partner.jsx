import React from "react";
import img1 from "../../assets/partners/image 2.png";
import img2 from "../../assets/partners/image 3.png";
import img3 from "../../assets/partners/image 4.png";
import img4 from "../../assets/partners/image 5.png";

const Partner = () => {
   return (
      <div
         className="lg:mt-28 md:mt20 mt-12 bg-slate-100 p-7 hidden md:block  rounded-md"
         id="Partner"
      >
         <div className="text-center">
            <h3 className="text-[25px] font-bold text-black ">
               Trusted Partners Worldwide
            </h3>
            <p className="text-gray pt-1 ">
               We're partners with countless major organisations around the
               globe
            </p>
         </div>
         <div className="md:grid md:grid-cols-4 justify-center  items-center">
            <img
               src={img1}
               className="lg:max-h-[150px] md:max-h-[100] "
               alt=""
            />
            <img
               src={img2}
               className="lg:max-h-[150px] md:max-h-[100] "
               alt=""
            />
            <img
               src={img3}
               className="lg:max-h-[150px] md:max-h-[100] "
               alt=""
            />
            <img
               src={img4}
               className="lg:max-h-[150px] md:max-h-[100] "
               alt=""
            />
         </div>
      </div>
   );
};

export default Partner;
