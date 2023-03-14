import React from "react";

const SecondaryBottom = ({ text, classes, onclick }) => {
   return (
      <button
         onclick={onclick}
         className={`border-primary border text-black px-5 py-1.5 rounded-[40px] hover:bg-primary hover:text-white duration-500 ${classes}`}
      >
         {text}
      </button>
   );
};

export default SecondaryBottom;
