import React from "react";
import "./app-center.css";
import { Header } from "../../../components/Header/header";
import CustStats from "../../../components/cust-stats/custstats";
import StatsHeading from "../../../components/stats-heading/stats-heading";
import GraphContainer from "../../../components/graph-container/graph-conatainer";
import DiscoverdLeads from "../../../components/Discoverd-leads/discoverdleads";
import Cards from "../../../components/cards/cards";
import MatcheddLeads from "../../../components/matchedleads/matchedleads";

const AppCenter = () => {
  return (
    <>
     

    <div className="center">
    <Header />
      <StatsHeading />
      

      <CustStats />
      <GraphContainer />
      <DiscoverdLeads />
      <Cards />
      <MatcheddLeads />
      <Cards />
      


   

    <div className="app-right flex flex-row-reverse items-center justify-center w-screen">
      <div className="top-interest flex items-end justify-end ">
      App right

      </div>
   
  </div>
    </div>
  </>
  );
};

export default AppCenter;
