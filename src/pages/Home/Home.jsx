import React from "react";
import AdvanceTools from "../../components/AdvanceTools/AdvanceTools";
import Bannar from "../../components/Bannar/Bannar";
import IndustryLead from "../../components/IndustryLead/IndustryLead";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
   return (
      <div>
         <Navbar />
         <Bannar />
         <AdvanceTools />
         <IndustryLead />
      </div>
   );
};

export default Home;
