import React from "react";
import AdvanceTools from "../../components/AdvanceTools/AdvanceTools";
import Bannar from "../../components/Bannar/Bannar";
import Footer from "../../components/Footer/Footer";
import IndustryLead from "../../components/IndustryLead/IndustryLead";
import Intruducing from "../../components/Intruducing/Intruducing";
import Navbar from "../../components/Navbar/Navbar";
import Partner from "../../components/Partner/Partner";

const Home = () => {
   return (
      <div>
         <Navbar />
         <Bannar />
         <Intruducing />
         <Partner />
         <AdvanceTools />
         <IndustryLead />
         <Footer />
      </div>
   );
};

export default Home;
