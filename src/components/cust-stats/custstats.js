import React from "react";
import "./custstats.css";

function CustStats() {
  return (
    <div className="cust-stats flex">
      <figure className="f1 bg-white h-28 w-66 rounded shadow-md p-12 m-10  ">
        <figurecaption>
          Discoverd Leads
          <br></br>
          <div className="numbers text-blue-600 flex">1345</div>

        </figurecaption>
      </figure>
      <figure className="f1 bg-white h-28 w-66 rounded shadow-md p-12 m-10  ">
        <figurecaption>
          New Matches
          <br></br>
          <div className="numbers text-blue-600 flex">1345</div>
        </figurecaption>
      </figure>
      <figure className="f1 bg-white h-28 w-66 rounded shadow-md p-12 m-10  ">
        <figurecaption className="">
          Total Customers
          <br></br>
          <div className="numbers text-blue-600 flex">0345</div>

        </figurecaption>
      </figure>
      <figure className="f1 bg-white h-28 w-66 rounded shadow-md p-12 m-10    ">
        <figurecaption>
          Listing on app views
          <br />
          <div className="numbers text-blue-600 flex">0345</div>

        </figurecaption>
      </figure>
    </div>
  );
}

export default CustStats;
