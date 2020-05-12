import React from "react";

import DashbordJobOffersList from "./DashbordJobOffersList";
import DashbordCandidateList from "./DashbordCandidateList";
import DashbordCreateJobOffer from "./DashbordCreateJobOffer";

const RightDashBordConatainer = ({ elementToRender }) => {
  const renderContent = () => {
    switch (elementToRender) {
      case "Create job offer":
        return <DashbordCreateJobOffer />;
      case "jobOfferList":
        return <DashbordJobOffersList />;
      case "Candidate":
        return <DashbordCandidateList />;
      case "Somthing Else":
        return "<h3> Somthing Else </h3>";
      default:
        return <DashbordCreateJobOffer />;
    }
  };
  return (
    <div
      className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
      style={{ flex: "2", marginLeft: "2%" }}
    >
      {renderContent()}
    </div>
  );
};

export default RightDashBordConatainer;
