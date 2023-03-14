import React from "react";
import img from "../../assets/hero image/08 1.png";
import star from "../../assets/particles/Star 2.png";
import blue from "../../assets/particles/Ellipse 8.png";
import yelow from "../../assets/particles/Ellipse 9.png";
import purple from "../../assets/particles/Ellipse 10.png";
import start from "../../assets/particles/Star 2.png";

const FAQ = () => {
   return (
      <div className="md:flex justify-between items-center lg:mt-28 md:mt20 mt-12">
         <div className=" relative md:w-[60%] ">
            <div className="md:max-w-[90%]">
               <p className="font-bold lg:text-[36px] md:text-[28px] text-[22px] pb-2 lg:leading-10 md:leading-8 ">
                  Frequently asked
                  <span className="text-primary"> questions</span>
               </p>
               <div className="sm:hidden block">
                  <div>
                     <img
                        src={star}
                        className="max-h-8 absolute -bottom-3 right-48"
                        alt=""
                     />
                     <img
                        src={blue}
                        className="max-h-8 absolute -top-6 left-48"
                        alt=""
                     />
                  </div>
                  <div className="relative">
                     <img src={img} alt="" />
                     <img
                        src={yelow}
                        className="max-h-8 absolute top-2 right-[65%]"
                        alt=""
                     />
                     <img
                        src={purple}
                        className="max-h-8 absolute top-6 right-[6%]"
                        alt=""
                     />
                     <img
                        src={star}
                        className="max-h-8 absolute bottom-20 left-[6%]"
                        alt=""
                     />
                  </div>
               </div>
               <details open="" className="border  p-2 rounded-md mb-5">
                  <summary className="py-2 text-black font-semibold outline-none cursor-pointer ">
                     Why should I choose NEFA?
                  </summary>
                  <div className="px-4 pb-4">
                     <p>
                        We're industry pioneers, having been in the
                        cryptocurrency industry since 2016. We've facilitated
                        more than 21 billion USD worth of transactions on our
                        exchange for customers in over 40 countries. Today,
                        we're trusted by over 8 million customers around the
                        world and have received praise for our easy-to-use app,
                        secure wallet, and range of features.
                     </p>
                  </div>
               </details>
               <details open="" className="border  p-2 rounded-md mb-5">
                  <summary className="py-2 text-black font-semibold outline-none cursor-pointer ">
                     How secure is NEFA?
                  </summary>
                  <div className="px-4 pb-4">
                     <p>
                        We're industry pioneers, having been in the
                        cryptocurrency industry since 2016. We've facilitated
                        more than 21 billion USD worth of transactions on our
                        exchange for customers in over 40 countries. Today,
                        we're trusted by over 8 million customers around the
                        world and have received praise for our easy-to-use app,
                        secure wallet, and range of features.
                     </p>
                  </div>
               </details>
               <details open="" className="border  p-2 rounded-md mb-5">
                  <summary className="py-2 text-black font-semibold outline-none cursor-pointer ">
                     Do I have to buy a whole Bitcoin?
                  </summary>
                  <div className="px-4 pb-4">
                     <p>
                        We're industry pioneers, having been in the
                        cryptocurrency industry since 2016. We've facilitated
                        more than 21 billion USD worth of transactions on our
                        exchange for customers in over 40 countries. Today,
                        we're trusted by over 8 million customers around the
                        world and have received praise for our easy-to-use app,
                        secure wallet, and range of features.
                     </p>
                  </div>
               </details>
               <details open="" className="border  p-2 rounded-md mb-5">
                  <summary className="py-2 text-black font-semibold outline-none cursor-pointer ">
                     How do I actually buy Bitcoin?
                  </summary>
                  <div className="px-4 pb-4">
                     <p>
                        We're industry pioneers, having been in the
                        cryptocurrency industry since 2016. We've facilitated
                        more than 21 billion USD worth of transactions on our
                        exchange for customers in over 40 countries. Today,
                        we're trusted by over 8 million customers around the
                        world and have received praise for our easy-to-use app,
                        secure wallet, and range of features.
                     </p>
                  </div>
               </details>
            </div>
         </div>
         <div className="hidden md:block">
            <div>
               <img
                  src={star}
                  className="max-h-8 absolute -bottom-3 right-48"
                  alt=""
               />
               <img
                  src={blue}
                  className="max-h-8 absolute -top-6 left-48"
                  alt=""
               />
            </div>
            <div className="relative">
               <img src={img} alt="" />
               <img
                  src={yelow}
                  className="max-h-8 absolute top-2 right-[65%]"
                  alt=""
               />
               <img
                  src={purple}
                  className="max-h-8 absolute top-60 right-[6%]"
                  alt=""
               />
               <img
                  src={star}
                  className="max-h-8 absolute bottom-60 left-[6%]"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default FAQ;
