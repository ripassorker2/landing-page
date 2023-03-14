import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
   }, []);
   return (
      <div className=" font-serif max-w-[1300px] w-[92%] mx-auto">
         <Home />
      </div>
   );
};

export default App;
