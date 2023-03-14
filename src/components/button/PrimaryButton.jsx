import React from "react";

const PrimaryButton = ({ text, onclick, classes }) => {
   return (
      <button
         onclick={onclick}
         className={`bg-primary text-white px-5 py-1.5 rounded-[40px] ${classes}`}
      >
         {text}
      </button>
   );
};

export default PrimaryButton;
