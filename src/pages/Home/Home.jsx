import React from "react";
import AdvanceTools from "../../components/AdvanceTools/AdvanceTools";
import Bannar from "../../components/Bannar/Bannar";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import GetStarted from "../../components/GetStarted/GetStarted";
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
         <GetStarted />
         <FAQ />
         <Footer />
      </div>
   );
};

export default Home;
